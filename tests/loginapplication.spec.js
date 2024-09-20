const {test, expect}=require("@playwright/test")
const LoginPage = require("../pages/loginpage")
const HomePage = require("../pages/homepage")
const testdata = JSON.parse(JSON.stringify(require("../testdata.json")))

test("Login to Application using POM",async function({page})
{
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    
    const loginPage=new LoginPage(page)
    await loginPage.loginToApplication(testdata.username,testdata.password)

    const homePage=new HomePage(page)
    await homePage.verifyManageOption()
    await homePage.logoutFromApplication()

    await loginPage.verifySignIn()

})