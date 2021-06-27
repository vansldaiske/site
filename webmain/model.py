from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Products(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    description = db.Column(db.Text, nullable=True)
    price = db.Column(db.Integer, nullable=False)
    category = db.Column(db.Text, nullable=False)

    def __repr__(self):
        return '<Products {} {}>'.format(self.title, self.text)