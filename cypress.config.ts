import { defineConfig } from 'cypress'

export default defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    baseUrl: "http://localhost:4321",
    setupNodeEvents(on, _config) {
      on('task', {
        log: (message) => {
          console.log(message)
          return null
        },
        table: (message) => {
          console.table(message)
          return null
        },
      })
    },
  },
})