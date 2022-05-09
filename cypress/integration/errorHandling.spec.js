describe("handles errors", () => {
  it("if no data is found, show an error message", () => {
    cy.visit('/')
    cy.get('.css-d6tg5d > .chakra-stack > .chakra-input').clear();
    cy.get('.css-d6tg5d > .chakra-stack > .chakra-input').type('dasdsa');
    cy.get('.css-d6tg5d > .chakra-stack > .chakra-button').click();
    cy.get("#loadingMovieCards",).should("exist")
    cy.get("#searchedMoviesError",).should("exist")
  })
})