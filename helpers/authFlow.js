import { test, expect } from "@playwright/test"
import fs from 'fs'
import {Home} from "../pages/Home.js"
import {Login} from "../pages/Login.js"
import {Register} from "../pages/Register.js"
import {generatorRandomUser} from "../utils/dataGenerator.js"



//login method
export async function login(page, data, role) {
    const homeObj = new Home(page);
    await homeObj.clickOnLogin()
    const loginObj = new Login(page)
    await loginObj.loginToSLT(data[role].username, data[role].password)
    return data[role].firstname;
}
//verify firstname after login method
export async function verifyFirstName(page, firstname){
    const homeObj = new Home(page);
    console.log("first name to expect is:", firstname)
    await homeObj.verifyUserFirstName(firstname)
}
//register new user method

export async function registerUser(page) {
    const registerObj = new Register(page)
    const user= generatorRandomUser();
    await registerObj.fillRegistrationForm(user.firstname, user.lastname, user.email, "0798665433", user.password, user.confirmpassword )
    await page.waitForTimeout(3000)
    await registerObj.clickRegisterButton();
    await registerObj.verifyYourEmail()
    return user.firstname;
    
}
 export async function goToAdminPanel(page) {
    const homeObj = new Home(page);
    await homeObj.goToAdminPanel()
 }





export async function logout(){

}
