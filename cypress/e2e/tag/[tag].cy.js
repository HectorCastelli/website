describe("tag pages", () => {
    const { tags } = require('../../fixtures/tag.json')

    tags.forEach(tag => {
        describe(`tag page: ${tag}`, () => {
            let page;
            beforeEach(() => {
                page = cy.visit(`/tag/${tag}`)
            })
            it('Has no detectable a11y violations on load', () => {
                cy.checkAccessibility()
            })
        })
    })

})