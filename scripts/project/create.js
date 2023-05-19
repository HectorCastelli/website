import fs from 'node:fs';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

console.log("Let's create a new project entry")

const rl = readline.createInterface({ input, output });

const name = await rl.question('What is the name of the project? ');

const fileContents = `---
name: "${name}"
url: ""
image: ""
description: ""
status: "ongoing"
status: "completed"
status: "abandoned"
---
`

try {
  fs.writeFileSync(`./src/content/project/${name.toLocaleLowerCase().replaceAll(/[^a-z]/ig,'-')}.md`, fileContents);
  console.log('Project created with success')
  // file written successfully
} catch (err) {
  console.error(err);
}

rl.close();
