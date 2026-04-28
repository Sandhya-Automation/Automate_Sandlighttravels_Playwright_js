
import {expect} from '@playwright/test'

export class AdminDashboard{

    constructor(page)
    {
        this.featureBtn=page.locator("//span[contains(text(),'Featured Deals')]")
    }
    async clickOnFeaturedDeals()
    {
        await this.featureBtn.click()

    }
    
}