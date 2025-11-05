const{test,expect} = require('playwright/test')
test('handle inputbox',async({page})=>{
await page.goto('https://demoqa.com/text-box')

await expect(await page.locator("//input[@id='userName']")).toBeVisible()
//await expect(await page.locator("//input[@id='userName']")).toBeEmpyt()
await expect(await page.locator("//input[@id='userName']")).toBeEnabled()

//inputbox - firstname
await page.locator("//input[@id='userName']").fill("hari")
//page.fill("//input[@id='name]",'John')

await page.waitForTimeout(5000)








})