/// <reference types ="cypress"/>

describe('Browser Actions', () => {
    it('Should loud book website', () => {
        cy.visit('https://books.toscrape.com/index.html', { timeout: 100000 })
        cy.url().should('include', 'index.html')
    })

    it('Should click on Travel category', () => {
        cy.get('a').contains('Travel').click()
        cy.get('h1').should('have.text', 'Travel')
    })
})