import sqlalchemy as sa
from webmain.database import Base

class Products(Base):
    __tablename__ = 'Products'
    id = sa.Column(sa.Integer, primary_key=True)
    name = sa.Column(sa.String, nullable=False)
    description = sa.Column(sa.Text, nullable=True)
    price = sa.Column(sa.Integer, nullable=False)
    category = sa.Column(sa.Text, nullable=False)
    link_photo = sa.Column(sa.String, nullable=False)
    link_like = sa.Column(sa.String, nullable=False)
    link_basket = sa.Column(sa.String, nullable=False)

    def __repr__(self):
        return '<Products {} {} {}>'.format(self.name, self.description, self.link_photo)

class Category(Base):
    __tablename__ = 'Category'
    id = sa.Column(sa.Integer, primary_key=True)
    name = sa.Column(sa.String, nullable=False)
    description = sa.Column(sa.Text, nullable=True)
    link_name = sa.Column(sa.Text, nullable=True)
    link_photo = sa.Column(sa.String, nullable=False)

    def __repr__(self):
        return '<Category {} {} {}>'.format(self.name, self.description, self.link_photo)