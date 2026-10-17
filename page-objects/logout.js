
class LogOut {
    constructor(page) {
       this.page = page;
       this.loginButton = page.locator("#navLoginBtn");
       this.emailaddrss = page.getByPlaceholder("you@example.com");
       this.password = page.getByPlaceholder("Enter your password");
       this.signInButton = page.getByRole("button", {name: "Sign In"});;
       this.dashboardButton = page.locator("#goToDashboard");
       this.logoutButton = page.getByTestId("nav-logout");
    }




    async goto() {
        await this.page.goto('/');
    }
    async login(){
       
    await this.loginButton.click();
    }
    async validlogin(Email,passWord){
        await this.emailaddrss.fill(Email)
        await this.password .fill(passWord);
        await this.signInButton.click();
        await this.dashboardButton.click();
    }
     async logout() {
       await this.logoutButton.click();

    }


}


module.exports = LogOut;



