# Portfolio Website - IIIT Kancheepuram

## Overview

A modern, single-page portfolio website for a Computer Science student from IIIT Kancheepuram. The application features immersive 3D elements, smooth scrolling sections, and a dark professional aesthetic with interactive components. Built as a full-stack application with React frontend and Express backend, though currently functioning primarily as a static portfolio presentation.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server
- Wouter for lightweight client-side routing
- Single-page application (SPA) with smooth scroll navigation

**UI Component System**
- Shadcn/ui components (New York style) for consistent design language
- Radix UI primitives for accessible, unstyled components
- Tailwind CSS for utility-first styling with custom design tokens
- Framer Motion for animations and transitions
- Custom dark mode theme with HSL-based color system

**Design Pattern**
- Component-based architecture with reusable UI elements
- Section-based layout: Hero, About, Experience, Projects, Skills, Contact, Footer
- Canvas-based background animations using HTML5 Canvas API
- Responsive design with mobile-first approach
- Typography system based on Poppins font family with predefined scales

**State Management**
- TanStack Query (React Query) for server state management
- React hooks for local component state
- Form handling with React Hook Form and Zod validation

**3D & Visual Elements**
- Three.js integration (via @react-three/fiber and @react-three/drei) prepared for 3D models
- Custom stars canvas background animation
- Gradient overlays and visual effects defined in CSS

### Backend Architecture

**Server Framework**
- Express.js server with TypeScript
- Vite middleware integration for development hot module replacement
- HTTP server creation for potential WebSocket support

**API Design**
- RESTful API structure (routes prefixed with `/api`)
- Placeholder route registration system ready for expansion
- JSON request/response handling with body parsing

**Storage Layer**
- In-memory storage implementation (MemStorage class)
- Interface-based storage design for easy swapping to persistent storage
- CRUD operations defined for user management
- Drizzle ORM configured for PostgreSQL integration (not yet implemented)

**Session Management**
- Express session configuration prepared
- PostgreSQL session store support via connect-pg-simple

### Data Architecture

**Database Schema**
- Drizzle ORM with PostgreSQL dialect configured
- Users table with UUID primary keys, username, and password fields
- Zod schema validation for type-safe data insertion
- Migration system configured via drizzle-kit

**Data Models**
- User model with insert and select types
- Schema-first design approach using Drizzle's table definitions
- Type inference from database schema for compile-time safety

### Design System

**Color System**
- HSL-based color variables for light/dark mode support
- Custom color palette: primary (blue), secondary, muted, accent, destructive
- Card and popover variants with separate border colors
- Elevation system using opacity-based shadows

**Spacing & Layout**
- Tailwind spacing scale (4px increments)
- Max-width container: 1280px (max-w-7xl)
- Responsive padding: px-6 mobile, sm:px-16 desktop
- Section vertical spacing: py-10 mobile, sm:py-16 desktop

**Typography Scale**
- Hero heading: 40px-80px responsive scale
- Section headings: 30px-60px responsive scale
- Body text: 16px-18px with relaxed leading
- Poppins font family (weights 100-900)

## External Dependencies

### Frontend Libraries
- **React Ecosystem**: react, react-dom, react-router (via wouter)
- **UI Components**: @radix-ui/* (complete component library)
- **Styling**: tailwindcss, postcss, autoprefixer, class-variance-authority, clsx, tailwind-merge
- **Animations**: framer-motion, @gsap/react, gsap
- **3D Graphics**: three, @react-three/fiber, @react-three/drei, maath
- **Forms**: react-hook-form, @hookform/resolvers, zod
- **Data Fetching**: @tanstack/react-query
- **Icons**: lucide-react, react-icons
- **Utilities**: date-fns, cmdk

### Backend Libraries
- **Server**: express, http
- **Database**: drizzle-orm, @neondatabase/serverless, connect-pg-simple
- **Development**: vite, tsx, esbuild
- **Validation**: zod, drizzle-zod

### Development Tools
- **Build**: vite, @vitejs/plugin-react
- **TypeScript**: typescript with strict mode enabled
- **Linting**: ESM module system
- **Replit Integration**: @replit/vite-plugin-runtime-error-modal, @replit/vite-plugin-cartographer, @replit/vite-plugin-dev-banner

### Database
- PostgreSQL (via Neon serverless driver)
- Connection via DATABASE_URL environment variable
- Drizzle Kit for schema management and migrations

### Third-Party Services
- Email functionality prepared (mock implementation ready for EmailJS or similar)
- Asset hosting for images (attached_assets directory)
- Font delivery via Google Fonts CDN