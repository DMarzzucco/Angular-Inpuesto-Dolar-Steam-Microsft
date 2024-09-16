from flask import Blueprint, jsonify, request
from service.product_service import ProductService
from repository.product_repository import ProductRepository

routes = Blueprint('routes', __name__)

product_repository = ProductRepository()
product_service = ProductService(product_repository)


@routes.route("/product", methods=["GET"])
def get_products():
    try:
        products = product_service.get_all_products()
        return jsonify(({"product": products, "message": "List of products"})), 200
    except Exception as e:
        return jsonify({"message": "Error to fetching all products", "errror": str(e)}), 500


@routes.route("/product/<string:product_name>", methods=["GET"])
def get_product(product_name):
    try:
        product = product_service.get_product_by_name(product_name)
        if not product:
            return jsonify({"message": "Product not found"}), 404
        return jsonify({"message": product}), 200
    except Exception as e:
        return jsonify({"message": "Error to fetching data", "error": str(e)}), 500


@routes.route("/product", methods=["POST"])
def create_product():
    try:
        data = request.json
        if not data or not all(k in data for k in ("name", "price", "quantity")):
            return jsonify({"message": "Invalid input, all fields are required"}), 400
        product_service.create_new_product(data)
        return jsonify({"message": "Product add successfully"}), 201
    except Exception as e:
        return jsonify({"message": "Error adding product", "error": str(e)}), 500


@routes.route("/product/<string:product_name>", methods=["PUT"])
def update_product(product_name):
    try:
        data = request.json
        if not data:
            return jsonify({"message": "Invalid input"}), 400
        new_product = product_service.update_a_product(product_name, data)
        if not new_product:
            return jsonify({"message": "Product not found"}), 404
        return jsonify({"message": "Product updated", "product": new_product}), 201
    except Exception as e:
        return jsonify({"message": "Error to update the product", "error": str(e)}), 500


@routes.route("/product/<string:product_name>", methods=["DELETE"])
def delete_product(product_name):
    try:
        if product_service.delete_product(product_name):
            return jsonify({"message": "product was deleted"}), 200
        return jsonify({"message": "Product not found"}), 404
    except Exception as e:
        return jsonify({"message": "Error deleting product", "error": str(e)}), 500
