const base = require('@playwright/test');
const { SignInPageCustomer, SignInPagePartner } = require('../tests/Pages/SignInPages');
const { OrderCreate } = require('../tests/Pages/OrderCreate');
const { SignUpPageCustomer, SignUpPagePartner, SignUpPageStylist } = require('../tests/Pages/SignUpPages');


exports.test = base.test.extend({
    signInPageCust: async ({ page }, use) => { 
        // Set up the fixture
        const signInPageCustomer = new SignInPageCustomer(page); 
        await use(signInPageCustomer);
    },

    signInPagePartner: async ({ page }, use) => { 
        const signInPagePartner = new SignInPagePartner(page); 
        await use(signInPagePartner);
    },

    orderCreate: async ({ page }, use) => { 
        const madeOrder = new OrderCreate(page); 
        await use(madeOrder);
    },

    signUpStylist: async ({ page }, use) => { 
        const signUpPageStylist = new SignUpPageStylist(page); 
        await use(signUpPageStylist);
    },

    signUpPartner: async ({ page }, use) => { 
        const signUpPagePartner = new SignUpPagePartner(page); 
        await use(signUpPagePartner);
    },

    signUpCustomer: async ({ page }, use) => { 
        const signUpPageCustomer = new SignUpPageCustomer(page); 
        await use(signUpPageCustomer);
    },
});
exports.expect = base.expect;