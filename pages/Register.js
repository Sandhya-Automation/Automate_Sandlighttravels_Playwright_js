import {expect} from '@playwright/test'

export class Register{

    constructor(page)
    {
        this.page = page
        this.nameField = page.locator("//div[@class='grid grid-cols-2 gap-4']//div[1]//input[1]")
        this.emailField = page.getByPlaceholder("you@example.com")
        this.passwordField = page.getByPlaceholder("Min. 8 characters, letters & numbers")
        this.confirmPasswordField = page.locator("//input[@placeholder='Repeat password']")
        this.registerBtn = page.locator("//button[contains(text(),'Create Account')]")
        //this.errorMessageContainer = page.locator("//div[@role='alert']")
    }

    async fillRegistrationForm(name, email, password, confirmPassword){
        await this.nameField.fill(name)
        await this.emailField.fill(email)
        await this.passwordField.fill(password)
        await this.confirmPasswordField.fill(confirmPassword)
    }

    async clickRegisterButton(){
        await this.registerBtn.click()
    }

    async getErrorMessage(){
        return await this.errorMessageContainer.textContent()
    }

}
