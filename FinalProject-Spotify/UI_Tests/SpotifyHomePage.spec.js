///<reference types="Cypress"/>
describe("Home Page tests", ()=>{
    beforeEach(()=>{
        cy.visit("https://www.spotify.com/");
    });
    it("Access to Premium", ()=>{
        cy.get('.mh-desktop > .svelte-4ldyho > :nth-child(1) > .mh-header-primary').click();
        cy.url().should("contain","https://www.spotify.com/ro-en/premium/");
    });
    it("Access to Support via sugested topics",()=>{
        cy.get(':nth-child(2) > .mh-header-primary').click();
        cy.get(':nth-child(1) > .TopSolutions_link__2ylZ5').should('have.attr', 'href')
     .then((href)=>{
        cy.get(':nth-child(1) > .TopSolutions_link__2ylZ5').click();
        cy.url().should("contain",href);
       });
    });
    it.only("Access to Support via Search bar",()=>{
    cy.get(':nth-child(2) > .mh-header-primary').click();
    cy.wait(7000);
    cy.get('.Input-sc-1698ofb-0').type("create playlist");
    cy.get('.Search_resultList__3ypDt').should('contain','playlist');
    
    });
});