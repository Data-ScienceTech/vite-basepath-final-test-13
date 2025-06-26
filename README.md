# 🚀 Launchpad Nexus - MVP Landing Page Template

A production-ready, modern landing page template designed for rapid MVP development. Built with React, TypeScript, and cutting-edge web technologies.

**Created by [Data Science Tech](mailto:info@datasciencetech.ca)** - Professional web development and data science solutions.

## ✨ Features

### 🎨 **Modern Design System**
- **shadcn/ui components** - Beautiful, accessible UI components
- **Tailwind CSS** - Utility-first CSS framework
- **Responsive design** - Mobile-first approach
- **Dark/Light mode ready** - Theme switching capability

### 🌍 **Internationalization**
- **Multi-language support** - English, Spanish, French included
- **Easy translation management** - JSON-based translations
- **Browser language detection** - Automatic locale detection
- **Dynamic language switching** - Real-time language changes

### 🔧 **Developer Experience**
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast development server
- **Hot reload** - Instant development feedback
- **ESLint & Prettier** - Code quality and formatting
- **Path aliases** - Clean import statements (`@/components`)

### 📊 **Analytics & Monitoring**
- **Sentry integration** - Error tracking and performance monitoring
- **OpenTelemetry** - Observability and tracing
- **Plausible Analytics ready** - Privacy-friendly analytics
- **Accessibility testing** - axe-core integration (configurable)

### 🧪 **Testing Suite**
- **Playwright** - End-to-end testing
- **Accessibility tests** - Automated a11y testing
- **Landing page tests** - Component testing

### 🍪 **GDPR Compliance**
- **Cookie consent banner** - GDPR/CCPA compliant
- **Privacy policy page** - Ready-to-customize
- **Local storage management** - Consent-based storage

## 🚀 Quick Start

### Prerequisites
- Node.js 20.12.2+ (or use [nvm](https://github.com/nvm-sh/nvm))
- npm or yarn package manager

### Installation

```bash
# 1. Clone the repository
git clone <YOUR_REPO_URL>
cd launchpad-nexus-template

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser
# Navigate to http://localhost:8080
```

### First-Time Setup

1. **Update branding** in `src/components/sections/Hero.tsx`
2. **Customize content** in `public/locales/en/common.json`
3. **Update meta tags** in `index.html`
4. **Configure analytics** (see Analytics Setup below)

## 📁 Project Structure

```
├── public/
│   ├── locales/          # Translation files
│   │   ├── en/common.json
│   │   ├── es/common.json
│   │   └── fr/common.json
│   └── favicon.ico
├── src/
│   ├── components/       # Reusable components
│   │   ├── sections/     # Landing page sections
│   │   └── ui/          # shadcn/ui components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utilities and configurations
│   ├── pages/           # Route components
│   └── App.tsx          # Main application
├── tests/               # Playwright tests
└── package.json
```

## 🎨 Customization Guide

### 1. **Branding & Content**

Update your brand colors in `tailwind.config.ts`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your brand colors
      }
    }
  }
}
```

### 2. **Landing Page Sections**

Edit components in `src/components/sections/`:
- `Hero.tsx` - Main hero section
- `Features.tsx` - Product features
- `Testimonials.tsx` - Customer testimonials
- `Contact.tsx` - Contact form

### 3. **Translations**

Add/edit translations in `public/locales/{lang}/common.json`:
```json
{
  "hero": {
    "headline": "Your Amazing Product",
    "subheadline": "Description of your product"
  }
}
```

### 4. **SEO & Meta Tags**

Update `index.html` with your:
- Title and description
- Open Graph tags
- Twitter Card tags
- Favicon

## 📊 Analytics Setup

### Sentry (Error Tracking)
```bash
# Add environment variables
VITE_SENTRY_DSN=your_sentry_dsn_here
```

### Plausible Analytics
```bash
# Add environment variables
VITE_PLAUSIBLE_DOMAIN=yourdomain.com
```

### OpenTelemetry
```bash
# Add environment variables
VITE_OTLP_ENDPOINT=your_otlp_endpoint
```

## 🧪 Testing

```bash
# Install Playwright browsers (first time only)
npx playwright install

# Run all tests
npm run test

# Run tests in headed mode
npx playwright test --headed

# Run tests with UI
npx playwright test --ui

# Run specific test file
npx playwright test landing-page.spec.ts
```

## 🤖 Automation & GitHub Actions

This template includes powerful GitHub Actions workflows for automated deployment and quality assurance:

### 🚀 **Automated Deployment**
- **Trigger**: Push to main branch or Pull Request
- **Actions**: TypeScript check → Build → Test → Deploy to Vercel
- **Setup**: Add Vercel secrets to GitHub repository

### 🎯 **Client Setup Automation**
- **Trigger**: Manual workflow dispatch
- **Actions**: Replace placeholders → Create PR with customizations
- **Use**: Perfect for onboarding new clients quickly

### 🔍 **Quality Assurance**
- **Trigger**: PRs, main branch, weekly schedule
- **Actions**: Lint → TypeCheck → Accessibility → Security scan
- **Benefits**: Maintain code quality automatically

**📚 Learn more**: See [`.github/workflows/README.md`](./.github/workflows/README.md) for complete setup instructions.

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repo to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push

### Netlify
1. Connect your GitHub repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

### Other Platforms
Build the project:
```bash
npm run build
```
Deploy the `dist` folder to your hosting provider.

## 🔧 Environment Variables

Create a `.env.local` file:

```bash
# Analytics (Optional)
VITE_SENTRY_DSN=your_sentry_dsn
VITE_PLAUSIBLE_DOMAIN=yourdomain.com
VITE_OTLP_ENDPOINT=your_otlp_endpoint

# Feature Flags (Optional)
VITE_ENABLE_ANALYTICS=true
VITE_ENABLE_ACCESSIBILITY_TESTING=false
```

## 🎯 MVP Checklist

- [ ] Update branding and content
- [ ] Customize hero section
- [ ] Add your product features
- [ ] Update contact information
- [ ] Set up analytics
- [ ] Test on mobile devices
- [ ] Run accessibility tests
- [ ] Update privacy policy
- [ ] Set up deployment
- [ ] Configure custom domain

## 🛠 Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 18 + TypeScript |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS + shadcn/ui |
| **Routing** | React Router |
| **State Management** | TanStack Query |
| **Internationalization** | react-i18next |
| **Testing** | Playwright |
| **Analytics** | Sentry + OpenTelemetry |
| **Accessibility** | axe-core |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if needed
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💡 Support

- **Documentation**: Check this README and inline comments
- **Professional Support**: Contact [Data Science Tech](mailto:info@datasciencetech.ca)
- **Issues**: Open a GitHub issue
- **Discussions**: Use GitHub Discussions for questions

---

**Happy building! 🚀**

> Created with ❤️ by [Data Science Tech](mailto:info@datasciencetech.ca) for rapid MVP development
