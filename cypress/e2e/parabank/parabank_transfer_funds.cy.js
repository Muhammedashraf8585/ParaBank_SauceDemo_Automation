describe('Para Bank - Transfer Funds Test', () => {
    it('Should transfer funds between accounts', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        cy.login('johndoe', 'password123');
        cy.contains('Transfer Funds').click();
        cy.get('input[name="amount"]').type('100');
        cy.get('select[name="fromAccountId"]').select('12345');
        cy.get('select[name="toAccountId"]').select('67890');
        cy.get('input[type="submit"]').click();
        cy.contains('Transfer Complete').should('be.visible');
    });
});