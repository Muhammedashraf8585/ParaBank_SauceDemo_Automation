describe('Sauce Demo - View Cart Test', () => {
    it('Should view products in the cart', () => {

        cy.visit('https://www.saucedemo.com');
        cy.get('input[id="user-name"]').type('standard_user');
        cy.get('input[id="password"]').type('secret_sauce');
        cy.get('input[id="login-button"]').click();

        cy.get('.shopping_cart_link').click();
        cy.url().should('include', '/cart.html');
    });
});