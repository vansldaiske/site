import sqlalchemy as sa
from webmain.database import Base

class Products(Base):
    __tablename__ = 'Products'
    id = sa.Column(sa.Integer, primary_key=True)
    name = sa.Column(sa.String, nullable=False)
    description = sa.Column(sa.Text, nullable=True)
    price = sa.Column(sa.Integer, nullable=False)
    category = sa.Column(sa.Text, nullable=False)

    def __repr__(self):
        return '<Products {} {}>'.format(self.name, self.description)