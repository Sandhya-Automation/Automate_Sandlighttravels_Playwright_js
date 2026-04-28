import { expect } from '@playwright/test'

export class FeatureDealsPage {

    constructor(page) {
        this.page = page
        //this.addDealBtn = page.getByRole('button', { name: 'add Add Deal' })
        this.addDealBtn=page.locator("#btn-deal-add")
        this.hotelName=page.locator("#deal-hotel-name")
        this.location=page.locator("#deal-location")
        this.description=page.locator("#deal-description")
        this.saveBtn=page.locator("#btn-deal-save")

        // this.hotelName = page.getByRole('textbox', { name: 'Hotel Name *' })
        // this.location = page.getByRole('textbox', { name: 'Location' })
        // this.description = page.getByRole('textbox', { name: 'Description' })
        // this.eyeCatcher = page.getByRole('textbox', { name: 'Eye-Catcher Badge' })
        // this.numOfNights = page.getByRole('spinbutton', { name: 'Nights' })
        // this.startDate = page.getByRole('textbox', { name: 'Start Date' })
        // this.boardBasis = page.getByLabel('Board Type')
        // this.fromAirport = page.getByRole('textbox', { name: 'From Airport' })
        // this.rating = page.getByRole('spinbutton', { name: 'Rating (0-5)' })
        // this.price = page.locator("#deal-price")
        // this.sortOrder = page.getByRole('spinbutton', { name: 'Sort Order' })
        // this.saveBtn = page.getByRole('button', { name: 'Save' })
        this.dealHotelName= (hotelname)=>page.locator(`//div[@class='grid grid-cols-1 md:grid-cols-3 gap-6']/div//h3[contains(text(),'${hotelname}')]`).first()
        this.hotel_name=" "

    }
    async addFeatureDeals(){
        console.log("I am in add featire deal function")
        await this.addDealBtn.click();
        await this.hotelName.fill("Maldives Resort")
        this.hotel_name=await this.hotelName.inputValue()
        //console.log(this.hotel_name)
        await this.location.fill('Maldives');
        await this.description.fill('Very nice location next to the sea');
    //     await this.eyeCatcher.fill('Limited availability');
    //    // await this.numOfNights.clear();
    //     await this.numOfNights.fill('4');
    //     await this.startDate.fill('2026-12-26');
    //     await this.boardBasis.selectOption('Half Board');
    //     await this.fromAirport.fill('Luton');
    //     await this.rating.clear();
    //     await this.rating.fill('4');
    //     await this.price.clear();
    //     await this.price.fill('906');
    //     await this.sortOrder.clear();
    //     await this.sortOrder.fill('1');
        console.log("this is second one:",this.hotel_name)
        await this.saveBtn.click();
        return this.hotel_name
    }
    async verifyFeatureDealAdded(hotelName)
    {
        console.log("***************",hotelName)
        console.log("//////////////////////////////////////////////")
        await console.log("the hotel name from add is:",this.hotel_name)
        console.log("the hotel nameto verify:", await this.dealHotelName(hotelName).textContent())
        //await expect(this.dealHotelName(hotelName)).toContainText(this.hotel_name)
    }

}