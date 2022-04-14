# coding=utf-8

from flask import Flask, render_template, url_for, request, Response
from http import HTTPStatus
from webmain.database import migrate, Session
from webmain.routes import blueprint
# from webmain.model import Products, Category


def create_app():
    app = Flask(__name__)
    app.config.from_pyfile('config.py')
    app.register_blueprint(blueprint)
    migrate()

    return app
