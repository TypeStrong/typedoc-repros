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

test $(jq '.children[0].signatures[0].comment.summary[0].text' docs/docs.json) = '"my-written-docs-here"'
