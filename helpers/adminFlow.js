import {test, expect} from "@playwright/test"
import {AdminDashboard} from "../pages/AdminDashboard"

export async function verifyUserExists(page, firstname) {
    const dashboard=new AdminDashboard(page)
    await page.waitForTimeout(5000);
    //navigate to user management page and verify the newly registered user
    await dashboard.clickOnUserManagement()
    await page.waitForLoadState('networkidle')
   // await page.waitForTimeout(5000)
    await dashboard.verifyNewUser(firstname);
    await page.waitForTimeout(5000)
    
}