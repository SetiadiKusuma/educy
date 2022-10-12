/// <reference types= "cypress" />

describe('Fitur Login', () => {
    it('Berhasil login menggunakan username & password yang benar', () => {
        cy.fixture("saucedemo").then((saucedemo) => {
            cy.visit('https://www.saucedemo.com/')

            cy.get('#user-name').type(saucedemo.standard_user.username)
            cy.get('#password').type(saucedemo.standard_user.password)

            cy.get('#login-button').click()

            cy.url().should('contain', 'inventory.html')
        })
    });

    it('Berhasil login menggunakan username & password yang bermasalah', () => {
        cy.fixture("saucedemo").then((saucedemo) => {
            cy.visit('https://www.saucedemo.com/')

            cy.get('#user-name').type(saucedemo.problem_user.username)
            cy.get('#password').type(saucedemo.problem_user.password)

            cy.get('#login-button').click()

            cy.url().should('contain', 'inventory.html')
        })
    });

    it('Berhasil login menggunakan username & password yang error', () => {
        cy.fixture("saucedemo").then((saucedemo) => {

        cy.visit('https://www.saucedemo.com/')

            cy.get('#user-name').type(saucedemo.performance_glitch_user.username)
            cy.get('#password').type(saucedemo.performance_glitch_user.password)

            cy.get('#login-button').click()

            cy.url().should('contain', 'inventory.html')
    });
});
    it('Gagal login menggunakan akun yang terkunci', () => {
        cy.fixture("saucedemo").then((saucedemo) => {
            cy.visit('https://www.saucedemo.com/')

            cy.get('#user-name').type(saucedemo.locked_out_user.username)
            cy.get('#password').type(saucedemo.locked_out_user.password)

            cy.get('#login-button').click()

            cy.url().should('equal', 'https://www.saucedemo.com/')
        })
    });
})