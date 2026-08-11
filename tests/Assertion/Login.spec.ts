import {test, Page, chromium, expect} from '@playwright/test';



test.skip('Not validation', async({page})=>{
    await page.goto('https://classic.freecrm.com/register/');

    let checkbox= page.getByLabel(' I agree with the terms and conditions');
    let button = page.getByRole('button', {name:'SUBMIT'});

     await expect(button).toBeEnabled(); 

    await expect(checkbox).not.toBeChecked();

    await expect(button).not.toBeEnabled();

    await checkbox.check();

    await expect(checkbox).toBeChecked();

    await expect(button).toBeEnabled();

    await button.click();
    
    console.log(`BYE...`);

//Test files added
});


test('Screenshot Validation', async({page})=>{
   await page.goto(`https://classic.freecrm.com/register/`);
    
     let header=await page.locator(`//a/img[@class='img-responsive']`);

     await expect(header).toHaveScreenshot('header.png');

     await expect(header).not.toBeEnabled();

   
});