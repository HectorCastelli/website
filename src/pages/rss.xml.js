import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

import Config from "@config";
const { author, description} = Config;


import {getAllBlogPosts} from "@lib/blogs";

export async function get(context) {
    const blog = await getAllBlogPosts();
  return rss({
    title: `gohector - ${author}`,
    description: description,
    site: context.site,
    items: blog.map((post) => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        customData: post.data.customData,
        link: `/blog/${post.slug}/`,
      })),
    customData: `
    <language>en-us</language>
    <atom:link href="${context.site}/rss.xml" rel="self" type="application/rss+xml" />
    `,
    xmlns: { atom: 'http://www.w3.org/2005/Atom' },
    stylesheet: '/pretty-feed-v3.xsl',
  });
}