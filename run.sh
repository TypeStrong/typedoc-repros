#!/usr/bin/env bash

# Install a specific version of node
n lts

# Install package.json dependencies
yarn

# Run TypeDoc
yarn typedoc

echo "Process exited with code: $?"
echo
echo
