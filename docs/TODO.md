# TODO List
# Utero Advertising Website - Vite + React + Docker

## Phase 1: Project Setup & Configuration ⚙️
- [ ] Initialize Vite + React project
  - [ ] Run \
pm create vite@latest . -- --template react\
  - [ ] Install dependencies: \
pm install\
  - [ ] Test dev server: \
pm run dev\
- [ ] Configure project structure
  - [ ] Create folder structure (components, hooks, utils, data, assets)
  - [ ] Setup src/components subdirectories (layout, sections, ui, features)
  - [ ] Create public/images folder structure (portfolio, services, clients)
- [ ] Configure Vite
  - [ ] Edit vite.config.js for optimization
  - [ ] Add build optimizations (code splitting, minification)
  - [ ] Configure port and base settings
- [ ] Setup Git & .gitignore
  - [ ] Initialize git repo
  - [ ] Add node_modules, dist, .env to .gitignore
  - [ ] First commit
- [ ] Create README.md
  - [ ] Project description
  - [ ] Installation instructions
  - [ ] Development commands
  - [ ] Docker instructions

## Phase 2: Docker Configuration 🐳
- [ ] Create Dockerfile
  - [ ] Multi-stage build (Node builder + Nginx production)
  - [ ] Use node:18-alpine for builder
  - [ ] Use nginx:alpine for production
  - [ ] Add health check
- [ ] Create .dockerignore
  - [ ] Exclude node_modules, .git, dist, docs
- [ ] Create nginx configuration
  - [ ] Create nginx/default.conf
  - [ ] Configure gzip compression
  - [ ] Add security headers
  - [ ] Setup cache rules for static assets
  - [ ] Add health check endpoint
  - [ ] SPA fallback routing
- [ ] Create docker-compose.yml (optional)
  - [ ] Define service
  - [ ] Port mapping
  - [ ] Restart policy
  - [ ] Health check configuration
- [ ] Test Docker build locally
  - [ ] Build image: \docker build -t utero-advertising .\
  - [ ] Run container: \docker run -p 8080:80 utero-advertising\
  - [ ] Test in browser: http://localhost:8080
  - [ ] Test health endpoint: http://localhost:8080/health

## Phase 3: Design System & Base Styles 🎨
- [ ] Create CSS variables (src/assets/styles/variables.css)
  - [ ] Color palette (red, ink, paper, steel, amber, line)
  - [ ] Typography tokens
  - [ ] Spacing scale
  - [ ] Breakpoints
  - [ ] Border radius, shadows
- [ ] Create reset/base styles (src/assets/styles/reset.css)
  - [ ] CSS reset (box-sizing, margin, padding)
  - [ ] Smooth scroll behavior
  - [ ] Default font smoothing
- [ ] Create typography styles (src/assets/styles/typography.css)
  - [ ] Font imports (Anton, Inter from Google Fonts)
  - [ ] Heading styles (h1, h2, h3)
  - [ ] Body text styles
  - [ ] Eyebrow component styles
- [ ] Create utility classes (src/assets/styles/utilities.css)
  - [ ] Container/wrapper class (.wrap)
  - [ ] Spacing utilities
  - [ ] Display utilities
  - [ ] Text alignment utilities
- [ ] Create main.css
  - [ ] Import all style modules
  - [ ] Global styles
  - [ ] Responsive helpers

## Phase 4: Reusable UI Components 🧩
- [ ] Button component (src/components/ui/Button.jsx)
  - [ ] Variants: primary, outline, outlineLight
  - [ ] Support for 'as' prop (button, a)
  - [ ] Icon support
  - [ ] Hover animations
  - [ ] Styles in Button.module.css (optional) or inline
- [ ] Card component (src/components/ui/Card.jsx)
  - [ ] Base card with padding, border, hover effect
  - [ ] Flexible content slot
- [ ] Eyebrow component (src/components/ui/Eyebrow.jsx)
  - [ ] Text with red line prefix
  - [ ] Uppercase styling
- [ ] Bracket component (src/components/ui/Bracket.jsx)
  - [ ] Corner bracket decorative element
  - [ ] Position absolute pseudo-elements

## Phase 5: Data Files 📊
- [ ] Create src/data/services.js
  - [ ] Export array of 8 services
  - [ ] Each: id, title, description, icon path
  - [ ] Services: Billboard, Videotron, Neon Box, Papan Nama, Baliho, Percetakan, Interior, Event
- [ ] Create src/data/portfolio.js
  - [ ] Export array of portfolio items
  - [ ] Each: id, title, category, image, thumbnail, caption
  - [ ] 4+ placeholder items
- [ ] Create src/data/clients.js
  - [ ] Export array of 28 client names
  - [ ] Clients: YAMAHA, HONDA, PERTAMINA, TELKOMSEL, XL, SMARTFREN, etc.
- [ ] Create src/data/process.js
  - [ ] Export array of 4 process steps
  - [ ] Each: id, number, title, description
  - [ ] Steps: Konsultasi, Desain, Produksi, Instalasi
- [ ] Create src/utils/constants.js
  - [ ] WhatsApp number: 6285648481999
  - [ ] Email: info@uteroindonesia.com
  - [ ] Address: Jl. Raya Tlogomas No. 5B, Malang
  - [ ] Helper function: getWhatsAppLink()

## Phase 6: Placeholder Images 🖼️
- [ ] Create placeholder images for portfolio
  - [ ] public/images/portfolio/placeholder-billboard-1.jpg (1200x800)
  - [ ] public/images/portfolio/placeholder-videotron-1.jpg (1200x800)
  - [ ] public/images/portfolio/placeholder-neonbox-1.jpg (1200x800)
  - [ ] public/images/portfolio/placeholder-signage-1.jpg (1200x800)
  - [ ] Use https://placehold.co/ or similar service
- [ ] Create thumbnails for portfolio
  - [ ] public/images/portfolio/thumb-billboard-1.jpg (400x267)
  - [ ] public/images/portfolio/thumb-videotron-1.jpg (400x267)
  - [ ] public/images/portfolio/thumb-neonbox-1.jpg (400x267)
  - [ ] public/images/portfolio/thumb-signage-1.jpg (400x267)
- [ ] Create service icons/images (optional)
  - [ ] Simple SVG icons or placeholder icons
- [ ] Add favicon
  - [ ] public/favicon.ico (red icon with U or Utero logo)

## Phase 7: Custom Hooks 🪝
- [ ] Create useScrollSpy hook (src/hooks/useScrollSpy.js)
  - [ ] Accept array of section IDs
  - [ ] Return active section ID
  - [ ] Listen to scroll events
  - [ ] Debounce for performance
- [ ] Create useLightbox hook (src/hooks/useLightbox.js)
  - [ ] State: isOpen, currentIndex
  - [ ] Functions: open, close, next, prev
  - [ ] Keyboard handlers (ESC, arrows)
  - [ ] Body scroll lock when open

## Phase 8: Layout Components 🏗️

### Header Component
- [ ] Create src/components/layout/Header.jsx
  - [ ] Sticky positioning
  - [ ] Logo component (text: UTERO + ADVERTISING)
  - [ ] Desktop navigation (Beranda, Layanan, Portofolio, Proses, Kontak)
  - [ ] Mobile menu button (hamburger)
  - [ ] Smooth scroll to sections
  - [ ] Active section highlighting
  - [ ] Backdrop blur effect
- [ ] Create MobileMenu component (src/components/features/MobileMenu.jsx)
  - [ ] Slide-in overlay menu
  - [ ] Same nav links as desktop
  - [ ] Close button
  - [ ] Click outside to close

### Footer Component
- [ ] Create src/components/layout/Footer.jsx
  - [ ] Company name & tagline
  - [ ] Contact information (address, phone, email, WhatsApp)
  - [ ] Quick links (same as nav)
  - [ ] Social media links (Instagram, WhatsApp)
  - [ ] Copyright notice
  - [ ] Dark background (var(--steel))
  - [ ] Multi-column layout (desktop) → stacked (mobile)

## Phase 9: Section Components 📄

### Hero Section
- [ ] Create src/components/sections/Hero.jsx
  - [ ] Large headline: "END-TO-END OUTDOOR & INDOOR ADVERTISING"
  - [ ] Subheadline/tagline
  - [ ] Two CTAs: "Konsultasi Gratis" (primary) + "Lihat Portofolio" (outline)
  - [ ] Background styling (gradient or solid color)
  - [ ] Responsive text sizes
  - [ ] Eyebrow component: "UTERO ADVERTISING"

### Services Section
- [ ] Create src/components/sections/Services.jsx
  - [ ] Section title: "LAYANAN KAMI"
  - [ ] Eyebrow: "WHAT WE DO"
  - [ ] Grid of 8 service cards
  - [ ] Each card: icon, title, description
  - [ ] Hover effects
  - [ ] Responsive grid: 4 cols → 2 cols → 1 col
- [ ] Create ServiceCard sub-component
  - [ ] Use Card component
  - [ ] Icon display
  - [ ] Title and description

### Portfolio Section
- [ ] Create src/components/sections/Portfolio.jsx
  - [ ] Section title: "PORTOFOLIO"
  - [ ] Eyebrow: "OUR WORK"
  - [ ] Grid of portfolio items (2x2 or masonry)
  - [ ] Click to open lightbox
  - [ ] Responsive grid
- [ ] Create PortfolioItem sub-component
  - [ ] Thumbnail image with lazy loading
  - [ ] Overlay with title on hover
  - [ ] onClick handler to open lightbox
- [ ] Create Lightbox component (src/components/features/Lightbox.jsx)
  - [ ] Full-screen overlay
  - [ ] Large image display
  - [ ] Caption display
  - [ ] Close button (X)
  - [ ] Previous/Next navigation
  - [ ] Keyboard navigation (ESC, arrows)
  - [ ] Click outside to close
  - [ ] Body scroll lock when open
  - [ ] Smooth transitions

### Process Section
- [ ] Create src/components/sections/Process.jsx
  - [ ] Section title: "PROSES KERJA"
  - [ ] Eyebrow: "HOW WE WORK"
  - [ ] 4 process steps in timeline layout
  - [ ] Each step: number badge, title, description
  - [ ] Visual connectors between steps
  - [ ] Responsive layout: horizontal → vertical
- [ ] Create ProcessStep sub-component
  - [ ] Number badge with bracket decoration
  - [ ] Title and description
  - [ ] Icon (optional)

### Documentation Section
- [ ] Create src/components/sections/Documentation.jsx
  - [ ] Section title: "DOKUMENTASI REAL-TIME"
  - [ ] Eyebrow: "TRANSPARENCY"
  - [ ] Description of documentation service
  - [ ] Icon or image representation
  - [ ] Benefits list
  - [ ] Card layout with Bracket decoration

### Legal Section
- [ ] Create src/components/sections/Legal.jsx
  - [ ] Section title: "LEGAL & COMPLIANCE"
  - [ ] Eyebrow: "FULLY LICENSED"
  - [ ] Two cards: Perizinan Reklame + Pajak Reklame
  - [ ] Icons or badges
  - [ ] Short descriptions
  - [ ] Trust indicators

### Support Section
- [ ] Create src/components/sections/Support.jsx
  - [ ] Section title: "DUKUNGAN TAMBAHAN"
  - [ ] Eyebrow: "EXTRA SERVICES"
  - [ ] 3 cards: Percetakan Digital, Interior & Eksterior, Event Support
  - [ ] Each card: icon, title, description
  - [ ] Grid layout: 3 cols → 1 col

### Clients Section
- [ ] Create src/components/sections/Clients.jsx
  - [ ] Section title: "KLIEN KAMI"
  - [ ] Eyebrow: "TRUSTED BY"
  - [ ] Marquee component with 28 client names
  - [ ] Seamless infinite scroll
  - [ ] Duplicate items for loop
- [ ] Create Marquee component (src/components/features/Marquee.jsx)
  - [ ] CSS animation for horizontal scroll
  - [ ] Duplicate children for seamless loop
  - [ ] Configurable speed
  - [ ] Pause on hover (optional)

## Phase 10: Main App Assembly 🔧
- [ ] Update src/App.jsx
  - [ ] Import all section components
  - [ ] Assemble in correct order
  - [ ] Add section IDs for scroll spy
  - [ ] Manage global state (lightbox, mobile menu)
  - [ ] Pass props to components
- [ ] Update src/main.jsx
  - [ ] Import React, ReactDOM
  - [ ] Import App component
  - [ ] Import main.css
  - [ ] Render App
- [ ] Update src/index.html
  - [ ] Add meta tags (title, description, keywords, OG tags)
  - [ ] Add favicon link
  - [ ] Add theme-color meta
  - [ ] Add canonical link
  - [ ] Add Google Fonts preconnect
  - [ ] Add structured data (LocalBusiness schema)

## Phase 11: Content Integration ✍️
- [ ] Copy content from template HTML
  - [ ] Extract all text content
  - [ ] Minor grammar improvements
  - [ ] Ensure consistency in tone
- [ ] Populate services data
  - [ ] 8 service descriptions from template
- [ ] Populate process data
  - [ ] 4 process step descriptions
- [ ] Populate legal/documentation content
  - [ ] Perizinan & pajak descriptions
  - [ ] Real-time reporting benefits
- [ ] Populate support services
  - [ ] Percetakan, interior, event descriptions
- [ ] Verify contact information
  - [ ] Address: Jl. Raya Tlogomas No. 5B, Malang
  - [ ] Phone: 0856-4848-1999
  - [ ] WhatsApp: 6285648481999
  - [ ] Email: info@uteroindonesia.com

## Phase 12: Styling & Responsiveness 📱
- [ ] Desktop styles (1024px+)
  - [ ] All sections properly laid out
  - [ ] Navigation horizontal
  - [ ] Grid layouts: 4 cols, 3 cols, 2 cols as designed
- [ ] Tablet styles (768px - 1023px)
  - [ ] Adjust grid columns (4→2, 3→2)
  - [ ] Font sizes slightly smaller
  - [ ] Spacing adjustments
- [ ] Mobile styles (< 768px)
  - [ ] Hamburger menu
  - [ ] All grids to 1 column
  - [ ] Stack footer content
  - [ ] Larger touch targets for buttons
  - [ ] Font size scaling
- [ ] Test all breakpoints
  - [ ] 320px (small mobile)
  - [ ] 375px (iPhone SE)
  - [ ] 768px (tablet)
  - [ ] 1024px (small desktop)
  - [ ] 1440px (large desktop)

## Phase 13: Interactions & Animations ✨
- [ ] Smooth scroll behavior
  - [ ] CSS: scroll-behavior: smooth
  - [ ] JS polyfill if needed
- [ ] Button hover effects
  - [ ] Transform translateY(-2px)
  - [ ] Background color transitions
- [ ] Card hover effects
  - [ ] Lift effect (translateY)
  - [ ] Subtle shadow
- [ ] Lightbox animations
  - [ ] Fade in/out overlay
  - [ ] Scale in/out content
  - [ ] Smooth transitions
- [ ] Marquee animation
  - [ ] Smooth continuous scroll
  - [ ] No janky starts/stops
- [ ] Mobile menu animations
  - [ ] Slide in from right
  - [ ] Backdrop fade
- [ ] Scroll reveal animations (optional)
  - [ ] Fade in sections as they enter viewport
  - [ ] Use Intersection Observer API

## Phase 14: SEO & Meta Tags 🔍
- [ ] Add comprehensive meta tags in index.html
  - [ ] Title (< 60 chars)
  - [ ] Description (< 160 chars)
  - [ ] Keywords (relevant to services)
- [ ] Add Open Graph tags
  - [ ] og:type, og:title, og:description, og:url, og:locale
  - [ ] og:image (create social share image)
- [ ] Add structured data (JSON-LD)
  - [ ] LocalBusiness schema
  - [ ] Name, address, phone, email
  - [ ] Opening hours (if applicable)
  - [ ] SameAs links (social media)
- [ ] Create robots.txt
  - [ ] Allow all crawlers
  - [ ] Sitemap reference
- [ ] Create sitemap.xml (manual or plugin)
  - [ ] Single page, but good practice
- [ ] Add canonical URL
  - [ ] https://advertising.uteroindonesia.com/
- [ ] Ensure semantic HTML
  - [ ] header, nav, main, section, article, footer tags
  - [ ] Proper heading hierarchy (h1 → h2 → h3)

## Phase 15: Accessibility ♿
- [ ] Add alt text to all images
  - [ ] Descriptive, concise
  - [ ] Portfolio images: describe the project
- [ ] Keyboard navigation
  - [ ] Tab through all interactive elements
  - [ ] Focus visible styles
  - [ ] Logical tab order
- [ ] ARIA labels
  - [ ] aria-label on icon buttons
  - [ ] aria-labelledby on sections
  - [ ] aria-hidden on decorative elements
- [ ] Color contrast check
  - [ ] Use WebAIM contrast checker
  - [ ] Ensure 4.5:1 for text
  - [ ] Ensure 3:1 for large text
- [ ] Focus states
  - [ ] Visible focus ring on all interactive elements
  - [ ] Don't remove outline without replacement
- [ ] Skip to content link (optional)
  - [ ] Hidden link at top
  - [ ] Shows on focus
  - [ ] Jumps to main content

## Phase 16: Performance Optimization ⚡
- [ ] Image optimization
  - [ ] Compress all images (TinyPNG, Squoosh)
  - [ ] Use WebP format with JPEG fallback
  - [ ] Add loading="lazy" to below-fold images
  - [ ] Add width/height attributes to prevent layout shift
- [ ] Code splitting
  - [ ] Lazy load Lightbox component
  - [ ] React.lazy() + Suspense
  - [ ] Split vendor bundle
- [ ] Font optimization
  - [ ] Preconnect to Google Fonts
  - [ ] font-display: swap
  - [ ] Consider self-hosting fonts
- [ ] CSS optimization
  - [ ] Remove unused styles
  - [ ] Minify in production
  - [ ] Critical CSS inline (optional)
- [ ] JavaScript optimization
  - [ ] Minify and tree-shake
  - [ ] Remove console.logs in production
  - [ ] Debounce scroll handlers
- [ ] Vite build optimization
  - [ ] Configure rollup options
  - [ ] Enable minification
  - [ ] Check bundle analyzer
- [ ] Test with Lighthouse
  - [ ] Performance: 90+
  - [ ] Accessibility: 90+
  - [ ] Best Practices: 90+
  - [ ] SEO: 95+

## Phase 17: Testing 🧪

### Functional Testing
- [ ] Test all navigation links
  - [ ] Smooth scroll to sections
  - [ ] Active states update
- [ ] Test mobile menu
  - [ ] Opens and closes
  - [ ] Links work
  - [ ] Click outside closes
- [ ] Test lightbox
  - [ ] Opens on portfolio item click
  - [ ] Image displays correctly
  - [ ] Caption displays
  - [ ] Close button works
  - [ ] ESC key closes
  - [ ] Click outside closes
  - [ ] Previous/next navigation works
  - [ ] Keyboard arrow navigation
- [ ] Test marquee
  - [ ] Smooth continuous scroll
  - [ ] No gaps or jumps
- [ ] Test WhatsApp links
  - [ ] All CTA buttons link correctly
  - [ ] Pre-filled message works
  - [ ] Opens in new tab

### Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Android

### Device Testing
- [ ] Desktop (1920x1080, 1440x900, 1366x768)
- [ ] Laptop (1280x800)
- [ ] Tablet (iPad, 1024x768)
- [ ] Mobile (iPhone 12/13/14, various Android)
- [ ] Small mobile (iPhone SE, 375x667)

### Performance Testing
- [ ] Lighthouse audit (desktop)
- [ ] Lighthouse audit (mobile)
- [ ] WebPageTest
- [ ] Check bundle sizes
- [ ] Check image sizes
- [ ] Test slow 3G throttling

### Accessibility Testing
- [ ] axe DevTools scan
- [ ] WAVE tool scan
- [ ] Keyboard navigation full flow
- [ ] Screen reader test (NVDA/JAWS/VoiceOver)
- [ ] Color contrast check

### Validation
- [ ] W3C HTML validator
- [ ] W3C CSS validator
- [ ] Check all links (dead link checker)
- [ ] Check console for errors

## Phase 18: Docker Testing 🐳
- [ ] Build Docker image locally
  - [ ] \docker build -t utero-advertising:test .\
  - [ ] Check image size (target < 50MB)
- [ ] Run container locally
  - [ ] \docker run -p 8080:80 utero-advertising:test\
  - [ ] Test in browser: http://localhost:8080
- [ ] Test health check
  - [ ] \curl http://localhost:8080/health\
  - [ ] Should return "healthy"
- [ ] Test nginx configuration
  - [ ] Check gzip compression (dev tools network tab)
  - [ ] Check cache headers on static assets
  - [ ] Check security headers (X-Frame-Options, etc.)
- [ ] Test SPA routing
  - [ ] Refresh page at any section
  - [ ] Should serve index.html (no 404)
- [ ] Check logs
  - [ ] \docker logs utero-advertising\
  - [ ] No errors
- [ ] Test restart behavior
  - [ ] \docker restart utero-advertising\
  - [ ] Should come back up automatically

## Phase 19: Pre-Deployment Checklist ✅
- [ ] Final content review
  - [ ] Proofread all text
  - [ ] Check for typos
  - [ ] Verify contact information
- [ ] Final visual review
  - [ ] Check all sections on all devices
  - [ ] Consistent spacing
  - [ ] Aligned elements
- [ ] Performance check
  - [ ] Run Lighthouse one more time
  - [ ] All scores green
- [ ] Security check
  - [ ] No hardcoded secrets
  - [ ] HTTPS ready
  - [ ] Security headers in nginx
- [ ] SEO final check
  - [ ] All meta tags present
  - [ ] Structured data validates
  - [ ] Robots.txt present
  - [ ] Sitemap present
- [ ] Backup current setup
  - [ ] Export Docker image
  - [ ] Git commit all changes
  - [ ] Tag release version

## Phase 20: Deployment 🚀

### Initial Deployment
- [ ] Prepare server environment
  - [ ] Ensure Docker installed on server
  - [ ] Ensure domain points to server IP
  - [ ] Open ports 80 and 443
- [ ] Build production image
  - [ ] \docker build -t utero-advertising:v1.0.0 .\
  - [ ] Tag as latest: \docker tag utero-advertising:v1.0.0 utero-advertising:latest\
- [ ] Push to registry (optional)
  - [ ] Tag for registry: \docker tag utero-advertising:v1.0.0 your-registry/utero-advertising:v1.0.0\
  - [ ] Push: \docker push your-registry/utero-advertising:v1.0.0\
- [ ] Deploy to server
  - [ ] SSH into server
  - [ ] Pull image (if using registry) or copy image
  - [ ] Stop old container (if exists): \docker stop utero-advertising\
  - [ ] Remove old container: \docker rm utero-advertising\
  - [ ] Run new container:
    \\\ash
    docker run -d \
      --name utero-advertising \
      -p 80:80 \
      --restart unless-stopped \
      utero-advertising:latest
    \\\
- [ ] Verify deployment
  - [ ] Check container status: \docker ps\
  - [ ] Check logs: \docker logs utero-advertising\
  - [ ] Test health endpoint: \curl http://localhost/health\
  - [ ] Visit domain in browser

### SSL Setup
- [ ] Install certbot on server (if not using reverse proxy)
  - [ ] \pt install certbot python3-certbot-nginx\ (Ubuntu)
- [ ] Stop container temporarily
  - [ ] \docker stop utero-advertising\
- [ ] Obtain certificate
  - [ ] \certbot certonly --standalone -d advertising.uteroindonesia.com\
- [ ] Update nginx config in Docker
  - [ ] Add SSL server block to nginx/default.conf
  - [ ] Mount certificates as volumes
  - [ ] Rebuild Docker image
- [ ] Deploy with SSL
  - [ ] Run container with ports 80 and 443:
    \\\ash
    docker run -d \
      --name utero-advertising \
      -p 80:80 -p 443:443 \
      -v /etc/letsencrypt:/etc/letsencrypt:ro \
      --restart unless-stopped \
      utero-advertising:latest
    \\\
- [ ] Test HTTPS
  - [ ] Visit https://advertising.uteroindonesia.com
  - [ ] Check SSL certificate (valid, not expired)
  - [ ] Check HTTP → HTTPS redirect
- [ ] Setup auto-renewal
  - [ ] Add certbot renewal cron job
  - [ ] Test renewal: \certbot renew --dry-run\

### Post-Deployment Verification
- [ ] Full site test on live domain
  - [ ] All sections load correctly
  - [ ] All links work
  - [ ] All images display
  - [ ] Lightbox works
  - [ ] Marquee animates
  - [ ] WhatsApp links work
- [ ] Mobile test on live site
  - [ ] Test on real devices
  - [ ] iOS and Android
- [ ] Performance test on live site
  - [ ] Run Lighthouse on live URL
  - [ ] Check Core Web Vitals
- [ ] SEO verification
  - [ ] Submit to Google Search Console
  - [ ] Submit sitemap
  - [ ] Request indexing
- [ ] Analytics setup (optional)
  - [ ] Add Google Analytics 4
  - [ ] Verify tracking works

## Phase 21: Documentation 📚
- [ ] Update README.md
  - [ ] Project overview
  - [ ] Tech stack
  - [ ] Prerequisites
  - [ ] Local development setup
  - [ ] Docker build instructions
  - [ ] Deployment instructions
  - [ ] Environment variables (if any)
  - [ ] Troubleshooting section
- [ ] Code comments
  - [ ] Add JSDoc comments to complex functions
  - [ ] Document component props
  - [ ] Add inline comments for tricky logic
- [ ] Create CHANGELOG.md
  - [ ] Version 1.0.0 - Initial release
  - [ ] List of features
- [ ] Create deployment guide
  - [ ] Step-by-step deployment process
  - [ ] SSL setup instructions
  - [ ] Rollback procedure
- [ ] Document image replacement process
  - [ ] List placeholder images to replace
  - [ ] Specify required dimensions
  - [ ] Instructions for updating portfolio

## Phase 22: Monitoring & Maintenance 🔍
- [ ] Setup monitoring
  - [ ] Uptime monitoring (UptimeRobot, Pingdom, etc.)
  - [ ] Alert on downtime
- [ ] Setup log monitoring
  - [ ] Access Docker logs remotely
  - [ ] Check for errors regularly
- [ ] Setup backup strategy
  - [ ] Automated Docker image backups
  - [ ] Database backup (if added later)
- [ ] Create maintenance schedule
  - [ ] Monthly dependency updates
  - [ ] Quarterly security audit
  - [ ] SSL certificate renewal (every 90 days)
- [ ] Document common issues
  - [ ] Container won't start
  - [ ] Port already in use
  - [ ] SSL certificate issues
  - [ ] Image not displaying

## Phase 23: Handover & Training 🎓
- [ ] Client training
  - [ ] How to update content (when CMS added)
  - [ ] How to replace placeholder images
  - [ ] Basic troubleshooting
- [ ] Provide access
  - [ ] Git repository access
  - [ ] Server access (if applicable)
  - [ ] Docker registry access (if applicable)
- [ ] Handover documents
  - [ ] All documentation
  - [ ] Credentials (encrypted)
  - [ ] Emergency contacts

## Future Enhancements (Backlog) 🔮
- [ ] Replace placeholder images with real photos
  - [ ] Collect high-quality portfolio photos
  - [ ] Optimize and upload
  - [ ] Update data files
- [ ] Add CMS for easy content updates
  - [ ] Evaluate options (Strapi, Sanity, Contentful)
  - [ ] Setup backend
  - [ ] Create admin interface
- [ ] Blog section for SEO
  - [ ] Design blog layout
  - [ ] Setup blog CMS
  - [ ] Write initial blog posts
- [ ] Online quotation calculator
  - [ ] Design form
  - [ ] Build calculator logic
  - [ ] Email integration
- [ ] Client testimonials carousel
  - [ ] Collect testimonials
  - [ ] Design carousel
  - [ ] Implement with smooth transitions
- [ ] Case studies detail pages
  - [ ] Design detail page template
  - [ ] Create routing
  - [ ] Write case studies
- [ ] Multi-language support (EN/ID)
  - [ ] Setup i18n
  - [ ] Translate all content
  - [ ] Language switcher
- [ ] Live chat integration
  - [ ] Choose provider (Tawk.to, Crisp, etc.)
  - [ ] Install widget
- [ ] Email newsletter signup
  - [ ] Design signup form
  - [ ] Connect to email service (Mailchimp, etc.)
- [ ] Project inquiry form with file upload
  - [ ] Design form
  - [ ] Setup backend/serverless function
  - [ ] Email notifications
- [ ] Before/after image slider
  - [ ] Design slider component
  - [ ] Collect before/after photos
- [ ] Video portfolio integration
  - [ ] Setup video hosting (YouTube, Vimeo)
  - [ ] Create video gallery
- [ ] Admin dashboard
  - [ ] User authentication
  - [ ] Analytics dashboard
  - [ ] Content management

---

## Development Commands 💻

\\\ash
# Development
npm run dev              # Start dev server (port 3000)
npm run build            # Build for production
npm run preview          # Preview production build

# Docker
docker build -t utero-advertising .                    # Build image
docker run -p 8080:80 utero-advertising                # Run container
docker logs utero-advertising                          # View logs
docker exec -it utero-advertising sh                   # Shell into container

# Testing
npm run lint             # Run ESLint (if configured)
npm run test             # Run tests (if configured)
\\\

---

## Notes 📝
- **Priority**: Focus on core features first, enhancements can wait
- **Mobile-first**: Always design and test mobile first
- **Performance**: Keep bundle size small, optimize images
- **Accessibility**: Not optional, build it in from start
- **Docker**: Test locally before deploying to server
- **Placeholder images**: Document dimensions needed for real images
- **Content**: Minor improvements OK, but stay close to template
- **WhatsApp**: All CTAs should link to WhatsApp with pre-filled message

---

**Document Version**: 1.1  
**Last Updated**: 2026-09-03  
**Status**: Ready to Execute  
**Estimated Total Time**: 20-30 hours (depending on experience)
