import {test, expect} from "@playwright/test";

export class hotelListPage{

    constructor(page){
        this.page=page
        this.hotelList=page.locator("//div[@class='grid grid-cols-1 gap-6']")
        this.hotelName=(id)=>page.locator(`//div[@class='grid grid-cols-1 gap-6']/div[${id}]//a[@class='no-underline']`)
        this.vewDetailsBtn=(id)=>page.locator(`//div[@class='grid grid-cols-1 gap-6']/div[${id}]//a[contains(text(),'View Details')]`)
        this.labelDiv=page.locator("//p[contains(text(),'Star Rating')]/following-sibling::div/label")
        this.parentStarRating=(id)=>page.locator(`//p[contains(text(),'Star Rating')]/following-sibling::div/label[${id}]/div`)
        this.facilities=page.locator("//p[contains(text(),'Facilities')]/following-sibling::div/label");
        this.facilitiesItem=(id)=>page.locator(`//p[contains(text(),'Facilities')]/following-sibling::div/label[${id}]/div`)
        this.roomArray=[];
    }
    
    async getStarRating(id) {
        return this.parentStarRating(id).locator(`//span[@style='font-variation-settings: "FILL" 1; font-size: 18px;']`)
    }
    
    async selectRatingByStarCount(expectedRating) {
        // Get all spans (stars) for this rating label
        console.log("===========expected rating:===========",expectedRating)
        const labelcount = await this.labelDiv.count(); //5
        for(let i=1; i<=labelcount; i++){
            const stars = await this.getStarRating(i);
            const starCount = await stars.count();
            
            console.log(`Star count for label ${i}: ${starCount}, Expected rating: ${expectedRating}`);
            
            // If the star count matches the expected rating, click the checkbox
            if (starCount === expectedRating) {
                const checkbox = this.parentStarRating(i).locator(`//preceding-sibling::input`);
                await checkbox.click();
                console.log(`Clicked checkbox for ${expectedRating} star rating`);
                return true;
            }
        }
        console.log(`Star count did not match expected rating (${expectedRating})`);
        return false;
    }

    async waitForHotelList(){
        await this.hotelList.waitFor({timeout:50000})
    }

    async clickViewDetails(id){
        await this.vewDetailsBtn(id).click()
    }
    async getHotelName(id){
        const actualName=await this.hotelName(id).textContent()
        console.log("Actual hotel name:", actualName)
        this.roomArray.push(actualName)
        return actualName.trim()
    }
    async filterResults(rating, facilities){
        await this.page.waitForTimeout(3000)
        this.selectRatingByStarCount(rating);
        await this.page.waitForTimeout(3000)
        this.selectFacility(facilities)
       


    }
    async selectFacility(facilityName){
        console.log("the facility we have to filter is:", facilityName)
        const facilityCount=await this.facilities.count();
        for(let i=1;i<=facilityCount;i++){
            const facilityText = await this.facilitiesItem(i).locator('//span[2]').textContent();
            console.log("facility text:", facilityText)
            if(facilityText.includes(facilityName)){
                await this.facilitiesItem(i).locator('//span[2]').click();
                console.log(`Clicked facility checkbox for ${facilityName}`);
                break;
            }
        }
    }
   

    
}
