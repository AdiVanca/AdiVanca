/// <reference types="Cypress"/>
describe("Log in tests", ()=>{
    beforeEach(()=>{
       cy.visit("https://www.spotify.com/");
    });
   it("Navigate to log in", ()=>{
       cy.get(":nth-child(6) > .mh-header-secondary").click();
       cy.url().should("contain","https://accounts.spotify.com/en/login/");
   });
   it("Log in on Spotify",()=>{
       //Spotify doesn't allow log in through automated test
    cy.get(":nth-child(6) > .mh-header-secondary").click();
    cy.get('#login-username').type("adi.vanca@yahoo.com{enter}");
    cy.get('#login-password').type(Cypress.env("SpotifyPass"));
    cy.get('#login-button').click();
   });
   it("Log in with empty fields",()=>{
    cy.get(":nth-child(6) > .mh-header-secondary").click();
    cy.get('#login-button').click();
    cy.get('body > div > div.container-fluid.login.ng-scope > div > form > div:nth-child(1) > div > div > label').should("be.visible");
    cy.get("body > div > div.container-fluid.login.ng-scope > div > form > div:nth-child(2) > div > div > label").should("be.visible");
   });
   it("Log in with good email/no pass", ()=>{
    cy.get(":nth-child(6) > .mh-header-secondary").click();
    cy.get('#login-username').type("adi.vanca@yahoo.com{enter}");
    cy.get('#login-button').click();
    cy.get("body > div > div.container-fluid.login.ng-scope > div > form > div:nth-child(2) > div > div > label").should("be.visible").contains("Please enter your password.");
   });
   it("Log in with good email/wrong pass",()=>{
       //Spotify doesn't allow log in through automated test not even the validation
    cy.get(":nth-child(6) > .mh-header-secondary").click();
    cy.get('#login-username').type("adi.vanca@yahoo.com{enter}");
    cy.get('#login-password').type("astbgfdrgh");
    cy.get('#login-button').click();
   });
   it("Forgot password functionality", ()=>{
    cy.get(":nth-child(6) > .mh-header-secondary").click();
    cy.get('#reset-password-link').click();
    cy.url().should('contain','https://www.spotify.com/ro-en/password-reset/');
   });
});