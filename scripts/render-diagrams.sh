#!/usr/bin/env bash
shopt -s globstar nullglob
for f in public/**/*.mmd
do
    echo "Rendering $f"
    ./node_modules/.bin/mmdc \
        --input "$f" \
        --outputFormat svg \
        --backgroundColor transparent \
        --theme neutral \
        --width 1024 \
        --quiet
done
