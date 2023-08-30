describe("blog pages", () => {
    const { posts } = require('../../fixtures/blog.json')

    posts.forEach(post => {
        describe(`blog page: ${post}`, () => {
            let page;
            beforeEach(() => {
                page = cy.visit(`/blog/${post}`)
            })
            it('has social media image', () => {
                page.get('head meta[property=og:image]')
                    .should('have.attr', 'content')
                    .should('include', 'opengraph/')
                page.get('head meta[name=twitter:card]')
                    .should('have.attr', 'content')
                page.get('head meta[name=twitter:image]')
                    .should('have.attr', 'content')
                    .should('include', 'opengraph/')

                page.get('head meta[property=og:image]')
                    .invoke('attr', 'content')
                    .then((imagePath) => cy.request(imagePath).it('status').should('eq', 200))
            })
            it('has no detectable a11y violations on load', () => {
                cy.checkAccessibility()
            })
        })
    })

})