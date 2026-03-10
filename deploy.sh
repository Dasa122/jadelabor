#!/bin/sh
set -e

cd /app/dist

rm -rf .git
git init
git config user.name "Deploy Bot"
git config user.email "deploy@jadelabor"
git checkout -b gh-pages
git add -A
git commit -m "Deploy $(date -u '+%Y-%m-%d %H:%M:%S UTC')"

REPO_URL="https://${GITHUB_TOKEN}@github.com/${GITHUB_REPO}.git"
git remote add origin "$REPO_URL"
git push -f origin gh-pages

echo ""
echo "========================================"
echo "  Deployed to GitHub Pages!"
echo "  https://${GITHUB_REPO%%/*}.github.io/${GITHUB_REPO##*/}/"
echo "========================================"
