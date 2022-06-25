#!/usr/bin/env bash

# Automatically exit with an error code if any command fails
set -e

# Print commands before running them, to make CI output easier to understand
set -v

# Install package.json dependencies
yarn

# Run TypeDoc
yarn typedoc

# You can add additional commands here to make assertions on the output,
# here's one example checking that the name from package.json is used
# in TypeDoc's output.

test $(jq '.name' docs/docs.json) = '"typedoc-repros"'
