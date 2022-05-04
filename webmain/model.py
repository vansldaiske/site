import sqlalchemy as sa
from sqlalchemy.orm import relationship
from webmain.database import Base

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

