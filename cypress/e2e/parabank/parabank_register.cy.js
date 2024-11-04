describe('Para Bank - Register Test', () => {
    it('Should register a new user', () => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
        cy.contains('Register').click();

        cy.get('input[name="customer.firstName"]').type('mohamed');
        cy.get('input[name="customer.lastName"]').type('Ashraf');
        cy.get('input[name="customer.address.street"]').type('Cairo');
        cy.get('input[name="customer.address.city"]').type('Cairo');
        cy.get('input[name="customer.address.state"]').type('CA');
        cy.get('input[name="customer.address.zipCode"]').type('12111');
        cy.get('input[name="customer.phoneNumber"]').type('011116');
        cy.get('input[name="customer.ssn"]').type('123-45-6789');
        cy.get('input[name="customer.username"]').type('mohamedashraf123');
        cy.get('input[name="customer.password"]').type('a12345678');
        cy.get('input[name="repeatedPassword"]').type('a12345678');

        // Submit the form
        cy.contains('a', 'Register').click();
       // cy.get('input[type="REGISTER"]').click();

        cy.contains('Your account was created successfully').should('be.visible');
    });
});