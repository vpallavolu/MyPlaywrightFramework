////img[@alt='naveenopencart']
//   img[alt='naveenopencart']

/// (//tagname[@atttribute='value'])[index]   (//a[text()='Register'])[2]

 //(//a[text()='Register'])[last()]

  //(//a[text()='Register'])[last()-1]

    //a[.='login page']

    //tagname[@attribute='value' or @attribute='value']   //input[@name ='firstname' or @id='input-firstname']

    //tagname[@attribute='value' and @attribute='value']   //input[@name ='firstname' and @id='input-firstname']

    //a[text()='About Us']
    //tagname[@attirbute='value']//child/child

     //double slash // anywhere inside the html 

     // (//ul[@class='breadcrumb']//a)[3]

     ////ul[@class='breadcrumb']//a[text()='Register']

     //aside[@id='column-right']//a[.='Downloads']


     //div[@id='nav-main']//li//a[text()='Customer Service']


     //same two labels     New Release     New Stock

     

     //Registerd successuflly with 234567
     //Registerd successuflly with 567897

     //*[contains(text()='Registerd successuflly with')] //Invalid xpath

      //successully regissted 23733990 done

      //tagname[ends-with(text()='done')]

      //tagname[starts-with(text()='SUccessfully regissted')]

      //   //tagname[contains(text()='Release')]


      //legend[text()='Suggession Class Example']


      //tagname[starts-with(@attribute,'value')]    //legend[starts-with(text(), 'Dropdown' )]
      //tagname[contains(@attribute, value)]  //legend[contains(text(), 'Class')]
      //starts with,ends with and contains

      //tagName[ends-with(@attribute, 'suffix')]  //legend[ends-with(text(), 'header')]

      import { ChromiumBrowser, chromium, Page, Browser } from "@playwright/test";

    //   (async ()=>{
    //        let browser:Browser= await chromium.launch({headless:false, channel:'chrome'});
           
    //         let page:Page=await browser.newPage();

    //         await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    //         await page.locator("//legend[starts-with(text(), 'Dropdown' )]").highlight();

    //         await page.locator(`//legend[contains(text(), 'Class')]`).highlight();

    //         await page.locator(`//legend[ends-with(text(), 'header')]`).highlight();
           
    //   })
      
      //input[@placeholder='First Name']

      (async ()=>{
              let browser:Browser= await chromium.launch({headless:false, channel:'chrome'});
           
             let page:Page=await browser.newPage();

           await page.goto("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

           //Id, Name, className, LinkText, partiallinkText, xpath and css
           
           //await page.getByPlaceholder(`First Name`).fill('Sham');

           await page.locator(`//input[@placeholder='First Name']`).fill('Ram');

           await page.waitForTimeout(200);
           
           await page.close();
      })
      ();

     