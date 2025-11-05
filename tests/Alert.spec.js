import { test, expect } from '@playwright/test'

test.skip('Alert with ok', async({ page })=>{
await page.goto('https://testautomationpractice.blogspot.com/')
//Enabling alert handling 
page.on('dialog', async dialog=>{
    expect(dialog.type()).toContain('alert')
    expect(dialog.message()).toContain('I am an alert box!')
    await dialog.accept();


})
await page.click('//button[normalize-space()="Simple Alert"]')
await page.waitForTimeout(5000)
})

test.skip('Confirmation alert with ok and cancel', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/')
//Enabling alert handling 
page.on('dialog', async dialog=>{
    expect(dialog.type()).toContain('confirm')
    expect(dialog.message()).toContain('Press a button!')
    await dialog.dismiss()
})
await page.click("//button[normalize-space()='Confirmation Alert']")
await expect(page.locator('//p[@id="demo"]')).toHaveText('You pressed Cancel!')
await page.waitForTimeout(5000)
})
test('promt alert with text & ok and cancel', async ({ page }) => {
await page.goto('https://testautomationpractice.blogspot.com/')
//Enabling alert handling 
page.on('dialog', async dialog=>{
    expect(dialog.type()).toContain('prompt')
    expect(dialog.message()).toContain('Please enter your name:')
    expect(dialog.defaultValue()).toContain('Harry Potter')
    await dialog.dismiss('sangam')
})

await page.click("//button[normalize-space()='Prompt Alert']")
await expect(page.locator('//p[@id="demo"]')).toHaveText('User cancelled the prompt.')
await page.waitForTimeout(5000)
})