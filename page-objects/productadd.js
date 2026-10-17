
class Product {
    constructor(page) {
        this.page = page;

        this.addToCart = page.getByTestId("add-cart-lamborghini");
        this.cartCount = page.getByTestId("shop-cart-count");
        this.checkoutButton = page.getByRole("button", {name: "Proceed to Checkout"});
    }

    async goto() {
        await this.page.goto("/");
    }

    async addProductToCart() {
        await this.addToCart.click();
    }

    async productToCheckout() {
        await this.checkoutButton.click();
    }
}

module.exports = Product;
