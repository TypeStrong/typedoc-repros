#!/usr/bin/env bash

# Automatically exit with an error code if any command fails
set -e

# Install package.json dependencies
yarn

yarn tsc -p packages/interfaces

# Run TypeDoc
yarn typedoc
