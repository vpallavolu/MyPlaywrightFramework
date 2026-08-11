import { ChromiumBrowser, expect, test, Page } from "@playwright/test";

test('Locator based assertion', async({page})=>{

   await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    let header=page.locator(`//h1[text()='Register Account']`);

    await expect(header).toContainText('Register111');

       console.log(`Bye1111`);

    // expect(firstname).toBeDisabled();


});

test('footer validation', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    let footercount=await page.locator('//footer//a').count();

    expect(footercount).toHaveLength(16);
});

//I want to do multiple assertions 
//soft assertion



test('Assertion Test', async({page})=>{

   await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');

    let header=page.locator(`//h1[text()='Register Account']`);

    await expect(header).toContainText('Register');
    await expect(header).toContainText('Account1');

      console.log('Bye!!!');
      //In hard assertion if any line of statement is failed it won't continue execution



});


test.only('Soft Assertion', async({page})=>{
   await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/register');
   
    let header=page.locator(`//h1[text()='Register Account']`);

   await expect.soft(header).toHaveText('Register Account');
   console.log(`Bye`);
 })


