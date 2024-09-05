import BasePage from "./BasePage"


export default class SignupPage extends BasePage {

  //*****************************METHODS******************************* */


  static clickDeclineNow() {
  cy.contains('a', 'Decline').click();
  }

  static loaderDisable() {
    cy.get('div.mfe-loader', { timeout: 30000 }).should('not.be.visible'); // 10 seconds
  }
  

  static clickRegisterNow() {
    cy.contains('a', 'Register Now').click();
    }
 
  static enterFirstName(firstName) {
    cy.get('input[placeholder="First Name"]').type(firstName);
  }

  static enterLastName(lastName) {
    cy.get('input[placeholder="Last Name"]').type(lastName);
  }

  static enterEmail(email) {
    cy.get('input[placeholder="yourname@company.com"]').type(email);
  }

  static enterPassword(password) {
    cy.get('input[placeholder="Password"]').type(password);
  }
  static enterRepeatPassword(repeatPassword) {
    cy.get('input[placeholder="Repeat password"]').type(repeatPassword);
  }

  static clickCheckbox() {
    cy.get('input[data-vv-name="termsAgree"]').click({ force: true });
  }
  static clickSignup() {
    cy.get('button[class="btn big-round-button-common signup-button btn-secondary normal"]').click({ force: true });
  }

  static verifyEmailSentSuccessfully(expMessage) {
    cy.get("div[role='alert']").should(text => {
      const actMessgae = text.text();
      expect(actMessgae).to.eq(expMessage);
    })
  }

  static clickOnUsePassword() {
    cy.contains('Use password').click();
  }

  static clickOnLoginButton() {
    cy.get('button[class="cb-button cb-button--size-lg cb-button--fill"]').click();
  }

  static enterToken(token) {
  cy.get('input[type="text"]')
  .should('be.visible') // Ensure the input is visible before typing
  .type(token);
}

static clickOnCreatePRDButton() {
  cy.contains('span', 'Create PRD with AI', { timeout: 10000 }).click();
}

static enterPrdName(prdName) {
  cy.get('input[name="prd_name"]').type(prdName);
}
static enterDescription(enterDescription) {
  cy.get('textarea[id="prd_description"]').type(enterDescription);
}

static clickDelete() {
  cy.contains('span', 'Delete').click();
  }

  static clickDelete1() {
    cy.get('div[data-cy="cb_modal__footer"]')
    .find('button')
    .contains('span', 'Delete')
    .click({ force: true });
      }

static clickOnCreatePrd() {
  cy.get('div[data-cy="cb_modal__footer"] button')
  .contains('Create PRD')
  .click()}
  User types successfully generated.



  static verifySuccessToastMsg(expMessage) {
    cy.get("div[role='alert']").should(text => {
      const actMessgae = text.text();
      expect(actMessgae).to.eq(expMessage);
    })
  }




  static clickAllPrds() {
    cy.contains('span', 'All PRDs').click();
    }


  static clickDeletess() {
    cy.contains('span', 'Delete', { timeout: 10000 }).then($button => {
      if ($button.is(':visible')) {
        cy.wrap($button).click();
      } else {
        cy.contains('span', 'Create PRD with AI', { timeout: 10000 }).click();
      }
    });
  }
  }
  





