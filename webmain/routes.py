# coding=utf-8

from flask import Blueprint, Flask, render_template, url_for, request, Response
from http import HTTPStatus
from webmain.database import migrate, Session
from webmain.model import Products, Category

blueprint = Blueprint('products_api', __name__)

@blueprint.route("/")
@blueprint.route("/home")
def index():
    conn = Session()
    categoryes = conn.query(Category).all()
    title = "Пекарня Ессении"
    icon = 'images/maffiny.jpg' #no work

    return render_template("main.html", page_title=title, categoryes=categoryes, page_icon=icon)

@blueprint.route("/<category>")
def products_list(category):
    conn = Session()
    products = conn.query(Products).all()

    if category:
        filtered_products = conn.query(Products).filter(Products.category.has(link_name=category))
        return render_template("products.html", products=filtered_products)
    return render_template("products.html", products=products)

# @blueprint.route("/basket")
# def basket():
#     return render_template("products.html")

# @blueprint.errorhandler(404)
# def page_not_found(error):
#     return render_template("404.html"), 404