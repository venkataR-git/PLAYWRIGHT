const{test,expect}=require("@playwright/test")
//Stringify will converts javaScript value into JSON string 
//and parse will then convert JSON string into JSON object
const testdata = JSON.parse(JSON.stringify(require("../testdata.json")))

test("Wait for load state",async ({page})=>
{

    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.locator("//input[@id='email1']").fill(testdata.username)
    await page.locator("//input[@id='password1']").fill(testdata.password)
    await page.pause()

    await page.locator("//input[@id='email1']").fill(testdata.address.area)
    await page.pause()

    await page.locator("//input[@id='email1']").fill(testdata.interest[1])
    await page.pause()


})