#!/usr/bin/env bash
npm run build
mkdir -p ./cypress/fixtures
cp ./dist/blog.json ./cypress/fixtures/
cp ./dist/tag.json ./cypress/fixtures/