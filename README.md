# website

My [personal website](https://gohector.com), as well as the contents that powers it.

## Useful links

[Analytics](https://analytics.umami.is/share/4JOEokFotSrQAsr4/GoHector) tracked with [Umami](https://umami.is/).

[Web mentions](https://webmention.io/api/mentions.html?token=RDJRXtZAj4QOKaiMWxgtXQ)(or [rss](https://webmention.io/api/mentions.html?token=RDJRXtZAj4QOKaiMWxgtXQ)) tracked with [webmention.io](https://webmention.io/).

## Stack:

- Hosted on [github pages](https://pages.github.com/)
- Domain provided by [gandi.net](https://www.gandi.net/)
- Website built with [Astro](https://astro.build/)
- Tests use [vitest](https://vitest.dev/)
- End-to-end tests use [cypress](https://www.cypress.io/)
  - Accessibility tests are provided by the [Axe Accessibility Testing Tools](https://www.deque.com/axe/).
- Diagrams created with [mermaid.js](https://mermaid.js.org/)

## Conventions

Blog posts that are set to future date are considered "drafts", and will be excluded from the list of available posts. However, their permalinks are still available, and can therefore be shared with others (which is useful for feedback). This also means that the draft posts are available on the sitemap.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                  | Action                                                |
| :----------------------- | :---------------------------------------------------- |
| `npm install`            | Installs dependencies                                 |
| `npm run dev`            | Starts local dev server at `localhost:3000`           |
| `npm run sync`           | Syncs the types definitions for contents              |
| `npm run build`          | Build your production site to `./dist/`               |
| `npm run build:diagrams` | Build diagrams files into their svg                   |
| `npm run preview`        | Preview your build locally, before deploying          |
| `npm run test`           | Tests the website (but mostly some library functions) |
| `npm run astro ...`      | Run CLI commands like `astro add`, `astro check`      |

### Helpers: creating content

These commands will ask for input and create the appropriate files with the correct format.

| Command                  | Action                                           |
| :----------------------- | :----------------------------------------------- |
| `npm run create:blog`    | Create a new entry in the blog with today's date |
| `npm run create:tag`     | Create a new tag                                 |
| `npm run create:project` | Create a new project entry                       |
