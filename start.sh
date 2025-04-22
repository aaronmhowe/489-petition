#!/bin/bash

cd app
npm start &
BACKEND_PID=$!

cd ../react-frontend
npm start &
FRONTEND_PID=$!

wait $BACKEND_PID $FRONTEND_PID