///<reference types="Cypress"/>
describe("Open spoify dot com", ()=>{
    beforeEach(()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
      // failing the test
        return false
        });
        cy.visit("https://open.spotify.com/");
    });
    it("Home button", ()=>{
        cy.get(':nth-child(2) > .link-subtle > .ellipsis-one-line').click();
        cy.url().should('contain','https://open.spotify.com/search');
        cy.get('.f555f5a061389067516970421bc48319-scss > :nth-child(1) > .link-subtle > .ellipsis-one-line').click();
        cy.url().should('contain','https://open.spotify.com/');
    });
    it("Search for an artist", ()=>{     
        cy.get(':nth-child(2) > .link-subtle > .ellipsis-one-line').click();
        cy.get('[data-testid=search-input]').type('Maroon 5');
        cy.get('#searchPage > div > div > section.e5f169e4e89cc264cd5e155ead28f3e3-scss.a8b052ab945f8d056679d7f3ff013e05-scss > div._5aac821edb25f0e281f50522021abbe4-scss._6424f268be3505ebab663700d60ebaa6-scss > div > div > div > div.e7c3d1a9189832a9f2cbe80dfdf503f5-scss > a').should('contain','Maroon 5');
    });
    it("Search for a song", ()=>{     
        cy.get(':nth-child(2) > .link-subtle > .ellipsis-one-line').click();
        cy.get('[data-testid=search-input]').type('Nothing else matters');
        cy.get('#searchPage > div > div > section.e5f169e4e89cc264cd5e155ead28f3e3-scss.a8b052ab945f8d056679d7f3ff013e05-scss > div._5aac821edb25f0e281f50522021abbe4-scss._6424f268be3505ebab663700d60ebaa6-scss > div > div > div > div.e7c3d1a9189832a9f2cbe80dfdf503f5-scss > a').should('contain','Nothing Else Matter');
    });
    it("Search for an artist and a song that is not his", ()=>{       
        cy.get(':nth-child(2) > .link-subtle > .ellipsis-one-line').click();
        cy.get('[data-testid=search-input]').type('Maroon5 Nothing Else Matters');
        cy.get('.ae4e1a644e19f4d5af7b39f7e5960580-scss').should('contain','No results found for "Maroon5 Nothing Else Matters"');
    });
    it("Search for multiple random characters", ()=>{      
        cy.get(':nth-child(2) > .link-subtle > .ellipsis-one-line').click();
        cy.get('[data-testid=search-input]').type('fkbmkgmnkjhldk');
        cy.get('.ae4e1a644e19f4d5af7b39f7e5960580-scss').should('contain','No results found for "fkbmkgmnkjhldk"');
    });
    it(" Search for special character + SPACE + artist + Enter", ()=>{     
        cy.get(':nth-child(2) > .link-subtle > .ellipsis-one-line').click();
        cy.get('[data-testid=search-input]').type('/ Maroon5 {enter}');
        cy.get('#searchPage').should('include.text','Maroon5');
    });
});