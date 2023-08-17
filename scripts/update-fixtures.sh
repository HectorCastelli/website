#!/usr/bin/env bash
npm run build
cp ./dist/blog.json ./cypress/fixtures/
cp ./dist/tag.json ./cypress/fixtures/