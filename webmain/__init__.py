# coding=utf-8

from flask import Flask, render_template, url_for, request, Response
from http import HTTPStatus
from webmain.database import migrate, Session
from webmain.routes import blueprint
# from webmain.model import Products, Category

def page_not_found(e):
  return render_template('404.html'), 404

def internal_server_error(e):
  return render_template('500.html'), 500

def create_app():
    app = Flask(__name__)
    app.config.from_pyfile('config.py')
    app.register_blueprint(blueprint)
    app.register_error_handler(404, page_not_found)
    app.register_error_handler(500, internal_server_error)
    migrate()

    return app
