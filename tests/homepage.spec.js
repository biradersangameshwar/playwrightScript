const{test,expect} = require('@playwright/test');
test('Home page',async ({page})=>{
   await page.goto('https://demoblaze.com/index.html');
   const pageTitle = await page.title();
   console.log('page title is:',pageTitle);

  await expect(page).toHaveTitle('STORE');
   
  await expect(page).toHaveURL('https://demoblaze.com/index.html');


  await page.close();


})