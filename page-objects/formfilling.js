


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
