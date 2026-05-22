import { test, expect } from '@playwright/test';
import {Register} from "../pages/Register.js"
import {Login} from "../pages/Login.js"
import {readJsonData} from "../utils/jsonHandling.js"
import { AdminDashboard } from '../pages/AdminDashboard.js';
import { Home } from '../pages/Home.js';
import {login, verifyFirstName} from "../helpers/authFlow.js"
import {registerUser, goToAdminPanel} from "../helpers/authFlow.js"
import {verifyUserExists} from "../helpers/adminFlow.js"
import fs from 'fs'

//global variables
const credsFile = "testData/creds.json"
const data=readJsonData(credsFile)
let userFirstName

test.describe.only("Login positive tests", ()=>{
  test('User register at SLT', async({page}) =>{
    await page.goto("/register")
    await page.waitForTimeout(2000)
    userFirstName=await registerUser(page)

  })
test('Admin validates the user', async({page}) =>{
    //launch the sandlighttravels application and register a new user
    await page.goto("/register")
    userFirstName=await registerUser(page)
    await page.waitForTimeout(2000)

    //login as admin in another context
    const browser = page.context().browser()
    const context = await browser.newContext()
    const page1 = await context.newPage()
    await page1.goto("/")
    await page1.waitForTimeout(2000)

    //get credsfrom json file
    let fname= await login(page1, data, "admin")

    //go to admin panel
    await goToAdminPanel(page1)
    //verify the user
    await verifyUserExists(page1, userFirstName)
    
})
//test.use({storageState:[]})
test.skip('User register at SLT and Admin validates the user', async({page}) =>{
  //launch the sandlighttravels application and register a new user
    await page.goto("/register")
    await page.waitForTimeout(2000)
    //create an objett for register page and fill the registration form and submit
    const registerObj = new Register(page)
    await registerObj.fillRegistrationForm("test6", "test", "svprocollections6@gmail.com", "07986654321", "Pass@123", "Pass@123")
    const username=await registerObj.getUsername()
    console.log("Registered username:", username)
    await page.waitForTimeout(2000)
    await registerObj.clickRegisterButton();
    await page.waitForTimeout(2000)
    //veryfy the check your email message
    await registerObj.verifyYourEmail()

    //open a new context in the same browser and login as admin
    const browser = page.context().browser()
    const context = await browser.newContext()
    const page1 = await context.newPage()
    await page1.goto("/")
    await page1.waitForTimeout(2000)
    //admin login
    const homeObj=new Home(page1)
    console.log("we are on home page")
    //await page1.pause()
    await homeObj.clickOnLogin()  
    const loginObj=new Login(page1)
    const credsFile="testData/creds.json"
    const jsonData=readJsonData(credsFile)
    await loginObj.loginToSLT(jsonData.admin.username,jsonData.admin.password)
    await page1.waitForTimeout(2000)
    await homeObj.goToAdminPanel()
    const dashboard=new AdminDashboard(page1)
    await page1.waitForTimeout(2000);
    //navigate to user management page and verify the newly registered user
    await dashboard.clickOnUserManagement()
    await page1.waitForLoadState('networkidle')
    //await page1.waitForTimeout(5000)
    await dashboard.verifyNewUser("test6");
    await page1.waitForTimeout(2000)
    //close the new context
    await context.close()
})
})

test.describe('Register negative test cases', () =>{
  
  test('Test 1: Invalid email format', async({page})=>{
    await page.goto("https://test.sandlighttravels.co.uk/register")
    await page.waitForTimeout(5000)
    
    const registerObj = new Register(page)
    
    // Fill the form with invalid email format
    await registerObj.fillRegistrationForm("John Doe", "invalidemail", "Pass@123", "Pass@123")
    await page.waitForTimeout(2000)
    
    // Click the button to trigger validation
    await registerObj.clickRegisterButton()
    await page.waitForTimeout(2000)
    
    // Get the validation tooltip message using Register class method
    const emailValidationMessage = await registerObj.getEmailValidationMessage()
    console.log("Invalid email format validation:", emailValidationMessage)
    
    // Assert the validation message
    expect(emailValidationMessage).toBeTruthy()
    expect(emailValidationMessage.toLowerCase()).toContain("email")
  })

  test('Test 2: Weak password too short', async({page})=>{
    await page.goto("https://test.sandlighttravels.co.uk/register")
    await page.waitForTimeout(5000)
    
    const registerObj = new Register(page)
    
    // Fill the form with a weak/short password (only 6 characters instead of 8)
    await registerObj.fillRegistrationForm("Jane Doe", "jane@example.com", "Pass@1", "Pass@1")
    await page.waitForTimeout(2000)
    
    // Verify the password strength indicator shows the requirement is not met
    //const strengthIndicatorVisible = await registerObj.isPasswordStrengthIndicatorVisible()
    const minCharCheckVisible = await registerObj.isMinCharacterCheckVisible()
    //console.log("Password strength indicator visible:", strengthIndicatorVisible)
    //console.log("Min character check visible:", minCharCheckVisible)
    
    // Click the button to trigger validation
    await registerObj.clickRegisterButton()
    await page.waitForTimeout(3000)
    
    // Get the error message from server response
    const errorMsg = await registerObj.getErrorMessage()
    console.log("test2-", errorMsg)
    
    // Assert the server returns validation error for weak password
    expect(errorMsg).toBeTruthy()
    expect(errorMsg.toLowerCase()).toMatch(/at least|password|8 characters/)
  })

  test('Test 3: Missing email field', async({page})=>{
    await page.goto("https://test.sandlighttravels.co.uk/register")
    await page.waitForTimeout(5000)
    
    const registerObj = new Register(page)
    
    // Fill the form but leave email empty
    await registerObj.nameField.fill("Bob Smith")
    await registerObj.lastNameField.fill("")
    await registerObj.phoneField.fill("")
    await registerObj.passwordField.fill("Pass@123")
    await registerObj.confirmPasswordField.fill("Pass@123")
    await page.waitForTimeout(2000)
    
    // Click the button to trigger validation
    await registerObj.clickRegisterButton()
    await page.waitForTimeout(2000)
    
    // Get the email validation message
    const emailValidationMessage = await registerObj.getEmailValidationMessage()
    console.log("test3-", emailValidationMessage)
    
    // Assert the validation message
    expect(emailValidationMessage).toBeTruthy()
    expect(emailValidationMessage.toLowerCase()).toContain("fill in this field")
  })

  test('Test 4: Password mismatch', async({page})=>{
    await page.goto("https://test.sandlighttravels.co.uk/register")
    await page.waitForTimeout(5000)
    
    const registerObj = new Register(page)
    await registerObj.fillRegistrationForm("Alice Johnson", "alice@example.com", "Pass@123", "Pass@124")
    await page.waitForTimeout(5000)
    await registerObj.clickRegisterButton()
    await page.waitForTimeout(5000)
    
    const errorMsg = await registerObj.getErrorMessage()
    console.log("test4-",errorMsg)
    expect(errorMsg).toContain("does not match")
  })

  test('Test 5: Duplicate email', async({page})=>{
    await page.goto("https://test.sandlighttravels.co.uk/register")
    await page.waitForTimeout(5000)
    
    const registerObj = new Register(page)
    await registerObj.fillRegistrationForm("Test User", "test@sandlighttravels.co.uk", "Pass@123", "Pass@123")
    await page.waitForTimeout(5000)
    await registerObj.clickRegisterButton()
    await page.waitForTimeout(5000)
    
    const errorMsg = await registerObj.getErrorMessage()
    console.log("test5-",errorMsg)
    expect(errorMsg).toContain("The email has already been taken")
  })

  // test('Test 6: Password missing uppercase', async({page})=>{
  //   await page.goto("https://test.sandlighttravels.co.uk/register")
  //   await page.waitForTimeout(5000)
    
  //   const registerObj = new Register(page)
  //   await registerObj.fillRegistrationForm("Charlie Brown", "charlie@example.com", "pass@123", "pass@123")
  //   await page.waitForTimeout(5000)
  //   await registerObj.clickRegisterButton()
  //   await page.waitForTimeout(5000)
    
  //   const errorMsg = await registerObj.getErrorMessage()
  //   console.log("test6-",errorMsg)
  //   expect(errorMsg).toContain("uppercase")
  // })

  test('Test 7: Email too long', async({page})=>{
    await page.goto("https://test.sandlighttravels.co.uk/register")
    await page.waitForTimeout(5000)
    
    const longEmail = "a".repeat(100) + "@example.com"
    const registerObj = new Register(page)
    await registerObj.fillRegistrationForm("David Lee", longEmail, "Pass@123", "Pass@123")
    await page.waitForTimeout(5000)
    await registerObj.clickRegisterButton()
    await page.waitForTimeout(5000)
    
    const errorMsg = await registerObj.getErrorMessage()
    console.log("test7-",errorMsg)
    expect(errorMsg).toContain("too long")
  })

})

test.describe('Empty Field Validation Tooltips', () => {
  
  test('Test 8: Tooltip validation - Empty First Name field', async({page})=>{
    await page.goto("https://test.sandlighttravels.co.uk/register")
    await page.waitForTimeout(3000)
    
    const registerObj = new Register(page)
    
    // Click on Create Account button to trigger validation
    await registerObj.clickRegisterButton()
    await page.waitForTimeout(2000)
    
    // Check if the validation tooltip appears
    const validationMessage = await registerObj.getFirstNameValidationMessage()
    console.log("First Name validation:", validationMessage)
    expect(validationMessage).toBeTruthy()
    expect(validationMessage.toLowerCase()).toContain("fill in this field")
  })

  test('Test 9: Tooltip validation - Empty Last Name field', async({page})=>{
    await page.goto("https://test.sandlighttravels.co.uk/register")
    await page.waitForTimeout(3000)
    
    const registerObj = new Register(page)
    
    // Click on Create Account button to trigger validation
    await registerObj.clickRegisterButton()
    await page.waitForTimeout(2000)
    
    // Check if the validation tooltip appears
    const validationMessage = await registerObj.getLastNameValidationMessage()
    console.log("Last Name validation:", validationMessage)
    expect(validationMessage).toBeTruthy()
    expect(validationMessage.toLowerCase()).toContain("fill in this field")
  })

  test('Test 10: Tooltip validation - Empty Email field', async({page})=>{
    await page.goto("https://test.sandlighttravels.co.uk/register")
    await page.waitForTimeout(3000)
    
    const registerObj = new Register(page)
    
    // Click on Create Account button to trigger validation
    await registerObj.clickRegisterButton()
    await page.waitForTimeout(2000)
    
    // Check if the validation tooltip appears
    const validationMessage = await registerObj.getEmailValidationMessage()
    console.log("Email validation:", validationMessage)
    expect(validationMessage).toBeTruthy()
    expect(validationMessage.toLowerCase()).toContain("fill in this field")
  })

  test('Test 11: Tooltip validation - Empty Phone Number field', async({page})=>{
    await page.goto("https://test.sandlighttravels.co.uk/register")
    await page.waitForTimeout(3000)
    
    const registerObj = new Register(page)
    
    // Click on Create Account button to trigger validation
    await registerObj.clickRegisterButton()
    await page.waitForTimeout(2000)
    
    // Check if the validation tooltip appears
    const validationMessage = await registerObj.getPhoneValidationMessage()
    console.log("Phone Number validation:", validationMessage)
    expect(validationMessage).toBeTruthy()
    expect(validationMessage.toLowerCase()).toContain("fill in this field")
  })

  test('Test 12: Tooltip validation - Empty Password field', async({page})=>{
    await page.goto("https://test.sandlighttravels.co.uk/register")
    await page.waitForTimeout(3000)
    
    const registerObj = new Register(page)
    
    // Click on Create Account button to trigger validation
    await registerObj.clickRegisterButton()
    await page.waitForTimeout(2000)
    
    // Check if the validation tooltip appears
    const validationMessage = await registerObj.getPasswordValidationMessage()
    console.log("Password validation:", validationMessage)
    expect(validationMessage).toBeTruthy()
    expect(validationMessage.toLowerCase()).toContain("fill in this field")
  })

  test('Test 13: Tooltip validation - Empty Confirm Password field', async({page})=>{
    await page.goto("https://test.sandlighttravels.co.uk/register")
    await page.waitForTimeout(3000)
    
    const registerObj = new Register(page)
    
    // Click on Create Account button to trigger validation
    await registerObj.clickRegisterButton()
    await page.waitForTimeout(2000)
    
    // Check if the validation tooltip appears
    const validationMessage = await registerObj.getConfirmPasswordValidationMessage()
    console.log("Confirm Password validation:", validationMessage)
    expect(validationMessage).toBeTruthy()
    expect(validationMessage.toLowerCase()).toContain("fill in this field")
  })

  test('Test 14: All fields empty - Validation tooltips appear on first invalid field', async({page})=>{
    await page.goto("https://test.sandlighttravels.co.uk/register")
    await page.waitForTimeout(3000)
    
    const registerObj = new Register(page)
    
    // Attempt to submit without filling any fields
    await registerObj.clickRegisterButton()
    await page.waitForTimeout(2000)
    
    // Verify the first field that fails validation shows a tooltip
    const validationMessage = await registerObj.getFirstNameValidationMessage()
    console.log("All fields empty - First field validation:", validationMessage)
    expect(validationMessage).toBeTruthy()
    expect(validationMessage).toBe("Please fill in this field.")
  })

  test('Test 15: Partial fields filled - Validation tooltip for missing required field', async({page})=>{
    await page.goto("https://test.sandlighttravels.co.uk/register")
    await page.waitForTimeout(3000)
    
    const registerObj = new Register(page)
    
    // Fill only First and Last Name, leave others empty
    await registerObj.nameField.fill("John")
    await registerObj.lastNameField.fill("Doe")
    await page.waitForTimeout(2000)
    
    // Attempt to submit
    await registerObj.clickRegisterButton()
    await page.waitForTimeout(2000)
    
    // Verify validation message appears for Email field (next required field)
    const emailValidationMessage = await registerObj.getEmailValidationMessage()
    console.log("Partial fields - Email validation:", emailValidationMessage)
    expect(emailValidationMessage).toBeTruthy()
    expect(emailValidationMessage.toLowerCase()).toContain("fill in this field")
  })

  test('Test 16: Tooltip disappears when field is filled', async({page})=>{
    await page.goto("https://test.sandlighttravels.co.uk/register")
    await page.waitForTimeout(3000)
    
    const registerObj = new Register(page)
    
    // Trigger validation
    await registerObj.clickRegisterButton()
    await page.waitForTimeout(2000)
    
    // Verify tooltip exists
    let validationMessage = await registerObj.getFirstNameValidationMessage()
    console.log("Before filling - validation:", validationMessage)
    expect(validationMessage).toBeTruthy()
    
    // Fill the field
    await registerObj.nameField.fill("John")
    await page.waitForTimeout(1000)
    
    // Check if validation message is cleared
    validationMessage = await registerObj.getFirstNameValidationMessage()
    console.log("After filling - validation:", validationMessage)
    expect(validationMessage).toBe("")
  })
})
