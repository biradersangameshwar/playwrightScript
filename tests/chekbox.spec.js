const {test,expect}=require('@playwright/test')
test.skip('handle radio button',async ({page})=>{
    await page.goto('https://www.qa-practice.com/elements/checkbox/mult_checkbox')
   expect(await page.locator('#id_checkboxes_0').isChecked()).toBeFalsy()
    await page.locator('#id_checkboxes_0').check()
    expect(await page.locator('#id_checkboxes_0')).toBeChecked()
    expect(await page.locator('#id_checkboxes_0').isChecked()).toBeTruthy()

    //multiple checkbox
   const checkbx = ['#id_checkboxes_0',
                    '#id_checkboxes_1',
                    '#id_checkboxes_2'
   ]

   for(const locator of checkbx) //select mulitple checkbox
   {
    await page.locator(locator).check();

   }

   for(const locator of checkbx) //unselect multiple checkbox
   {
    if(await page.locator(locator).isChecked())
    await page.locator(locator).uncheck()

   }





    await page.waitForTimeout(5000)
})