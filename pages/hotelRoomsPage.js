import { test, expect } from "@playwright/test"
import { getHotelDetails } from "../utils/excelHandling"
import { parse } from "node:path"

export class hotelRoomsPage {
    constructor(page) {
        this.page = page
        this.hotelnameTxt = page.locator("//h2[@class='text-4xl font-black tracking-tight mb-2 dark:text-white']")
        //this.hotelName=page.locator("//div[@class='lg:col-span-8 space-y-8']/section[2]//h2")
        this.guestsTxt = page.locator("//div[contains(text(),'Guests')]/following-sibling::div")
        this.datesTxt = page.locator("//div[@class='flex justify-between text-sm']/span[2]")
        this.firstRoomDiv=page.locator("//div[@class='space-y-6']/div[2]")
        this.firstRoomName=page.locator("//div[@class='space-y-6']/div[2]//h4")
        this.firstRoomPrice=page.locator("//div[@class='space-y-6']/div[2]//div[@class='flex items-center justify-between gap-4']//div[2]")
        this.firstSelectRoomBtn=page.locator("//div[@class='space-y-6']/div[2]//div[@class='flex items-center justify-between gap-4']/button")
       // this.cancellationPolicy=page.locator("//div[@class='space-y-6']/div[2]//span[contains(text(),'Free cancellation')]")
        this.cancellationPolicy=page.locator("//div[@class='space-y-6']/div[4]//div[@class='flex flex-wrap gap-2 mb-4']//span[contains(text(),'Deposit required')]/preceding-sibling::span[1]")
        this.freeCancellationBtn=page.getByRole("button",{name:'event_available Free cancellation' })
        //this.nonrefundable=page.locator("//div[@class='space-y-6']/div[4]//div[@class='flex flex-wrap gap-2 mb-4']/span[1]")
        //div[@class='space-y-6']/div[4]//div[@class='flex flex-wrap gap-2 mb-4']//span[contains(text(),'Deposit required')]/preceding-sibling::span[1]
    }
    
    async verifyHotelName(expectedName) {
        await this.hotelnameTxt.waitFor({ timeout: 30000 })
        console.log("hotel name here",await this.hotelnameTxt.textContent())
        console.log("hotel name ferom previous page:",expectedName)
        await expect(await this.hotelnameTxt.textContent()).toBe(expectedName)
    }
    
    async getRoomDetails(roomArray){
        //const roomArray=[]  ;
        const firstRoomName= await this.firstRoomName.textContent()
        roomArray.push(firstRoomName) // 0
        const firstRoomPrice=await this.firstRoomPrice.textContent()
        roomArray.push(firstRoomPrice) // 1
       
        const cancellationPolicy=await this.cancellationPolicy.textContent()
        roomArray.push(cancellationPolicy) // 2
        console.log("First room name:",firstRoomName,"and price:",firstRoomPrice)
        console.log("First room cancellation policy:",cancellationPolicy)
        console.log("=======================================")
        return roomArray;
    }
    async clickOnSelectRoom(){
        await this.firstSelectRoomBtn.click()
    }
    async clickOnFreeCancellation(){
        if(await this.freeCancellationBtn.isVisible())
        {
            console.log("we are in free cancelaation method")
        await this.freeCancellationBtn.click()
        }
    }
}