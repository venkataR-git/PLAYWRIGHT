const{test,expect}=require("@playwright/test")

test("Keyboard Actions",async ({page})=>
{
    await page.goto("https://www.google.com/")
    await page.locator("textarea[name='q']").fill("Ramaraju")
    await page.waitForTimeout(3000)
    await page.keyboard.press("Control+A")
    await page.waitForTimeout(3000)
    await page.keyboard.press("Control+C")
    await page.waitForTimeout(3000)
    await page.keyboard.press("Backspace")
    await page.waitForTimeout(3000)
    await page.keyboard.press("Control+V")
    await page.waitForTimeout(3000)
    await page.keyboard.press("Enter")
    await page.waitForTimeout(3000)

})

test.only("Keyboard Actions_1",async ({page})=>
    {
        await page.goto("https://www.google.com/")
        await page.locator("textarea[name='q']").focus()
        await page.waitForTimeout(3000)
        await page.keyboard.type("Venkata Rudra!")
        await page.waitForTimeout(3000)
        await page.keyboard.press("ArrowLeft")
        await page.keyboard.down("Shift")

        for(let i=0;i<6;i++)
        {
            await page.keyboard.press("ArrowLeft")
        }

        await page.keyboard.up("Shift")
        await page.waitForTimeout(3000)
        await page.keyboard.press("Backspace")
        await page.waitForTimeout(3000)
        await page.keyboard.press("Enter")
        await page.waitForTimeout(3000)
    
    })
    
