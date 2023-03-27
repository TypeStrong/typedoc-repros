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

# You can add additional commands here to make assertions on the output,
# if TypeDoc's output doesn't match what you expected. Here's one example
# checking that the name from package.json is used in TypeDoc's output.

test $(jq '.name' docs/docs.json) = '"typedoc-repros"'
test $(jq '.children[1].children[1].signatures[0].parameters[0].type.typeArguments[1].type' docs/docs.json) = '"intrinsic"'
test $(jq '.children[1].children[1].signatures[0].parameters[0].type.typeArguments[1].name' docs/docs.json) = '"string"'