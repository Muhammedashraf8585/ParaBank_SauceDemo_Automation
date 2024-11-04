describe('Sauce Demo - Logout Test', () => {
    it('Should log out successfully', () => {
        cy.visit('https://www.saucedemo.com');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('.btn_action').click();
        cy.contains('Products').should('be.visible');

        cy.get('.bm-burger-button').click();
        cy.get('#logout_sidebar_link').click();
        cy.url().should('include', '/login');
    });
});