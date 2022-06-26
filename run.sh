#!/usr/bin/env bash

# Automatically exit with an error code if any command fails
set -e

# Install package.json dependencies
yarn

# Run TypeDoc
yarn typedoc && exit 1 || echo
