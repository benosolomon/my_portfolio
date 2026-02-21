# Deployment Guide: GitHub Pages

This document outlines the steps taken to deploy this Angular portfolio application to GitHub Pages.

## 🚀 Deployment Steps Taken

### 1. Tool Installation
We used the `angular-cli-ghpages` tool, which is the standard way to deploy Angular apps to GitHub Pages.
```bash
npm install angular-cli-ghpages --save-dev
```

### 2. Configure Build & Deploy Scripts
We updated the `package.json` to include a custom deployment command. This command ensures the application is built with the correct "Base HREF" (which is necessary for GitHub Pages sub-folder hosting).

In `package.json`:
```json
"scripts": {
  "deploy": "ng build --base-href /my_portfolio/ && npx angular-cli-ghpages --dir dist/portfolio/browser"
}
```

### 3. Build and Push
Running the command below does two things:
1.  **Builds** the project into the `dist/` folder.
2.  **Pushes** only the built files to a dedicated branch named `gh-pages`.
```bash
npm run deploy
```

### 4. GitHub Repository Configuration
To make the site visible, the following manual steps were performed in the GitHub UI:
1.  **Repository Visibility**: Changed from *Private* to *Public*.
2.  **GitHub Pages Activation**:
    *   Went to **Settings > Pages**.
    *   Set **Source** to "Deploy from a branch".
    *   Set **Branch** to `gh-pages` and folder to `/(root)`.
    *   Saved the settings.

---

## 🔄 How to Update Your Site
Whenever you make changes to your portfolio and want to update the live website, simply run:

```bash
npm run deploy
```

This will automatically rebuild your app and push the latest version to GitHub. It usually takes 1-2 minutes for the changes to appear online.

## 🔗 Live Link
Your portfolio is live at: [https://benosolomon.github.io/my_portfolio/](https://benosolomon.github.io/my_portfolio/)
