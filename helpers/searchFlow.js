import {test, expect} from "@playwright/test";
import {Home} from "../pages/Home"


export async function navigateToHotelResults(page, hotelData){
    const homeObj=new Home(page);
    await homeObj.verifyUserBtn()
    await page.waitForTimeout(3000)
    await homeObj.enterHotelDetails(hotelData);
}