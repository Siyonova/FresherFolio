# Siyona Bonam - Professional Portfolio

## Overview
Modern, responsive portfolio website for Siyona Bonam, Computer Science student at IIIT-DM Kancheepuram. Features dark theme, smooth scrolling navigation, and showcases projects, skills, and experience in AI/ML and software development.

## Recent Changes (Nov 3, 2025)
- Fully personalized with information from resume
- Updated all sections with real data (no mock content)
- Integrated actual contact information and social links
- CGPA excluded per user request
- All branding updated to "SB" (Siyona Bonam)

## Project Architecture

### Technology Stack
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Animations**: Framer Motion
- **Icons**: Lucide React + React Icons (Simple Icons)
- **Routing**: Wouter
- **Forms**: React Hook Form + Zod validation
- **Backend**: Express.js (minimal - serving frontend only currently)

### Project Structure
```
client/
├── src/
│   ├── components/
│   │   ├── Navbar.tsx          # Fixed navigation with smooth scroll
│   │   ├── Hero.tsx            # Landing section with name and intro
│   │   ├── About.tsx           # Overview and background
│   │   ├── Experience.tsx      # Education, work experience, achievements
│   │   ├── Projects.tsx        # Showcase of 3 main projects
│   │   ├── Skills.tsx          # Technology stack icons
│   │   ├── Contact.tsx         # Contact form and information
│   │   ├── Footer.tsx          # Social links and copyright
│   │   └── StarsCanvas.tsx     # Animated background
│   ├── pages/
│   │   └── Home.tsx            # Main page layout
│   └── App.tsx                 # Root component with dark mode
└── index.html                  # SEO meta tags and page title
```

## Personal Information

### Contact Details
- **Email**: bonamsiyona@gmail.com
- **Phone**: +91 7981087644
- **Location**: IIIT-DM Kancheepuram, Chennai, Tamil Nadu
- **GitHub**: https://github.com/Siyonova
- **LinkedIn**: https://www.linkedin.com/in/siyona-bonam

### Education
- B.Tech in Computer Science at IIIT-DM Kancheepuram (Nov 2022 - Present)
- General Affairs Coordinator (June 2024 - April 2025)
- Cultural Affairs Coordinator (July 2023 - April 2024)

### Experience
- **SDE Intern** at Chella Software, Madurai (May 2025 - July 2025)
  - C binary file combiner for .DAT files
  - Python automation tool for finance portfolios
  - AI-assisted workflow implementation

### Projects
1. **Building a Large Language Model from Scratch** (Sep 2025 - Present)
   - Technologies: Python, Transformers, Deep Learning, NLP
   
2. **Dynamic Pricing for E-Commerce using RL** (Feb 2025 - April 2025)
   - Technologies: Python, DQN, PPO, Reinforcement Learning
   
3. **Human Pose Estimation** (Dec 2024 - Feb 2025)
   - Technologies: Python, OpenCV, DNN, TensorFlow

### Skills
- **Languages**: C++, C, Python, JavaScript, Node.js
- **Databases**: MySQL
- **Tools**: Git, GitHub, Flutter, Figma, Android Studio
- **ML/AI**: TensorFlow, OpenCV
- **Core**: OOP, Data Structures

### Achievements
- Oracle Cloud Infrastructure 2025 Certified Generative AI Professional
- National Player – Shooting (2021, 2022)
- 2nd place in SGF Shooting at 64th National Shooting Championship (2020)

## Features

### Current Implementation
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Dark theme by default
- ✅ Smooth scrolling navigation
- ✅ Animated hero section with Framer Motion
- ✅ Project showcase with generated placeholder images
- ✅ Skills section with technology icons
- ✅ Contact form (mock submission with toast notifications)
- ✅ Working social media links
- ✅ SEO optimization with meta tags

### To-Do Items
- [ ] Integrate real resume PDF for download button
- [ ] Connect contact form to EmailJS or backend API
- [ ] Add actual project demo links (currently placeholder)
- [ ] Optional: Add blog section
- [ ] Optional: Add testimonials/recommendations

## Development

### Running the Application
```bash
npm run dev
```
Application runs on port 5000 (Express serves both frontend and backend)

### Design Guidelines
See `design_guidelines.md` for complete design specifications including:
- Color scheme (Primary: #0F172A, Secondary: #3B82F6, Accent: #10B981)
- Typography (Poppins font family)
- Component styling rules
- Dark mode implementation

## User Preferences
- No CGPA should be displayed anywhere
- Emphasize IIIT-DM Kancheepuram education
- Highlight AI/ML and shooting achievements
- Modern, professional design inspired by developer portfolios
