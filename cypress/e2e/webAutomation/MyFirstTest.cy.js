import { url } from '../../../config';
import SignupPage from '../../pages/SignupPage.js';
const otplib = require('otplib');

describe('SignUp Fail Test', () => {
    before(function () {
        Cypress.on("uncaught:exception", (err, runnable) => {
            return false;
        });
        cy.visit(url)
    });

     it('Signup to the app', function () {
        SignupPage.clickDeclineNow();
        SignupPage.clickRegisterNow();
        SignupPage.enterFirstName('Test');
        SignupPage.enterLastName('XYZ');
        SignupPage.enterEmail('diksha.gupta@devstringx.com');
        SignupPage.enterPassword('Diksha@123456');
        SignupPage.enterRepeatPassword('Diksha@123456');
        SignupPage.clickCheckbox();
        SignupPage.clickSignup();
        SignupPage.verifyEmailSentSuccessfully("Verification email sent to playwrightautomationpractice@gmail.com");


    });

    it('Create An app After Login', function () {
        SignupPage.clickDeclineNow();
        SignupPage.clickOnUsePassword();
        SignupPage.enterEmail('diksha.gupta@devstringx.com');
        SignupPage.enterPassword('Diksha@123456');
        SignupPage.clickOnLoginButton();
        const secretKey = 'PFFVU2TJHRVEMOEZLAVHBXITS7B7S2VA'
        const token = otplib.authenticator.generate(secretKey);
        SignupPage.enterToken(token);
        SignupPage.loaderDisable();
        SignupPage.clickOnCreatePRDButton();
        SignupPage.enterPrdName('PRD1234');
        SignupPage.enterDescription('rthhjmmhjjyhhhhhjjjjj');
        SignupPage.clickOnCreatePrd();
        SignupPage.clickAllPrds();    
        SignupPage.clickDelete();
        SignupPage.clickDelete1();
    });











})