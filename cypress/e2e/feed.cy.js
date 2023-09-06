import config from "@config";

describe("RSS feed", () => {
  let page
  beforeEach(() => {
    page = cy.request('/rss.xml')
  })

  it('titles are correct', () => {
    page.get('title').should('have.text', config.title)
  });
})