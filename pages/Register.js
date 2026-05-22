import {expect} from '@playwright/test'

export class Register{

    constructor(page)
    {
        this.page = page
        this.nameField = page.locator("//div[@class='grid grid-cols-2 gap-4']//div[1]//input[1]")
        this.lastNameField = page.locator("//div[@class='grid grid-cols-2 gap-4']//div[2]//input[1]")
        this.emailField = page.getByPlaceholder("you@example.com")
        this.phoneField = page.getByPlaceholder("+44 7700 000000")
        this.passwordField = page.getByPlaceholder("Min. 8 characters, letters & numbers")
        this.confirmPasswordField = page.locator("//input[@placeholder='Repeat password']")
        this.registerBtn = page.locator("//button[contains(text(),'Create Account')]")
        this.errorAlert = page.locator("[role='alert']")
       // this.passwordStrengthContainer = page.locator("//div[@class='grid grid-cols-2 gap-4']//following-sibling::div")
        this.passwordStrengthIndicators = page.locator("//div[@class='grid grid-cols-2 gap-4']//following-sibling::div//p")
        this.minCharacterCheck = page.locator("//p[contains(text(), 'At least 8 characters')]")
        this.containsLetterCheck = page.locator("//p[contains(text(), 'Contains a letter')]")
        this.containsNumberCheck = page.locator("//p[contains(text(), 'Contains a number')]")
        this.verifyCheckEmailTxt=page.locator("//*[contains(text(),'Check your email')]")
    }

    async fillRegistrationForm(firstName, lastName, email, phone, password, confirmPassword){
        await this.nameField.fill(firstName)
        await this.lastNameField.fill(lastName)
        await this.emailField.fill(email)
        await this.phoneField.fill(phone)
        await this.passwordField.fill(password)
        await this.confirmPasswordField.fill(confirmPassword)
    }
    async getUsername(){
        const username=await this.nameField.inputValue()
        return username
    }
    async verifyYourEmail(){
        await expect(this.verifyCheckEmailTxt).toBeVisible()
    }
    async getEmailValidationMessage(){
        return await this.emailField.evaluate((el) => el.validationMessage)
    }

    async getFirstNameValidationMessage(){
        return await this.nameField.evaluate((el) => el.validationMessage)
    }

    async getLastNameValidationMessage(){
        return await this.lastNameField.evaluate((el) => el.validationMessage)
    }

    async getPhoneValidationMessage(){
        return await this.phoneField.evaluate((el) => el.validationMessage)
    }

    async getPasswordValidationMessage(){
        return await this.passwordField.evaluate((el) => el.validationMessage)
    }

    async getConfirmPasswordValidationMessage(){
        return await this.confirmPasswordField.evaluate((el) => el.validationMessage)
    }

    async getErrorMessage(){
        try {
            // Get error message from alert box
            const errorMessage = await this.errorAlert.textContent()
            return errorMessage
        } catch (e) {
            return ""
        }
    }

    async isPasswordStrengthContainerVisible(){
        try {
            return await this.passwordStrengthContainer.isVisible()
        } catch (e) {
            return false
        }
    }

    async isMinCharacterRequirementMet(){
       try {
            const color = await this.minCharacterCheck.evaluate(el => getComputedStyle(el).color);
            console.log("Color is:", color);
            return await this.minCharacterCheck.locator("//preceding-sibling::generic[1]").textContent().then(text => text.includes("check_circle"))
        } catch (e) {
            return false
        }
    }

    async isContainsLetterRequirementMet(){
        try {
            return await this.containsLetterCheck.locator("//preceding-sibling::generic[1]").textContent().then(text => text.includes("check_circle"))
        } catch (e) {
            return false
        }
    }

    async isContainsNumberRequirementMet(){
        try {
            return await this.containsNumberCheck.locator("//preceding-sibling::generic[1]").textContent().then(text => text.includes("check_circle"))
        } catch (e) {
            return false
        }
    }

    async isMinCharacterCheckVisible(){
        try {
            return await this.minCharacterCheck.isVisible()
        } catch (e) {
            return false
        }
    }

    async isPasswordStrengthIndicatorVisible(){
        try {
            return await this.passwordStrengthIndicators.first().isVisible()
        } catch (e) {
            return false
        }
    }

    async clickRegisterButton(){
        await this.registerBtn.click()
    }

    

}

