# Claude Context: Launchpad Nexus MVP Template

## 🏢 Project Overview

**Project Name**: Launchpad Nexus - MVP Landing Page Template  
**Created by**: Data Science Tech (info@datasciencetech.ca)  
**Purpose**: Production-ready React/TypeScript template for rapid MVP development  
**Type**: GitHub Template Repository for client customization  

## 🎯 Project Purpose & Use Case

This is a **template repository** created by Data Science Tech for generating client MVP landing pages. The workflow is:

1. **Data Science Tech** maintains this template
2. **Clients** use "Use this template" to create their project
3. **Clients** customize placeholders with their branding
4. **Deploy** to production with minimal setup

## 🏗 Architecture & Tech Stack

### Core Framework
- **React 18** with TypeScript
- **Vite** for build tooling (port 8080)
- **Node.js 20.12.2+** requirement

### Styling & UI
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **Lucide React** icons
- **Responsive design** (mobile-first)

### Features & Integrations
- **Internationalization** (react-i18next) - EN/ES/FR
- **Analytics ready** (Sentry, Plausible)
- **GDPR compliant** (cookie banner)
- **SEO optimized** (meta tags, structured data)
- **Testing suite** (Playwright E2E + accessibility)

### Key Dependencies
```json
{
  "react": "^18.3.1",
  "typescript": "^5.5.3",
  "vite": "^5.4.1",
  "@tanstack/react-query": "^5.56.2",
  "react-router-dom": "^6.26.2",
  "tailwindcss": "^3.4.11",
  "@playwright/test": "^1.53.1"
}
```

## 📁 Project Structure

```
launchpad-nexus-template/
├── 📄 Documentation Files
│   ├── README.md              # Main documentation
│   ├── CLIENT_SETUP.md        # 5-min client setup guide
│   ├── CUSTOMIZATION.md       # Detailed customization guide
│   ├── LAUNCH_CHECKLIST.md    # Pre-launch checklist
│   └── CLAUDE.md              # This context file
├── ⚙️ Configuration
│   ├── package.json           # Dependencies & scripts
│   ├── vite.config.ts         # Vite configuration
│   ├── tailwind.config.ts     # Tailwind configuration
│   ├── playwright.config.ts   # Testing configuration
│   ├── .env.example           # Environment template
│   └── tsconfig.*.json        # TypeScript configs
├── 🌐 Public Assets
│   ├── favicon.svg            # Data Science Tech favicon
│   ├── favicon.ico            # Legacy favicon
│   ├── locales/               # Translation files
│   │   ├── en/common.json     # English translations
│   │   ├── es/common.json     # Spanish translations
│   │   └── fr/common.json     # French translations
│   └── robots.txt
├── 💻 Source Code
│   ├── src/
│   │   ├── App.tsx            # Main application component
│   │   ├── main.tsx           # Entry point
│   │   ├── components/        # React components
│   │   │   ├── Header.tsx     # Navigation header
│   │   │   ├── Footer.tsx     # Site footer (Data Science Tech attribution)
│   │   │   ├── sections/      # Landing page sections
│   │   │   │   ├── Hero.tsx   # Hero section
│   │   │   │   ├── Features.tsx # Features showcase
│   │   │   │   ├── Testimonials.tsx # Social proof
│   │   │   │   └── Contact.tsx # Contact form
│   │   │   └── ui/            # shadcn/ui components
│   │   ├── pages/             # Route components
│   │   │   ├── LandingPage.tsx # Main landing page
│   │   │   ├── PrivacyPolicy.tsx # GDPR privacy policy
│   │   │   └── NotFound.tsx   # 404 page
│   │   ├── hooks/             # Custom React hooks
│   │   └── lib/               # Utilities
│   │       ├── i18n.ts        # Internationalization setup
│   │       ├── sentry.ts      # Error tracking
│   │       ├── telemetry.ts   # Performance monitoring
│   │       └── utils.ts       # General utilities
├── 🧪 Testing
│   └── tests/
│       ├── accessibility.spec.ts # A11y tests
│       └── landing-page.spec.ts  # E2E tests
└── 🚀 Deployment
    └── deploy.sh              # Deployment script
```

## 🎨 Client Customization System

### Placeholder Convention
All client-customizable content uses consistent placeholders:

- `[CLIENT_NAME]` - Company/product name
- `[CLIENT_EMAIL]` - Contact email address
- `[CLIENT_PHONE]` - Phone number
- `[CLIENT_DOMAIN]` - Website domain (yourdomain.com)
- `[CLIENT_ADDRESS]` - Business address

### Key Customization Points
1. **Branding** (`src/components/Header.tsx`, `src/components/Footer.tsx`)
2. **Content** (`public/locales/en/common.json`)
3. **SEO** (`index.html` meta tags)
4. **Styling** (`tailwind.config.ts` brand colors)
5. **Analytics** (`.env.local` API keys)

## 🔧 Available Scripts

```bash
# Development
npm run dev              # Start dev server (localhost:8080)
npm run build           # Production build
npm run preview         # Preview production build

# Client Onboarding
npm run setup           # Install deps + Playwright browsers

# Testing
npm run test            # Run all Playwright tests
npm run test:headed     # Run tests with browser visible
npm run test:ui         # Interactive test UI
npm run test:accessibility # A11y tests only

# Deployment
npm run deploy:vercel   # Deploy to Vercel
npm run deploy:netlify  # Deploy to Netlify
npm run optimize        # Lint + Build + Test pipeline
```

## 🚀 Deployment Configurations

### Supported Platforms
- **Vercel** (recommended) - automatic deploys
- **Netlify** - JAMstack hosting
- **Any static host** - deploy `dist/` folder

### Environment Variables
```bash
# Analytics (Optional)
VITE_SENTRY_DSN=your_sentry_dsn
VITE_PLAUSIBLE_DOMAIN=yourdomain.com

# Feature Flags
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_ACCESSIBILITY_TESTING=false
```

## 🔍 Known Issues & Solutions

### Build Issues
- **OpenTelemetry imports**: Simplified for compatibility
- **CSP plugin**: Removed due to TypeScript conflicts
- **Axe accessibility**: Disabled by default (can be re-enabled)

### Development Issues
- **Port 8080**: Default development port
- **Node.js version**: Requires 20.12.2+ for optimal compatibility
- **Cache issues**: Clear `node_modules` and reinstall if needed

## 🎯 Data Science Tech Branding

### Attribution Requirements
- **Footer**: "Website created by Data Science Tech"
- **Documentation**: Credit to Data Science Tech
- **Favicon**: Data Science Tech "DS" logo
- **Contact**: info@datasciencetech.ca

### Company Context
- **Specializes in**: Web development, data science solutions
- **Target clients**: Startups, small businesses needing MVP landing pages
- **Service model**: Template-based rapid development

## 🔄 Workflow Integration

### GitHub Actions Context
When working with this project via GitHub Actions:

1. **Node.js 20+** environment required
2. **Install dependencies**: `npm install`
3. **Install Playwright**: `npx playwright install` (for testing)
4. **Build verification**: `npm run build`
5. **Test execution**: `npm run test` (optional)

### Automation Considerations
- **Build time**: ~30-45 seconds
- **Test time**: ~2-3 minutes (full Playwright suite)
- **Dependencies**: ~1900 modules
- **Output**: Static files in `dist/` directory

## 📚 Documentation Hierarchy

1. **README.md** - Developer overview and quick start
2. **CLIENT_SETUP.md** - Non-technical client onboarding
3. **CUSTOMIZATION.md** - Detailed technical customization
4. **LAUNCH_CHECKLIST.md** - Pre-launch validation
5. **CLAUDE.md** - This AI context file

## 🎨 Design System

### Colors
- **Primary**: Blue (#1e40af, #3b82f6, #60a5fa)
- **Neutral**: Gray scale (#f8f9fa to #1f2937)
- **Success/Error**: Standard semantic colors

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Font weights 600-700
- **Body**: Font weight 400

### Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🔒 Security Considerations

- **HTTPS enforced** in production
- **Security headers** configured in Vite
- **Input validation** on forms
- **GDPR compliance** via cookie banner
- **No hardcoded secrets** (use environment variables)

## 📈 Performance Targets

- **Lighthouse Score**: >90 (Performance, A11y, Best Practices, SEO)
- **Core Web Vitals**: All green
- **Bundle Size**: <400KB gzipped
- **Load Time**: <3 seconds on 3G

---

**Last Updated**: December 2024  
**Maintained by**: Data Science Tech (info@datasciencetech.ca)  
**Template Version**: 1.0.0
