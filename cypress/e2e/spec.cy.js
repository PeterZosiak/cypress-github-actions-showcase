/// <reference types="cypress" />

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Kitchen Sink')
  })
})