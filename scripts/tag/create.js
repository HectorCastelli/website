import fs from 'node:fs';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

console.log("Let's create a new tag entry")

const rl = readline.createInterface({ input, output });

const title = await rl.question('What is the name of the tag? ');

const fileContents = `---
name: "${title}"
---
`

try {
  fs.writeFileSync(`./src/content/tag/${title.toLocaleLowerCase().replaceAll(/[^a-z]/ig,'-')}.md`, fileContents);
  console.log('Tag created with success')
  // file written successfully
} catch (err) {
  console.error(err);
}

rl.close();
