
import {expect} from '@playwright/test'

export class AdminDashboard{

    constructor(page)
    {
        this.featureBtn=page.locator("//span[contains(text(),'Featured Deals')]")
        this.userManagementBtn=page.locator("//span[contains(text(),'User Management')]")
        this.userLocator=(username)=>page.locator(`//tbody[@class='divide-y divide-slate-100']/tr/td[1]//p[@class='text-sm font-bold' and contains(text(),'${username}')]`)
    }
    async clickOnFeaturedDeals()
    {
        await this.featureBtn.click()

    }
    async clickOnUserManagement()
    {
        
        await this.userManagementBtn.click()
    }
    async verifyNewUser(username){
        console.log("verifying the presence of user: " + username)
        const userLocator=this.userLocator(username)
        await expect(userLocator).toBeVisible()
    }
    
}