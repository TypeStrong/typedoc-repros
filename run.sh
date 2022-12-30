#!/usr/bin/env bash

# Automatically exit with an error code if any command fails
set -e

# Install package.json dependencies
npm install

# Compile, since foo depends on bar
npx tsc --build

# Run TypeDoc
mkdir -p .typedoc
echo "*" > .typedoc/.gitignore
for f in packages/*; do
    npx typedoc --entryPointStrategy resolve \
        --json ".typedoc/${f##*/}.json" \
        --validation false \
        --readme none \
        --tsconfig "$f/tsconfig.json" \
        "$f/src/index.ts"
done
npx typedoc --entryPointStrategy merge ".typedoc/*.json"
