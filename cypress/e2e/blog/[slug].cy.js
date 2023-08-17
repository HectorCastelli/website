describe("blog pages", () => {
    const { posts } = require('../../fixtures/blog.json')

    posts.forEach(post => {
        describe(`blog page: ${post}`, () => {
            let page;
            beforeEach(() => {
                page = cy.visit(`/blog/${post}`)
            })
            it('Has no detectable a11y violations on load', () => {
                cy.checkAccessibility()
            })
        })
    })

})