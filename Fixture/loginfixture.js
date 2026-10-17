
const { test: base, expect } = require("@playwright/test");
const Login = require("../page-objects/login");
const loginData = require("../test-data/Login.json");

const test = base.extend({

    loginpage: async ({ page }, use) => {

        const loginpage = new Login(page);

        await loginpage.goto();
        await loginpage.login();

        await loginpage.validlogin(
            loginData.email,
            loginData.password
        );

        await use(loginpage);
    }

});

module.exports = { test, expect };
