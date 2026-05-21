import { test, expect } from "@playwright/test"

export class bookingConfirmationPage {
    constructor(page) {
        this.page = page
        this.roomName = page.locator("//aside[@class='lg:col-span-4 space-y-6']/div[2]//span[@class='text-slate-600']")
        this.roomPrice = page.locator("//aside[@class='lg:col-span-4 space-y-6']/div[2]//span[2]")
        this.cancellationPolicy = page.locator("//aside[@class='lg:col-span-4 space-y-6']/div[3]/div/p[2]")
        this.firstName = page.locator("#booking-guest-0-first-name")
        this.lastName = page.locator("#booking-guest-0-last-name")
        this.email = page.locator("#booking-contact-email")
        this.phoneNumber = page.locator("#booking-contact-phone")
        this.continueReviewBtn = page.getByRole("button", { name: "Continue to Review arrow_forward" })

    }
    async verifyRoomDetails(roomArray) {
        const actualRoomName = await this.roomName.textContent()
        const actualRoomPrice = await this.roomPrice.textContent()
        const actualCancellationPolicy = await this.cancellationPolicy.textContent()
        console.log("Actual room name:", actualRoomName)
        console.log("Actual room price:", actualRoomPrice)
        console.log("Actual cancellation policy:", actualCancellationPolicy)
        await expect(actualRoomName.trim()).toBe(roomArray[1].trim())
        await expect(actualRoomPrice.trim()).toBe(roomArray[2].trim())
        await expect(actualCancellationPolicy.trim()).toBe(roomArray[3].trim())


    }
    async verifyPrefilledGuestDetails() {
        const firstname = await this.firstName.inputValue()
        if (firstname === '')
            await this.firstName.fill("ghhg")
        const lastname = await this.lastName.inputValue()
        if (lastname === '')
            await this.lastName.fill("ghhg")
        const email = await this.email.inputValue()
        if (email === '')
            await this.email.fill("ghhg")
        const phonenumber = await this.phoneNumber.inputValue()
        if (phonenumber === '')
            await this.phoneNumber.fill("+447987765432")


        //await expect(this.firstName).not.toHaveValue('')
    }
    async clickOnContinueToReviewBtn() {
        await this.continueReviewBtn.click()

    }








}