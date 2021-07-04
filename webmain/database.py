from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from webmain.config import SQLALCHEMY_DATABASE_URI


engine = create_engine(SQLALCHEMY_DATABASE_URI, echo=True)
Base = declarative_base()
Session = sessionmaker(bind=engine)

def migrate():
    Base.metadata.create_all(engine)



