const {test, expect}=require("@playwright/test")

test("Auto Complete or Suggestions",async function({page})
{
    await page.goto("https://www.google.com")
    await page.locator("//textarea[@id='APjFqb']").fill("mukesh otwani")
    await page.waitForSelector("(//li[@role='presentation'])")
    let allEle = await page.$$("(//li[@role='presentation'])")

    for(let i=0;i<allEle.length;i++)
    {
        const text = await allEle[i].textContent()

        if(text.includes("blog"))
        {
            await allEle[i].click()
            break
        }
    }
    await page.waitForTimeout(5000)
})
