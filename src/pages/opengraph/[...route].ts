import { baseImageOptions } from '@lib/open-graph';
import { OGImageRoute } from 'astro-og-canvas';

const BLOG_ROUTE = '/content/blog';
const TAG_ROUTE = '/content/tag';

export const pathToSlug = (path: string) => {
  path = path.replace(/^\/src\/pages\//, '');
  path = path.replace(/^\/src\/content\//, '');
  path = path.replace(/\.[^\.]*$/, '') + '.png';
  path = path.replace(/\/index\.png$/, '.png');
  return path;
};

export const { getStaticPaths, get } = OGImageRoute({
  param: 'route',

  pages: await import.meta.glob('/src/content/(blog|tag)/**/*.md', { eager: true }),

  getImageOptions: (path, page) => ({
    ...baseImageOptions,
    title: getTitleFromPage(page),
    description: getDescriptionFromPage(page),
  }),
  getSlug: pathToSlug,
});

function getTitleFromPage(page: { file: string, frontmatter: { name?: string; title?: string; }; }): string {
  switch (true) {
    case page.file.includes(TAG_ROUTE):
      return `Tags: ${page.frontmatter.name!}`
    case page.file.includes(BLOG_ROUTE):
      return page.frontmatter.title!

    default:
      console.error("No title found!");
      return ""
  }
}
function getDescriptionFromPage(page: { file: string, rawContent: () => string; frontmatter: { description?: string; } }): string {
  switch (true) {
    case page.file.includes(TAG_ROUTE):
      return page.rawContent()
    case page.file.includes(BLOG_ROUTE):
      return page.frontmatter.description!

    default:
      console.error("No description found!");
      return ""
  }
}