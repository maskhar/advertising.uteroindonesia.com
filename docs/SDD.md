# Software Design Document (SDD)
# Utero Advertising Website

## 1. Architecture Overview

### 1.1 Tech Stack
- **Build Tool**: Vite 5.x
- **Frontend Framework**: React 18.x
- **Language**: JavaScript (ES6+)
- **Styling**: CSS3 with CSS Modules (optional) or Vanilla CSS
- **Package Manager**: npm
- **Fonts**: Google Fonts (Anton, Inter)
- **Container**: Docker with multi-stage build
- **Web Server**: Nginx (Alpine)
- **Deployment**: Self-hosted Docker container

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
│   │   │   ├── placeholder-billboard-1.jpg
│   │   │   ├── placeholder-videotron-1.jpg
│   │   │   ├── placeholder-neonbox-1.jpg
│   │   │   └── placeholder-signage-1.jpg
│   │   ├── services/
│   │   │   └── (service icons/images)
│   │   └── clients/
│   │       └── (client logos if needed)
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   │   └── (SVG icons)
│   │   └── styles/
│   │       ├── variables.css
│   │       ├── reset.css
│   │       ├── typography.css
│   │       └── utilities.css
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Portfolio.jsx
│   │   │   ├── Process.jsx
│   │   │   ├── Documentation.jsx
│   │   │   ├── Legal.jsx
│   │   │   ├── Support.jsx
│   │   │   └── Clients.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Eyebrow.jsx
│   │   │   └── Bracket.jsx
│   │   └── features/
│   │       ├── Lightbox.jsx
│   │       ├── Marquee.jsx
│   │       └── MobileMenu.jsx
│   ├── hooks/
│   │   ├── useScrollSpy.js
│   │   └── useLightbox.js
│   ├── utils/
│   │   ├── constants.js
│   │   └── helpers.js
│   ├── data/
│   │   ├── services.js
│   │   ├── portfolio.js
│   │   ├── clients.js
│   │   └── process.js
│   ├── styles/
│   │   └── main.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.html
├── nginx/
│   ├── nginx.conf
│   └── default.conf
├── .dockerignore
├── .gitignore
├── Dockerfile
├── docker-compose.yml (optional)
├── package.json
├── vite.config.js
└── README.md
\\\

## 2. Design System

### 2.1 Color Palette
\\\css
:root {
  /* Brand Colors */
  --red: #E31E24;
  --red-dark: #9E1319;
  --red-deep: #7A0E13;
  
  /* Neutral Colors */
  --ink: #17130F;
  --ink-soft: #3A342E;
  --paper: #FBF8F3;
  --paper-dim: #F1ECE3;
  --steel: #1C1D1F;
  --steel-2: #2B2C2F;
  
  /* Accent Colors */
  --amber: #FFB020;
  --line: #E7DFD1;
  
  /* Layout */
  --maxw: 1180px;
  --radius: 2px;
  
  /* Spacing */
  --spacing-xs: 8px;
  --spacing-sm: 16px;
  --spacing-md: 24px;
  --spacing-lg: 48px;
  --spacing-xl: 72px;
}
\\\

### 2.2 Typography
\\\css
/* Display - Anton */
h1, h2, h3, .display {
  font-family: 'Anton', sans-serif;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.01em;
  line-height: 0.98;
}

/* Body - Inter */
body, p, span, a, button {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
  font-weight: 400;
  line-height: 1.55;
}

/* Eyebrow */
.eyebrow {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}
\\\

### 2.3 Component Design Tokens

#### Buttons
\\\javascript
// Button variants
const buttonVariants = {
  primary: {
    background: 'var(--red)',
    color: '#fff',
    hover: 'var(--red-dark)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--ink)',
    border: '2px solid var(--ink)',
    hover: { background: 'var(--ink)', color: '#fff' }
  },
  outlineLight: {
    background: 'transparent',
    color: '#fff',
    border: '2px solid rgba(255,255,255,0.55)',
    hover: { background: '#fff', color: 'var(--ink)' }
  }
};
\\\

#### Cards
\\\css
.card {
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: var(--spacing-md);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(23, 19, 15, 0.08);
}
\\\

### 2.4 Responsive Breakpoints
\\\css
/* Mobile first approach */
--breakpoint-sm: 640px;   /* Tablet */
--breakpoint-md: 768px;   /* Small desktop */
--breakpoint-lg: 1024px;  /* Desktop */
--breakpoint-xl: 1280px;  /* Large desktop */
\\\

## 3. React Architecture

### 3.1 Component Hierarchy
\\\
App
├── Header
│   ├── Logo
│   ├── Navigation
│   └── MobileMenu
├── Hero
│   └── Button (CTA)
├── Services
│   └── ServiceCard (x8)
├── Portfolio
│   ├── PortfolioGrid
│   │   └── PortfolioItem (x4)
│   └── Lightbox
├── Process
│   └── ProcessStep (x4)
├── Documentation
│   └── Card
├── Legal
│   └── Card
├── Support
│   └── SupportCard (x3)
├── Clients
│   └── Marquee
│       └── ClientName (x28)
└── Footer
    ├── ContactInfo
    └── SocialLinks
\\\

### 3.2 State Management
\\\javascript
// App-level state
const [lightboxOpen, setLightboxOpen] = useState(false);
const [currentImage, setCurrentImage] = useState(null);
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
const [activeSection, setActiveSection] = useState('hero');

// Custom hooks
useScrollSpy(['hero', 'services', 'portfolio', 'process', 'contact']);
useLightbox(portfolioImages);
\\\

### 3.3 Data Structure

#### services.js
\\\javascript
export const services = [
  {
    id: 'billboard',
    title: 'Billboard & Videotron',
    description: 'Media luar ruang...',
    icon: '/images/services/billboard.svg'
  },
  // ... 7 more
];
\\\

#### portfolio.js
\\\javascript
export const portfolio = [
  {
    id: 'port-1',
    title: 'Billboard Yamaha - Jl. Soekarno Hatta',
    category: 'billboard',
    image: '/images/portfolio/placeholder-billboard-1.jpg',
    thumbnail: '/images/portfolio/thumb-billboard-1.jpg',
    caption: 'Billboard Yamaha di Jl. Soekarno Hatta, Malang'
  },
  // ... more items
];
\\\

#### clients.js
\\\javascript
export const clients = [
  'YAMAHA', 'HONDA', 'PERTAMINA', 'TELKOMSEL',
  'XL AXIATA', 'SMARTFREN', 'INDOSAT OOREDOO',
  // ... 28 total
];
\\\

## 4. Key Features Implementation

### 4.1 Sticky Navigation with Scroll Spy
\\\javascript
// useScrollSpy.js
export const useScrollSpy = (sectionIds) => {
  const [activeSection, setActiveSection] = useState('');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = sectionIds.map(id => ({
        id,
        element: document.getElementById(id)
      }));
      
      const current = sections.find(section => {
        const rect = section.element?.getBoundingClientRect();
        return rect && rect.top <= 100 && rect.bottom > 100;
      });
      
      if (current) setActiveSection(current.id);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIds]);
  
  return activeSection;
};
\\\

### 4.2 Lightbox Component
\\\javascript
// Lightbox.jsx
const Lightbox = ({ image, isOpen, onClose, onNext, onPrev }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, onNext, onPrev]);
  
  if (!isOpen) return null;
  
  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <img src={image.src} alt={image.alt} />
        <p className="lightbox-caption">{image.caption}</p>
        <button onClick={onClose} className="lightbox-close">×</button>
      </div>
    </div>
  );
};
\\\

### 4.3 Marquee Animation
\\\javascript
// Marquee.jsx
const Marquee = ({ items, speed = 50 }) => {
  return (
    <div className="marquee">
      <div className="marquee-content" style={{ animationDuration: \\s\ }}>
        {items.concat(items).map((item, index) => (
          <span key={index} className="marquee-item">{item}</span>
        ))}
      </div>
    </div>
  );
};

// CSS
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.marquee-content {
  display: flex;
  animation: marquee linear infinite;
}
\\\

### 4.4 WhatsApp Integration
\\\javascript
// utils/constants.js
export const WHATSAPP_NUMBER = '6285648481999';

export const getWhatsAppLink = (message = '') => {
  const defaultMessage = 'Halo Utero Advertising, saya tertarik dengan layanan reklame Anda.';
  const text = encodeURIComponent(message || defaultMessage);
  return \https://wa.me/\?text=\\;
};

// Button component usage
<Button 
  as="a" 
  href={getWhatsAppLink()} 
  target="_blank"
  rel="noopener noreferrer"
  variant="primary"
>
  Konsultasi Gratis
</Button>
\\\

### 4.5 Smooth Scroll
\\\javascript
// utils/helpers.js
export const smoothScrollTo = (elementId) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

// Navigation link
<a 
  href="#services" 
  onClick={(e) => {
    e.preventDefault();
    smoothScrollTo('services');
  }}
>
  Layanan
</a>
\\\

## 5. Docker Architecture

### 5.1 Multi-Stage Dockerfile
\\\dockerfile
# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# Stage 2: Production
FROM nginx:alpine

# Copy built assets
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx config
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
\\\

### 5.2 Nginx Configuration
\\\
ginx
# nginx/default.conf
server {
    listen 80;
    server_name advertising.uteroindonesia.com;
    root /usr/share/nginx/html;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript 
               application/x-javascript application/xml+rss 
               application/javascript application/json image/svg+xml;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # SPA fallback
    location / {
        try_files \ \/ /index.html;
    }

    # Health check endpoint
    location /health {
        access_log off;
        return 200 "healthy\n";
        add_header Content-Type text/plain;
    }
}
\\\

### 5.3 Docker Compose (Optional)
\\\yaml
# docker-compose.yml
version: '3.8'

services:
  web:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: utero-advertising
    ports:
      - "8080:80"
    restart: unless-stopped
    environment:
      - NODE_ENV=production
    healthcheck:
      test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost/"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 40s
\\\

## 6. Performance Optimization

### 6.1 Code Splitting
\\\javascript
// Lazy load Lightbox
const Lightbox = lazy(() => import('./components/features/Lightbox'));

// Usage with Suspense
<Suspense fallback={<div>Loading...</div>}>
  {lightboxOpen && <Lightbox {...props} />}
</Suspense>
\\\

### 6.2 Image Optimization
\\\javascript
// Lazy load images below fold
const PortfolioItem = ({ image }) => {
  return (
    <img 
      src={image.thumbnail} 
      alt={image.alt}
      loading="lazy"
      decoding="async"
    />
  );
};
\\\

### 6.3 Vite Configuration
\\\javascript
// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom']
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true
      }
    }
  },
  server: {
    port: 3000
  }
});
\\\

## 7. SEO Implementation

### 7.1 Meta Tags in index.html
\\\html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Utero Advertising | Jasa Reklame Outdoor & Indoor - Malang</title>
  <meta name="description" content="Utero Advertising melayani reklame end-to-end: billboard, videotron, neon box, papan nama, baliho. Desain, produksi, perizinan, hingga pemasangan." />
  <meta name="keywords" content="jasa reklame malang, billboard, videotron, neon box, papan nama toko" />
  
  <!-- Open Graph -->
  <meta property="og:type" content="business.business" />
  <meta property="og:title" content="Utero Advertising | Reklame Outdoor & Indoor" />
  <meta property="og:description" content="Jasa reklame end-to-end di Malang" />
  <meta property="og:url" content="https://advertising.uteroindonesia.com/" />
  <meta property="og:locale" content="id_ID" />
  
  <!-- Theme -->
  <meta name="theme-color" content="#E31E24" />
  
  <!-- Canonical -->
  <link rel="canonical" href="https://advertising.uteroindonesia.com/" />
  
  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico" />
  
  <!-- Preconnect fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
</head>
\\\

### 7.2 Structured Data
\\\javascript
// Add to index.html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Utero Advertising",
  "description": "Jasa reklame outdoor dan indoor",
  "url": "https://advertising.uteroindonesia.com",
  "telephone": "+62-856-4848-1999",
  "email": "info@uteroindonesia.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Jl. Raya Tlogomas No. 5B",
    "addressLocality": "Malang",
    "addressRegion": "Jawa Timur",
    "addressCountry": "ID"
  },
  "sameAs": [
    "https://www.instagram.com/uteroindonesia",
    "https://wa.me/6285648481999"
  ]
}
</script>
\\\

## 8. Accessibility

### 8.1 ARIA Labels
\\\javascript
<button 
  onClick={openLightbox}
  aria-label="Lihat gambar billboard dalam ukuran penuh"
>
  <img src={thumb} alt="Billboard Yamaha" />
</button>

<nav aria-label="Navigasi utama">
  <a href="#services" aria-label="Menuju bagian layanan">Layanan</a>
</nav>
\\\

### 8.2 Keyboard Navigation
- Tab order logical
- Focus visible states
- Escape key closes modals
- Skip to content link

### 8.3 Color Contrast
- Text: 4.5:1 minimum (WCAG AA)
- Large text: 3:1 minimum
- Interactive elements: Clear hover/focus states

## 9. Testing Strategy

### 9.1 Development Testing
\\\ash
# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
\\\

### 9.2 Docker Testing
\\\ash
# Build image
docker build -t utero-advertising .

# Run container locally
docker run -p 8080:80 utero-advertising

# Test health check
curl http://localhost:8080/health
\\\

### 9.3 Lighthouse Audit
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 95+

## 10. Deployment Process

### 10.1 Build & Deploy Steps
\\\ash
# 1. Build Docker image
docker build -t utero-advertising:latest .

# 2. Tag for registry (if using)
docker tag utero-advertising:latest your-registry/utero-advertising:latest

# 3. Push to registry
docker push your-registry/utero-advertising:latest

# 4. Deploy on server
ssh your-server
docker pull your-registry/utero-advertising:latest
docker stop utero-advertising || true
docker rm utero-advertising || true
docker run -d \
  --name utero-advertising \
  -p 80:80 \
  --restart unless-stopped \
  utero-advertising:latest

# 5. Verify deployment
curl https://advertising.uteroindonesia.com/health
\\\

### 10.2 SSL Setup (Self-hosted)
\\\ash
# Using certbot
certbot --nginx -d advertising.uteroindonesia.com

# Or manual certificate
# Add SSL config to nginx
\\\

## 11. Monitoring & Maintenance

### 11.1 Health Checks
- Docker health check every 30s
- Nginx status monitoring
- Uptime monitoring (external service)

### 11.2 Logs
\\\ash
# Container logs
docker logs -f utero-advertising

# Nginx access logs
docker exec utero-advertising tail -f /var/log/nginx/access.log
\\\

### 11.3 Updates
- Dependency updates: monthly
- Security patches: as needed
- Content updates: replace placeholder images when available

---

**Document Version**: 1.1  
**Last Updated**: 2026-09-03  
**Status**: Approved - Ready for Implementation
