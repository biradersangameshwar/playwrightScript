const {test,expect} = require('@playwright/test')
test.skip('Handle dropdowns',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')

    //multiple way to select drop down
    await page.locator('#country').scrollIntoViewIfNeeded()
await page.locator('#country').selectOption({label:'India'})
await page.waitForTimeout(5000)
await page.locator('#country').selectOption('canada')
await page.waitForTimeout(5000)
await page.locator('#country').selectOption({value:'uk'})
await page.waitForTimeout(5000)
await page.locator('#country').selectOption({index: 3})
await page.selectOption('#country','India')

//Assertion on drop down
// we can check number or options in dropdown
const opt = await page.locator('#country option')
await expect(opt).toHaveCount(10)

//check presence of value in the dropdown
const content = await page.locator('#country').textContent()
await expect(content.includes('India')).toBeTruthy()

//how to print all the available dropdowns
const opt1 = await page.$$('#country option')
let status = false;
for(const option of opt1)
{
    console.log(await option.textContent())
}




await page.waitForTimeout(5000)







})