import {test as setup} from '@playwright/test';
import {Home} from "../pages/Home.js"
import {Login} from "../pages/Login.js"
import fs from 'fs'

const authFile="testData/cookies.json"
setup('login authenticator', async({page})=>{

    await page.goto("https://test.sandlighttravels.co.uk/")
    const credsFile="testData/creds.json"
    const data=JSON.parse(fs.readFileSync(credsFile, 'utf-8'))   
    const homeObj=new Home(page);
    await homeObj.clickOnLogin()
    const loginObj=new Login(page)
    await loginObj.loginToSLT(data.user.username, data.user.password)
    await page.waitForTimeout(5000)
    console.log("first name is:",data.user.firstname)
    await homeObj.verifyUsernamePanel(data.user.username)
    await page.context().storageState({path:authFile})
  
  })