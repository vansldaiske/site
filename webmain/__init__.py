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
    def products():
        return render_template("products.html", products=[
            {
                "name": "Торт",
                "price": 330,
                "description": "Прийдя в гости не с пустыми руками уже хорошо, красивые, вкусные по доступной цене. "
                               "Прийдя в гости не с пустыми руками уже хорошо",
                "category": "torts"
            },
            {
                "name": "Маффины",
                "price": 330,
                "description": "Прийдя в гости не с пустыми руками уже хорошо, красивые, вкусные по доступной цене. "
                               "Прийдя в гости не с пустыми руками уже хорошо",
                "category": "maffiny"
            },
            {
                "name": "Пироги",
                "price": 330,
                "description": "Прийдя в гости не с пустыми руками уже хорошо, красивые, вкусные по доступной цене. "
                               "Прийдя в гости не с пустыми руками уже хорошо",
                "category": "pirogi"
            },
            {
                "name": "Меренге",
                "price": 330,
                "description": "Прийдя в гости не с пустыми руками уже хорошо, красивые, вкусные по доступной цене. "
                               "Прийдя в гости не с пустыми руками уже хорошо",
                "category": "merenge"
            }
        ])

    @app.route("/basket")
    def basket():
        return render_template("base.html")

    return app
