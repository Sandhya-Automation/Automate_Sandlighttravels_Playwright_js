import { test, expect } from '@playwright/test';
import {Register} from "../pages/register.js"

test.only('register at slt', async({page}) =>{
    await page.goto("https://test.sandlighttravels.co.uk/register")
    await page.waitForTimeout(5000)
    const registerObj = new Register(page)
    await registerObj.fillRegistrationForm("John Doe", "email@gmail.com", "Pass@123", "Pass@123")
    await page.waitForTimeout(5000)

})
test.describe('Register negative test cases', () =>{
  
  test('Test 1: Invalid email format', async({page})=>{
    await page.goto("https://test.sandlighttravels.co.uk/register")
    await page.waitForTimeout(5000)
    
    const registerObj = new Register(page)
    await registerObj.fillRegistrationForm("John Doe", "invalidemail", "Pass@123", "Pass@123")
    await page.waitForTimeout(5000)
    await registerObj.clickRegisterButton()
    await page.waitForTimeout(5000)
    
    const errorMsg = await registerObj.getErrorMessage()
     console.log("test1-",errorMsg)
    expect(errorMsg).toContain("missing an '@'")
  })

  test('Test 2: Weak password too short', async({page})=>{
    await page.goto("https://test.sandlighttravels.co.uk/register")
    await page.waitForTimeout(5000)
    
    const registerObj = new Register(page)
    await registerObj.fillRegistrationForm("Jane Doe", "jane@example.com", "Pass@1", "Pass@1")
    await page.waitForTimeout(5000)
    await registerObj.clickRegisterButton()
    await page.waitForTimeout(5000)
    
    const errorMsg = await registerObj.getErrorMessage()
    console.log("test2-",errorMsg)
    expect(errorMsg).toContain("at least 8 characters")
  })

  test('Test 3: Missing email field', async({page})=>{
    await page.goto("https://test.sandlighttravels.co.uk/register")
    await page.waitForTimeout(5000)
    
    const registerObj = new Register(page)
    await registerObj.fillRegistrationForm("Bob Smith", "", "Pass@123", "Pass@123")
    await page.waitForTimeout(5000)
    await registerObj.clickRegisterButton()
    await page.waitForTimeout(5000)
    
    const errorMsg = await registerObj.getErrorMessage()
    console.log("test3-",errorMsg)
    expect(errorMsg).toContain("required")
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

  test('Test 6: Password missing uppercase', async({page})=>{
    await page.goto("https://test.sandlighttravels.co.uk/register")
    await page.waitForTimeout(5000)
    
    const registerObj = new Register(page)
    await registerObj.fillRegistrationForm("Charlie Brown", "charlie@example.com", "pass@123", "pass@123")
    await page.waitForTimeout(5000)
    await registerObj.clickRegisterButton()
    await page.waitForTimeout(5000)
    
    const errorMsg = await registerObj.getErrorMessage()
    console.log("test6-",errorMsg)
    expect(errorMsg).toContain("uppercase")
  })

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
