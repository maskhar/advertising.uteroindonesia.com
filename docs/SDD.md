# Software Design Document (SDD)
# Utero Advertising Website

## 1. Architecture Overview

### 1.1 Tech Stack
- **Build Tool**: Vite
- **Frontend Framework**: TBD (Vanilla JS / React / Vue)
- **Styling**: CSS3 (Custom properties, Flexbox, Grid)
- **Fonts**: Google Fonts (Anton, Inter)
- **Assets**: Optimized images, SVG icons

### 1.2 Project Structure
\\\
advertising.uteroindonesia.com/
├── docs/
│   ├── PRD.md
│   ├── SDD.md
│   └── TODO.md
├── public/
│   ├── images/
│   │   ├── portfolio/
│   │   ├── services/
│   │   └── clients/
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── fonts/
│   │   └── icons/
│   ├── components/
│   │   ├── Header.jsx (or .js)
│   │   ├── Hero.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Process.jsx
│   │   ├── Documentation.jsx
│   │   ├── Legal.jsx
│   │   ├── Support.jsx
│   │   ├── Clients.jsx
│   │   ├── Footer.jsx
│   │   └── Lightbox.jsx
│   ├── styles/
│   │   ├── main.css
│   │   ├── variables.css
│   │   ├── components.css
│   │   └── utilities.css
│   ├── utils/
│   │   ├── lightbox.js
│   │   ├── marquee.js
│   │   └── scroll.js
│   ├── main.js
│   └── index.html
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
\\\

## 2. Design System

### 2.1 Color Palette
\\\css
--red: #E31E24           /* Primary brand color */
--red-dark: #9E1319      /* Hover states */
--red-deep: #7A0E13      /* Active states */
--ink: #17130F           /* Primary text */
--ink-soft: #3A342E      /* Secondary text */
--paper: #FBF8F3         /* Background */
--paper-dim: #F1ECE3     /* Alt background */
--steel: #1C1D1F         /* Dark sections */
--steel-2: #2B2C2F       /* Dark section alt */
--amber: #FFB020         /* Accent/warning */
--line: #E7DFD1          /* Borders */
\\\

### 2.2 Typography
- **Display**: Anton, 400 weight, uppercase
- **Body**: Inter, 400-800 weights
- **Eyebrow**: Inter 700, 0.72rem, 0.14em letter-spacing

### 2.3 Components

#### Button Variants
- \.btn-primary\: Red background, white text
- \.btn-outline\: Transparent with border
- \.btn-outline-light\: Light variant for dark backgrounds

#### Decorative Elements
- \.bracket\: Corner bracket motif
- \.eyebrow\: Section label with line prefix

### 2.4 Spacing & Layout
- **Max width**: 1180px
- **Padding**: 24px default
- **Border radius**: 2px (minimal, industrial aesthetic)
- **Grid**: CSS Grid for service cards, portfolio
- **Flexbox**: Navigation, button groups

## 3. Key Features Implementation

### 3.1 Navigation
- Sticky header with backdrop blur
- Smooth scroll to sections
- Mobile hamburger menu
- Active state on scroll

### 3.2 Lightbox Gallery
\\\javascript
// Lightbox state management
- Open/close functionality
- Keyboard navigation (ESC to close)
- Click outside to close
- Image preloading
- Caption display
\\\

### 3.3 Client Marquee
\\\javascript
// Infinite scroll animation
- CSS animation for smooth movement
- Duplicate items for seamless loop
- Pause on hover (optional)
\\\

### 3.4 WhatsApp Integration
\\\javascript
// CTA buttons link to WhatsApp
const waNumber = '6285648481999';
const waMessage = encodeURIComponent('Halo Utero Advertising...');
const waLink = \https://wa.me/\?text=\\;
\\\

## 4. Performance Optimization

### 4.1 Images
- Convert large images to WebP
- Lazy loading below the fold
- Responsive image sizes with \srcset\
- Consider replacing base64 with optimized files

### 4.2 CSS
- CSS custom properties for theming
- Minimize unused styles
- Critical CSS inline for above-the-fold

### 4.3 JavaScript
- Code splitting with Vite
- Lazy load components
- Debounce scroll events
- Minimize third-party scripts

### 4.4 Fonts
- Preconnect to Google Fonts
- Font-display: swap
- Consider self-hosting fonts

## 5. SEO & Accessibility

### 5.1 SEO
- Semantic HTML5 elements
- Meta tags (title, description, keywords)
- Open Graph tags for social sharing
- Canonical URL
- Schema.org markup (LocalBusiness)
- XML sitemap

### 5.2 Accessibility
- ARIA labels where needed
- Keyboard navigation
- Focus states
- Alt text for images
- Color contrast compliance (WCAG AA)
- Skip to content link

## 6. Browser Support
- Chrome, Firefox, Safari, Edge (latest 2 versions)
- Mobile: iOS Safari 12+, Chrome Android
- Graceful degradation for older browsers

## 7. Deployment

### 7.1 Build Process
\\\ash
npm run build
# Outputs to dist/ folder
\\\

### 7.2 Hosting Options
- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages
- Traditional hosting (cPanel)

### 7.3 Domain
- advertising.uteroindonesia.com
- SSL certificate required
- CDN for static assets (optional)

## 8. Analytics & Monitoring
- Google Analytics 4 (optional)
- Search Console integration
- Performance monitoring (Lighthouse CI)

## 9. Security Considerations
- HTTPS only
- CSP headers
- No sensitive data in frontend
- Sanitize any user inputs (if forms added)

## 10. Testing Strategy
- Cross-browser testing
- Mobile device testing
- Performance testing (Lighthouse)
- Accessibility audit (axe DevTools)
- Link checker
- HTML/CSS validation

## 11. Maintenance
- Regular dependency updates
- Image optimization
- Content updates via CMS (future)
- Backup strategy
