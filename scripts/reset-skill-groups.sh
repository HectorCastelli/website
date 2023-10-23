#!/usr/bin/env bash
for d in `ls ./src/content/skill/`
do
    echo "Resetting $d"
    for f in `ls ./src/content/skill/$d`
    do
        echo $d/$f
        perl -pi -e "s/category: (.*)/category: $d/g" "./src/content/skill/$d/$f"
    done
done