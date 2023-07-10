import fs from 'node:fs';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

console.log("Let's create a new blog entry")

const rl = readline.createInterface({ input, output });

const title = await rl.question('What is the title of the post? ');

const fileContents = `---
title: "${title}"
pubDate: ${new Date().toISOString().substring(0, 10)}
description: ""
tags: []
---
`

try {
  fs.writeFileSync(`./src/content/blog/${title.toLocaleLowerCase().replaceAll(/[^a-z]/ig, '-')}.md`, fileContents);
  console.log('Post created with success')
  // file written successfully
} catch (err) {
  console.error(err);
}

rl.close();
