import {customerLoginEmail, customerLoginPassword} from '../../credentials';
import {partnerLoginEmail, partnerLoginPassword} from '../../credentials';
import {btnContainText} from '../Helpers/selectors'

export class SignInPageCustomer {
    constructor(page) {
      this.page = page;
    }
    async doSignInCustomer() {
      await this.page.click(btnContainText("Sign in"));
      await this.page.locator("#email").type(customerLoginEmail);
      await this.page.locator("#password").type(customerLoginPassword);
      await this.page.click("//div[contains(text(),'Sign In')]");
    }
  }


export class SignInPagePartner {

    constructor(page) {
        this.page = page;
    }
    async doSignInPartner() {
        await this.page.locator("//*[@name='email']").type(partnerLoginEmail);
        await this.page.locator("//*[@name='password']").type(partnerLoginPassword);
        await this.page.click("//button[contains(text(),'Sign In Now')]");
    }

}