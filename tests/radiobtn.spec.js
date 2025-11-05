const {test,expect}=require('@playwright/test')
test('handle radio button',async ({page})=>{
await page.goto('https://demoqa.com/radio-button')
await expect(await page.locator('[for="yesRadio"]').isChecked).toBeTruthy()
await page.locator('[for="yesRadio"]').check()
await expect(await page.locator('[for="yesRadio"]')).toBeChecked()
await page.waitForTimeout(5000)





})