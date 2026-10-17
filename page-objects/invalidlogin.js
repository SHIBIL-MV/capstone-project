
class InvalidLogin {
    constructor(page) {
       this.page = page;
       this.loginButton = page.locator("#navLoginBtn");
       this.emailaddrss = page.getByPlaceholder("you@example.com");
       this.password = page.getByPlaceholder("Enter your password");
       this.signInButton = page.getByRole("button", {name: "Sign In"});;
       this.dashboardButton = page.locator("#goToDashboard");
    }




    async goto() {
        await this.page.goto('/');
    }
   async openLogin() {
    await this.loginButton.click();
}
    
    async validlogin(Email,passWord){
        await this.emailaddrss.fill(Email)
        await this.password .fill(passWord);
        await this.signInButton.click();
        
    }


}


module.exports = InvalidLogin;



