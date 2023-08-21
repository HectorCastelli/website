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

Blog posts that are set to future date are considered "drafts", and will be excluded from the list of available posts. However, their permalinks are still available, and can therefore be shared with others (which is useful for feedback). This also means that the draft posts are available on the sitemap, and therefore for SEO.

The ideal workflow for new articles is to publish them as drafts into a separate PR. This allows for comments in-place thanks to Github's review tools. This is the only way to avoid new articles from showing on the sitemap or to SEO.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                                              |
| :------------------------ | :------------------------------------------------------------------ |
| `npm install` or `npm ci` | Install dependencies                                                |
| `npm run astro ...`       | Runs CLI commands like `astro add` or `astro check`                 |
| `npm run start`           | Starts local dev server at [localhost:3000](http://localhost:3000/) |
| `npm run dev`             | Starts the local dev server and run test suites continuously        |
| `npm run build`           | Builds the website for production into the `./dist/` folder         |
| `npm run test`            | Runs all tests suites                                               |

Some of these commands have sub-steps that execute extra functionality. They can be called individually by their name:

<details>
  <summary>Sub-commands</summary>


  | Command         | Sub-command                 | Action                                                                      |
  | :-------------- | :-------------------------- | :-------------------------------------------------------------------------- |
  | `npm install`   | `npm run postinstall:sync`          | Sync content types for astro types                                          |
  |                 | `npm run postinstall:feed`          | Downloads [rss feed styling](feed.xsl) for users browsing the url           |
  | `npm run build` | `npm run prebuild:diagrams`         | Renders all diagrams in the `./public` directory (`.mmd` become `.mmd.svg`) |
  |                 | `npm run postbuild:update-fixtures` | Updates fixtures for the end-to-end tests                                   |
  | `npm run dev`   | `npm run dev:server`                | Same as `npm run start`                                                     |
  |                 | `npm run dev:test:unit`             | Runs the unit tests and watches for file changes                            |
  |                 | `npm run dev:test:e2e`              | Runs the end-to-end tests and watches for file changes                      |
  | `npm run test`  | `npm run test:unit`                 | Runs the unit tests                                                         |
  |                 | `npm run test:e2e`                  | Runs the end-to-end tests. This runs `npm run build` before executing       |
</details>


### Helpers: creating content

These commands will ask for input and create the appropriate files with the correct format.

| Command                  | Action                                           |
| :----------------------- | :----------------------------------------------- |
| `npm run create:blog`    | Create a new entry in the blog with today's date |
| `npm run create:tag`     | Create a new tag                                 |
| `npm run create:project` | Create a new project entry                       |

[feed.xsl]: https://github.com/genmon/aboutfeeds/blob/main/tools/pretty-feed-v3.xsl