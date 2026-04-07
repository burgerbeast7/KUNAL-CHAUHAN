# KUNAL CHAUHAN — Portfolio

A minimal, black & white creative portfolio website built with **Next.js 16**, **Framer Motion**, and **Tailwind CSS**.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)

---

## ✨ Features

- **Minimal B&W Design** — Pure black background with white/gray monochrome aesthetic
- **Animated UI** — Smooth scroll reveals, typing effect, and hover interactions via Framer Motion
- **Responsive** — Fully responsive design for mobile, tablet, and desktop
- **Custom Cursor** — Interactive cursor with hover states
- **Loading Screen** — Animated progress bar on initial load
- **SEO Optimized** — Proper meta tags, semantic HTML, and heading hierarchy

## 📂 Sections

| Section | Description |
|:---|:---|
| **Hero** | Profile headshot, animated typing roles, social links |
| **About** | Personal bio with statistics and cinematic photo |
| **Skills** | Tech stack with animated progress bars |
| **Experience** | Career timeline with alternating layout |
| **Projects** | Project cards with tech badges and live/GitHub links |
| **Achievements** | Certifications and milestones |
| **Contact** | Contact info and social links |

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons (FA6)
- **Fonts**: Orbitron, Sora (Google Fonts)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Install & Run

```bash
# Clone the repository
git clone https://github.com/burgerbeast7/KUNAL-CHAUHAN.git
cd KUNAL-CHAUHAN

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## 🌐 Deploy on Render

1. Push your code to GitHub
2. Go to [render.com](https://render.com) → **New Web Service**
3. Connect your GitHub repo: `burgerbeast7/KUNAL-CHAUHAN`
4. Configure:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Environment**: Node
5. Click **Deploy**

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles & B&W theme
│   ├── layout.tsx           # Root layout with fonts
│   └── page.tsx             # Main page composition
├── components/
│   ├── sections/
│   │   ├── Hero.tsx         # Landing section
│   │   ├── About.tsx        # Bio & stats
│   │   ├── Skills.tsx       # Tech stack
│   │   ├── Experience.tsx   # Career timeline
│   │   ├── Projects.tsx     # Project gallery
│   │   ├── Achievements.tsx # Certifications
│   │   └── Contact.tsx      # Contact form
│   └── ui/
│       ├── Navbar.tsx       # Navigation bar
│       ├── Footer.tsx       # Site footer
│       ├── CustomCursor.tsx # Interactive cursor
│       └── LoadingScreen.tsx# Loading animation
└── lib/
    ├── data.ts              # All portfolio content
    └── utils.ts             # Utility functions
```

## 👤 Author

**Kunal Chauhan**
- GitHub: [@burgerbeast7](https://github.com/burgerbeast7)
- LinkedIn: [Kunal Chauhan](https://linkedin.com/in/kunal-chauhan-7a7539287)
- Email: kunalchauhan91837@gmail.com

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
