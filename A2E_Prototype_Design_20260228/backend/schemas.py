from pydantic import BaseModel
from typing import Optional, List

class CompanyBase(BaseModel):
    name: str
    fiscal_year: str
    tax_setting: str

class Company(CompanyBase):
    id: int

    class Config:
        orm_mode = True

class AccountBase(BaseModel):
    code: str
    name: str
    category: str
    tax_type: str
    bs_pl_category: Optional[str] = None
    display_order: Optional[int] = 0

class Account(AccountBase):
    id: int

    class Config:
        orm_mode = True

class JournalCreate(BaseModel):
    id: Optional[int] = None
    date: str
    debit_account_id: Optional[int]
    debit_amount: Optional[int]
    debit_tax_amount: Optional[int] = 0
    credit_account_id: Optional[int]
    credit_amount: Optional[int]
    credit_tax_amount: Optional[int] = 0
    summary: str

class Journal(JournalCreate):
    id: int
    company_id: int

    class Config:
        orm_mode = True

class BalanceBase(BaseModel):
    month: str
    cumulative_balance: int

class Balance(BalanceBase):
    id: int
    company_id: int
    account_id: int

    class Config:
        orm_mode = True

class TrialBalanceItem(BaseModel):
    account_name: str
    account_code: str
    debit_balance: int
    debit_total: int
    credit_total: int
    credit_balance: int

class InitialBalanceUpdateItem(BaseModel):
    account_id: int
    amount: int

class InitialBalanceUpdate(BaseModel):
    balances: List[InitialBalanceUpdateItem]

class FinancialStatementNode(BaseModel):
    category_name: str
    total_amount: int
    accounts: List[dict] # {name: str, amount: int}
