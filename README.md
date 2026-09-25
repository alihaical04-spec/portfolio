# Rahat Ali — Portfolio

Modern multi-page portfolio website for **Rahat Ali**, Frontend Web Developer.

## ✨ Features

- Multi-page routing (Home, About, Skills, Projects, Contact)
- Dark, modern UI with Tailwind CSS
- Smooth animations with Framer Motion
- Fully responsive
- Skill icons via skillicons.dev
- Clean TypeScript + React architecture
- **Ready for one-click Netlify deploy**

## 🛠️ Tech Stack

- **React 19** + **TypeScript**
- **Vite**
- **Tailwind CSS v4**
- **React Router**
- **Framer Motion**
- **Lucide React**

## 🚀 Getting Started (Local)

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## 🌐 Deploy on Netlify (Recommended)

This repo is pre-configured for Netlify.

### Option A — One-click from GitHub

1. Go to [app.netlify.com](https://app.netlify.com) and sign in with GitHub
2. **Add new site** → **Import an existing project**
3. Select the repo: `alihaical04-spec/portfolio`
4. Netlify will auto-detect settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**

Done. You’ll get a free URL like `https://your-site.netlify.app`.

Every push to `main` will auto-redeploy.

### Option B — Drag & drop

```bash
npm run build
```

Then drag the `dist` folder into [Netlify Drop](https://app.netlify.com/drop).

### SPA routing

`netlify.toml` and `public/_redirects` ensure routes like `/about` and `/projects` work on refresh (no 404).

## 📁 Structure

```
src/
├── components/   # Navbar, Footer, Layout
├── pages/        # Home, About, Skills, Projects, Contact
├── data/         # Content & project data
└── ...
netlify.toml      # Netlify build + redirects
public/_redirects # SPA fallback
```

## 👤 Author

**Rahat Ali**  
Frontend Web Developer · Vibe Coding  
[GitHub](https://github.com/alihaical04-spec) · alihaical04@gmail.com

---

Built with ❤️ and good vibe.
