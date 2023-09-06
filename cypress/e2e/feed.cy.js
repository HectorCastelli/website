import config from "@config";

describe("RSS feed", () => {
  let page
  beforeEach(() => {
    page = cy.visit('/rss.xml')
  })

  it('titles are correct', () => {
    page.get('title').should('have.text', config.title)
  });

  it('has no detectable a11y violations on load', () => {
    cy.checkAccessibility()
  })
})