from flask import Flask, jsonify
from product import products

app = Flask(__name__)


@app.route("/ping", methods=['GET'])
def GetProducts():
    return jsonify({"products": products, "message": "List's Products"})


@app.route("/ping/<string:product_name>", methods=['GET'])
def GetProduc(product_name):
    [product for product in products if product ]
    return jsonify()


@app.router("/ping", methods=['POST'])
def PostProducts():
    return jsonify({"message": "Som"})


if __name__ == "__main__":
    app.run(debug=True, port=4000)
