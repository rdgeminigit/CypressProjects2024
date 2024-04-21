/// <reference types="cypress" />

describe("To verify the contact-us form", function(){
    beforeEach(function(){
        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html ")
    })
    //Test case 01
    it.only("To verify contents in the contact-us form with valid details", function(){
        cy.formdetails("Radha", "Deshmukh", "rdgemini85@test.com", "test comments")
        cy.get('input[type="submit"]').click()
        cy.get('h1').should('be.visible').and('have.text','Thank You for your Message!')
    })
    //Test case 02
    it('To verify the contact-us form with invalid details', function(){
        cy.formdetails("Radha", "Deshmukh")
        cy.get('input[type="submit"]').click()
        cy.get('body').should('be.visible').and('contain', "invalid")

    })
})
    