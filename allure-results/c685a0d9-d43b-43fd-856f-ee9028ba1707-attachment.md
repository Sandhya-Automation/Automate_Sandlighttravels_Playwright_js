# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: session.js >> login authenticator
- Location: tests/session.js:7:1

# Error details

```
Error: locator.textContent: Target page, context or browser has been closed
Call log:
  - waiting for locator('//button[@id=\'btn-user-menu\']//span[1]')

```

# Test source

```ts
  1  | import {expect} from '@playwright/test'
  2  | import {getHotelDetails} from "../utils/excelHandling"
  3  | 
  4  | export class Home{
  5  | 
  6  |     constructor(page)
  7  |     {
  8  |         this.page=page
  9  |         this.loginBtn=page.locator("//a[@href='/login']")
  10 |         this.expandBtn=page.locator("//button[@id='btn-user-menu']/span[contains(text(),'expand_more')]")
  11 |         this.adminPanelBtn=page.locator("//a[contains(text(),'Admin Panel')]")
  12 |         this.statusMessage=page.locator("//div[@role='status']")
  13 |         this.userNameBtn=page.locator("#btn-user-menu")
  14 |         this.username=page.locator("//button[@id='btn-user-menu']//span[1]")
  15 |         this.destination=page.locator("#destination")
  16 |         this.selectDestination=page.locator("//input[@id='destination']/following-sibling::div//p[1]")
  17 |         this.checkin=page.locator("//input[@id='checkin']")
  18 |         this.checkout=page.locator("//input[@id='checkout']")
  19 |         this.guests=page.locator("#btn-guests-toggle")
  20 |         this.rooms_count=page.locator("#rooms-count")
  21 |         this.adults_count=page.locator("#room-0-adults-count")
  22 |         this.children_count=page.locator("#room-0-children-count")
  23 |         this.adult_plus_btn=page.locator("#btn-room-0-adults-plus")
  24 |         this.adult_minus_btn=page.locator("#btn-room-0-adults-minus")
  25 |         this.child_plus_btn=page.locator("#btn-room-0-children-plus")
  26 |         this.applyBtn=page.locator("#btn-guests-apply")
  27 |         this.citizen_select=page.locator("#select-citizenship")
  28 |         this.searchBtn=page.locator("#btn-search")
  29 | 
  30 | 
  31 | 
  32 |     }
  33 |     async clickOnLogin(){
  34 |         await this.loginBtn.click()
  35 |     }
  36 |     async goToAdminPanel(){
  37 |         await this.expandBtn.click()
  38 |         await this.adminPanelBtn.click()
  39 | 
  40 |     }
  41 |     async verifyUserBtn(){
  42 |         await expect(this.userNameBtn).toBeVisible()
  43 |     }
  44 |     async waitForStatusToDisappear()
  45 |     {
  46 |         await expect(this.statusMessage).toBeHidden();
  47 |     }
  48 |     async verifyAdminPanel(){
> 49 |         console.log(await this.username.textContent())
     |                                         ^ Error: locator.textContent: Target page, context or browser has been closed
  50 |         await expect(this.username).toContainText("Admin")
  51 |     }
  52 |     async enterHotelDetails(hotelData){
  53 | 
  54 |         this.getExcelData(hotelData)
  55 |         // await this.destination.fill("paris")
  56 |         // await this.page.waitForTimeout(4000)
  57 |         // await this.selectDestination.first().click();
  58 |         // await this.checkin.click()
  59 |         
  60 | 
  61 | 
  62 | 
  63 |     }
  64 |     async getExcelData(hotelData){
  65 |         console.log("destination:", hotelData.Destination)
  66 |         console.log("checkin:", hotelData.Checkin)
  67 |         console.log("Number of nights:", hotelData.numberofnights)
  68 |         console.log("Adults:", hotelData.Adults)
  69 |         //get Children
  70 |         const childData=hotelData.Children.split('-')
  71 |         //number of childeren
  72 |         const children=childData[1];
  73 |         //children ages
  74 |         const childAges=childData[2].split(',')
  75 |         console.log("Children:", children)
  76 |         for(let i of childAges){
  77 |             console.log("child",i,"age is:",childAges[i])
  78 |         }
  79 |         console.log("Citizenship:", hotelData.Citizenship)
  80 | 
  81 | 
  82 |     }
  83 | 
  84 | }
```