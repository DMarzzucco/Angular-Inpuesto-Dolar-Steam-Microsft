from repository.product_repository import ProductRepository


class ProductService:
    def __init__(self, product_repository:ProductRepository):
        self.product_repository = product_repository

    def get_all_products(self):
        return self.product_repository.get_all()

    def get_product_by_name(self, name):
        return self.product_repository.get_by_id(name)

    def create_new_product(self, product):
        return self.product_repository.add(product)

    def update_a_product(self, name, update_data):
        res = self.product_repository.get_by_id(name)
        if res:
            self.product_repository.update(name, update_data)
            return res
        return None

    def delete_product(self, name):
        return self.product_repository.delete(name)
