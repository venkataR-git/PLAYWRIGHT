const{test,expect}=require("@playwright/test")
//testing branch
test("Handle Alert",async ({page})=>
{
    await page.goto("http://the-internet.herokuapp.com/javascript_alerts")

    page.on("dialog",async (dialogAlert)=>
    {
        expect(dialogAlert.message()).toContain("I am a JS Alert")
        await dialogAlert.accept()
    })

    await page.locator("//button[text()='Click for JS Alert']").click()
    // expect(await page.locator("//p[@id='result']")).toHaveText("You successfully clicked an alert")    
})


test("Handle Confirm",async ({page})=>
{
    await page.goto("http://the-internet.herokuapp.com/javascript_alerts")
   
    page.on("dialog",async (dialogConfirm)=>
    {
        expect(dialogConfirm.message()).toContain("I am a JS Confirm")
        await dialogConfirm.accept()
    })
    
    await page.locator("button[onclick='jsConfirm()']").click()
    //expect(await page.locator("//p[@id='result']")).toHaveText("You clicked: Ok")

})

test("Handle Prompt",async ({page})=>
{
    await page.goto("http://the-internet.herokuapp.com/javascript_alerts")
    
    page.on("dialog",async (dialogPrompt)=>
    {
        expect(dialogPrompt.message()).toContain("I am a JS prompt")
        await dialogPrompt.accept("Ramaraju")
    })
     
   await page.locator("//button[text()='Click for JS Prompt']").click()
   await page.waitForTimeout(5000)
   //expect(await page.locator("//p[@id='result']")).toHaveText("You clicked: Ok")
})   