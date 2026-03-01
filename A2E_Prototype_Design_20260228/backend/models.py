from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from datetime import datetime
from database import Base

class Company(Base):
    __tablename__ = "companies"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    fiscal_year = Column(String) # e.g. "令和7年度"
    tax_setting = Column(String) # "本則" or "簡易"

    journals = relationship("Journal", back_populates="company")
    balances = relationship("Balance", back_populates="company")

class Account(Base):
    __tablename__ = "accounts"

    id = Column(Integer, primary_key=True, index=True)
    code = Column(String, unique=True, index=True)
    name = Column(String, index=True)
    category = Column(String) # 資産, 負債, 純資産, 収益, 費用
    tax_type = Column(String) # 対象外, 課税売上10%, 課税仕入10% 等
    bs_pl_category = Column(String, nullable=True) # 流動資産, 固定資産, 流動負債, 販売費及び一般管理費 等
    display_order = Column(Integer, default=0)

    # relationships if needed

class Journal(Base):
    __tablename__ = "journals"

    id = Column(Integer, primary_key=True, index=True)
    company_id = Column(Integer, ForeignKey("companies.id"))
    date = Column(String) # MM/DD string for simplicity in PoC
    
    debit_account_id = Column(Integer, ForeignKey("accounts.id"), nullable=True)
    debit_amount = Column(Integer, nullable=True)
    debit_tax_amount = Column(Integer, nullable=True) # Calculated
    
    credit_account_id = Column(Integer, ForeignKey("accounts.id"), nullable=True)
    credit_amount = Column(Integer, nullable=True)
    credit_tax_amount = Column(Integer, nullable=True) # Calculated

    summary = Column(String)
    created_at = Column(DateTime, default=datetime.utcnow)

    company = relationship("Company", back_populates="journals")
    debit_account = relationship("Account", foreign_keys=[debit_account_id])
    credit_account = relationship("Account", foreign_keys=[credit_account_id])

class Balance(Base):
    __tablename__ = "balances"

    id = Column(Integer, primary_key=True, index=True)
    company_id = Column(Integer, ForeignKey("companies.id"))
    account_id = Column(Integer, ForeignKey("accounts.id"))
    month = Column(String) # e.g. "04"
    cumulative_balance = Column(Integer, default=0)

    company = relationship("Company", back_populates="balances")
    account = relationship("Account", foreign_keys=[account_id])
