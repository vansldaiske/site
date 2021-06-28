# coding=utf-8

from flask import Flask, render_template, url_for

from webmain.model import db
# from webmain.config import


def create_app():
    app = Flask(__name__)
    app.config.from_pyfile('config.py')
    db.init_app(app)

    @app.route("/")
    @app.route("/home")
    def index():
        title = "Пекарня Ессении"

        return render_template("main.html", page_title=title)

    @app.route("/products")
    def torts():
        return render_template("torts.html")

    @app.route("/basket")
    def basket():
        return render_template("base.html")

    return app
