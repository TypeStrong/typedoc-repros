#!/usr/bin/env bash

# Automatically exit with an error code if any command fails
set -e

# Install package.json dependencies
npm ci

# Run TypeDoc
npm run build
npm run docs
