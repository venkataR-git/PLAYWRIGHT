const{test,expect}=require("@playwright/test")

test("Handle Frames",async ({page})=>
{
    await page.goto("https://docs.oracle.com/javase/8/docs/api/")
    const iframe = await page.frameLocator("//frame[@name='packageListFrame']")
    await iframe.locator("//a[text()='java.applet']").click()

    await page.pause()  

    const iframe2 = await page.frameLocator("//frame[@name='packageFrame']")
    iframe2.locator("//span[text()='AppletContext']").click()

    await page.pause()
        
    
})