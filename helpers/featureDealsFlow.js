import { test, expect } from "@playwright/test";
import { Home } from "../pages/Home"
import { AdminDashboard } from "../pages/AdminDashboard.js"
import {FeatureDealsPage} from "../pages/FeatureDealsPage.js"


export async function navigateToFeatureDeals(page) {

    const homeObj=new Home(page)
    await homeObj.waitForStatusToDisappear()
    homeObj.goToAdminPanel()
    const dashboard = new AdminDashboard(page)
    dashboard.clickOnFeaturedDeals();
    //await page.pause()
    await page.waitForTimeout(5000);

}
export async function addFeatureDeal(page) {
    const featurePageObj = new FeatureDealsPage(page)
    const hotelName = await featurePageObj.addFeatureDeals()
    await console.log("hotelName:", hotelName)
    await page.waitForTimeout(5000)
    await verifyTheAddedFeatureDeal(featurePageObj, hotelName)

}
export async function verifyTheAddedFeatureDeal(featurePageObj, hotelName) {
    await featurePageObj.verifyFeatureDealAdded(hotelName)
    
}