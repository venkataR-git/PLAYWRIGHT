const {test, expect}=require("@playwright/test")

test("DropDown",async function({page})
{
    await page.goto("https://freelance-learn-automation.vercel.app/signup")
    await page.getByPlaceholder("Name").fill("ram")
    await page.locator("//input[@id='email']").fill("ram.raj@gmail.com")
    await page.locator("#password").fill("raj123")
    await page.locator("//input[@id='663a8a4d47e6665c4001ee63']").check()
    expect(await page.locator("//input[@id='663a8a4d47e6665c4001ee63']")).toBeChecked()
    await page.locator("//input[@id='gender2']").check()
    await page.locator("#state").selectOption({label:"Goa"})
    const vals = await page.locator("#state").textContent()
    await expect(vals).toContain("Delhi")

    let state = await page.$("#state")    
    let allEle = await state.$$("option")

    let ddSts=false
    for(let i=0; i<allEle.length; i++)
    {
        let ele = allEle[i]
        let val = await ele.textContent()
        console.log(val);

        if(val.includes("Bihar"))
        {
            ddSts=true
            break
        }

    }
    await expect(ddSts).toBeTruthy()
    await page.locator("//select[@id='hobbies']").selectOption(["Playing","Swimming"])
    await page.waitForTimeout(8000)
})