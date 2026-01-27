const{test, expect}=require('@playwright/test')
test('Auto suggest dropdown', async ({page}) =>{
 await page.goto('https:www.redbus.in/')
 await page.locator("//div[text()='From']").fill('Delhi')
// await page.waitForSelector('//li[contains(@class,'sc-iwsKbI')]/div/text[1]")
 }) 