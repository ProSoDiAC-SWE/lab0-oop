# GitHub Pages configuration

## Deploy Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

## Repository Settings

Make sure to configure the repository settings:

1. Go to **Settings** → **Pages**
2. Set **Source** to "Deploy from a branch"
3. Select **gh-pages** branch
4. Set **Folder** to "/ (root)"

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file in the `public` folder with your domain
2. Configure DNS settings to point to GitHub Pages
3. Enable "Enforce HTTPS" in repository settings

## Troubleshooting

- If deployment fails, check that the repository is public
- Make sure the `homepage` field in `package.json` matches your GitHub Pages URL
- Verify that `gh-pages` package is installed as a dev dependency
