from .model import Products

def create_product(db, title, description, price, category):
    new_product = Products(
        title=title,
        description=description,
        price=price,
        category=category
    )
    db.add(new_product)
    db.commit()
    db.refresh(new_product)
    return new_product

def get_products(db, category=None):
    if category:
        return db.query(Products).filter_by(category=category)
    return db.query(Products).all()