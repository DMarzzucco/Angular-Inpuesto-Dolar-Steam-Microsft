from flask import jsonify
from middleware.exception import ProductConflict, ProductNotFound


def handler_error(app):
    @app.errorhandler(ProductConflict)
    def conflict_product(error):
        return jsonify(str(error)), 409

    @app.errorhandler(ProductNotFound)
    def product_notfound(error):
        return jsonify(str(error)), 404

    @app.errorhandler(404)
    def err_404(error):
        return jsonify({"message": "Resource Not found", "error": str(error)}), 404

    @app.errorhandler(400)
    def err_400(error):
        return jsonify({"message": "Bad Request", "error": str(error)}), 400

    @app.errorhandler(409)
    def err_409(error):
        return jsonify({"message": "Conflict", "error": str(error)}), 409

    @app.errorhandler(500)
    def err_500(error):
        return jsonify({"message": "Server error", "error": str(error)}), 500

    @app.errorhandler(KeyError)
    def error_jey(error):
        return jsonify({"message": "Key error - Missing field", "error": str(error)}), 400

    @app.errorhandler(Exception)
    def error_except(error):
        return jsonify({"message": "An unexpected error occurred", "error": str(error)}), 500
