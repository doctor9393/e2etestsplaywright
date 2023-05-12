import {test, expect} from "../Fixtures/AllPages"
import {URL} from '../constans';
import {adminURL} from '../constans';
import {delay} from './Helpers/utils';


import {
   firstName,
   lastName,
   getRandomEmail,
   phone,
} from './Helpers/simple-faker/simple-faker';

test ('Sign up as a customer', async ({page, signUpCustomer})=> {
   const firstNameCustomer = firstName();
   const lastNameCustomer = lastName();
   const emailCustomer = getRandomEmail();

   await page.goto(URL);
   await signUpCustomer.signUpButton();
   await signUpCustomer.signUpAsCustomer();

   await signUpCustomer.doSignUpCustomerFnameLnameEmail(firstNameCustomer,lastNameCustomer,emailCustomer);
   await signUpCustomer.doSignUpPasswordsFields();

   await signUpCustomer.checkCheckbox();
   await signUpCustomer.clickNextButton();
   await signUpCustomer.clickResendLink();

   await expect(page.locator("//p[contains(text(),'OTP sent successfully.')]")).toBeVisible();
   
})

test ('Sign up as a partner', async ({page, signUpPartner})=> {
   const firstNamePartner = firstName();
   const lastNamePartner = lastName();
   const emailPartner = getRandomEmail();
   const phoneNumber = phone().toString();
   await page.goto(URL);

   await signUpPartner.signUpButton();
   await signUpPartner.signUpAsPartner();

   await signUpPartner.doSignUpAsPartner(firstNamePartner, lastNamePartner, emailPartner, phoneNumber);
   
   await signUpPartner.clickOnRegisterMe();
   await signUpPartner.clickOnCross();
   await expect(page.locator("//button[contains(text(),'Sign up')]")).toBeVisible();
})

test ('Sign up as a stylist', async ({page, signUpStylist})=> {
   const firstNameStylist = firstName();
   const lastNameStylist = lastName();
   const emailStylist = getRandomEmail();

   await page.goto(URL);
   await signUpStylist.signUpButton();
   await signUpStylist.signUpAsStylist();

   await signUpStylist.inputFnameLnameStylist(firstNameStylist, lastNameStylist);
   await signUpStylist.sendKeysKeyboard();
   await signUpStylist.inputEmailOtherFieldsStylist(emailStylist);

   await signUpStylist.clickOnRegisterMe();
   await signUpStylist.clickOnCross();
   await expect(page.locator("//button[contains(text(),'Sign up')]")).toBeVisible();
})

test ('Making an order', async ({page, orderCreate})=> {
   await page.goto(URL);
   await orderCreate.doOrderCreate();
   await expect(page.locator("//h2[contains(text(),'MY BOOKING')]")).toBeVisible();
})

test ('Login as customer', async ({page, signInPageCust})=> {
   await page.goto(URL);
   await signInPageCust.doSignInCustomer();
   await expect(page.locator("//button[contains(text(),'User')]")).toBeVisible();

})

test ('Login as Partner', async ({page, signInPagePartner})=> {
   await page.goto(adminURL);
   signInPagePartner.doSignInPartner();
   await expect(page. locator("//*[@data-testid='AccountCircleIcon']")).toBeVisible();
})
