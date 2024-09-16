from flask import Flask, jsonify, request
from product import products

app = Flask(__name__)


@app.route("/ping", methods=['GET'])
def get_products():
    try:
        return jsonify({"products": products, "message": "List's Products"})
    except ValueError:
        return jsonify(ValueError)


@app.route("/ping/<string:product_name>", methods=['GET'])
def get_product(product_name):
    product_found = [product for product in products if product["name"] == product_name]
    try:
        if len(product_found) == 0:
            return jsonify({"message": "Product not found"})
        return jsonify({"product": product_found[0]})
    except ValueError:
        return jsonify(ValueError)


@app.route("/ping", methods=['POST'])
def add_product():
    try:
        new_product = {
            "name": request.json['name'],
            "price": request.json['price'],
            "quantity": request.json['quantity']
        }
        products.append(new_product)
        return jsonify({'message': "product added Succesfully", "products": products})
    except ValueError:
        return jsonify(ValueError)


@app.route("/ping/<string:product_name>", methods=['PUT'])
def edit_product(product_name):
    product_found = [product for product in products if product['name'] == product_name]
    try:
        if len(product_found) > 0:
            product_found[0]['name'] = request.json['name']
            product_found[0]['price'] = request.json['price']
            product_found[0]['quantity'] = request.json['quantity']
            return jsonify({"message": "Product updated", "product": product_found[0]})
        return jsonify({"message": "product not found "})
    except ValueError:
        return jsonify(ValueError)


@app.route("/ping/<string:product_name>", methods=['DELETE'])
def delete_product(product_name):
    product_found = [product for product in products if product['name'] == product_name]
    try:
        if len(product_found) == 0:
            return jsonify({"message": "product not found"})
        products.remove(product_found[0])
        return jsonify({"message": "product was deleted"})
    except ValueError:
        return jsonify(ValueError)


if __name__ == "__main__":
    app.run(debug=True, port=4000)
