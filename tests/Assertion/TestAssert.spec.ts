import { ChromiumBrowser, test, expect, Page } from "@playwright/test";


test('Basic Assertions', async()=>{
    expect(1+1).toBe(2);//True
   // expect(1+1).toBe(3); //false

    expect('Playwright').toContain('Play')

    //verify array
    expect([1,2,3]).toEqual([1,2,3]);

    expect(true).toBeTruthy();//true
    expect(false).toBeFalsy();//fail // If 14th fail it won't execute
    expect({role:'Admin', age:20}).toEqual({role:'Admin', age:20});
    expect(50).toBeGreaterThan(10);  50>10 // true pass
});
//Note every test exectuion will be completed with assertion 
