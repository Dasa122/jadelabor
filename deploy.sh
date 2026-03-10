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

CNAME_DOMAIN=$(cat /app/public/CNAME)

echo ""
echo "========================================"
echo "  Deployed to GitHub Pages!"
echo "  https://${CNAME_DOMAIN}/"
echo "========================================"
