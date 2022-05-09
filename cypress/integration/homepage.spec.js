describe("renders home page", () => {
  it("renders correctly", () => {
    cy.visit('/')
    cy.get("#root",).should("exist")
    cy.get("#nav",).should("exist")
    cy.get("#search",).should("exist")
    cy.get("#featured",).should("exist")
    cy.get("#footer",).should("exist")
  })
})