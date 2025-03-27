@echo off

cd app || exit /b 1

if not exist "node_modules\" (
    echo Installing Node Dependencies
    call npm install
)

echo Starting Application
call npx nodemon ./bin/www