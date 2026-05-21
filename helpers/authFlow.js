import { test, expect } from "@playwright/test"
import fs from 'fs'
import {Home} from "../pages/Home.js"
import {Login} from "../pages/Login.js"

const authFile="testData/cookies.json"
export async function loginAsAdmin(page) {

    const credsFile = "testData/creds.json"
    const data = JSON.parse(fs.readFileSync(credsFile, 'utf-8'))
    const homeObj = new Home(page);
    await homeObj.clickOnLogin()
    const loginObj = new Login(page)
    await loginObj.loginToSLT(data.admin.username, data.admin.password)
   // await page.waitForTimeout(5000)
    console.log("first name is:", data.admin.firstname)
    await homeObj.verifyUsernamePanel(data.admin.username)

}
export async function loginAsStaff(page) {

    const credsFile = "testData/creds.json"
    const data = JSON.parse(fs.readFileSync(credsFile, 'utf-8'))
    const homeObj = new Home(page);
    await homeObj.clickOnLogin()
    const loginObj = new Login(page)
    await loginObj.loginToSLT(data.staff.username, data.staff.password)
    await page.waitForTimeout(5000)
    console.log("first name is:", data.staff.firstname)
    await homeObj.verifyUsernamePanel(data.staff.username)

}
export async function loginAsUser(page) {

    const credsFile = "testData/creds.json"
    const data = JSON.parse(fs.readFileSync(credsFile, 'utf-8'))
    const homeObj = new Home(page);
    await homeObj.clickOnLogin()
    const loginObj = new Login(page)
    await loginObj.loginToSLT(data.user.username, data.user.password)
    await page.waitForTimeout(5000)
    console.log("first name is:", data.user.firstname)
    await homeObj.verifyUsernamePanel(data.user.username)

}
export async function logout(){

}
