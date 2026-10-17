
class Checkout {
    constructor(page) {
        this.page = page;

        this.fullName = page.getByTestId("input-fullname");
        this.address = page.getByPlaceholder("123 Main Street, Apt 4B");
        this.city = page.getByPlaceholder("Mumbai");
        this.pincode = page.getByPlaceholder("400001");
        this.phone = page.getByPlaceholder("+91 98765 43210");
        this.Paymentbutton = page.getByRole("button", {name: "Continue to Payment"});
    }      

   
async enterCustomerDetails(name, address, city, pincode, phone) {
    await this.fullName.fill(name);
    await this.address.fill(address);
    await this.city.fill(city);
    await this.pincode.fill(pincode);
    await this.phone.fill(phone);
}
async proceedToPayment() {
   await this.Paymentbutton.click();
}

}


module.exports = Checkout;
