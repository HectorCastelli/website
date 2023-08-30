import config from "@config";

describe("index page", () => {
  let page
  beforeEach(() => {
    page = cy.visit('/')
  })

  it('titles are correct', () => {
    page.get('title').should('have.text', config.title)
  });
  
  it('announcement has correct visibility', () => { 
    if (config.announcement) {
      page.get("#announcement")
    } else {
      page.not("#announcement")
    }
  })

  it('Has no detectable a11y violations on load', () => {
    cy.checkAccessibility()
  })
})