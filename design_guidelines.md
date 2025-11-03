# Design Guidelines: Computer Science Portfolio - IIIT Kancheepuram

## Design Approach

**Reference-Based Approach**: Drawing inspiration from modern developer portfolios (Brittany Chiang, GitHub Pages portfolios) with emphasis on technical sophistication and visual storytelling through 3D elements.

**Key Design Principles**:
- Immersive 3D storytelling using Three.js elements
- Dark, professional aesthetic with vibrant accent colors
- Technical credibility through clean, structured layouts
- Interactive elements that showcase technical capabilities
- Single-page application with smooth scrolling sections

## Core Design Elements

### A. Typography

**Font Families**:
- Primary: 'Poppins' - all weights (100-900)
- Fallback: system-ui, sans-serif

**Type Scale**:
- Hero Heading: 80px (lg), 60px (sm), 50px (xs), 40px (base) / font-black / leading-tight
- Hero Subheading: 30px (lg), 26px (sm), 20px (xs), 16px (base) / font-medium
- Section Headings: 60px (md), 50px (sm), 40px (xs), 30px (base) / font-black
- Section Subheadings: 18px (sm), 14px (base) / uppercase / tracking-wider
- Body Text: 16px-18px / font-normal / leading-relaxed
- Card Titles: 24px / font-bold
- Tech Tags: 14px / font-medium

**Color Assignments**:
- Hero text: #FFFFFF (white)
- Hero subtext: #DFD9FF (light purple)
- Section headings: #FFFFFF
- Section subheadings: #AAA6C3 (secondary)
- Body text: #FFFFFF with 90% opacity
- Links/Accents: #3B82F6 (professional blue), #10B981 (emerald)

### B. Layout System

**Tailwind Spacing Units**: Consistent use of 4, 6, 8, 12, 16, 20, 24, 32 for padding/margins

**Container Strategy**:
- Max-width: 1280px (max-w-7xl)
- Horizontal padding: px-6 (mobile), sm:px-16 (desktop)
- Vertical spacing: py-10 (mobile), sm:py-16 (desktop)
- Section gaps: 80px-120px between major sections

**Grid Systems**:
- Projects: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 with gap-8
- Skills: grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 with gap-6
- Contact form: Single column max-w-3xl centered

### C. Component Library

**Navigation Bar**:
- Fixed top positioning with backdrop blur
- Logo/name on left, navigation links on right
- Mobile: Hamburger menu with slide-in drawer
- Height: 80px, semi-transparent background (#050816 with 95% opacity)

**Hero Section**:
- Full viewport height (100vh) with 3D canvas background
- Animated 3D desktop PC model positioned on right side
- Text content on left with typing/fade-in animation
- Scroll indicator at bottom (animated arrow/icon)
- Gradient overlay for text readability

**About Section**:
- Two-column layout: Image/3D element (40%) | Text content (60%)
- Animated 3D planet model or professional image
- Highlight IIIT Kancheepuram with subtle emphasis
- "Know more" expandable section for detailed background

**Projects Showcase**:
- Card-based grid with hover tilt effects (react-tilt)
- Each card includes:
  - Project thumbnail/screenshot (aspect-ratio 16:9)
  - Title with gradient text effect
  - Description (3-4 lines, truncated)
  - Tech stack tags (pill-shaped, colored by category)
  - Action buttons: "Live Demo" (primary) + "GitHub" (secondary)
- Card styling: Rounded-2xl, gradient border on hover, shadow elevation

**Skills Section**:
- Icon-based grid layout
- Categories: Languages, Frameworks, Tools, Databases
- Each skill: Icon (100px circle) + Label
- Icons with gradient backgrounds and subtle pulse animation on hover
- Use react-icons or custom SVG icons

**Experience/Education Timeline**:
- Vertical timeline component (react-vertical-timeline)
- IIIT Kancheepuram education as primary entry
- Internships/projects as timeline points
- Each entry: Date, title, institution, description, tech tags

**Contact Section**:
- Two-column: Contact form (left) | Contact info (right)
- Form fields: Name, Email, Message (EmailJS integration)
- Animated stars canvas background
- Resume download button (prominent, gradient background)
- Social links: GitHub, LinkedIn, Email

**Footer**:
- Simple, single row
- Copyright notice, quick links, social icons
- Background: #050816 with subtle top border

### D. Color & Visual Treatment

**Background Gradients**:
- Primary background: #050816 (dark navy)
- Section alternation: #151030 (tertiary) for contrast
- Hero pattern: Custom background pattern/texture
- Card backgrounds: #100d25 with subtle gradient borders

**Accent Gradients**:
- Blue gradient: linear-gradient(to top, #2f80ed, #56ccf2)
- Green gradient: linear-gradient(to top, #11998e, #38ef7d)
- Pink gradient: linear-gradient(to top, #ec008c, #fc6767)
- Apply to headings, buttons, and interactive elements

**3D Canvas Elements**:
- Stars canvas: Animated particle field (white dots, subtle movement)
- Desktop PC model: Positioned in hero, subtle rotation on mouse move
- Planet model: In about section, slow auto-rotation
- All 3D elements use React Three Fiber with drei helpers

### E. Interactive Elements

**Animations** (Framer Motion):
- Fade-in on scroll (stagger children by 100ms)
- Slide-in from left/right for alternating sections
- Scale on hover for cards and buttons
- Smooth page transitions and scroll behavior

**Hover States**:
- Cards: Lift (translateY -8px) + shadow increase + border glow
- Buttons: Slight scale (1.05) + brightness increase
- Skills icons: Gentle rotation (5deg) + scale (1.1)
- Project tags: Color shift to brighter variant

**Micro-interactions**:
- Typing effect for hero subtitle
- Smooth scroll with offset for navigation
- Form validation with real-time feedback
- Success/error toast notifications for contact form

## Images

**Hero Section**: Large 3D model (Desktop PC) rendered via Three.js - no static image needed

**About Section**: 3D planet model OR professional headshot (500x500px, circular crop)

**Project Cards**: Project screenshots/mockups (1200x675px, 16:9 ratio) - use placeholder gradient backgrounds if real screenshots unavailable

**Skill Icons**: Use React Icons library (SiJavascript, SiReact, SiPython, etc.) - no custom images needed

**Background Textures**: Subtle noise pattern for hero section background for depth

This portfolio emphasizes technical sophistication through 3D elements while maintaining professional clarity and accessibility. The dark theme with vibrant accents creates a modern, developer-focused aesthetic that showcases projects effectively.