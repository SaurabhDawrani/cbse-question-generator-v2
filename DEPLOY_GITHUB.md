# Quick GitHub Deployment Guide

## Step 1: Create New Repository
1. Go to https://github.com/new
2. Repository name: `cbse-question-generator-v2` (or any name you prefer)
3. Description: "CBSE Question Paper Generator for Classes 1-12"
4. Set to **Public**
5. **DO NOT** initialize with README
6. Click "Create repository"

## Step 2: Upload Files
1. On the new repository page, click "uploading an existing file"
2. Drag ALL files from the `cbse-generator-fresh` folder:
   - index.html
   - script.js
   - styles.css
   - questions-bank.js
   - class-subjects.js
   - manifest.json
   - sw.js
   - icon-192.png
   - icon-512.png
   - README.md
3. Commit message: "Initial commit - working CBSE question generator"
4. Click "Commit changes"

## Step 3: Enable GitHub Pages
1. Go to Settings → Pages
2. Source: Deploy from a branch
3. Branch: main
4. Folder: / (root)
5. Click Save

## Step 4: Access Your Site
- Wait 2-3 minutes
- Your site: `https://[your-username].github.io/cbse-question-generator-v2/`

## Testing
1. Select a class (e.g., Class 5)
2. Select a subject (e.g., Mathematics)
3. Select chapters
4. Click "Generate Question Paper"

## Notes
- This is the stable version from commit 9dc3201
- MCQ placeholder issue exists but generation works
- All classes and subjects included