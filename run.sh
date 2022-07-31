#!/usr/bin/env bash

# Automatically exit with an error code if any command fails
set -e

# Install package.json dependencies
pnpm install

# Compile, since foo depends on bar
pnpm tsc --build

# Run TypeDoc
pnpm typedoc

echo
echo ========================================================
echo
