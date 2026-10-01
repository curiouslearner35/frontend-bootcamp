# Deployment & Setup Guide

## Overview

This guide explains how to install, configure, build, and deploy **Curious Learners Academy**.

---

## 🛠 Local Development Setup

### Prerequisites
- **Node.js**: v18.x or higher
- **Package Manager**: `npm` or `bun`

### Installation Steps

1. **Clone Repository & Checkout Branch**:
   ```bash
   git clone https://github.com/shaonkabir8/academy.git
   cd academy
   git checkout featues/gems
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Copy `.env.example` to `.env` if custom variables are required:
   ```bash
   cp .env.example .env
   ```

4. **Start Development Server**:
   ```bash
   npm run dev
   ```
   The Vite dev server will start on `http://localhost:3000`.

---

## 🏗 Build & Verification Commands

| Command | Action | Output / Behavior |
| :--- | :--- | :--- |
| `npm run build` | Compiles TypeScript & bundles Vite assets | Output placed in `dist/` folder |
| `npm run lint` | Runs ESLint syntax and code quality checks | Checks syntax, imports, and rules |
| `npm start` | Runs Express server in production mode | Executes `node server.ts` |

---

## ☁ Firebase Security Rules Deployment

To deploy updated `firestore.rules` security policies to the provisioned Firebase instance:

```bash
# Ensure firebase-applet-config.json exists in root
npx firebase deploy --only firestore:rules
```

---

## 🚀 Netlify Edge Deployment (`netlify.toml`)

The application includes `netlify.toml` for seamless continuous deployment on Netlify:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```
