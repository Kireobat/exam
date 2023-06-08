#!/bin/bash

# Git pull
git pull

# NPM install
npm install

# NPM run build
npm run build

# Run index.js
node build/index.js
