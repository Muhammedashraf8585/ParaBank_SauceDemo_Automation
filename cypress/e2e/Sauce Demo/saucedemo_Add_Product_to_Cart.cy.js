describe('Sauce Demo - Add Item to Cart', () => {
    it('should add an item to the cart', () => {
        cy.visit('https://www.saucedemo.com');
        cy.get('input[id="user-name"]').type('standard_user');
        cy.get('input[id="password"]').type('secret_sauce');
        cy.get('input[id="login-button"]').click();

        cy.get('.inventory_item').first().find('button').click();

        cy.get('.shopping_cart_badge').should('contain', '1');
    });
});