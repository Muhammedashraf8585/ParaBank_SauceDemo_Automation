describe('Sauce Demo - Login Test', () => {
    it('Should log in with valid credentials', () => {
        cy.visit('https://www.saucedemo.com');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('.btn_action').click();
        cy.contains('Products').should('be.visible');
    });
});