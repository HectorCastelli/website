describe("resume pages", () => {
    const { resumes } = require('../../fixtures/resume.json')

    resumes.forEach(resume => {
        describe(`resume page: ${resume}`, () => {
            beforeEach(() => {
                cy.visit(`/resume/${resume}`)
            })
            it('has no detectable a11y violations on load', () => {
                cy.checkAccessibility()
            })
        })
    })

})