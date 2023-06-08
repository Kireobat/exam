#!/bin/bash

# Remove exam.db
rm src/lib/data/exam.db
echo "Removed src/lib/data/exam.db"

# Git pull
git pull

# NPM install
npm install

# NPM run build
npm run build

# Run index.js
node build/index.js
