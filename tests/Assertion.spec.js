// import{test,expect} from '@playwright/test';


// test('AssertionsTest',async({page})=>{

//     //open url
//     await page.goto('https://demo.nopcommerce.com/register');

//     //1 assertion .toHaveURL()
//     await expect(page).toHaveURL('https://demo.nopcommerce.com/register');


// })

import {test,expect} from '@playwright/test'

test('assertions', async({page})=>{
  await page.goto('https://demo.nopcommerce.com/register');
  await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
  await expect(page).toHaveTitle('nopCommerce demo store. Register')
  const logoele =await page.locator('.header-logo')
  await expect(logoele).toBeVisible()
  const searchbox = await page.locator("[name='q']");
  await expect(searchbox).toBeEnabled()
   // const searchbox1 = await page.locator("[name='q']");
  //await expect(searchbox1).toBeDisabled()
  const chekbox = page.locator('#Newsletter');
  await expect(chekbox).toBeChecked()
  // const radbtn = await page.locator('#gender-male')
   //await expect(radbtn).toBeChecked()
  const regbutn = await page.locator('#register-button')
  await expect(regbutn).toHaveAttribute('name',"register-button")

   const havetxt = await page.locator('.page-title')
   await expect(havetxt).toHaveText('Register')

//(await page.locator("xpath = //strong[text()='Your Personal Details']")).toContainText('person')
await expect (await page.locator("xpath = //strong[text()='Your Personal Details']")).toContainText('Detail')
});
      