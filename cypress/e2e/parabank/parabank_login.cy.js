describe('Para Bank - Login Test', () => {
    it('Should log in with valid credentials', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        cy.get('input[name="username"]').type('mohamed1996');
        cy.get('input[name="password"]').type('102456');
        cy.get('input[type="submit"]').click();
        cy.contains('An internal error has occurred and has been logged.').should('be.visible');
    });
});