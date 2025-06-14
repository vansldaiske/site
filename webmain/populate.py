from webmain.database import Session, Base
# from webmain.products_add import create_product
from webmain.model import Products, Category

list_products = [
#     {
#         "name": "Торт сливочный",
#         "description": "Прийдя в гости не с пустыми руками уже хорошо, красивые, вкусные по доступной цене",
#         "price": 330,
#         "category": "torts",
#         "link_photo": "images/torts.jpg",
#         "link_like": "images/like.svg",
#         "link_basket": "images/basket.svg"
#     },
#     {
#         "name": "Торт шоколадный",
#         "description": "Прийдя в гости не с пустыми руками уже хорошо, красивые, вкусные по доступной цене",
#         "price": 400,
#         "category": "torts",
#         "link_photo": "images/torts.jpg",
#         "link_like": "images/like.svg",
#         "link_basket": "images/basket.svg"
#     },
#     {
#         "name": "Маффин шоколадный",
#         "description": "Прийдя в гости не с пустыми руками уже хорошо, красивые, вкусные по доступной цене",
#         "price": 330,
#         "category": "maffiny",
#         "link_photo": "images/maffiny.jpg",
#         "link_like": "images/like.svg",
#         "link_basket": "images/basket.svg"
#     },
#     {
#         "name": "Пирог вишневый",
#         "description": "Прийдя в гости не с пустыми руками уже хорошо, красивые, вкусные по доступной цене",
#         "price": 330,
#         "category": "pirogi",
#         "link_photo": "images/pirogi.jpg",
#         "link_like": "images/like.svg",
#         "link_basket": "images/basket.svg"
#     },
#     {
#         "name": "Меренге",
#         "description": "Прийдя в гости не с пустыми руками уже хорошо, красивые, вкусные по доступной цене",
#         "price": 330,
#         "category": "merenge",
#         "link_photo": "images/merenge.jpg",
#         "link_like": "images/like.svg",
#         "link_basket": "images/basket.svg"
#     }
]

list_category = [
    # {
    #     "name": "Торты",
    #     "description": "Большая разновидность тортов, на любой праздник и торжество",
    #     "link_name": "torts",
    #     "link_photo": "images/torts.jpg"
    # },
    # {
    #     "name": "Маффины",
    #     "description": "Маффины это просто вкусный перекус для любого удобного брейка с кофем",
    #     "link_name": "maffiny",
    #     "link_photo": "images/maffiny.jpg"
    # },
    # {
    #     "name": "Пироги",
    #     "description": "Выбор пирогов для любого дня когда времени не хватает а хочется чего нибудь вкусного",
    #     "link_name": "pirogi",
    #     "link_photo": "images/pirogi.jpg"
    # },
    # {
    #     "name": "Меренге",
    #     "description": "Прийдя в гости не с пустыми руками уже хорошо, красивые, вкусные по доступной цене",
    #     "link_name": "merenge",
    #     "link_photo": "images/merenge.jpg"
    # },
    # {
    #     "name": "Keksi",
    #     "description": "Прийдя в гости не с пустыми руками уже хорошо, красивые, вкусные по доступной цене",
    #     "link_name": "Keks",
    #     "link_photo": "images/merenge.jpg"
    # }
]

def populate():
    conn = Session()
    for category in list_category:
        existing_category = conn.query(Category).filter_by(link_name=category["link_name"]).first()
        if not existing_category:
            new_category = Category(
                name=category["name"],
                description=category["description"],
                link_name=category["link_name"],
                link_photo=category["link_photo"]
            )
        conn.add(new_category)
        conn.commit()

        category_products = [prod for prod in list_products if prod['category'] == new_category.link_name]
        print("----", category_products)

        for product in category_products:
            existing_product = conn.query(Products).filter_by(name=product["name"]).first()
            if not existing_product:
                new_product = Products(
                    name=product["name"],
                    description=product["description"],
                    price=product["price"],
                    link_photo=product["link_photo"],
                    link_like=product["link_like"],
                    link_basket=product["link_basket"],
                    category=new_category
                )
            conn.add(new_product)
            conn.commit()

if __name__ == "__main__":
    populate()
