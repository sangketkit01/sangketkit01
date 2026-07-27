# Thiraphat Sangketkit — Portfolio

Static React + Vite version of the portfolio, prepared for GitHub Pages.

## Run locally

```bash
npm install
npm run dev
```

## Deploy with GitHub Pages

1. Create a new GitHub repository.
2. Upload or push every file in this project to the `main` branch.
3. Open **Settings → Pages** in the repository.
4. Under **Build and deployment**, choose **GitHub Actions** as the source.
5. Open the **Actions** tab and wait for `Deploy portfolio to GitHub Pages`.

The included workflow installs dependencies, builds the static site, and
publishes the generated `dist` directory automatically after each push to
`main`.

## Production build

```bash
npm install
npm run build
npm run preview
```
