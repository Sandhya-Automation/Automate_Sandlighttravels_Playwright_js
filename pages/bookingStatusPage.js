import {test, expect} from "@playwright/test"

export class bookingStatusPage{

    constructor(page)
    {
        this.page=page
        this.statusTitle=page.locator("//h1[contains(text(),'Booking Status')]")
        this.bookingRefNumber=page.locator("//p[text()='Booking Reference']/following-sibling::p")
        this.cancelBookingBtn=page.locator("#btn-cancel-booking")
        this.myBookingsBtn=page.locator("//a[contains(text(),'My Bookings')]")
        this.confirmationSendMsg=page.locator("//div[@class='flex items-center justify-center gap-2 mt-3']/span[2]")

    }
    async getBookingStatusID(){
        console.log("===========","***********")

        return await this.bookingRefNumber.textContent();

    }
    async verifyBookingStatusPage()
    {
        console.log("================we are in status page")
       // const statusMsg=await this.statusTitle.textContent()
       // await expect(statusMsg).toBe("Booking Status")

    }
    async clickToCancelBooking()
    {
        await this.cancelBookingBtn.click()

    }
    async clickToGoToBookings()
    {
        await this.myBookingsBtn.click()

    }
    async verifyConfirmationMsg(){
        const corfirmMsg=await this.confirmationSendMsg.textContent()
        await expect(await this.verifyConfirmationMsg.textContent()).toContainText("confirmation email has been sent ")
    }
}