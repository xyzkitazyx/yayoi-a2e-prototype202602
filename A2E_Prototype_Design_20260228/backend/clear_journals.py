from database import SessionLocal
import models

def clear_journals():
    db = SessionLocal()
    try:
        num_deleted = db.query(models.Journal).delete()
        db.commit()
        print(f"Successfully deleted {num_deleted} journal entries.")
    except Exception as e:
        db.rollback()
        print(f"Error clearing journals: {e}")
    finally:
        db.close()

if __name__ == "__main__":
    clear_journals()
