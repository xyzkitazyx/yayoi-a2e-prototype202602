import models
from database import SessionLocal, engine

# Drop all tables and recreate them to apply schema changes for Phase 9
models.Base.metadata.drop_all(bind=engine)
models.Base.metadata.create_all(bind=engine)

def seed_db():
    db = SessionLocal()

    # Create test company
    comp = db.query(models.Company).filter(models.Company.name == "テスト株式会社").first()
    if not comp:
        comp = models.Company(name="テスト株式会社", fiscal_year="令和7年度", tax_setting="本則")
        db.add(comp)
        db.commit()
        db.refresh(comp)

    # Seed subset of standard ACCOUNTS (35 Yayoi Standard Accounts)
    accounts_data = [
        # 資産 (Assets)
        {"code": "100", "name": "現金", "category": "資産", "bs_pl_category": "流動資産", "tax_type": "対象外", "display_order": 10},
        {"code": "110", "name": "当座預金", "category": "資産", "bs_pl_category": "流動資産", "tax_type": "対象外", "display_order": 20},
        {"code": "111", "name": "普通預金", "category": "資産", "bs_pl_category": "流動資産", "tax_type": "対象外", "display_order": 30},
        {"code": "120", "name": "受取手形", "category": "資産", "bs_pl_category": "流動資産", "tax_type": "対象外", "display_order": 40},
        {"code": "130", "name": "売掛金", "category": "資産", "bs_pl_category": "流動資産", "tax_type": "対象外", "display_order": 50},
        {"code": "140", "name": "有価証券", "category": "資産", "bs_pl_category": "流動資産", "tax_type": "対象外", "display_order": 60},
        {"code": "150", "name": "商品", "category": "資産", "bs_pl_category": "流動資産", "tax_type": "対象外", "display_order": 70},
        {"code": "160", "name": "前払金", "category": "資産", "bs_pl_category": "流動資産", "tax_type": "対象外", "display_order": 80},
        {"code": "170", "name": "前払費用", "category": "資産", "bs_pl_category": "流動資産", "tax_type": "対象外", "display_order": 90},
        {"code": "180", "name": "未収入金", "category": "資産", "bs_pl_category": "流動資産", "tax_type": "対象外", "display_order": 100},
        {"code": "190", "name": "仮払金", "category": "資産", "bs_pl_category": "流動資産", "tax_type": "対象外", "display_order": 110},
        {"code": "200", "name": "建物", "category": "資産", "bs_pl_category": "固定資産", "tax_type": "対象外", "display_order": 200},
        {"code": "210", "name": "車両運搬具", "category": "資産", "bs_pl_category": "固定資産", "tax_type": "対象外", "display_order": 210},
        {"code": "220", "name": "工具器具備品", "category": "資産", "bs_pl_category": "固定資産", "tax_type": "対象外", "display_order": 220},
        
        # 負債 (Liabilities)
        {"code": "300", "name": "支払手形", "category": "負債", "bs_pl_category": "流動負債", "tax_type": "対象外", "display_order": 300},
        {"code": "310", "name": "買掛金", "category": "負債", "bs_pl_category": "流動負債", "tax_type": "対象外", "display_order": 310},
        {"code": "320", "name": "短期借入金", "category": "負債", "bs_pl_category": "流動負債", "tax_type": "対象外", "display_order": 320},
        {"code": "330", "name": "未払金", "category": "負債", "bs_pl_category": "流動負債", "tax_type": "対象外", "display_order": 330},
        {"code": "340", "name": "未払費用", "category": "負債", "bs_pl_category": "流動負債", "tax_type": "対象外", "display_order": 340},
        {"code": "350", "name": "前受金", "category": "負債", "bs_pl_category": "流動負債", "tax_type": "対象外", "display_order": 350},
        {"code": "360", "name": "預り金", "category": "負債", "bs_pl_category": "流動負債", "tax_type": "対象外", "display_order": 360},
        
        # 純資産 (Net Assets)
        {"code": "400", "name": "資本金", "category": "純資産", "bs_pl_category": "株主資本", "tax_type": "対象外", "display_order": 400},
        
        # 収益 (Revenue)
        {"code": "500", "name": "売上高", "category": "収益", "bs_pl_category": "売上高", "tax_type": "課税売上10%", "display_order": 500},
        {"code": "510", "name": "受取利息", "category": "収益", "bs_pl_category": "営業外収益", "tax_type": "対象外", "display_order": 510},
        {"code": "520", "name": "受取配当金", "category": "収益", "bs_pl_category": "営業外収益", "tax_type": "対象外", "display_order": 520},
        {"code": "530", "name": "雑収入", "category": "収益", "bs_pl_category": "営業外収益", "tax_type": "課税売上10%", "display_order": 530},
        
        # 費用 (Expenses)
        {"code": "600", "name": "仕入高", "category": "費用", "bs_pl_category": "売上原価", "tax_type": "課税仕入10%", "display_order": 600},
        {"code": "610", "name": "給与手当", "category": "費用", "bs_pl_category": "販売費及び一般管理費", "tax_type": "対象外", "display_order": 610},
        {"code": "621", "name": "福利厚生費", "category": "費用", "bs_pl_category": "販売費及び一般管理費", "tax_type": "課税仕入10%", "display_order": 620},
        {"code": "630", "name": "旅費交通費", "category": "費用", "bs_pl_category": "販売費及び一般管理費", "tax_type": "課税仕入10%", "display_order": 630},
        {"code": "640", "name": "通信費", "category": "費用", "bs_pl_category": "販売費及び一般管理費", "tax_type": "課税仕入10%", "display_order": 640},
        {"code": "650", "name": "消耗品費", "category": "費用", "bs_pl_category": "販売費及び一般管理費", "tax_type": "課税仕入10%", "display_order": 650},
        {"code": "660", "name": "水道光熱費", "category": "費用", "bs_pl_category": "販売費及び一般管理費", "tax_type": "課税仕入10%", "display_order": 660},
        {"code": "670", "name": "地代家賃", "category": "費用", "bs_pl_category": "販売費及び一般管理費", "tax_type": "非課税仕入", "display_order": 670},
        {"code": "680", "name": "接待交際費", "category": "費用", "bs_pl_category": "販売費及び一般管理費", "tax_type": "課税仕入10%", "display_order": 680},
        {"code": "700", "name": "支払手数料", "category": "費用", "bs_pl_category": "販売費及び一般管理費", "tax_type": "課税仕入10%", "display_order": 700},
        {"code": "710", "name": "租税公課", "category": "費用", "bs_pl_category": "販売費及び一般管理費", "tax_type": "対象外", "display_order": 710},
    ]

    for a in accounts_data:
        acc = db.query(models.Account).filter(models.Account.code == a["code"]).first()
        if not acc:
            acc = models.Account(**a)
            db.add(acc)

    db.commit()

    # Journal seeding disabled for "Fresh Entry" preference
    """
    j = db.query(models.Journal).first()
    if not j:
        a_cash = db.query(models.Account).filter(models.Account.code == "100").first()
        a_sales = db.query(models.Account).filter(models.Account.code == "500").first()
        
        j1 = models.Journal(
            company_id=comp.id, date="04/01", 
            debit_account_id=a_cash.id, debit_amount=550000, debit_tax_amount=50000,
            credit_account_id=a_sales.id, credit_amount=550000, credit_tax_amount=50000,
            summary="製品売上"
        )
        db.add(j1)
        db.commit()
    """

    print("Seeding completed successfully!")
    db.close()

if __name__ == "__main__":
    seed_db()
