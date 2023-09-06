describe("tag pages", () => {
    const { tags } = require('../../fixtures/tag.json')

    tags.forEach(tag => {
        describe(`tag page: ${tag}`, () => {
            beforeEach(() => {
                cy.visit(`/tag/${tag}`)
            })
            it('has no detectable a11y violations on load', () => {
                cy.checkAccessibility()
            })
        })
    })

})