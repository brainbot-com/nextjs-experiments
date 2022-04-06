describe('Mobile', () => {
  beforeEach(() => {
    // Galaxy S7 - 2016 phone with android 6
    cy.viewport(360, 640)
    // Start from the index page
    cy.visit('http://localhost:3000/')
  })

  it('should be on frontpage', () => {
    // The frontpage should have a title "New Order"
    cy.url().should('include', '/')
    cy.get('h1').contains('New Order')
  })

  it('should be able to navigate between tabs', () => {
    cy.get('.wfp--tabs').scrollTo('right')

    cy.get('.wfp--tabs__nav-link').contains("Grains").click()
    cy.get('[data-cy=product-title]').contains('Beans').should('not.be.visible')
    cy.get('.wfp--tabs').scrollTo('left')
    cy.get('.wfp--tabs__nav-link').contains("Vegetables").click()
    cy.get('[data-cy=product-title]').contains('Beans').should('be.visible')
  })

  it('searching should return expected results', () => {

    cy.get(".wfp--tabs__nav-item.wfp--tabs__nav-item--selected").contains("Vegetables")
    cy.get('#search-product').type('b')

    cy.get('[data-cy=product-title]').should('have.length', 5)

    cy.get('#search-product').clear().type('beans')

    cy.get('[data-cy=product-title]').should('have.length', 1)

    cy.get(".wfp--tabs__nav-item.wfp--tabs__nav-item--selected").should("not.exist")

    cy.get('#search-product').clear()

    cy.get(".wfp--tabs__nav-item.wfp--tabs__nav-item--selected").contains("Vegetables")
  })

  it('Should be able to add product to checkout', () => {
    cy.get('[data-cy=product-card]').first().click()

    cy.get('.wfp--btn.wfp--btn--primary').should('be.disabled')
    cy.get('.wfp--input.wfp--text-input').type('2')

    cy.get('.wfp--btn.wfp--btn--primary').should('not.be.disabled')

    cy.get('.wfp--btn.wfp--btn--primary').click()

    cy.get('[data-cy=last-product]').should("be.visible")
    cy.get('[data-cy=checkout-button]').click()

    cy.url().should('include', '/checkout')
    cy.get('[data-cy="navbar-title"]').contains("Checkout")

    cy.get("[data-cy=checkout-product]").contains("Beans")
    cy.get(".wfp--btn.wfp--btn--primary").contains("Approve payment with Iris")
    cy.get(".wfp--btn.wfp--btn--primary").click()

    cy.url().should('include', '/processPayment')

    // wait for 3.5s
    cy.wait(3500)

    // user should now start from the beginning and the card should be empty
    cy.url().should('include', '/')
  })

  it('Should be able to delete product from order', () => {
    cy.get('[data-cy=product-card]').first().click()

    cy.get('.wfp--btn.wfp--btn--primary').should('be.disabled')
    cy.get('.wfp--input.wfp--text-input').type('2')

    cy.get('.wfp--btn.wfp--btn--primary').should('not.be.disabled')

    cy.get('.wfp--btn.wfp--btn--primary').click()

    cy.get('[data-cy=last-product]').should("be.visible")

    cy.get('[data-cy=delete-last-product]').click()

    cy.get('[data-cy=last-product]').should("not.exist")
  })

  it('Menu should open', () => {
    cy.get('[data-cy=open-menu]').click()
    cy.get('[data-cy=menu-container]').should("be.visible")
    cy.get('[data-cy=open-menu]').click()
    cy.get('[data-cy=menu-container]').should("not.be.visible")
  })
})
