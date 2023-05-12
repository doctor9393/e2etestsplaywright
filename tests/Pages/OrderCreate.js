import {customerLoginEmail,customerLoginPassword} from '../../credentials';

export class OrderCreate {

    constructor(page) {
        this.page = page;
    }
    async doOrderCreate(){
        await this.page.click("//button[contains(text(),'Sign in')]");
        await this.page.locator("#email").type(customerLoginEmail);
        await this.page.locator("#password").type(customerLoginPassword);
        await this.page.click(".login_btn1");
        await this.page.click(".pg_link_p");
        await this.page.click("//p[contains(text(),'City1')]");
        await this.page.click("//a[contains(text(),'Services')]/parent::li[@class='pg_link_lst pg_link']");
        await this.page.click("//li[contains(text(),'MAKEUP')]");
        await this.page.click("//h3[contains(text(),'MAKEUP')]");
        await this.page.click("//h3[text()='MAKEUP']/parent::div/parent::a//i[@class='fa fa-plus']");
        await this.page.click("//button[contains(text(),'Book Now')]");
        await this.page.click("//button[contains(text(),'Confirm Date & Time')]");
        await this.page.click("//a[contains(text(),'Confirm')]");
        //await this.page.click("//*[@class='fa fa-circle-o']");
        await this.page.click("//a[contains(text(),'Proceed To Pay')]");
        await this.page.click("//button[text()='Confirm']");
        await this.page.click(".cros_div");
    }
    }


   


