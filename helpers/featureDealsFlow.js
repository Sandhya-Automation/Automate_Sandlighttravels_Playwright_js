import { test, expect } from "@playwright/test";
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { AdminDashboard } from "../pages/AdminDashboard.js"
import {FeatureDealsPage} from "../pages/FeatureDealsPage.js"
import { loginAsAdmin } from "../helpers/authFlow.js"

export async function navigateToFeatureDeals(page) {

    await loginAsAdmin(page)
    await page.waitForTimeout(5000);
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