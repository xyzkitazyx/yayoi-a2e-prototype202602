from fastapi import FastAPI, Depends, HTTPException, Header
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from sqlalchemy import func
from typing import List, Optional

import models, schemas
from database import SessionLocal, engine, Base

# Create tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

def get_company_id(x_company_id: int = Header(1)):
    return x_company_id

@app.post("/journals", response_model=schemas.Journal)
def create_journal(
    journal: schemas.JournalCreate, 
    db: Session = Depends(get_db), 
    company_id: int = Depends(get_company_id)
):
    debit_total = journal.debit_amount or 0
    credit_total = journal.credit_amount or 0
    
    if debit_total != credit_total:
        raise HTTPException(status_code=400, detail="借方金額と貸方金額が一致しません")

    if journal.id:
        db_journal = db.query(models.Journal).filter(models.Journal.id == journal.id, models.Journal.company_id == company_id).first()
        if db_journal:
            db_journal.date = journal.date
            db_journal.debit_account_id = journal.debit_account_id
            db_journal.debit_amount = journal.debit_amount
            db_journal.debit_tax_amount = journal.debit_tax_amount or 0
            db_journal.credit_account_id = journal.credit_account_id
            db_journal.credit_amount = journal.credit_amount
            db_journal.credit_tax_amount = journal.credit_tax_amount or 0
            db_journal.summary = journal.summary
            db.commit()
            db.refresh(db_journal)
            return db_journal

    db_journal = models.Journal(
        company_id=company_id,
        date=journal.date,
        debit_account_id=journal.debit_account_id,
        debit_amount=journal.debit_amount,
        debit_tax_amount=journal.debit_tax_amount or 0,
        credit_account_id=journal.credit_account_id,
        credit_amount=journal.credit_amount,
        credit_tax_amount=journal.credit_tax_amount or 0,
        summary=journal.summary,
    )
    db.add(db_journal)

    db.commit()
    db.refresh(db_journal)
    return db_journal

@app.get("/trial-balance", response_model=List[schemas.TrialBalanceItem])
def get_trial_balance(db: Session = Depends(get_db), company_id: int = Depends(get_company_id)):
    accounts = db.query(models.Account).all()
    results = []

    for acc in accounts:
        debit_sum = db.query(func.sum(models.Journal.debit_amount)).filter(
            models.Journal.company_id == company_id,
            models.Journal.debit_account_id == acc.id
        ).scalar() or 0

        credit_sum = db.query(func.sum(models.Journal.credit_amount)).filter(
            models.Journal.company_id == company_id,
            models.Journal.credit_account_id == acc.id
        ).scalar() or 0

        if debit_sum > 0 or credit_sum > 0:
            if acc.category in ["資産", "費用"]:
                debit_bal = debit_sum - credit_sum if debit_sum - credit_sum > 0 else 0
                credit_bal = credit_sum - debit_sum if credit_sum - debit_sum > 0 else 0
            else:
                credit_bal = credit_sum - debit_sum if credit_sum - debit_sum > 0 else 0
                debit_bal = debit_sum - credit_sum if debit_sum - credit_sum > 0 else 0
            
            results.append({
                "account_name": acc.name,
                "account_code": acc.code,
                "debit_balance": debit_bal,
                "debit_total": debit_sum,
                "credit_total": credit_sum,
                "credit_balance": credit_bal
            })

    return results

@app.get("/accounts", response_model=List[schemas.Account])
def get_accounts(db: Session = Depends(get_db)):
    return db.query(models.Account).all()

@app.get("/journals/{journal_id}", response_model=schemas.Journal)
def get_journal(journal_id: int, db: Session = Depends(get_db), company_id: int = Depends(get_company_id)):
    db_journal = db.query(models.Journal).filter(models.Journal.id == journal_id, models.Journal.company_id == company_id).first()
    if not db_journal:
        raise HTTPException(status_code=404, detail="Journal not found")
    return db_journal

@app.get("/reports/diary")
def get_diary(db: Session = Depends(get_db), company_id: int = Depends(get_company_id)):
    journals = db.query(models.Journal).filter(models.Journal.company_id == company_id).order_by(models.Journal.id.desc()).all()
    # Formatting for frontend
    result = []
    for j in journals:
        result.append({
            "id": j.id,
            "date": j.date,
            "debit_account": j.debit_account.name if j.debit_account else "",
            "debit_sub": "",  # Placeholders for fields we'll add to DB later
            "debit_dept": "",
            "debit_amount": j.debit_amount or 0,
            "debit_tax_amount": j.debit_tax_amount or 0,
            "debit_tax": j.debit_account.tax_type if j.debit_account else "",
            
            "credit_account": j.credit_account.name if j.credit_account else "",
            "credit_sub": "",
            "credit_dept": "",
            "credit_amount": j.credit_amount or 0,
            "credit_tax_amount": j.credit_tax_amount or 0,
            "credit_tax": j.credit_account.tax_type if j.credit_account else "",
            
            "summary": j.summary
        })
    return result

@app.get("/reports/ledger/{account_id}")
def get_ledger(account_id: int, db: Session = Depends(get_db), company_id: int = Depends(get_company_id)):
    acc = db.query(models.Account).filter(models.Account.id == account_id).first()
    if not acc:
        raise HTTPException(status_code=404, detail="Account not found")

    is_positive_debit = acc.category in ["資産", "費用"]

    # Using SQL Window Functions via SQLAlchemy
    # We create a subquery to represent the entries for this specific account
    # Debit entries
    debit_sq = db.query(
        models.Journal.id,
        models.Journal.date,
        models.Journal.debit_amount.label('dr_amt'),
        models.Journal.credit_account_id.label('opp_acc_id'),
        models.Journal.summary
    ).filter(
        models.Journal.company_id == company_id,
        models.Journal.debit_account_id == account_id
    )

    # Credit entries
    credit_sq = db.query(
        models.Journal.id,
        models.Journal.date,
        models.Journal.credit_amount.label('cr_amt'),
        models.Journal.debit_account_id.label('opp_acc_id'),
        models.Journal.summary
    ).filter(
        models.Journal.company_id == company_id,
        models.Journal.credit_account_id == account_id
    )

    journals = db.query(models.Journal).filter(
        models.Journal.company_id == company_id,
        (models.Journal.debit_account_id == account_id) | (models.Journal.credit_account_id == account_id)
    ).order_by(models.Journal.id).all()

    result = []
    running_balance = 0

    for j in journals:
        dr = j.debit_amount if j.debit_account_id == account_id else 0
        cr = j.credit_amount if j.credit_account_id == account_id else 0
        
        if is_positive_debit:
            running_balance += (dr or 0) - (cr or 0)
        else:
            running_balance += (cr or 0) - (dr or 0)

        result.append({
            "id": j.id,
            "date": j.date,
            "opposite_account": j.credit_account.name if j.debit_account_id == account_id else (j.debit_account.name if j.debit_account else ""),
            "debit_amount": dr,
            "credit_amount": cr,
            "balance": running_balance,
            "summary": j.summary
        })

    return result

    return result

@app.post("/balances/initial")
def update_initial_balances(
    update_data: schemas.InitialBalanceUpdate,
    db: Session = Depends(get_db),
    company_id: int = Depends(get_company_id)
):
    # Strict Validation: Total Debits must equal Total Credits
    total_debit = 0
    total_credit = 0

    for item in update_data.balances:
        acc = db.query(models.Account).filter(models.Account.id == item.account_id).first()
        if not acc:
            raise HTTPException(status_code=400, detail=f"Account ID {item.account_id} not found")
        
        if acc.category in ["資産", "費用"]:
            total_debit += item.amount
        else:
            total_credit += item.amount

    if total_debit != total_credit:
        raise HTTPException(
            status_code=400, 
            detail=f"貸借の合計が一致しません。借方合計: {total_debit} / 貸方合計: {total_credit}"
        )

    # Clear existing initial balances for the company
    db.query(models.Balance).filter(models.Balance.company_id == company_id).delete()

    # Insert new initial balances
    for item in update_data.balances:
        new_balance = models.Balance(
            company_id=company_id,
            account_id=item.account_id,
            month="Initial", # Special marker for setting the foundation
            cumulative_balance=item.amount
        )
        db.add(new_balance)
    
    db.commit()
    return {"message": "Initial balances updated successfully"}

@app.get("/reports/financial-statements", response_model=List[schemas.FinancialStatementNode])
def get_financial_statements(db: Session = Depends(get_db), company_id: int = Depends(get_company_id)):
    # 1. Fetch initial balances
    initial_balances = db.query(models.Balance).filter(
        models.Balance.company_id == company_id, 
        models.Balance.month == "Initial"
    ).all()
    initial_amt_map = {b.account_id: b.cumulative_balance for b in initial_balances}

    # 2. Compute current journal net impacts
    journal_summary = db.query(
        models.Account.id,
        func.sum(models.Journal.debit_amount).label('total_debit'),
        func.sum(models.Journal.credit_amount).label('total_credit')
    ).select_from(models.Account).outerjoin(
        models.Journal, 
        (models.Journal.debit_account_id == models.Account.id) | (models.Journal.credit_account_id == models.Account.id)
    ).filter(
        (models.Journal.company_id == company_id) | (models.Journal.company_id == None) # keep accounts even if no journals
    ).group_by(models.Account.id).all()

    journal_amt_map = {}
    for j in journal_summary:
        journal_amt_map[j.id] = {"dr": j.total_debit or 0, "cr": j.total_credit or 0}

    # 3. Aggregate into BS/PL categories based on display order
    accounts = db.query(models.Account).order_by(models.Account.display_order).all()
    
    categories = {}
    
    for acc in accounts:
        if not acc.bs_pl_category:
            continue
            
        bs_pl_cat = acc.bs_pl_category

        if bs_pl_cat not in categories:
            categories[bs_pl_cat] = {"category_name": bs_pl_cat, "total_amount": 0, "accounts": [], "sort_key": acc.display_order}

        dr = journal_amt_map.get(acc.id, {}).get("dr", 0)
        cr = journal_amt_map.get(acc.id, {}).get("cr", 0)
        init_amt = initial_amt_map.get(acc.id, 0)

        # Compute net final amount based on natural balance
        if acc.category in ["資産", "費用"]:
            final_amt = init_amt + dr - cr
        else:
            final_amt = init_amt + cr - dr

        # AE Feature: omit 0 balances to keep reports clean, EXCEPT if it's a major account or if user prefers it.
        # For now, excluding absolute zeros keeps the dummy data clean.
        if final_amt != 0:
            categories[bs_pl_cat]["accounts"].append({
                "name": acc.name,
                "amount": final_amt
            })
            categories[bs_pl_cat]["total_amount"] += final_amt

    # Sort categories by their base display_order
    sorted_cats = sorted(categories.values(), key=lambda x: x["sort_key"])
    
    # Clean up internal sort_key for response
    response_list = []
    for c in sorted_cats:
        del c["sort_key"]
        response_list.append(schemas.FinancialStatementNode(**c))

    return response_list
