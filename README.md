# Uri's home page

Plain HTML + CSS, no build step. Works on GitHub Pages as-is.

```
index.html        English home page (about, socials, apps, stories teaser)
stories.html      Hebrew short stories (RTL)
assets/style.css  All styles (light + automatic dark mode)
assets/main.js    Small enhancements (scroll reveal, story deep links)
assets/favicon.svg
.nojekyll         Tells GitHub Pages to serve files untouched
```

## Fill in before publishing

Search the files for `EDIT` and `YOUR_HANDLE`:

- Instagram / Facebook / LinkedIn URLs (in `index.html` and in both footers)
- `PACKAGE_ID` for **Mazefire** and **Memory Calculator** (Play Console → app → package name)
- One-line descriptions for Mazefire and Memory Calculator
- The About text
- Real app icons (optional): put PNGs in `assets/icons/` and swap each `<svg>` inside `.app-icon` for
  `<img src="assets/icons/orbitfire.png" alt="">`

## Adding a story

In `stories.html`, copy one whole `<details class="story">…</details>` block, give it a new `id`
(`story-4`), and change the number, title, excerpt, reading time and paragraphs.
Each story can be linked directly: `https://<username>.github.io/stories.html#story-4`.

## Publish on GitHub Pages

1. Create a public repo named **`<your-github-username>.github.io`**.
2. Upload / push everything in this folder to the `main` branch (root).
3. Repo → **Settings → Pages** → Source: *Deploy from a branch* → `main` / `/ (root)` → Save.
4. After a minute the site is live at `https://<your-github-username>.github.io`.

Custom domain later? Add it under Settings → Pages; GitHub creates a `CNAME` file for you.
