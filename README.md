# CBSE Question Paper Generator

A web-based tool to generate CBSE question papers for classes 1-12 with customizable options.

## Features
- Support for all classes (1-12)
- All subjects with NCERT-based questions
- Customizable difficulty levels
- MCQ, Short Answer, and Long Answer questions
- Answer sheet generation
- Mobile responsive design
- PWA support for offline use

## Deployment Instructions

### GitHub Pages Deployment

1. Create a new repository on GitHub
2. Upload all files from this folder
3. Go to Settings → Pages
4. Select Source: Deploy from a branch
5. Select Branch: main, Folder: / (root)
6. Click Save
7. Your site will be available at: https://[username].github.io/[repository-name]/

### Files Included
- index.html - Main application
- script.js - Application logic
- styles.css - Styling
- questions-bank.js - Question database
- class-subjects.js - Class and subject mappings
- manifest.json - PWA configuration
- sw.js - Service worker for offline support

## Known Issues
This is the stable version before MCQ enhancement attempts. MCQ options may show placeholder text for some subjects.

## Version
v1.0 - Stable Release (Commit: 9dc3201)