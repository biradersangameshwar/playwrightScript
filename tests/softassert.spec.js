const {test,expect} =require('@playwright/test')
test("softassert",async({page})=>{

await page.goto("https://www.demoblaze.com/index.html")

//hard assert
/*await expect(page).toHaveTitle("STORE1")
await expect(page).toHaveURL("https://www.demoblaze.com/index.html")
await expect(page.locator('.navbar-brand')).toBeVisible() */

//SOFT ASSERT
await expect.soft(page).toHaveTitle("STORE1")
await expect.soft(page).toHaveURL("https://www.demoblaze.com/index.html")
await expect.soft(page.locator('.navbar-brand')).toBeVisible()


})