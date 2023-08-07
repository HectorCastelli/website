#!/usr/bin/env bash
for f in $(find ./public/images -name '*.mmd');
do
    echo "Rendering $f"
    ./node_modules/.bin/mmdc --input $f --outputFormat svg -b transparent --quiet
done
