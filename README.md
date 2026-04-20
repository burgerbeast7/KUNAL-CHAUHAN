<div align="center">
  <h1>KUNAL CHAUHAN — Portfolio 🚀</h1>
  <p>A minimal, futuristic, black & white creative portfolio website built with Next.js 16, Framer Motion, Tailwind CSS, and a fully dynamic MongoDB Admin Dashboard.</p>

  ![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=for-the-badge&logo=typescript&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
  ![Framer Motion](https://img.shields.io/badge/Framer_Motion-white?style=for-the-badge&logo=framer&logoColor=black)

  <h3><a href="https://kunal-chauhan.onrender.com">🔴 Live Demo</a></h3>
</div>

<br />

## ✨ Overview

This portfolio embodies my philosophy of "less is more." Moving away from heavy components, this project relies on a pure black background with contrasting white and gray monochromes, elevated by subtle interactive effects and smooth Framer Motion animations. 

In its latest V2 iteration, the portfolio has evolved from a static site into a **fully dynamic web application** powered by MongoDB, featuring a secure Admin Dashboard where all content (Projects, Skills, Experience, and Profile Photos) can be managed and cropped in real-time.

## 🌟 Key Features

- **Integrated Admin Dashboard** — A secure, built-in CMS at `/admin` to add, edit, or delete projects, skills, and experiences without touching the codebase.
- **In-Browser Image Cropper** — Features a cinematic local UI to upload and perfectly frame your profile and project thumbnails directly within the admin panel.
- **Minimalist Aesthetic** — Pure black background with a monochrome color scheme that prioritizes readability and high contrast.
- **Dynamic Animations** — Powered by Framer Motion, featuring smooth scroll reveals, a custom typing effect, floating tech icons, and slick hover transitions.
- **Responsive Layout** — Flawless scaling from mobile devices to ultrawide desktop monitors.
- **SEO & Performance** — Built with Next.js App Router for server-side rendering, top-tier performance, and optimized metadata.

## 📂 Architecture & Sections

The application is modularized and structured for scalable maintenance:

| Section | Location | Description |
|:---|:---|:---|
| **Public Portfolio** | `src/app/(frontend)/*` | Multi-page portfolio application comprising individual elegant routes (e.g., `/about`, `/skills`, `/projects`). |
| **Admin Dashboard** | `src/app/(backend)/admin/*` | Secure admin interface to manage content directly linked to MongoDB. |
| **REST APIs** | `src/app/(backend)/api/*` | API routes handling public content fetching and protected CRUD operations. |
| **Database Models**| `src/models/*` | Mongoose schemas defining structural data layers. |

## 🛠️ Technology Stack

- **Framework**: `Next.js 16` (App Router)
- **Database**: `MongoDB` & `Mongoose`
- **Language**: `TypeScript`
- **Styling**: `Tailwind CSS`, `globals.css`
- **Image Editing**: `react-easy-crop`
- **Interactivity & Animation**: `Framer Motion`, `react-simple-typewriter`
- **Iconography**: `lucide-react`, `react-icons` (FontAwesome 6)
- **Typography**: `Orbitron` (Futuristic headings), `Sora` (Clean body text)

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:
- Node.js 20+
- Git
- MongoDB URI (for database configuration)

### Environment Setup
Create a `.env` file in the root directory with the following keys:
```env
MONGODB_URI=your_mongodb_connection_string
ADMIN_PASSWORD=your_secure_password
JWT_SECRET_KEY=your_secure_jwt_secret
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/burgerbeast7/KUNAL-CHAUHAN.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **View in browser**
   Navigate to [http://localhost:3000](http://localhost:3000) for the main site.
   Navigate to [http://localhost:3000/admin](http://localhost:3000/admin) to manage content.

## 🌐 Deployment

This application is configured for seamless deployment on cloud platforms like [Render](https://render.com/) or Vercel.

**Render Deployment Steps:**
1. Connect your GitHub repository.
2. Ensure you have added your `MONGODB_URI`, `ADMIN_PASSWORD`, and `JWT_SECRET_KEY` inside Render Environment variables!
3. Set the build command: `npm install && npm run build`
4. Set the start command: `npm start`
5. Deploy as a Node Web Service.

⚡ **Note on Render Free Tier Performance:**  
Included natively within this repository is a GitHub Action (`keep-alive.yml`) that automatically pings the Render server every 14 minutes. This completely bypasses Render's standard 15-minute inactivity shutdown, ensuring your portfolio opens **instantly** (0ms cold start) 24/7 without requiring third-party tools like UptimeRobot!

## 👤 Connect with Me

**Kunal Chauhan**
- 🐙 GitHub: [@burgerbeast7](https://github.com/burgerbeast7)
- 💼 LinkedIn: [Kunal Chauhan](https://linkedin.com/in/kunal-chauhan-7a7539287)
- ✉️ Email: kunalchauhan91837@gmail.com

---
*If you find this repository interesting or helpful, feel free to give it a ⭐!*
