import { test, expect } from "@playwright/test"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { readJsonData } from "../utils/jsonHandling"
import { getHotelDetails } from "../utils/excelHandling"
import { navigateToHotelResults } from "../helpers/searchFlow.js"
import { getBookingReferenceNumber, navigateToBookingConfirmation, navigateToBookingReview, navigateToBookingStatus, navigateToRoomSelection } from "../helpers/bookingFlow.js"
import {login} from "../helpers/authFlow.js"

//global variables
const credsFile="testData/creds.json"
const data=readJsonData(credsFile)

//{tag:'@smoke'} or tag:['@smoke','@regression','@bookingFlow']
test.describe("Booking flow", () => {
  test("Logged-in Valid booking hotel with free cancellation", { tag: ['@smoke', '@regression'] }, async ({ page }) => {

    await page.goto('/')
    let fname=await login(page, data, "user")
    //get the hotel data from xlsx file and enter the details
    const file = "testData/creds_xlsx.xlsx"
    const hotelData = getHotelDetails(file, "searchHotels")
    await navigateToHotelResults(page, hotelData)
    let roomArray = [];

    // go to the hotel search page and apply filters 
    let actualHotelName = await navigateToRoomSelection(page);
    roomArray.push(actualHotelName)

    //verify the hotel name and select the room
    roomArray = await navigateToBookingConfirmation(page, roomArray)
    console.log("roomarray after confirmation of booking is:", roomArray)


    // verify the prefilled guest data and continue to review
    await navigateToBookingReview(page);
    
    //verify the room details and number of guest and conitnue to book
    await navigateToBookingStatus(page, hotelData, roomArray)
    

    //get the booking reference number once completed the booking
    const bookingRef= await getBookingReferenceNumber(page)
    console.log("The booking reference Number:",bookingRef)
  })



  
  test("Valid booking hotel without free cancellation", async ({ page }) => {
    await page.goto('/')
    //login as a user
    let fname=await login(page, data, "user")
    //get the hotel data from xlsx file and enter the details
    const file = "testData/creds_xlsx.xlsx"
    const hotelData = getHotelDetails(file, "searchHotels")
    await navigateToHotelResults(page, hotelData)
    let roomArray = [];

    // go to the hotel search page and apply filters 
    let actualHotelName = await navigateToRoomSelection(page);
    roomArray.push(actualHotelName)

    //verify the hotel name and select the room 
    //send 'none' as third arguement to not to click on free cancellation button
    roomArray = await navigateToBookingConfirmation(page, roomArray, 'none')
    console.log("roomarray after confirmation of booking is:", roomArray)


    // verify the prefilled guest data and continue to review
    await navigateToBookingReview(page);
    
    //verify the room details and number of guest and conitnue to book
    await navigateToBookingStatus(page, hotelData, roomArray)
    

    //get the booking reference number once completed the booking
    const bookingRef= await getBookingReferenceNumber(page)
    console.log("The booking reference Number:",bookingRef)

    
  })

})