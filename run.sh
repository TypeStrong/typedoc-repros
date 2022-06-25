#!/usr/bin/env bash

# Install package.json dependencies
yarn

# Run TypeDoc
yarn typedoc

echo "Process exited with code: $?"
echo
echo
