#!/usr/bin/env bash

# Automatically exit with an error code if any command fails
set -e

# Install package.json dependencies
npm install

# Compile, since foo depends on bar
npx tsc --build

# Run TypeDoc
npx typedoc
