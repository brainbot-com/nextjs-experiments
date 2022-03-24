describe('Navigation', () => {
    it('should be on frontpage', () => {
        // Start from the index page
        cy.visit('http://localhost:3000/')

        // The frontpage should have a title "New Order"
        cy.get('h1').contains('New Order')
    })
})