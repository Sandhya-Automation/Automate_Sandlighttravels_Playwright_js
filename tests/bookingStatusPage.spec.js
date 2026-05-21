import {test, expect} from "@playwright/test"
import { Home } from "../pages/Home"
import { Login} from "../pages/Login"
import { readJsonData } from "../utils/jsonHandling"
import {getHotelDetails} from "../utils/excelHandling"
import {hotelListPage} from "../pages/hotelListPage.js"
import {hotelRoomsPage} from "../pages/hotelRoomsPage.js"
import { bookingConfirmationPage } from "../pages/bookingConfirmationPage.js"   


test.describe("Booking flow", ()=>{
test.only("Valid booking hotel with free cancellation", async({page})=>{
    await page.goto("https://test.sandlighttravels.co.uk/")
    const homeObj=new Home(page);
    // await homeObj.clickOnLogin()
    // const credsFile="testData/creds.json"
    // const credsData=readJsonData(credsFile)
    
    //create login object and perform login if neccessary
    const loginObj=new Login(page)
    //await loginObj.loginToSLT(credsData.user.username, credsData.user.password);
    //veryfy the user name is displayed on the home page after login

    await homeObj.verifyUserBtn()
    await page.waitForTimeout(3000)

    //get the hotel details from xlsx file and enter the details on the home page
    const file="testData/creds_xlsx.xlsx"
    const hotelData=getHotelDetails(file,"searchHotels")
    await homeObj.enterHotelDetails(hotelData);
    
    // go to the hotel search page and apply filters 
    const hotelListObj=new hotelListPage(page)
    await hotelListObj.waitForHotelList()
    await hotelListObj.filterResults(4,"Breakfast")
    await page.waitForTimeout(3000)

    //get the first hotel name and click on view details and 
    // verify the hotel name on the details page is same as the one on the listing page
    const actualHotelName=await hotelListObj.getHotelName(1)
    await page.waitForTimeout(3000)
    await hotelListObj.clickViewDetails(1)
    await page.waitForTimeout(3000)
    //await page.pause()
    let roomArray
    roomArray.push(actualHotelName)
    const hotelRoomsObj=new hotelRoomsPage(page)
    await hotelRoomsObj.verifyHotelName(actualHotelName)
    await hotelRoomsObj.verifySearchDetails(hotelData)
    await hotelRoomsObj.clickOnFreeCancellation()
    await page.waitForTimeout(3000)
    roomArray=await hotelRoomsObj.getRoomDetails(roomArray)
    console.log("Room details:", roomArray)
    await hotelRoomsObj.clickOnSelectRoom();
    await page.waitForTimeout(3000)
    const bookingConfirmationObj=new bookingConfirmationPage(page)
    //await bookingConfirmationObj.verifyRoomDetails(roomArray)
    await bookingConfirmationObj.enterGuestDetails();
    await bookingConfirmationObj.clickOnContinueToReviewBtn();
    const reviewBookingObj=new bookingReviewPage(page);
    reviewBookingObj.clickOnCompleteBooking();






})
test("Valid booking hotel without free cancellation", async({page})=>{
    await page.goto("https://test.sandlighttravels.co.uk/")
    const homeObj=new Home(page);
    // await homeObj.clickOnLogin()
    // const credsFile="testData/creds.json"
    // const credsData=readJsonData(credsFile)
    
    //create login object and perform login if neccessary
    const loginObj=new Login(page)
    //await loginObj.loginToSLT(credsData.user.username, credsData.user.password);
    //veryfy the user name is displayed on the home page after login

    await homeObj.verifyUserBtn()
    await page.waitForTimeout(3000)

    //get the hotel details from xlsx file and enter the details on the home page
    const file="testData/creds_xlsx.xlsx"
    const hotelData=getHotelDetails(file,"searchHotels")
    await homeObj.enterHotelDetails(hotelData);
    
    // go to the hotel search page and apply filters 
    const hotelListObj=new hotelListPage(page)
    await hotelListObj.waitForHotelList()
    await hotelListObj.filterResults(4,"Breakfast")
    await page.waitForTimeout(3000)

    //get the first hotel name and click on view details and 
    // verify the hotel name on the details page is same as the one on the listing page
    const actualHotelName=await hotelListObj.getHotelName(1)
    await page.waitForTimeout(3000)
    await hotelListObj.clickViewDetails(1)
    await page.waitForTimeout(3000)
    await page.pause()
    const hotelRoomsObj=new hotelRoomsPage(page)
    await hotelRoomsObj.verifyHotelName(actualHotelName)
    await hotelRoomsObj.verifySearchDetails(hotelData)
    await page.waitForTimeout(3000)
    const roomArray=await hotelRoomsObj.getRoomDetails()
    console.log("Room details:", roomArray)
    await hotelRoomsObj.clickOnSelectRoom();





})

})