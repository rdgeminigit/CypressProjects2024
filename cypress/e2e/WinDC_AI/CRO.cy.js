/// <reference types = "cypress"/>

describe("CRO transient guest flow", function(){
it("Login and book", function(){
    cy.visit("")
    cy.get('#txUsn').type('croadmin')
    cy.get('#txPwd').type('3100r550')
    cy.get('#buLogin').click()
    cy.get('//*[@id="dvStuff1"]/div[2]/p[22]').check()
})
})