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
  1   | import {expect} from '@playwright/test'
  2   | import {getHotelDetails} from "../utils/excelHandling"
  3   | import { start } from 'node:repl'
  4   | 
  5   | export class Home{
  6   | 
  7   |     constructor(page)
  8   |     {
  9   |         this.page=page
  10  |         this.loginBtn=page.locator("//a[@href='/login']")
  11  |         this.expandBtn=page.locator("//button[@id='btn-user-menu']/span[contains(text(),'expand_more')]")
  12  |         this.adminPanelBtn=page.locator("//a[contains(text(),'Admin Panel')]")
  13  |         this.statusMessage=page.locator("//div[@role='status']")
  14  |         this.userNameBtn=page.locator("#btn-user-menu")
  15  |         this.username=page.locator("//button[@id='btn-user-menu']//span[1]")
  16  |         this.destination=page.locator("#destination")
  17  |         this.selectDestination=page.locator("//input[@id='destination']/following-sibling::div//p[1]")
  18  |         this.checkin=page.locator("//input[@id='checkin']")
  19  |         this.checkout=page.locator("//input[@id='checkout']")
  20  |         this.guests=page.locator("#btn-guests-toggle")
  21  |         this.rooms_count=page.locator("#rooms-count")
  22  |         this.adults_count=page.locator("#room-0-adults-count")
  23  |         this.children_count=page.locator("#room-0-children-count")
  24  |         this.adult_plus_btn=page.locator("#btn-room-0-adults-plus")
  25  |         this.adult_minus_btn=page.locator("#btn-room-0-adults-minus")
  26  |         this.child_plus_btn=page.locator("#btn-room-0-children-plus")
  27  |         this.applyBtn=page.locator("#btn-guests-apply")
  28  |         this.citizen_select=page.locator("#select-citizenship")
  29  |         this.searchBtn=page.locator("#btn-search")
  30  | 
  31  | 
  32  | 
  33  |     }
  34  |     async clickOnLogin(){
  35  |         await this.loginBtn.click()
  36  |     }
  37  |     async goToAdminPanel(){
  38  |         await this.expandBtn.click()
  39  |         await this.adminPanelBtn.click()
  40  | 
  41  |     }
  42  |     async verifyUserBtn(){
  43  |         await expect(this.userNameBtn).toBeVisible()
  44  |     }
  45  |     async waitForStatusToDisappear()
  46  |     {
  47  |         await expect(this.statusMessage).toBeHidden();
  48  |     }
  49  |     async verifyAdminPanel(){
> 50  |         console.log(await this.username.textContent())
      |                                         ^ Error: locator.textContent: Target page, context or browser has been closed
  51  |         await expect(this.username).toContainText("Admin")
  52  |     }
  53  |     async enterHotelDetails(hotelData){
  54  | 
  55  |         //this.getExcelData(hotelData)
  56  |         // await this.destination.fill("paris")
  57  |         // await this.page.waitForTimeout(4000)
  58  |         // await this.selectDestination.first().click();
  59  |         // await this.checkin.click()
  60  |         
  61  |         //get the search details from excelfile
  62  |         //enter destination
  63  |         console.log("destination:", hotelData.Destination)
  64  |         await this.destination.fill(hotelData.Destination)
  65  |         await this.page.waitForTimeout(4000)
  66  |         await this.selectDestination.first().click();
  67  |         //enter check in date
  68  |         console.log("checkin:", hotelData.Checkin)
  69  |         await this.checkin.click()
  70  |         await this.checkin.fill(hotelData.Checkin)
  71  | 
  72  |         const dateArray=hotelData.Checkin.split('/');
  73  |         const day=dateArray[0]
  74  |         const month=dateArray[1]
  75  |         const year=dateArray[2]
  76  |         console.log("day:", day)
  77  |         console.log("month:", month)
  78  |         console.log("year:", year)
  79  | 
  80  |         //thraverse through shadow root to select the date from calendar
  81  |         await this.checkin.scrollIntoViewIfNeeded()
  82  |         const startdate=year+'/'+month+'/'+day;
  83  |         await this.checkin.fill(startdate);
  84  |         console.log(startdate);
  85  |         //set checkout with number of nights from start date
  86  |         const endday=day+hotelData.numberofnights;
  87  |         const endDate=year+'/'+month+'/'+endday;
  88  |         console.log("end date:",endDate)
  89  |         console.log("Number of nights:", hotelData.numberofnights)
  90  |         console.log("Adults:", hotelData.Adults)
  91  |         //get Children
  92  |         console.log("Children:", hotelData.Children)
  93  |         const childData=hotelData.Children.split('-')
  94  |         //number of childeren
  95  |         const children=childData[0];
  96  |         //children ages
  97  |         const childAges=childData[1].split(',')
  98  |         console.log("Children:", children)
  99  |         for(let i=0;i<childAges.length;i++)
  100 |         {
  101 |             console.log("child",childAges[i])
  102 |         }
  103 |         // for(let i of childAges){
  104 |         //     console.log("child",i)
  105 |         // }
  106 |         console.log("Citizenship:", hotelData.Citizenship)
  107 | 
  108 | 
  109 |     }
  110 |     async getExcelData(hotelData){
  111 |         console.log("destination:", hotelData.Destination)
  112 |         console.log("checkin:", hotelData.Checkin)
  113 |         const dateArray=hotelData.Checkin.split('/');
  114 |         const day=dateArray[0]
  115 |         const month=dateArray[1]
  116 |         const year=dateArray[2]
  117 |         console.log("day:", day)
  118 |         console.log("month:", month)
  119 |         console.log("year:", year)
  120 |         console.log("Number of nights:", hotelData.numberofnights)
  121 |         console.log("Adults:", hotelData.Adults)
  122 |         //get Children
  123 |         console.log("Children:", hotelData.Children)
  124 |         const childData=hotelData.Children.split('-')
  125 |         //number of childeren
  126 |         const children=childData[0];
  127 |         //children ages
  128 |         const childAges=childData[1].split(',')
  129 |         console.log("Children:", children)
  130 |         for(let i=0;i<childAges.length;i++)
  131 |         {
  132 |             console.log("child",childAges[i])
  133 |         }
  134 |         // for(let i of childAges){
  135 |         //     console.log("child",i)
  136 |         // }
  137 |         console.log("Citizenship:", hotelData.Citizenship)
  138 | 
  139 | 
  140 |     }
  141 | 
  142 | }
```