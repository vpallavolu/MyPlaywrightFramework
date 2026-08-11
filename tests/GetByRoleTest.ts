import { ChromiumBrowser, chromium, Page, Browser, Locator } from "@playwright/test";

(async ()=>{
     let browser:Browser=await chromium.launch({headless:false, channel:'chromium'});
     let page:Page=await browser.newPage();
     await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

    //   await page.getByRole('link', {name:'login page'}).highlight();

    //   //Note while using getByRole for textbox html tagname should be label or aria-label

    //   await page.getByRole('textbox', {name:'First Name'}).fill('SHam');

    //   await page.getByRole('radio', {name:'Yes'}).click();

    //   await page.getByRole('button', {name:'Continue'}).click();
      
      //await page.getByRole('link', {name:'Register'}).nth(2).highlight();

      await page.getByRole('heading',{name:'Register Account'} ).highlight();

      let text=await page.getByRole('heading',{name:'Register Account'} ).innerText();
      console.log(text);

      //await page.getByAltText('naveenopencart').highlight();

      await page.getByRole('img', {name:'naveenopencart'}).highlight();

})
();