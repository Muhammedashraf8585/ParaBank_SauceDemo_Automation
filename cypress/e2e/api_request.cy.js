describe('API Request Test', () => {
    it('Should make an authenticated POST request', () => {
        cy.request({
            method: 'POST',
            url: `https://events.backtrace.io/api/summed-events/submit?universe=${Cypress.env("UNIVERSE")}&token=${Cypress.env("API_TOKEN")}`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                eventType: "testEvent",
                value: 42,
                timestamp: Date.now()
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});