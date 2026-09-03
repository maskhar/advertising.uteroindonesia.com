# Product Requirements Document (PRD)
# Utero Advertising Website

## 1. Overview
Website untuk Utero Advertising, perusahaan jasa reklame outdoor & indoor di Malang, dibangun menggunakan **Vite + React** untuk performa optimal dan modern development experience dengan component-based architecture.

## 2. Business Objectives
- Menampilkan portofolio dan layanan Utero Advertising secara profesional
- Meningkatkan lead generation melalui WhatsApp integration
- Membangun kredibilitas dengan menampilkan klien-klien besar
- Memberikan informasi lengkap tentang proses kerja dan legalitas

## 3. Target Audience
- Pemilik usaha yang membutuhkan jasa reklame
- Marketing manager perusahaan
- Developer properti
- Event organizer
- Lokasi: Malang, Surabaya, Mojokerto, Madiun

## 4. Core Features

### 4.1 Hero Section
- Tagline utama yang impactful
- CTA langsung ke WhatsApp
- Visual yang menarik perhatian

### 4.2 Layanan
- Billboard & Videotron
- Neon Box & Signage
- Papan Nama Toko
- Baliho, Spanduk, Umbul-umbul
- Percetakan Digital
- Interior & Eksterior
- Event Support

### 4.3 Portofolio
- Gallery dengan lightbox
- Dokumentasi project sebelumnya
- Placeholder images untuk development (akan diganti dengan foto asli)

### 4.4 Proses Kerja
- 4 tahap: Konsultasi → Desain → Produksi → Instalasi
- Visual timeline yang jelas

### 4.5 Legal & Dokumentasi
- Perizinan reklame
- Pajak reklame
- Laporan real-time
- Dokumentasi lengkap

### 4.6 Social Proof
- Marquee klien-klien besar (YAMAHA, HONDA, PERTAMINA, TELKOMSEL, dll)
- 28+ brand ternama

### 4.7 Footer
- Informasi kontak lengkap
- Alamat kantor: Jl. Raya Tlogomas No. 5B, Malang
- Link social media
- WhatsApp: 0856-4848-1999
- Email: info@uteroindonesia.com

## 5. Technical Requirements

### 5.1 Frontend Stack
- **Build Tool**: Vite 5.x
- **Framework**: React 18.x
- **Language**: JavaScript (ES6+) or TypeScript (optional)
- **Styling**: CSS Modules / Vanilla CSS
- **State Management**: React Hooks (useState, useEffect)
- **Routing**: React Router (jika multi-page, optional untuk single page)

### 5.2 Development
- **Package Manager**: npm / yarn / pnpm
- **Hot Module Replacement**: Vite HMR
- **Linting**: ESLint
- **Formatting**: Prettier (optional)

### 5.3 Assets
- **Images**: Placeholder images selama development
- **Icons**: SVG inline atau icon library
- **Fonts**: Google Fonts (Anton, Inter) dengan preconnect

### 5.4 Deployment
- **Container**: Docker
- **Web Server**: Nginx (inside Docker)
- **Hosting**: Self-hosted infrastructure
- **SSL**: Let's Encrypt / Manual certificate
- **Domain**: advertising.uteroindonesia.com

### 5.5 Performance
- **Responsive**: Mobile-first approach
- **Performance**: Lazy loading images, code splitting
- **SEO**: Meta tags lengkap, semantic HTML
- **Bundle Size**: Target < 500KB initial load

## 6. Design Requirements
- Font: Anton (headings), Inter (body)
- Color scheme: Red (#E31E24) primary, neutral tones
- Industrial/blueprint aesthetic dengan bracket corners
- Smooth animations dan transitions
- Card-based layout
- Hover effects pada interactive elements

## 7. Content Strategy
- **Source**: Copy dari template HTML existing
- **Improvements**: Minor grammar dan flow improvements untuk clarity
- **Tone**: Professional, confident, action-oriented
- **Language**: Bahasa Indonesia
- **CTAs**: Clear dan direct ke WhatsApp

## 8. Success Metrics
- Page load time < 3 detik
- Mobile responsive 100%
- Lighthouse score: Performance 90+, SEO 95+, Accessibility 90+
- WhatsApp click-through rate tracking (optional)
- Bounce rate target < 50%
- Docker container startup < 10 seconds

## 9. Constraints & Limitations

### 9.1 Version 1 Scope (Current)
- Single page application (SPA)
- Static content only
- No backend/API integration
- No CMS
- No blog section
- No contact form (WhatsApp CTA only)
- No portfolio filtering
- No testimonials section
- Placeholder images (to be replaced later)

### 9.2 Out of Scope (Future)
- Content Management System
- Multi-language support
- Blog/news section
- Online quotation form
- Live chat integration
- User authentication
- Database integration
- Admin dashboard

## 10. Deployment Architecture

### 10.1 Docker Setup
- Multi-stage build (build stage + production stage)
- Nginx as reverse proxy / static file server
- Environment variables for configuration
- Health check endpoint
- Minimal image size (Alpine Linux based)

### 10.2 CI/CD (Optional)
- Git-based workflow
- Automated builds
- Container registry (Docker Hub / private registry)
- Automated deployment to server

## 11. Timeline & Phases

### Phase 1: Setup & Structure (Estimated: 2-3 hours)
- Vite + React project initialization
- Folder structure
- Base styles & design system
- Docker configuration

### Phase 2: Component Development (Estimated: 6-8 hours)
- All sections as React components
- Lightbox functionality
- Marquee animation
- Responsive layouts

### Phase 3: Content & Polish (Estimated: 2-3 hours)
- Copy content from template
- Minor improvements
- Placeholder images
- Testing

### Phase 4: Deployment (Estimated: 1-2 hours)
- Docker build & test
- Nginx configuration
- Self-hosted deployment
- Domain setup & SSL

**Total Estimated: 11-16 hours**

## 12. Dependencies & Requirements

### 12.1 Development Environment
- Node.js 18+ (LTS)
- npm / yarn / pnpm
- Docker 20+
- Docker Compose (optional)
- Git

### 12.2 Production Environment
- Linux server (Ubuntu 22.04 recommended)
- Docker runtime
- Nginx (in container)
- Domain with DNS access
- SSL certificate

## 13. Acceptance Criteria

### Must Have
- ✅ Pixel-perfect match dengan template design
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ All sections implemented sesuai template
- ✅ Lightbox working untuk portfolio
- ✅ Marquee animation smooth
- ✅ WhatsApp CTAs functional
- ✅ Docker container runs successfully
- ✅ Lighthouse score > 90 (Performance)

### Nice to Have
- ✅ TypeScript support
- ✅ Smooth scroll animations
- ✅ Loading states
- ✅ Error boundaries
- ✅ Analytics ready (GA4 integration point)

## 14. Risk & Mitigation

### Technical Risks
- **Risk**: Docker image size too large
  - **Mitigation**: Multi-stage build, Alpine base image
  
- **Risk**: React bundle size bloat
  - **Mitigation**: Code splitting, lazy loading, tree shaking

- **Risk**: Placeholder images tidak match aspect ratio
  - **Mitigation**: Use same dimensions as original, document sizes needed

### Deployment Risks
- **Risk**: Self-hosted downtime
  - **Mitigation**: Health checks, monitoring, backup plan
  
- **Risk**: SSL certificate renewal
  - **Mitigation**: Automated renewal setup (certbot)

## 15. Open Questions (Resolved)
- ✅ **Framework**: React confirmed
- ✅ **Assets**: Placeholder images confirmed
- ✅ **Features**: Template only, no extras
- ✅ **Deployment**: Docker self-hosted confirmed
- ✅ **Content**: Use template copy with minor improvements

## 16. Contact & Stakeholders
- **Developer**: [Your name/team]
- **Client**: Utero Advertising / Utero Indonesia
- **Domain**: advertising.uteroindonesia.com
- **Repository**: TBD

---

**Document Version**: 1.1  
**Last Updated**: 2026-09-03  
**Status**: Approved - Ready for Development
