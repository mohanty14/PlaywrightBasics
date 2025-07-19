
import { test, expect,  Page } from '@playwright/test';


test("error message capture",async({page})=>{

   await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
   const username=page.locator('#username')
   const password=page.locator('#password')
const signinbutton = page.locator('input[type="submit"]');
 await signinbutton.click();
 console.log(await page.locator("[style*='block']").textContent())
}
)
test.only("dropdown check",async({page})=>{
 await page.goto("https://rahulshettyacademy.com/loginpagePractise/")
 const drpdown=page.locator('select.form-control')
 await drpdown.selectOption("Teacher")

 await page.locator('input#usertype').last().click();
 await page .locator('#okayBtn').click();
 expect(await page.locator('input#usertype').last()).toBeChecked();
 await page.pause();
})
