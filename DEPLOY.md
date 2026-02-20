# Manual Deployment to GitHub Pages

Since you need to deploy as the `ltthome` account, here's how to do it manually:

## Option 1: Deploy via GitHub Web Interface

1. Go to https://github.com/ltthome/lucky-draw/settings/pages

2. Under "Build and deployment":
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `(root)`
   - Click Save

3. Upload the built files:
   - The built files are in the `dist` folder
   - Create a new branch called `gh-pages`:
     ```bash
     cd dist
     git init
     git checkout -b gh-pages
     git add -A
     git commit -m "Deploy to GitHub Pages"
     ```

4. Push to GitHub (you'll need to authenticate as ltthome):
   ```bash
   git push -f https://github.com/ltthome/lucky-draw.git gh-pages
   ```

## Option 2: Use GitHub's Actions (Automated)

1. Go to https://github.com/ltthome/lucky-draw
2. Click "Actions" tab
3. Search for "Static HTML" or "GitHub Pages" workflow
4. Set up the workflow to build and deploy automatically on push

## Option 3: Quick Manual Upload

1. Go to https://github.com/ltthome/lucky-draw
2. Create a new branch: `gh-pages`
3. Upload these files from the `dist` folder:
   - `index.html`
   - `assets/` folder (entire folder with all files)

4. Go to Settings > Pages > Set source to `gh-pages` branch

## After Deployment

Your app will be available at: **https://ltthome.github.io/lucky-draw**

It may take a few minutes for GitHub Pages to build and deploy.
