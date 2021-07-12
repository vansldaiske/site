# coding=utf-8

from flask import Blueprint, Flask, render_template, url_for, request, Response
from http import HTTPStatus
from webmain.database import migrate, Session
from webmain.model import Products, Category

products_api_bp = Blueprint('products_api', __name__, url_prefix='/products')

@products_api_bp("/", "/home", "/<category>", "/basket")
def products_api(index, products_list, basket):

    def index():
        conn = Session()
        categoryes = conn.query(Category).all()
        title = "Пекарня Ессении"

        return render_template("main.html", page_title=title, categoryes=categoryes)

    def products_list(category):
        conn = Session()
        products = conn.query(Products).all()

        if category:
            filtered_products = conn.query(Products).filter_by(category=category)
            return render_template("products.html", products=filtered_products)
        return render_template("products.html", products=products)

    def basket():
        return render_template("products.html")