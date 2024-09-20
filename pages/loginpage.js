const {expect}=require("@playwright/test")

class LoginPage
{
    constructor(page)
    {
        this.page=page
        this.username="#email1"
        this.password="//input[@id='password1']"
        this.loginbutton="button[type='submit']"
        this.header="//h2[normalize-space()='Sign In']"
    }

    async loginToApplication(user,pass)
    {
        await this.page.fill(this.username,user)
        await this.page.fill(this.password,pass)
        await this.page.click(this.loginbutton)
    }

    async verifySignIn()
    {
        await expect(this.page.locator(this.header)).toBeVisible()
    }
}

module.exports=LoginPage;