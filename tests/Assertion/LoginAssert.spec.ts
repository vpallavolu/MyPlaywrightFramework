import {test, expect, Page} from '@playwright/test'

test.skip('title test', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    await expect(page).toHaveTitle('Account Login');
});



  test('URL Test', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');

    await expect(page).toHaveURL('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    await expect(page).toHaveURL(/.*account\/login*./);
});


test('header test', async({page})=>{
    await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=account/login');
    test.slow();
    let title= page.locator(`//h2[text()='Returning Customer']`);
    await expect(title).toBeEnabled();
})





