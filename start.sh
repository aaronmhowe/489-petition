#!/bin/bash

cd app || { exit 1; }

if [ ! -d "node_modules" ]; then
    echo "Installing Node Dependencies"
    npm install
fi

if ! command -v npx &> /dev/null; then
    echo "Installing Nodemon"
    npm install -D nodemon
fi

echo "Starting Application"
npx nodemon ./bin/www