const{test,expect}=require("@playwright/test")

test("Handle Multiple Tabs",async ({browser})=>
{
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    const [newPage] = await Promise.all(
        [
            context.waitForEvent("page"),
            page.locator("(//div[@class='container-child']//a[4]//*[name()='svg'])").click()
        ]
    )

    await newPage.waitForTimeout(5000)
    await newPage.locator("(//input[@name='email'])[2]").fill("ramaraju@gmail.com")
    await newPage.waitForTimeout(5000)
    await newPage.close()

    await page.locator("//input[@id='email1']").fill("venkata@email.com")
    await page.waitForTimeout(5000)
})