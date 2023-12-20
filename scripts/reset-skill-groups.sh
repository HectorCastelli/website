#!/usr/bin/env bash
shopt -s globstar nullglob
for f in src/content/skill/**/*.yaml
do
    echo "Resetting $f"
    if [[ $f =~ src\/content\/skill\/([^\/]+)\/[^\/]+\.yaml ]]; then
        category="${BASH_REMATCH[1]}"
        echo "Category: $category"
        perl -pi -e "s/category: (.*)/category: $category/g" "$f"
    else
        echo "Pattern not found in the string."
    fi
done