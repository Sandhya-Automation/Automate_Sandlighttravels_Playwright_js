
import { test, expect } from '@playwright/test';
import {Home} from "../pages/Home.js"
import {Login} from "../pages/Login.js"

test.describe('Login test', () =>{
  
  test('login to slt', async({page})=>{

    await page.goto("https://test.sandlighttravels.co.uk/")
    const homeObj=new Home(page);
    await homeObj.clickOnLogin()
    const loginObj=new Login(page)
    await loginObj.loginToSLT()
    await page.waitForTimeout(5000)

  })
  

})



