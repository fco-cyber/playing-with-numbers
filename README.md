# 🌈 Mayah's Rainbow Reef

A colourful, sound-rich maths **web app** for a 7-year-old learning to count and build number bonds. It installs to a home screen, runs full-screen, and works offline once opened.

**▶ Live app:** _add your GitHub Pages link here after publishing, e.g._ `https://YOUR-USERNAME.github.io/rainbow-reef/`

## Launch it as a web app (GitHub Pages)
1. Create a **public** repository on GitHub (e.g. `rainbow-reef`).
2. Upload **all the files in this folder to the repository root** (so `index.html` sits at the top level — not inside a sub-folder).
3. Go to **Settings → Pages → Build and deployment → Source: Deploy from a branch → `main` / `/(root)` → Save**.
4. Wait ~1 minute, then open `https://YOUR-USERNAME.github.io/rainbow-reef/`.
5. On a tablet, use the browser's **Add to Home Screen** to install it as an app.

(Prefer no GitHub? Drag **all these files together** onto <https://app.netlify.com/drop> for an instant link.)

## Files (upload all of them, together, at the repo root)
| File | Purpose |
|------|---------|
| `index.html` | The app itself. |
| `manifest.webmanifest` | Makes it installable (name, icons, full-screen). |
| `sw.js` | Service worker — offline support + auto-updates. |
| `icon-192.png`, `icon-512.png` | App icons. |
| `apple-touch-icon.png` | Home-screen icon for iPad/iPhone. |
| `.nojekyll` | Tells GitHub Pages to serve the files as-is. |
| `Publish-Online.md` | Detailed publishing steps. |
| `Parent-Guide.md` | How each activity targets Mayah's learning goals. |

> The web-app features (offline, install) only work when the app is served over **https** (GitHub Pages, Netlify, etc.). Opening `index.html` directly from disk still runs the app, just without install/offline.

## What it teaches
Counting up & down on a hundreds chart, finding numbers and their neighbours, counting forward/back on a number line, number bonds to 5/10/20/100, counting to 1000, plus stories and a treasure/sticker reward system.

## Sound & voice
Numbers are spoken aloud *and* play as gentle musical notes. Tap **🗣️** (top-right) to choose the device's talking voice (ones marked **• offline** work everywhere) and press **▶ Test**. Tap **🔊** to mute.

---
Made with care for Mayah. 🐠🦄🌈
