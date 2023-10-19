#!/usr/bin/env bash
mkdir -p ./cypress/fixtures
cp ./dist/blog.json ./cypress/fixtures/
cp ./dist/tag.json ./cypress/fixtures/
cp ./dist/resume.json ./cypress/fixtures/
