import { test, expect } from '@playwright/test';
import {Home} from "../pages/home.js"
import {Login} from "../pages/login.js"

test.describe('Home test', () =>{

  
  test('verify homepage elements', async({page})=>{

    await page.goto("https://test.sandlighttravels.co.uk/")
    const homeObj=new Home(page);
    

    await page.waitForTimeout(5000)

  })

  test('validate the home elements', async()=>{


  })


})