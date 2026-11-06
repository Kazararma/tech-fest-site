# College Tech Fest 2026 — Event Portal

A modern, responsive, static web application for the College Tech Fest organized by the Computer Science Department.

## 🚀 Live Demo

The website is configured for GitHub Pages and accessible at:
**[https://kazararma.github.io/tech-fest-site/](https://kazararma.github.io/tech-fest-site/)**

---

## 📁 Project Structure

```text
college-event-site/
├── .github/
│   └── workflows/
│       └── static.yml       # GitHub Actions workflow for static Pages deployment
├── css/
│   └── style.css            # Responsive layout and styling
├── js/
│   └── script.js            # Registration form validation and UI logic
├── 404.html                 # Custom fallback 404 page
├── index.html               # Main landing page
└── README.md                # Documentation and setup guide
```

---

## ✨ Features

- **Responsive Design**: Mobile-first layout with CSS Grid and Flexbox, styled with modern typography and clean UI aesthetics.
- **Event Schedule**: Highlighted tech events including 24-Hour Code-A-Thon, AI & ML Workshop, and Annual Tech Symposium.
- **Interactive Registration**: Client-side validated registration form with dynamic success/error feedback.
- **Smooth Navigation**: Jump-to-section navigation with smooth scrolling.
- **GitHub Pages Optimized**:
  - Relative asset paths (`css/style.css`, `js/script.js`) ensuring compatibility with project subpaths (`/<repo>/`).
  - Automated deployment with GitHub Actions (`static.yml`).
  - Custom `404.html` error page.

---

## 🛠️ GitHub Pages Deployment

### Option 1: GitHub Actions (Configured)
1. Go to your repository on GitHub: `https://github.com/Kazararma/tech-fest-site`
2. Navigate to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Pushing commits to the `main` branch will automatically trigger the deployment workflow in `.github/workflows/static.yml`.

### Option 2: Deploy from a Branch
1. Navigate to **Settings** > **Pages**.
2. Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
3. Select branch: `main` and folder: `/ (root)`.
4. Click **Save**.

---

## 💻 Local Development

No build tools or package managers required. Simply open `index.html` in your browser, or run a local HTTP server:

```bash
# Using Python
python -m http.server 8000
```
Then visit `http://localhost:8000`.

