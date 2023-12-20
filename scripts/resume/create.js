import fs from 'node:fs';
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

console.log("Let's create a new resume entry")

const rl = readline.createInterface({ input, output });

const name = await rl.question('What is the name of the resume? ');

const fileContents = `---
title: ${name}
experience: ${fs.readdirSync('./src/content/experience').map(filePathToContentId).reduce(toYamlList, "")}
education: ${fs.readdirSync('./src/content/education').map(filePathToContentId).reduce(toYamlList, "")}
awards: ${fs.readdirSync('./src/content/award').map(filePathToContentId).reduce(toYamlList, "")}
skills: ${fs.readdirSync('./src/content/skill').flatMap(s=>fs.readdirSync(`./src/content/skill/${s}`).map(f=>`${s}/${f}`)).map(filePathToContentId).reduce(toYamlList, "")}
---

`

try {
  fs.writeFileSync(`./src/content/resume/${name.toLocaleLowerCase().replaceAll(/[^a-z]/ig, '-')}.md`, fileContents);
  console.log('Resume created with success')
  // file written successfully
} catch (err) {
  console.error(err);
}

rl.close();

function filePathToContentId(filePath) {
    return filePath.split('.').shift();
}

function toYamlList(r,i) {
        return `${r}\n  - ${i}`
    }