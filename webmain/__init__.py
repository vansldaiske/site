# coding=utf-8

from flask import Flask, render_template, url_for, request, Response
from http import HTTPStatus
from webmain.database import migrate, Session
from webmain.model import Products, Category


def create_app():
    app = Flask(__name__)
    app.config.from_pyfile('config.py')
    migrate()

    @app.route("/")
    @app.route("/home")
    def index():
        conn = Session()
        categoryes = conn.query(Category).all()
        title = "Пекарня Ессении"

        return render_template("main.html", page_title=title, categoryes=categoryes)

    @app.route("/<category>")
    def products_list(category):
        conn = Session()
        products = conn.query(Products).all()

        if category:
            filtered_products = conn.query(Products).filter_by(category=category)
            return render_template("products.html", products=filtered_products)
        return render_template("products.html", products=products)

    @app.route("/basket")
    def basket():
        return render_template("products.html")

    return app
