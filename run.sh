#!/usr/bin/env bash

# Automatically exit with an error code if any command fails
set -e

# Install package.json dependencies
yarn

# Run TypeDoc
yarn typedoc

echo
echo ========================================================
echo

# Print commands before running them, to make CI output easier to understand
set -v

node -e 'console.dir(JSON.parse(fs.readFileSync("docs/docs.json")).children[0].children[1].type.declaration.signatures[0].comment, { depth: 10 })'
