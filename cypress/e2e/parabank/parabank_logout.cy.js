describe('Para Bank - Login Test', () => {
    it('Should log in with valid credentials', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');  // Step 1: Open the website
        cy.get('input[name="username"]').type('johndoe');              // Step 2: Enter username
        cy.get('input[name="password"]').type('password123');          // Step 3: Enter password
        cy.get('input[type="submit"]').click();                        // Step 4: Click the Login button
        cy.contains('Accounts Overview').should('be.visible');         // Step 5: Check login success
    });
});