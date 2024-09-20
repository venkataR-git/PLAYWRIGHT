const{test,expect}=require("@playwright/test")

test("FileUpload",async ({page})=>
{
    await page.goto("http://the-internet.herokuapp.com/upload")
    
    await page.locator("#file-upload").setInputFiles("./Uploads/FileUpload.txt")

    await page.locator("#file-submit").click()

    // let txt = await page.locator("div[class='example'] h3").textContent()
    // console.log(txt);
    
    //expect(await page.locator("div[class='example'] h3")).toHaveText("File Uploaded!")    
    expect(await page.locator("div[class='example'] h3")).toContainText("File Uploaded!")


})