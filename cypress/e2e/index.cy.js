import config from "@config";

describe("index page", () => {
  let page
  beforeEach(() => {
    page = cy.visit('/')
  })

  it('titles are correct', () => {
    page.get('title').should('have.text', config.title)
  });

  it('Has no detectable a11y violations on load', () => {
    cy.checkAccessibility()
  })
})