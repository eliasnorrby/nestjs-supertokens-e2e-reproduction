#!/usr/bin/env bash

if curl -s http://localhost:3000 | grep -q "Hello World"; then
  echo "[x] Application is healthy"
else
  echo "[ ] Application is not healthy"
  exit 1
fi

if curl -s http://localhost:3567 | grep -q "Hello"; then
  echo "[x] SuperTokens core is healthy"
else
  echo "[ ] SuperTokens core is not healthy"
  exit 1
fi

if curl -s -X POST http://localhost:3000/auth/signin | grep -q "404"; then
  echo "[ ] SuperTokens NOT reachable through backend"
  exit 1
else
  echo "[x] SuperTokens reachable through backend"
fi
