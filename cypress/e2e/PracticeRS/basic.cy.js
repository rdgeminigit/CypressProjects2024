/// <reference types = "Cypress" />

describe("Verify basic cypress commands", function(){
    it("Verify the title of the page", function(){
        cy.visit('https://webdriveruniversity.com/')
        cy.title().should('have.text', "WebdriverUniversity.com (New Approach To Learning)")
    })
})