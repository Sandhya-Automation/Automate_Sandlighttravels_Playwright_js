import {test, expect} from "@playwright/test";
import {hotelListPage} from "../pages/hotelListPage"
import {hotelRoomsPage} from "../pages/hotelRoomsPage"
import {bookingConfirmationPage} from "../pages/bookingConfirmationPage"
import {bookingReviewPage} from "../pages/bookingReviewPage"
import {bookingStatusPage} from "../pages/bookingStatusPage.js"

export async function navigateToRoomSelection(page){
    console.log("we arein room selection helper method")
    const hotelListObj=new hotelListPage(page)
    await hotelListObj.waitForHotelList()
    await hotelListObj.filterResults(4,"Breakfast")
    await page.waitForTimeout(3000)

    //get the first hotel name and click on view details and 
    // verify the hotel name on the details page is same as the one on the listing page
    const actualHotelName=await hotelListObj.getHotelName(1)
    await hotelListObj.clickViewDetails(1)
    return actualHotelName;
}
export async function navigateToBookingConfirmation(page, roomArray, cancellationType='free'){
    console.log("we are in booking confirmation page", roomArray[0])
    const hotelRoomsObj=new hotelRoomsPage(page)
    await hotelRoomsObj.verifyHotelName(roomArray[0])
   // await hotelRoomsObj.verifySearchDetails(hotelData)
    
    // Click on cancellation type if specified
    if(cancellationType === 'free') {
        await hotelRoomsObj.clickOnFreeCancellation()
    }
    // Add more cancellation types as needed
    // else if(cancellationType === 'paid') {
    //     await hotelRoomsObj.clickOnPaidCancellation()
    // }
    
    await page.waitForTimeout(3000)
    roomArray=await hotelRoomsObj.getRoomDetails(roomArray)
    console.log("Room details:", roomArray)
    await hotelRoomsObj.clickOnSelectRoom();
    return roomArray;
}
export async function clickFreeCancellation() {
    const hotelRoomsObj=new hotelRoomsPage(page)
    await hotelRoomsObj.clickOnFreeCancellation();
}
export async function navigateToBookingReview(page){
    const bookingConfirmationObj=new bookingConfirmationPage(page)
    //await bookingConfirmationObj.verifyRoomDetails(roomArray)
    await bookingConfirmationObj.verifyPrefilledGuestDetails()
    await bookingConfirmationObj.clickOnContinueToReviewBtn();
   
    
}
export async function navigateToBookingStatus(page, hotelData, roomArray){
     const reviewBookingObj=new bookingReviewPage(page);
      //await page.waitForTimeout(3000)
     await reviewBookingObj.verifySearchDetails(hotelData)
     await reviewBookingObj.verifyRoomDetails(roomArray)
     //await page.pause()
     await reviewBookingObj.clickOnCompleteBooking()

    
}
export async function getBookingReferenceNumber(page){
    const statusPageObj=new bookingStatusPage(page)
   // await page.waitForTimeout(3000)
    await statusPageObj.verifyBookingStatusPage()
    const bookingRef=await statusPageObj.getBookingStatusID();
    return bookingRef;


}