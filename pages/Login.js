import {expect} from '@playwright/test'

export class Login{

    constructor(page)
    {
        this.username=page.locator("#login-email")
        this.password=page.locator("#login-password")
        this.loginBtn=page.locator("#btn-login-submit")
    }
    

    async loginToSLT(username,password){
        await this.username.fill(username)
        await this.password.fill(password)
       // await this.page.waitForTimeout(3000);
        await this.loginBtn.click({timeout:50000});
        //await this.page.waitForTimeout(3000);
    }
    async navigateToUserManagement(){
        
    
    }

}