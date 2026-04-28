import {expect} from '@playwright/test'

export class Home{

    constructor(page)
    {
        this.loginBtn=page.locator("//a[@href='/login']")
        this.expandBtn=page.locator("//button[@id='btn-user-menu']/span[contains(text(),'expand_more')]")
        this.adminPanelBtn=page.locator("//a[contains(text(),'Admin Panel')]")
        this.statusMessage=page.locator("//div[@role='status']")
        this.username=page.locator("//button[@id='btn-user-menu']//span[1]")
    }
    async clickOnLogin(){
        await this.loginBtn.click()
    }
    async goToAdminPanel(){
        await this.expandBtn.click()
        await this.adminPanelBtn.click()

    }
    async waitForStatusToDisappear()
    {
        await expect(this.statusMessage).toBeHidden();
    }
    async verifyAdminPanel(){
        console.log(await this.username.textContent())
        await expect(this.username).toContainText("Admin")
    }

}