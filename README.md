# Anshpreet Singh - Personal Portfolio

Welcome to the repository for my personal portfolio website. This project is a showcase of my skills, professional experience, and projects, built with a modern and responsive tech stack.


## ✨ Features

- **Modern Tech Stack**: Built with Next.js 14 (App Router), TypeScript, and styled with Tailwind CSS.
- **Fully Responsive**: A clean and accessible design that works seamlessly across desktops, tablets, and mobile devices.
- **Dark/Light Mode**: User-friendly theme switcher that respects system preferences, powered by `next-themes`.
- **Smooth Animations**: Engaging and fluid animations throughout the site using `Framer Motion`.
- **Dynamic Content**: Project, skill, and experience data are loaded from a central file (`src/app/utils/data.ts`), making content updates simple and quick.
- **Interactive UI**: Features like a typewriter effect in the hero section, animated skill icons, and custom-styled buttons with hover effects.
- **Functional Contact Form**: Integrated with **EmailJS** to send messages directly from the portfolio to my inbox.

## 🚀 Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Headless UI, Lucide React (for icons)
- **Contact Form**: EmailJS


## 🛠️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js (v18.17 or later) and npm installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AnshpreetSingh32/Portfolio_V1.git
   cd Portfolio_V1
   ```

2. **Install NPM packages:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file in the root of the project. You will need to add your EmailJS credentials, which you can get from your EmailJS account dashboard.

   ```.env.local
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

   Open http://localhost:3000 with your browser to see the result.

## 📂 Project Structure

The project uses the Next.js App Router structure, which is organized as follows:

```
src/app/
├── components/     # Reusable components (Header, Footer, Sections, etc.)
├── lib/            # Shared library files (e.g., motion.ts for Framer Motion)
├── utils/          # Utility functions and static data (e.g., data.ts, greetings.ts)
├── globals.css     # Global styles
├── layout.tsx      # Root layout of the application
└── page.tsx        # The main page component
```

## 📜 License

Feel free to copy, as there are no copyright issues.

---

Made with ❤️ by Anshpreet Singh. Feel free to connect with me!
