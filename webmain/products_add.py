# from sqlalchemy.orm.session import Session
from webmain.model import Products
from sqlalchemy.orm import Session

def create_product(db: Session, name, description, price, category):
    new_product = Products(
        name=name,
        description=description,
        price=price,
        category=category
    )
    db.add(new_product)
    db.commit()
    db.refresh(new_product)
    return new_product

def get_products(db: Session, category=None):
    if category:
        return db.query(Products).filter_by(category=category)
    return db.query(Products).all()