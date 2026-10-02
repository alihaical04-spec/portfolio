# Rahat Ali — Portfolio

Modern multi-page portfolio website for **Rahat Ali**, Frontend Web Developer.

**Live Demo:** [https://hikalwebsite.netlify.app/](https://hikalwebsite.netlify.app/)

## ✨ Features

- **Dark / Light mode** with system preference detection and localStorage persistence
- **Smooth page transitions** powered by Framer Motion
- **Project filtering & search** (by category and keyword)
- **Working contact form** (Formspree-ready + mailto fallback)
- Multi-page routing (Home, About, Skills, Projects, Contact + 404)
- Fully responsive design
- Scroll-to-top button
- SEO meta tags & Open Graph
- Clean TypeScript + React architecture
- Ready for one-click Netlify deploy

## 🛠️ Tech Stack

- **React 19** + **TypeScript**
- **Vite**
- **Tailwind CSS v4**
- **React Router**
- **Framer Motion**
- **Lucide React**

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## 📧 Contact Form Setup

The contact form uses [Formspree](https://formspree.io).

1. Create a free account at formspree.io
2. Create a new form and copy the form ID
3. Open `src/components/ContactForm.tsx`
4. Replace `YOUR_FORMSPREE_ID` with your form ID

Until configured, the form falls back to opening the user's email client via `mailto:`.

## 🌐 Deploy on Netlify

This repo is pre-configured for Netlify.

1. Go to [app.netlify.com](https://app.netlify.com) and sign in with GitHub
2. **Add new site** → **Import an existing project**
3. Select the repo: `alihaical04-spec/portfolio`
4. Netlify auto-detects settings from `netlify.toml`
5. Click **Deploy site**

Every push to `main` will auto-redeploy.

## 📁 Structure

```
src/
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Layout.tsx
│   ├── ThemeToggle.tsx
│   ├── ProjectCard.tsx
│   ├── ContactForm.tsx
│   └── ScrollToTop.tsx
├── context/
│   └── ThemeContext.tsx
├── data/
│   └── content.ts
├── hooks/
│   └── useScrollToTop.ts
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── NotFound.tsx
└── ...
```

## 👤 Author

**Rahat Ali**  
Frontend Web Developer · Vibe Coding  
[GitHub](https://github.com/alihaical04-spec) · alihaical04@gmail.com

---

Built with ❤️ and good vibe.
