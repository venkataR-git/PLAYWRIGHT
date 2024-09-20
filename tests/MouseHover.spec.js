const {test, expect}=require("@playwright/test")

test("Hover",async function({page})
{
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await page.getByPlaceholder("Enter Email").fill("admin@email.com")
    await page.getByPlaceholder("Enter Password").fill("admin@123")
    await page.getByRole("button",{name:"Sign in"}).click()

    await page.locator("//span[normalize-space()='Manage']").hover()

    await page.locator("//div[@class='nav-menu-item-manage']").click()
    await page.waitForTimeout(5000)
    
})