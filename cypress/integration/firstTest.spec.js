/// <reference types="Cypress" />

describe('My first test suite', () => {
    it('First test', () => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();
    })

    it('Inline Form test', () => {
        cy.get('.form-inline').within(() => {
            cy.get('input[placeholder = "Jane Doe"]')
                .type('Alifia Zaida Nurmaya')
                .should('have.value', 'Alifia Zaida Nurmaya');
            cy.get('input[placeholder = "Email"]')
                .type('alifiamaya07@gmail.com')
                .should('have.value', 'alifiamaya07@gmail.com')
                .parents('form')
                .find('nb-checkbox')
                .click();
        })
    })

    it('Using the Grid test', () => {
        cy.get('#inputEmail1')
            .type('alifiamaya07@gmail.com')
            .should('have.value', 'alifiamaya07@gmail.com');
        cy.get('#inputPassword2')
            .type('12345')
            .should('have.value', '12345')
            .parents('form')
            .contains('Option 1')
            .parents('nb-radio')
            .find('.inner-circle')
            .click()
            .parents('form')
            .contains('Option 2')
            .parents('nb-radio')
            .find('.inner-circle')
            .click()
            .parents('form')
            .contains('Disabled Option')
            .parents('nb-radio')
            .should('have.attr', 'disabled');
    })

    it('Basic Form test', () => {
        cy.get('#exampleInputEmail1')
            .type('alifiamaya07@gmail.com')
            .should('have.value', 'alifiamaya07@gmail.com');
        cy.get('#exampleInputPassword1')
            .type('12345')
            .should('have.value', '12345')
            .parents('form')
            .find('nb-checkbox')
            .click();
    })

    it('Form Without Label test', () => {
        cy.get('input[placeholder="Recipients"]')
            .type('mrjamet@gmail.com')
            .should('have.value', 'mrjamet@gmail.com');
        cy.get('input[placeholder = "Subject"]')
            .type('Proposal Magang')
            .should('have.value', 'Proposal Magang');
        cy.get('textarea[placeholder = "Message"]')
            .type('Selamat Pagi, Mr Jamet. Semoga Proposal ini bisa di ACC')
            .should('have.value', 'Selamat Pagi, Mr Jamet. Semoga Proposal ini bisa di ACC');
    })

    it('Block Form test', () => {
        cy.get('#inputFirstName[placeholder="First Name"]')
            .type('Alifia Zaida')
            .should('have.value', 'Alifia Zaida');
        cy.get('#inputLastName[placeholder="Last Name"]')
            .type('Nurmaya')
            .should('have.value', 'Nurmaya');
        cy.get('#inputEmail[placeholder="Email"]')
            .type('alifiamaya07@gmail.com')
            .should('have.value', 'alifiamaya07@gmail.com');
        cy.get('#inputWebsite[placeholder="Website"]')
            .type('https://github.com/AlifiaZaidaNurmaya')
            .should('have.value', 'https://github.com/AlifiaZaidaNurmaya');
    })
})