from webmain.models import Products
from webmain.database import Session

def create_product(db: Session, name, description, price, category, link_photo, link_like, link_basket):
    new_product = Products(
        name=name,
        description=description,
        price=price,
        category=category,
        link_photo=link_photo,
        link_like=link_like,
        link_basket=link_basket
    )
    db.add(new_product)
    db.refresh(new_product)
    db.commit()
    return new_product

def get_products(db: Session, category=None):
    if category:
        return db.query(Products).filter_by(category=category)
    return db.query(Products).all()