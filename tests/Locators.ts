import { ChromiumBrowser, chromium, Page, Browser, Locator } from "@playwright/test";

(async ()=>{
     let browser:Browser=await chromium.launch({headless:false, channel:'chromium'});
     let page:Page=await browser.newPage();
      page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/login");

    // await page.locator('#input-email').fill('johnpeter@gmail.com');

    // await page.locator(`input#input-password`).fill('Explore@2022');

    // await page.locator(`input[value='Login']`).click();

     //let res:string |null=await page.locator(`//h2[text()='My Account']`).textContent();


     //console.log(res);

     //tagname#value    input#input-email

     //tagname[attirbute='value'] input[value='Login']

     //xpath //tagname[@atttribute='value']  //h2[text()='My Account']

     //   tagname[attribute='value']--> Css


     //2nd Approach

     let username:Locator= page.locator('#input-email'); //what is the return type of page.locator //Locator

     let password:Locator= page.locator('#input-password');

     let loginBtn=page.locator(`input[value='Login']`);

     username.fill('johnpeter@gmail.com');

     password.fill('Explore@2022');

     loginBtn.click();

     

     
     
})

()
