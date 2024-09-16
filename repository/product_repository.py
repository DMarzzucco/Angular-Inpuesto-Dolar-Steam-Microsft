from models.product import products


class ProductRepository:
    def __init__(self):
        self.products = products

    def get_all(self):
        return self.products

    def get_by_id(self, name):
        return next((product for product in self.products if product["name"] == name), None)

    def add(self, product):
        self.products.append(product)

    def update(self, name, update_data):
        product = self.get_by_id(name)
        if product:
            product.update(update_data)

    def delete(self, name):
        product = self.get_by_id(name)
        if product:
            self.products.remove(product)
            return True
        return False
