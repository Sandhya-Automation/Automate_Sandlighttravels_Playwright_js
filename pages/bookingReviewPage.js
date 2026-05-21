import {test, expect} from "@playwright/test"

export class bookingReviewPage{

    constructor(page){
        this.completeBookingBtn=page.locator("#btn-booking-confirm")
        this.hotelName=page.locator("//div[@class='p-6 space-y-6']/div/div/p")
        this.roomName=page.locator("//div[@class='p-6 space-y-6']/div//p[@class='text-sm font-bold text-slate-900 dark:text-white']")
        this.guestsTxt=page.locator("//div[@class='p-6 space-y-6']/div//p[@class='text-xs text-slate-500 mt-0.5']")
        this.roomPrice=page.locator("//div[@class='p-6 space-y-6']/div//p[@class='text-sm font-bold text-primary']")
        this.cancellationPolicy=page.locator("//h3[contains(text(),'Cancellation')]/following-sibling::div")

    }
    async clickOnCompleteBooking(){
        await this.completeBookingBtn.click();

    }
    async verifySearchDetails(hotelData) {
        await this.verifyGuests(hotelData)
       // await this.verifyDates(hotelData)

    }
    async verifyGuests(hotelData) {
        console.log("Adults:", hotelData.Adults)
        await this.guestsTxt.waitFor({ timeout: 30000 })
        console.log(await this.guestsTxt.textContent())
        const actualGuests = await this.guestsTxt.textContent()
        console.log("Guests displayed:", actualGuests)
        const adults = hotelData.Adults;

        const childData = hotelData.Children.split('-')
        //number of children
        const children = childData[0];

        const guestTxt = adults + ' adults, ' + children + ' children'
        console.log("expected should be", guestTxt)
        expect(guestTxt).toBe(actualGuests)
    }
    async verifyDates(hotelData) {
        await this.datesTxt.waitFor({ timeout: 30000 })
        console.log(await this.datesTxt.textContent())
        const actualDates = await this.datesTxt.textContent()
        const checkinDate = hotelData.Checkin
        // const checkoutDate=new Date(hotelData.Checkout)
        const dateArray = checkinDate.split('-')
        const day = Number(dateArray[2])
        const month = dateArray[1]
        const year = dateArray[0]
        const monthName = new Date(checkinDate).toLocaleString('default', { month: 'short' });
        const formattedCheckin = day + ' ' + monthName + ' ' + year
        console.log("Formatted checkin date:", formattedCheckin)
        console.log("Checkin date:", checkinDate)

        let num=hotelData.numberofnights;
        let endday=Number(parseInt(day)+parseInt(num))
       // endday=String(endday).padStart(2,'0');
        const checkoutDate=endday+' '+monthName+' '+year
        console.log("Checkout date:", checkoutDate)

        const expectedDates = formattedCheckin + ' - ' + checkoutDate
        console.log("Expected dates:", expectedDates)
        // Normalize both strings - replace em dash with hyphen for comparison
        const normalizedActual = actualDates.replace(/—/g, '-').trim();
        const normalizedExpected = expectedDates.replace(/—/g, '-').trim();
        expect(normalizedActual).toBe(normalizedExpected)
      
        
    }
     async verifyRoomDetails(roomArray){
        const actualHotelName=await this.hotelName.textContent()
        const actualRoomName=await this.roomName.textContent()
        const actualRoomPrice=await this.roomPrice.textContent()
        const actualCancellationPolicy=await this.cancellationPolicy.textContent()
        console.log("Actual Hotel name:", actualHotelName)
        console.log("Actual room name:", actualRoomName)
        console.log("Actual room price:", actualRoomPrice)
        console.log("Actual cancellation policy:", actualCancellationPolicy)
        await expect(actualHotelName.trim()).toBe(roomArray[0].trim())
        await expect(actualRoomName.trim()).toBe(roomArray[1].trim())
        await expect(await this.roomPrice.textContent()).toContain(roomArray[2].trim())
        let expectedCancellationPolicy=roomArray[3].toLowerCase();
        if(expectedCancellationPolicy.includes('Free cancellation'))
            await expect(actualCancellationPolicy.toLowerCase()).toContain('free cancellation')
        else if(expectedCancellationPolicy.includes('Non-refundable'))
            await expect(actualCancellationPolicy.toLowerCase()).toContain('Non-refundable')

        console.log("=======================================")

    
    }



}