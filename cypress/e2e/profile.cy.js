import config from "@config";

describe("index page", () => {
  let page
  beforeEach(() => {
    page = cy.visit('/profile')
  })

  it('titles are correct', () => {
    page.get('title').should('have.text', config.title)
  });

  it('has no detectable a11y violations on load', () => {
    cy.checkAccessibility()
  })
})