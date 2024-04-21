/// <reference types = "Cypress" />
describe('Actions Page Test Suite', () => {
  beforeEach(() => {
    // Visit the Actions page before each test
    cy.visit('https://webdriveruniversity.com/Actions/index.html');
  });

  it('should drag and drop the draggable item', () => {
    // Trigger the drag and drop action
    cy.get('#draggable').trigger('mousedown', { which: 1 });
    cy.get('#droppable').trigger('mousemove').trigger('mouseup', { force: true });

    // Assertion to verify if the drop action was successful
    cy.get('#droppable p').should('have.text', 'Dropped!');
  });

  // it("should double click the Double Click me section", function(){
  //   cy.get('double-click').dblclick()
  //   cy.get('double-click h2').should('have.text', 'Double Click Me!')
  // })

  it("should double click the Double Click me section", function(){
    cy.get('double-click').dblclick()
    cy.get('double-click h2').should('have.text', 'Double Click Me!')
    ///This is an updated test
  })
});