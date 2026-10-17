
class Payment {
    constructor(page) {
        this.page = page;

       this.upiPayment = page.locator('input[value="upi"]');

       this.upiId = page.getByPlaceholder("yourname@upi");
       this.placeOrderButton = page.getByRole("button", { name: "Place Order"});
       this.continueButton = page.getByRole("button", {name: "Continue Shopping"});
 }

    async selectUPIPayment() {
        await this.upiPayment.check();
    }

    async enterUpiId(upiId) {
    await this.upiId.fill(upiId);
    
    }
   async placeOrder() {
    await this.placeOrderButton.click();
  }
  async continueShopping() {
    await this.continueButton.click();
}
    }


module.exports = Payment;
