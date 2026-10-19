

const { test, expect } = require("../Fixture/loginfixture");
const FormFilling = require("../page-objects/formfilling");
const { readExcelData } = require("../utlis/excelReader");
const FileUpload = require("../page-objects/photoupload");
const Product = require("../page-objects/productadd");
const Checkout = require("../page-objects/productCheckout");
const Payment = require("../page-objects/payment");
const checkoutData = require("../test-data/checkOutfill.json");
const paymentData = require("../test-data/paymentFill.json");
const InvalidLogin = require("../page-objects/invalidlogin");
const invalidLoginData = require("../test-data/invalidLogindata.json");
const logoutData = require("../test-data/Login.json")
const Logout = require("../page-objects/logout")



test("Invalid Login Test", async ({ page }) => {
    const invalidLogin = new InvalidLogin(page);

    await invalidLogin.goto();
    await invalidLogin.openLogin();
    for (const data of invalidLoginData) {
        await invalidLogin.validlogin(
            data.email,
            data.password);
await expect(
    page.getByText("Invalid credentials. Try: test@playlab.com / Password123")).toBeVisible();    
    }
});

test("form registration", async ({ loginpage }) => {
    const page = loginpage.page;
    const registrationData = await readExcelData(
        "D:/users1.xlsx",
        "Sheet1"
    );
    for (const data of registrationData) {
        const form = new FormFilling(page);
        await form.fillRegistrationForm(
            data.fullName,
            data.email.text,
            data.password,
            String(data.phone),
            data.dateOfBirth,
            data.bio
        );
        await form.submitForm();
        await expect(
            page.getByText("Registration successful")
        ).toBeVisible();
    }
});

test("File upload", async ({ page }) => {
    const upload = new FileUpload(page);
    await upload.goto();
    const filePath =
        "D:/itachi-uchiha-moon-5120x2880-25777 (1).jpg";
    await upload.uploadFile(filePath);
   await upload.uploadFile(filePath);
await expect(
    page.getByText(/itachi-uchiha-moon-5120x2880-25777 \(1\)\.jpg/)).toBeVisible();
});

test('purchasing product E2E test',async({page})=>{
    const product = new Product(page);
    await product.goto();
    await product.addProductToCart();
    await expect(product.cartCount).toHaveText("1");
    await product.productToCheckout();
    const checkout = new Checkout(page);
    await checkout.enterCustomerDetails(
        checkoutData.fullName,
        checkoutData.address,
        checkoutData.city,
        checkoutData.pincode,
        checkoutData.phone
    );
    await checkout.proceedToPayment();
    const payment = new Payment(page);
    await payment.selectUPIPayment();
    await payment.enterUpiId(paymentData.upiId);
    await payment.placeOrder();
await expect(
    page.getByText("Order placed successfully")
).toBeVisible(); 
    await payment.continueShopping();
    });

test("Logout Test", async ({ page }) => {
    const logout = new Logout(page);
    await logout.goto();
    await logout.login();
    await logout.validlogin(
        logoutData.email,
        logoutData.password
    );
    await logout.logout();
    await expect(
        page.locator("#navLoginBtn")
    ).toBeVisible();
});
