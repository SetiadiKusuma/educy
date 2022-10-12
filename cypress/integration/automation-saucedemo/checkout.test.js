/// <reference types= "cypress" />

describe('Fitur Checkout', () => {
    it('Berhasil login menggunakan username & password yang benar dan melakukan checkout', () => {
        cy.fixture("saucedemo").then((saucedemo) => {
            cy.visit('https://www.saucedemo.com/')

            cy.get('#user-name').type(saucedemo.standard_user.username)
            cy.get('#password').type(saucedemo.standard_user.password)

            cy.get('#login-button').click()

            cy.url().should('contain', 'inventory.html')

            cy.get('#add-to-cart-sauce-labs-backpack').click()
            cy.get('#shopping_cart_container').click()
            cy.get('#checkout').click()

            cy.get('#first-name').type(saucedemo.standard_user.first_name)
            cy.get('#last-name').type(saucedemo.standard_user.last_name)
            cy.get('#postal-code').type(saucedemo.standard_user.zip_code)

            cy.get('#continue').click()

            cy.get('#finish').click()
        })
    });

    it('Berhasil login menggunakan username & password yang bermasalah', () => {
        cy.fixture("saucedemo").then((saucedemo) => {
            cy.visit('https://www.saucedemo.com/')

            cy.get('#user-name').type(saucedemo.problem_user.username)
            cy.get('#password').type(saucedemo.problem_user.password)

            cy.get('#login-button').click()

            cy.url().should('contain', 'inventory.html')

            cy.get('#add-to-cart-sauce-labs-backpack').click()
            cy.get('#shopping_cart_container').click()
            cy.get('#checkout').click()

            cy.get('#first-name').type(saucedemo.problem_user.first_name)
            cy.get('#last-name').type(saucedemo.problem_user.last_name)
            cy.get('#postal-code').type(saucedemo.problem_user.zip_code)

            cy.get('#continue').click()

            cy.get('#finish').click()
        })
    });

    it('Berhasil login menggunakan username & password yang error', () => {
        cy.fixture("saucedemo").then((saucedemo) => {

        cy.visit('https://www.saucedemo.com/')

            cy.get('#user-name').type(saucedemo.performance_glitch_user.username)
            cy.get('#password').type(saucedemo.performance_glitch_user.password)

            cy.get('#login-button').click()

            cy.url().should('contain', 'inventory.html')

            cy.get('#add-to-cart-sauce-labs-backpack').click()
            cy.get('#shopping_cart_container').click()
            cy.get('#checkout').click()

            cy.get('#first-name').type(saucedemo.performance_glitch_user.first_name)
            cy.get('#last-name').type(saucedemo.performance_glitch_user.last_name)
            cy.get('#postal-code').type(saucedemo.performance_glitch_user.zip_code)

            cy.get('#continue').click()

            cy.get('#finish').click()
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