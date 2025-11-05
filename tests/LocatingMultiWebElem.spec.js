//LocatingMultiWebElem.spec.js

const{test,expect}=require('@playwright/test');
test('LocatingMultiWebElem', async({page})=>{

//await page.goto("https://demoblaze.com/index.html")

// const links= await page.$$('a');

// for(const link of links){
//      const linktext= await link.textContent();

//     console.log(linktext);
//     }

//page.waitForSelector("//div[@id='tbodyid']//h4//a");

//const products= await page.$$("xpath=//div[@id='tbodyid']//h4//a")

// const products= await page.$$('#tbodyid h4 a')
// for(const product of products){
//     const textproduct= await product.allTextContents();

//     console.log(textproduct);
// }

// const productNames = await page.locator('#tbodyid h4 a').allTextContents();
// console.log(productNames);


    await page.goto('https://demoblaze.com/index.html');

    // Wait until at least one product link is visible
    await page.waitForSelector('#tbodyid h4 a');

    // Fetch all product texts
    const productNames = await page.locator('#tbodyid h4 a').allTextContents();

    for (const name of productNames) {
        console.log(name.trim());
    }

    await page.close();

})