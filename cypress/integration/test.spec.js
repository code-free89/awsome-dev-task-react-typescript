/// <reference types="cypress" />

describe('testing localhost', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/card/cee6a512-6202-43a9-b1d7-9bf0df963d45')
  })
  it('should have 1 card', () => {
    cy.get('.card-wrapper').should('have.length', 1)
  })
  it('update card info', () => {
    let cardPrice = 0;
    cy.get(':nth-child(3) > .mt-1 > #name').then(($priceInput) => {
      cardPrice = Number($priceInput.val());
      const invalidPrice = cardPrice * 1.009;
      // Invalid case
      cy.get(':nth-child(3) > .mt-1 > #name').clear().type(invalidPrice)
      cy.get('.default').click()
      cy.get('.error').should('have.length', 1)
      // Valid case
      const validPrice = cardPrice * 1.011 ;
      cy.get(':nth-child(3) > .mt-1 > #name').clear().type(validPrice)
      cy.get('.default').click()
      cy.get('.error').should('have.length', 0)
    })
  });
})
