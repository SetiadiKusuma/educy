/// <reference types ="cypress"/>

describe('Browser Actions', () => {
    it('Should load correct url', () => {
        cy.visit('https://example.cypress.io', { timeout: 10000 })
    })

    it('Should check correct url', () => {
        cy.url().should('include', 'example.cypress.io')
    })

    it('Should check for correct element on the page', () => {
        cy.get('h1').should('be.visible')
    })

    it('Should check for correct lenght on the page', () => {
        // retry until we find 3 matching <li.selected>
        cy.get('li.selected').should('have.length', 3)
    })

    it('Should check for correct class on the page', () => {
        // retry until this input does not have class disabled
        cy.get('form').find('input').should('not.have.class', 'disabled')
    })

    it('Should check for correct value on the page', () => {
        // retry until this textarea has the correct value
        cy.get('textarea').should('have.value', 'foo bar baz')
    })
})