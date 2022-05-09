describe("tests search functionality", () => {
  it("search displays searched items", () => {
    cy.visit('/')
    cy.get('.css-d6tg5d > .chakra-stack > .chakra-input').clear();
    cy.get('.css-d6tg5d > .chakra-stack > .chakra-input').type('Batman');
    cy.get('.css-d6tg5d > .chakra-stack > .chakra-button').click();
    cy.get('#loadingMovieCards').should("exist")
    cy.findAllByText('Batman', {exact: false}).should('exist')
    cy.get('.css-83o94r > .chakra-stack > .chakra-input').clear();
    cy.get('.css-83o94r > .chakra-stack > .chakra-input').type('spider-man');
    cy.get('.css-83o94r > .chakra-stack > .chakra-button').click();
    cy.get('#loadingMovieCards').should("exist")
    cy.findAllByText('Spider-Man', {exact: false}).should('exist')
  })
})