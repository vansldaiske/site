import sqlalchemy as sa
from sqlalchemy.orm import relationship
from webmain.database import Base
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

class Category(Base):
    __tablename__ = 'category'
    id = sa.Column(sa.Integer, primary_key=True)
    name = sa.Column(sa.String, nullable=False)
    description = sa.Column(sa.Text, nullable=True)
    link_name = sa.Column(sa.Text, nullable=True)
    link_photo = sa.Column(sa.String, nullable=False)
    products = relationship("Products", back_populates="category")

    def __repr__(self):
        return '<Category {} {} {}>'.format(self.name, self.description, self.link_photo)


class Products(Base):
    __tablename__ = 'products'
    id = sa.Column(sa.Integer, primary_key=True)
    name = sa.Column(sa.String, nullable=False)
    description = sa.Column(sa.Text, nullable=True)
    price = sa.Column(sa.Integer, nullable=False)
    link_photo = sa.Column(sa.String, nullable=False)
    link_like = sa.Column(sa.String, nullable=False)
    link_basket = sa.Column(sa.String, nullable=False)
    category_id = sa.Column(sa.Integer, sa.ForeignKey('category.id'))
    category = relationship("Category", back_populates="products")

    def __repr__(self):
        return '<Products {} {} {}>'.format(self.name, self.description, self.link_photo)

class User(Base, UserMixin):
    __tablename__ = 'user'
    id        = sa.Column(sa.Integer, primary_key=True)
    name      = sa.Column(sa.String(64))
    lastname  = sa.Column(sa.String(64))
    phone     = sa.Column(sa.String(20))
    email     = sa.Column(sa.String(120), unique=True, index=True, nullable=False)
    password_hash = sa.Column(sa.String(128), nullable=False)

    # helpers
    def set_password(self, raw: str):
        self.password_hash = generate_password_hash(raw)

    def check_password(self, raw: str) -> bool:
        return check_password_hash(self.password_hash, raw)