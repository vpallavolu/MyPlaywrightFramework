import { ChromiumBrowser, chromium, Page, expect, Browser } from "@playwright/test";

(async()=>{
    let browser:Browser=await chromium.launch({headless:false, channel:'chrome'});
        const page:Page=await browser.newPage();
        await   page.goto('https://www.freshworks.com/');




     
        //   await page.locator('#input-email').fill('johnpeter@gmail.com');
          
        //   await page.locator('#input-password').fill('Explore@2022');

        //   await page.locator(`input[value="Login"]`).click();

        //   let msge:string |null=await page.getByText('My Account').nth(5).textContent();
        //   console.log(msge);
      
       // await browser.close();         
})
();