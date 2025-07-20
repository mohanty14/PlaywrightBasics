import { test, expect,  Page} from '@playwright/test'

test.only("login to the application",async({page})=>{
    
    const email='sunanda.pipi@gmail.com';
    const products=page.locator('.card-body')
 const productName="ADIDAS ORIGINAL"
    await page.goto("https://rahulshettyacademy.com/client");
    //
   //  await page.waitForLoadState('networkidle');
    await page.locator("input[type='email']").fill(email);
    await page.locator("input[type='password']").fill("Avengers@14");
    await page.locator("input[name='login']").click();
await page.locator(".card-body b").first().waitFor();
const totalProducts=await products.count();
console.log(totalProducts);

   const titles = await page.locator(".card-body b").allTextContents();
for (let i=0;i<totalProducts;++i){
  if (await products.nth(i).locator("b").textContent()===productName){
     console.log(productName)
    await products.nth(i).locator("text= Add To Cart").click();
    console.log("yes + productName + added to cart")
    break;
  }
}

})
