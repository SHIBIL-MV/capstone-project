/*class FormFilling {
    constructor(page) {
        this.page = page;

        this.fullName = page.getByPlaceholder("John Doe");
        this.email = page.getByPlaceholder("john@example.com");
        this.password = page.getByPlaceholder("Min 8 characters");
        this.phone = page.getByPlaceholder("+1 (555) 000-0000");
        this.dateOfBirth = page.locator('input[type="date"]').first();

        this.country = page.getByLabel("Country");
        this.male = page.getByLabel("Male", { exact: true });
        this.javaScript = page.getByLabel("JavaScript", { exact: true });
        this.python = page.getByLabel("Python", { exact: true });
        this.bio = page.getByLabel("Bio");
        this.terms = page.getByLabel(/I agree to the Terms/);

        this.registerButton = page.getByRole("button", {
            name: "Register",
            exact: true
        });
    }

    async fillRegistrationForm() {
        await this.fullName.fill("Mohamed Shibil");
        await this.email.fill("shibil.test@example.com");
        await this.password.fill("TestPass123");
        await this.phone.fill("9876543210");
        await this.dateOfBirth.fill("2001-05-15");

        await this.country.selectOption({ label: "India" });

        await this.male.check();
        await this.javaScript.check();
        await this.python.check();

        await this.bio.fill("Learning Playwright automation testing");
        await this.terms.check();
    }

    async submitForm() {
        await this.registerButton.click();
    }
}*/


class FormFilling {
    constructor(page) {
        this.page = page;

        
        this.fullName = page.getByTestId("input-fullname");
        this.email = page.getByTestId("input-email");
        this.password = page.getByPlaceholder("Min 8 characters");
        this.phone = page.getByPlaceholder("+1 (555) 000-0000");
        this.dateOfBirth = page.locator('input[type="date"]').first();
        this.country = page.getByTestId("select-country");
        this.male = page.getByTestId("radio-male");
        this.javaScript = page.getByLabel("JavaScript");
        this.bio = page.getByPlaceholder("Tell us about yourself...")
        this.terms = page.getByLabel(/I agree to the Terms/);
        this.registerButton = page.getByRole("button", { name: "Register"});
    }

    async fillRegistrationForm(fullName,email,password,phone,dateOfBirth,bio) {
        await this.fullName.fill(fullName);
        await this.email.fill(email);
        await this.password.fill(password);
        await this.phone.fill(phone);
        await this.dateOfBirth.fill(dateOfBirth);
        await this.country.selectOption("India");
        await this.male.check();
        await this.javaScript.check();
        await this.bio.fill(bio);
        await this.terms.check();
        
    }

    async submitForm() {
        await this.registerButton.click();
    }
}

module.exports =FormFilling;
