describe('Para Bank - Check Account Balance', () => {
    it('Should display the account balance', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        cy.login('johndoe', 'password123'); // Custom command (created below)
        cy.contains('Accounts Overview').click();
        cy.get('.balance').should('exist');
    });
});