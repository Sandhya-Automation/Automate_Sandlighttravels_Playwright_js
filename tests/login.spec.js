
import { test, expect } from '@playwright/test';
import {Home} from "../pages/Home.js"
import {Login} from "../pages/Login.js"
import fs from 'fs'
import {login, verifyFirstName} from "../helpers/authFlow.js"
import {readJsonData} from "../utils/jsonHandling.js"

//global variables
const credsFile = "testData/creds.json"
const data=readJsonData(credsFile)

test.describe('Login test', () =>{
  

  test('login to slt', async({page})=>{

    await page.goto("/")
    let firstname=await login(page, data, "admin")
    console.log("Firstname of the user:", firstname)

  })
  test("verify the user firstname displayed", async({page})=>{

    await page.goto("/")
    let firstname=await login(page, data, "user")
    await page.waitForTimeout(5000)
    await verifyFirstName(page, firstname)
    
  })
  

})



