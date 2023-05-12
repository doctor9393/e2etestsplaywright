
import {password, confirmPassword} from '../../credentials';
import {BaseUI} from '../Helpers/BaseUI';
import {delay} from '../Helpers/utils';
//const {test, expect} = require('@playwright/test');

export class SignUpPageCustomer {
    constructor(page) {
        this.page = page;
    }



    async signUpButton() {
        await this.page.click("//button[contains(text(),'Sign up')]");
    }
    async signUpAsCustomer() {
        await this.page.click("//span[contains(text(),'As Customer')]");
    }

    async doSignUpCustomerFnameLnameEmail(fname,lname,email) {
        await this.page.locator("#fname").type(fname);
        await this.page.locator("#lname").type(lname);
        await this.page.locator("#email").type(email);
    }

    async doSignUpPasswordsFields() {
        await this.page.locator("#password").type("********");
        await this.page.locator("#confirmPassword").type("********");
    }

    async checkCheckbox() {
        await this.page.click(".rememberme>i");
    }
    async clickNextButton() {
        await this.page.click("//button[contains(text(),'Next')]");
    }

    async clickResendLink() {
        await this.page.click("//span[contains(text(),'Click Resend.')]");
    }

}

export class SignUpPagePartner {
    constructor(page) {
        this.page = page;
    }

    async doSignUpAsPartner(fname,lname,email,phone) {
        await this.page.locator("#fname").type(fname);
        await this.page.locator("#lname").type(lname);
        await this.page.locator("#businessName").type("Test");
        await this.page.locator("#email").type(email);
        await this.page.locator("#phone-input").type(phone);
        await this.page.locator("#password").type(password);
        await this.page.locator("#confirmPassword").type(confirmPassword);
        await  this.page.locator('//select').selectOption({ label: "Citi1" });
    }
    async signUpButton() {
        await this.page.click("//button[contains(text(),'Sign up')]");
    }
    async signUpAsPartner() {
        await this.page.click("//span[contains(text(),'As Partner')]");
    }
    async clickOnRegisterMe() {
        await this.page.click("//button[contains(text(),'Register Me')]");
    }
    async clickOnCross() {
        await this.page.click(".cros_div");
    }

}

export class SignUpPageStylist extends BaseUI {

    constructor(page) {
        super(page);
        this.page = page;
    }
    async signUpButton() {
        await this.page.click("//button[contains(text(),'Sign up')]");
    }
    async signUpAsStylist() {
        await this.page.click("//span[contains(text(),'As Stylist')]");
    }
    async inputFnameLnameStylist(fname,lname) {
        await this.page.locator("#fname").type(fname);
        await this.page.locator("#lname").type(lname);
    }
    async inputEmailOtherFieldsStylist(email) {
        await this.page.locator("//input[@placeholder='Location*']").type("City1, NY, USA");
        await this.page.click("//span[text()='City1, NY, USA']");
        await delay(1000);
        await this.page.keyboard.press('ArrowDown');
        await this.page.keyboard.press('Tab');
        //await this.page.click("#zip");
        await this.page.locator("#zip").type("11111");
        await this.page.locator("//input[@name ='email']").type(email);
        await this.page.locator("#password").type(password);
        await this.page.locator("#confirmPassword").type(confirmPassword);
    }
    async sendKeysKeyboard() {
        await this.clearAndSendKeysKeyboard("#phone-input","16307833599");
    }

    async clickOnRegisterMe() {
        await this.page.click("//button[contains(text(),'Register Me')]");
    }
    async clickOnCross() {
        await this.page.click(".cros_div");
    }
}