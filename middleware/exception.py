class ProductNotFound(Exception):
    def __init__(self, message="Product not found"):
        self.message = message
        super().__init__(self.message)


class ProductConflict(Exception):
    def __init__(self, message="Invalid input"):
        self.message = message
        super().__init__(self.message)
