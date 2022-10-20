/// <reference types= "cypress" />

describe('Fitur Login Zero Bank', () => {
    it('Berhasil login menggunakan username & password yang benar', () => {
        cy.fixture("zero").then((zero) => {
            cy.login('username', 'password')

            cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
            cy.url().should('include', 'bank/pay-bills.html')
        })
    });

    it('Memilih Navbar Pay Bills', () => {
        cy.get('.nav-tabs>li')
            .filter('.active')
            .should('contain', 'Pay Bills')

        // cy.get('.ui-tabs-nav > li a')
        //     .filter('.active')
        //     .should('contain', 'Pay Saved Payee')
    });

})