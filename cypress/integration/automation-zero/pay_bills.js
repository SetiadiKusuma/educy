/// <reference types= "cypress" />

describe('Melakukukan Pay Bills pada Zero Bank Website', () => {
    it('Berhasil login menggunakan username & password yang benar', () => {
        cy.fixture('zero').then((zero) => {
            cy.login('username', 'password')

            cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
            cy.url().should('include', 'bank/pay-bills.html')
        })
    });

    it('Memilih Navbar Pay Bills', () => {
        cy.get('.nav-tabs>li')
            .filter('.active')
            .should('contain', 'Pay Bills')
    });

    it('Memilih Navbar Pay Saved Payee', () => {
        cy.get('.ui-corner-all')
            .find('li')
            .find('a')
            .should('contain', 'Pay Saved Payee')
    });

    it('Melakukan Pay Saved Payee', () => {
        cy.fixture("zero").then((zero) => {
            cy.get('#sp_payee').select(zero.pay_bills.payee)
            cy.get('#sp_payee').should('have.value', 'bofa')

            cy.get('#sp_account').select(zero.pay_bills.account)
            cy.get('#sp_account').should('have.value', '5')

            cy.get('#sp_amount').type(zero.pay_bills.amount).should('have.value', '100')

            cy.get('#sp_date').click();
            //choose previous month
            cy.contains('Prev').click();
            //choose next month 
            cy.contains('Next').click();
            //choose date 24
            cy.contains(zero.pay_bills.date).click();

            cy.get('#sp_description').type(zero.pay_bills.description)

            cy.get('#pay_saved_payees').click()
        })
    });
})