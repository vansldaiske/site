# coding=utf-8

from flask import Blueprint, Flask, render_template, url_for, request, Response, abort
from http import HTTPStatus
from webmain.database import migrate, Session
from webmain.model import Products, Category

blueprint = Blueprint('products_api', __name__)

@blueprint.route("/")
@blueprint.route("/home")
def index():
    conn = Session()
    categoryes = conn.query(Category).all()
    title = "Flourlove"
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

@blueprint.route("/contact")
def contact():
    return render_template("contact.html")

@blueprint.route("/payment")
def payment():
    product_id = request.args.get('id')
    product_name = request.args.get('name')
    product_price = request.args.get('price')

    return render_template('payment.html',
                           product_id=product_id,
                           product_name=product_name,
                           product_price=product_price)

@blueprint.errorhandler(500)
def page_not_found(e):
    # if a request is in our blog URL space
    if request.path.startswith('/contact/'):
        # we return a custom blog 404 page
        return render_template("contact/500.html"), 500
    else:
        # otherwise we return our generic site-wide 404 page
        return render_template("500.html"), 500