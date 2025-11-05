

//const {test,expect}= require('@playwright/test')

import {test,expect} from '@playwright/test'

test('locators', async({page})=>{

    await page.goto("https://demoblaze.com/index.html")
    //await page.locator('id=login2').click()
    await page.click('id=login2')

    //fill username
    await page.locator('#loginusername').fill('shrutib')
   // await page.fill('#loginusername','shruti')
    //await page.type('#loginusername','shruti')

    await page.fill("input[id='loginpassword']",'123456')

    await page.click("//button[normalize-space()='Log in']")

   const logoutlink= await page.locator("//a[text()='Log out']")

   await expect(logoutlink).toBeVisible();

   await page.close

})