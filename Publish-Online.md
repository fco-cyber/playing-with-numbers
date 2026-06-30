# Launch Mayah's Rainbow Reef as a web app

This bundle is a complete web app. Hosting it over **https** (GitHub Pages) gives you a permanent link, reliable speaking voices on every device/browser, offline support, and the ability to **install it to a home screen** like a normal app.

> Important: upload **all the files together**, with **`index.html` at the repository root** (not inside a sub-folder). The app, manifest, service worker and icons must sit side by side.

---

## GitHub Pages (permanent link)

1. Sign in at <https://github.com> (free account if needed).
2. **New repository** → name it e.g. `rainbow-reef` → **Public** → **Create repository**.
3. On the repo page: **Add file → Upload files**. Select **every file in this folder** (index.html, manifest.webmanifest, sw.js, the three icons, .nojekyll, and the guides) and drop them in. **Commit changes**.
   - Tip: if you can't see `.nojekyll`, it's optional but helpful — you can skip it.
4. **Settings → Pages → Build and deployment → Source: Deploy from a branch**, choose **`main`** branch and **`/(root)`**, then **Save**.
5. Wait ~1 minute. Your app is live at:
   **`https://YOUR-USERNAME.github.io/rainbow-reef/`**
6. Open that link on Mayah's tablet → browser menu → **Add to Home Screen**. It now opens full-screen like an app and works offline.

## Updating it later
Upload a new `index.html` over the old one. The service worker fetches the latest version automatically the next time it's online (you may need to close and reopen the app once).

## No-GitHub alternative (fastest)
Drag **all the files together** onto <https://app.netlify.com/drop> → instant public link. Make a free Netlify account to keep it permanent.

---

## After it's live — hearing the voice
Open the app in **Safari** on the Mac/iPad and tap a number — you'll hear the device's natural voice say it. (Chrome on macOS has a bug that keeps its voices silent, so prefer Safari.) Tap 🔊 to mute/unmute all sound.
