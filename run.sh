#!/usr/bin/env bash

# Automatically exit with an error code if any command fails
set -e

corepack enable
corepack prepare --activate pnpm@8.9.2

# Install package.json dependencies
pnpm install

# Build TypeScript
pnpm run -r build

# Run TypeDoc
pnpm exec typedoc

