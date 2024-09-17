from flask import Blueprint, jsonify, request
from service.product_service import ProductService
from repository.product_repository import ProductRepository

routes = Blueprint('routes', __name__)

product_repository = ProductRepository()
product_service = ProductService(product_repository)


@routes.route("/product", methods=["GET"])
def get_products():
    products = product_service.get_all_products()
    return jsonify(({"product": products, "message": "List of products"})), 200


@routes.route("/product/<string:product_name>", methods=["GET"])
def get_product(product_name):
    product = product_service.get_product_by_name(product_name)
    return jsonify({"message": product}), 200


@routes.route("/product", methods=["POST"])
def create_product():
    data = request.json
    product_service.create_new_product(data)
    return jsonify({"message": "Product add successfully"}), 201


@routes.route("/product/<string:product_name>", methods=["PUT"])
def update_product(product_name):
    data = request.json
    new_product = product_service.update_a_product(product_name, data)
    return jsonify({"message": "Product updated", "product": new_product}), 201


@routes.route("/product/<string:product_name>", methods=["DELETE"])
def delete_product(product_name):
    res = product_service.delete_product(product_name)
    return jsonify(f"Product '{res}' was deleted"), 200
