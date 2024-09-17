from repository.product_repository import ProductRepository
from middleware.exception import ProductConflict, ProductNotFound


class ProductService:
    def __init__(self, product_repository: ProductRepository):
        self.product_repository = product_repository

    def get_all_products(self):
        return self.product_repository.get_all()

    def get_product_by_name(self, name):
        product = self.product_repository.get_by_id(name)
        if not product:
            raise ProductNotFound(f"Product '{name}' not found")
        return product

    def create_new_product(self, product):
        if not product or not all(k in product for k in ("name", "price", "quantity")):
            raise ProductConflict()
        existing = self.product_repository.get_by_id(product["name"])
        if existing:
            raise ProductConflict(f"Product '{product['name']}' already exist")
        return self.product_repository.add(product)

    def update_a_product(self, name, update_data):
        data = self.product_repository.get_by_id(name)
        if not data:
            return ProductNotFound(f"Product '{data}' not found")
        new_data = self.product_repository.update(name, update_data)
        if not new_data:
            raise ProductConflict("Invalid Input")
        return new_data

    def delete_product(self, name):
        data = self.product_repository.delete(name)
        if not data:
            raise ProductNotFound()
        return data
