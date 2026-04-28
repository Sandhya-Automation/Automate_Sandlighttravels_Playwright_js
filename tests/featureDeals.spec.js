import { test, expect } from '@playwright/test';
import {Home} from "../pages/Home.js"
import {Login} from "../pages/Login.js"
import {AdminDashboard} from "../pages/AdminDashboard.js"
import {FeatureDealsPage} from "../pages/FeatureDealsPage.js"


test.only('Featured Deals', async ({page}) => {
  
    await page.goto("https://test.sandlighttravels.co.uk/")
    const homeObj=new Home(page);
    await homeObj.clickOnLogin()
    const loginObj=new Login(page)
    await loginObj.loginToSLT()
    await page.waitForTimeout(5000);
    await homeObj.waitForStatusToDisappear()
    await homeObj.verifyAdminPanel()
    homeObj.goToAdminPanel()
    const dashboard=new AdminDashboard(page)
    dashboard.clickOnFeaturedDeals();
    await page.waitForTimeout(5000);
    const featurePageObj=new FeatureDealsPage(page)
    //await page.waitForTimeout(3000)
    const hotelName=await featurePageObj.addFeatureDeals()
    await console.log("hotelName:",hotelName)
    await page.waitForTimeout(5000)
    featurePageObj.verifyFeatureDealAdded(hotelName)
   //await page.waitForTimeout(5000)
});
//  test("add feature deals", async({page})=> {

   

//   await page.goto('https://test.sandlighttravels.co.uk/');
//   await page.getByRole('link', { name: 'Login' }).click();
//   await page.getByRole('textbox', { name: 'Email' }).click();
//   await page.getByRole('textbox', { name: 'Email' }).fill('admin@sandlighttravels.co.uk');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('test@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('button', { name: 'A Admin expand_more' }).click();
//   await page.getByRole('link', { name: 'admin_panel_settings Admin' }).click();
//   await page.getByRole('link', { name: 'local_offer Featured Deals' }).click();
//   await page.getByRole('button', { name: 'add Add Deal' }).click();
//   await page.getByRole('textbox', { name: 'Hotel Name *' }).click();
//   await page.getByRole('textbox', { name: 'Hotel Name *' }).fill('Maldives resort');
//   await page.getByRole('textbox', { name: 'Location' }).click();
//   await page.getByRole('textbox', { name: 'Location' }).fill('Maldives');
//   await page.getByRole('textbox', { name: 'Description' }).click();
//   await page.getByRole('textbox', { name: 'Description' }).fill('Very nice location next to the sea');
//   await page.getByRole('textbox', { name: 'Eye-Catcher Badge' }).click();
//   await page.getByRole('textbox', { name: 'Eye-Catcher Badge' }).fill('Limited availability');
//   await page.getByRole('spinbutton', { name: 'Nights' }).click();
//   await page.getByRole('spinbutton', { name: 'Nights' }).fill('4');
//   await page.getByRole('textbox', { name: 'Start Date' }).fill('2026-12-26');
//   await page.getByLabel('Board Type').selectOption('Half Board');
//   await page.getByRole('textbox', { name: 'From Airport' }).click();
//   await page.getByRole('textbox', { name: 'From Airport' }).fill('Luton');
//   await page.getByRole('spinbutton', { name: 'Rating (0-5)' }).click();
//   await page.getByRole('spinbutton', { name: 'Rating (0-5)' }).fill('4');
//   await page.getByRole('spinbutton', { name: 'Price (£)' }).click();
//   await page.getByRole('spinbutton', { name: 'Price (£)' }).fill('906');
//   await page.getByRole('spinbutton', { name: 'Sort Order' }).click();
//   await page.getByRole('spinbutton', { name: 'Sort Order' }).click();
//   await page.getByRole('spinbutton', { name: 'Sort Order' }).click();
//   await page.getByRole('spinbutton', { name: 'Sort Order' }).click();
//   await page.getByRole('spinbutton', { name: 'Sort Order' }).fill('4');
//   await page.getByRole('button', { name: 'Save' }).click();

// });
