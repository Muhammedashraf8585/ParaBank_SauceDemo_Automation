
describe('Sauce Demo - Sort Products Test', () => {

    it('Should log in with valid credentials', () => {
        cy.visit('https://www.saucedemo.com');
        cy.get('#user-name').type('standard_user');
        cy.get('#password').type('secret_sauce');
        cy.get('.btn_action').click();
        cy.contains('Products').should('be.visible');
    });

    it('Should sort products by price (low to high)', () => {
     //   cy.visit('https://www.saucedemo.com');
      //  cy.login('standard_user', 'secret_sauce');
        cy.get('.product_sort_container').select('loh');

        cy.get('.inventory_item_price').first().should('contain', '$7.99');
    });
});
