#!/usr/bin/env bash

# Automatically exit with an error code if any command fails
set -e

# Install package.json dependencies
pnpm install

# Build TypeScript
pnpm run -r build

# Run TypeDoc
pnpm exec typedoc

