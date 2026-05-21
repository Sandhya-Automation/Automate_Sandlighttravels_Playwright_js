import {expect} from '@playwright/test'
import {getHotelDetails} from "../utils/excelHandling"
import { start } from 'node:repl'
import fs from 'fs'
export class Home{

    constructor(page)
    {
        this.page=page
        this.loginBtn=page.locator("//a[@href='/login']")
        this.expandBtn=page.locator("//button[@id='btn-user-menu']/span[contains(text(),'expand_more')]")
        this.adminPanelBtn=page.locator("//a[contains(text(),'Admin Panel')]")
        this.statusMessage=page.locator("//div[@role='status']")
        this.userNameBtn=page.locator("#btn-user-menu")
        this.firstname=page.locator("//button[@id='btn-user-menu']//span[1]")
        this.destination=page.locator("#destination")
        this.selectDestination=page.locator("//input[@id='destination']/following-sibling::div//p[1]")
        this.checkin=page.locator("//input[@id='checkin']")
        this.checkout=page.locator("//input[@id='checkout']")
        this.guests=page.locator("#btn-guests-toggle")
        this.rooms_count=page.locator("#rooms-count")
        this.adults_count=page.locator("#room-0-adults-count")
        this.children_count=page.locator("#room-0-children-count")
        this.adult_plus_btn=page.locator("#btn-room-0-adults-plus")
        this.adult_minus_btn=page.locator("#btn-room-0-adults-minus")
        this.child_plus_btn=page.locator("#btn-room-0-children-plus")
        this.parentDivChildAges=(id)=>page.locator(`//div[@class='mt-2 space-y-1']/div/select[@id='select-room-0-child-${id}-age']`)
        this.applyBtn=page.getByRole('button',{name: 'Apply'})
        this.citizen_select=page.locator("#select-citizenship")
        this.searchBtn=page.locator("#btn-search")
        



    }
    async clickOnLogin(){
        await this.loginBtn.click()
    }
    
    async goToAdminPanel(){
        await this.expandBtn.click()
        await this.adminPanelBtn.click()

    }
    async verifyUserBtn(){
        await expect(this.userNameBtn).toBeVisible()
    }
    async waitForStatusToDisappear()
    {
        await expect(this.statusMessage).toBeHidden();
    }
    async verifyUsernamePanel(username){
        const credsFile="testData/creds.json"
        const data=JSON.parse(fs.readFileSync(credsFile, 'utf-8'))
        
        // Loop through all keys to find the matching username
        let expectedFirstname = null;
        for(let key in data) {
            if(data[key].username === username) {
                expectedFirstname = data[key].firstname;
                break;
            }
        }
        
        console.log("Expected firstname:", expectedFirstname)
        console.log("Actual firstname:", await this.firstname.textContent())
        
        if(expectedFirstname) {
            await expect(this.firstname).toContainText(expectedFirstname)
        } else {
            console.log("Username not found in creds.json")
        }
    }
    async enterHotelDetails(hotelData){

        //this.getExcelData(hotelData)
        // await this.destination.fill("paris")
        // await this.page.waitForTimeout(4000)
        // await this.selectDestination.first().click();
        // await this.checkin.click()
        
        //get the search details from excelfile
        //enter destination
        console.log("destination:", hotelData.Destination)
        await this.destination.fill(hotelData.Destination)
        await this.page.waitForTimeout(2000)
        await this.selectDestination.first().click();
        //enter check in date
        console.log("checkin:", hotelData.Checkin)
        await this.checkin.click()
        await this.checkin.fill(hotelData.Checkin)

        const dateArray=hotelData.Checkin.split('-');
        const day=dateArray[2]
        const month=dateArray[1]
        const year=dateArray[0]
        console.log("day:", day)
        console.log("month:", month)
        console.log("year:", year)
      //  await this.page.pause();
        //thraverse through shadow root to select the date from calendar
        await this.checkin.scrollIntoViewIfNeeded()
        const startdate=year+'/'+month+'/'+day;
       // await this.checkin.click()
      //  await this.checkin.fill(startdate);
        console.log(startdate);
        //set checkout with number of nights from start date
        const endday=parseInt(day)+parseInt(hotelData.numberofnights);
        const endDate=`${year}-${month}-${String(endday).padStart(2,'0')}`

        //const endDate=year+'-'+month+'-'+endday;
        console.log("end date:",endDate)
        console.log("Number of nights:", hotelData.numberofnights)
        await this.checkout.click()
        await this.checkout.fill(endDate)
        //enter number of adults
        console.log("Adults:", hotelData.Adults)

        await this.guests.click()
        const adultsDisplayed=await this.adults_count.textContent()
        if(adultsDisplayed==hotelData.Adults){
            console.log("adults correct and skip to children")
        }
        else if(adultsDisplayed<hotelData.Adults)
        {
            while(await this.adults_count.textContent()<hotelData.Adults)
            {
                await this.adult_plus_btn.click()
            }
        }
        else if(adultsDisplayed>hotelData.Adults)
        {
            while(await this.adults_count.textContent()>hotelData.Adults)
            {
                await this.adult_minus_btn.click()
            }
        }

        //get Children
        console.log("Children:", hotelData.Children)
        const childData=hotelData.Children.split('-')
        //number of children
        const children=childData[0];
        //children ages
        const childAges=childData[1].split(',')
        const childrenDisplayed=await this.children_count.textContent()
        console.log("children displayed:", childrenDisplayed)
        console.log("Children:", children)
        for(let i=0;i<childAges.length;i++)
        {
            
            console.log("child",childAges[i])
        }
         if(childrenDisplayed==children){
            console.log("children displayed correct")
        }
        else if(childrenDisplayed<children)
        {
            while(await this.children_count.textContent()<children)
            {
                await this.child_plus_btn.click()
            }
        }
         for(let i=0;i<childAges.length;i++)
        {
            await this.parentDivChildAges(i).selectOption(childAges[i])
        }
        console.log("Children displayed after selection:", await this.children_count.textContent())
         await this.page.waitForTimeout(2000)
        await this.applyBtn.click()
       // await this.page.waitForTimeout(3000)
        // for(let i of childAges){
        //     console.log("child",i)
        // }

        //select citizenship
       // await this.citizen_select.scrollIntoViewIfNeeded()
        console.log("Citizenship:", hotelData.Citizenship)
        const citizenOptions=await this.citizen_select.locator("option").all();
        let optionFound=null;
        for(let option of citizenOptions){
            const text=await option.textContent();
           // console.log(text)
            if(text.toLowerCase()===hotelData.Citizenship.toLowerCase())
            {
                optionFound=await option.getAttribute('value')
                console.log("found it",optionFound)
                break;
            }
        }
        
        if(optionFound){
            console.log("outside loop:",optionFound)
            await this.page.waitForTimeout(2000)
            await this.citizen_select.selectOption(optionFound, {timeout: 10000})
        }
        await this.searchBtn.click()

    }
    

}