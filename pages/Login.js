import {expect} from '@playwright/test'
import { TIMEOUT } from 'node:dns'

export class Login{

    constructor(page)
    {
        this.username=page.locator("#login-email")
        this.password=page.locator("#login-password")
        this.loginBtn=page.locator("#btn-login-submit")
    }
    

    async loginToSLT(){
        await this.username.fill("admin@sandlighttravels.co.uk")
        await this.password.fill("test@123")
       // await this.page.waitForTimeout(3000);
        await this.loginBtn.click({timeout:50000});
        //await this.page.waitForTimeout(3000);
    }
}