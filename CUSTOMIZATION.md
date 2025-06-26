# 🛠 Template Customization Guide

This guide helps you customize the template for your specific needs.

*Professional template created by [Data Science Tech](mailto:info@datasciencetech.ca)*

## 🎨 Branding & Design

### Colors
Edit `tailwind.config.ts` to match your brand:

```javascript
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        // Replace with your brand colors
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',  // Main brand color
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        }
      }
    }
  }
}
```

### Typography
```javascript
// tailwind.config.ts
fontFamily: {
  sans: ['YourFont', 'Inter', 'system-ui', 'sans-serif'],
  heading: ['YourHeadingFont', 'Inter', 'sans-serif'],
}
```

### Custom Components
Create branded components in `src/components/branded/`:

```jsx
// src/components/branded/BrandButton.tsx
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const BrandButton = ({ className, ...props }) => {
  return (
    <Button 
      className={cn(
        "bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700",
        className
      )}
      {...props}
    />
  );
};
```

## 📝 Content Structure

### Landing Page Sections
The template includes these customizable sections:

1. **Hero** (`src/components/sections/Hero.tsx`)
   - Main headline
   - Subheadline
   - Call-to-action buttons
   - Background image/gradient

2. **Features** (`src/components/sections/Features.tsx`)
   - Feature list with icons
   - Benefits description
   - Social proof elements

3. **Testimonials** (`src/components/sections/Testimonials.tsx`)
   - Customer quotes
   - Company logos
   - Star ratings

4. **Contact** (`src/components/sections/Contact.tsx`)
   - Contact form
   - Contact information
   - Location/map

### Adding New Sections
1. Create component in `src/components/sections/`
2. Add translations to `public/locales/*/common.json`
3. Import and use in `src/pages/LandingPage.tsx`

Example new section:
```jsx
// src/components/sections/Pricing.tsx
import { useTranslation } from 'react-i18next';

export const Pricing = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">
          {t('pricing.title')}
        </h2>
        {/* Your pricing content */}
      </div>
    </section>
  );
};
```

## 🌍 Internationalization

### Adding New Languages
1. Create new folder in `public/locales/` (e.g., `de/`)
2. Copy `common.json` from `en/` folder
3. Translate all values
4. Add language to `src/components/LanguageSwitcher.tsx`

### Translation Structure
```json
{
  "nav": {
    "home": "Home",
    "features": "Features"
  },
  "hero": {
    "headline": "Your Main Headline",
    "subheadline": "Supporting description"
  },
  "features": {
    "title": "Section Title",
    "feature1": {
      "title": "Feature Name",
      "description": "Feature description"
    }
  }
}
```

### Using Translations
```jsx
import { useTranslation } from 'react-i18next';

const Component = () => {
  const { t } = useTranslation();
  
  return (
    <h1>{t('hero.headline')}</h1>
  );
};
```

## 🎯 Forms & Interactions

### Contact Form Integration
The template includes a basic contact form. To connect it to your backend:

1. **Update the form handler** in `src/components/sections/Contact.tsx`:
```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    
    if (response.ok) {
      // Success handling
      toast.success('Message sent successfully!');
    }
  } catch (error) {
    toast.error('Failed to send message');
  }
};
```

2. **Popular form services**:
   - **Formspree**: Add `action="https://formspree.io/f/YOUR_FORM_ID"`
   - **Netlify Forms**: Add `netlify` attribute to form
   - **Vercel**: Create API route in `api/contact.js`

### Newsletter Signup
Add newsletter component:
```jsx
// src/components/Newsletter.tsx
export const Newsletter = () => {
  return (
    <div className="bg-primary-600 py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Stay Updated
        </h2>
        <form className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-lg"
          />
          <button className="bg-white text-primary-600 px-6 py-2 rounded-lg font-semibold">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};
```

## 📊 Analytics & Tracking

### Custom Event Tracking
```jsx
// Track custom events
const trackEvent = (eventName, properties = {}) => {
  if (window.plausible) {
    window.plausible(eventName, { props: properties });
  }
};

// Usage in components
const handleCTAClick = () => {
  trackEvent('CTA Click', { location: 'Hero' });
  // Navigate or perform action
};
```

### Conversion Tracking
```jsx
// Track form submissions
const handleFormSubmit = () => {
  trackEvent('Contact Form Submit');
  // Submit form
};

// Track downloads
const handleDownload = () => {
  trackEvent('Download', { file: 'product-guide.pdf' });
  // Trigger download
};
```

## 🎨 Advanced Styling

### Dark Mode Support
Add dark mode toggle:
```jsx
// src/components/ThemeToggle.tsx
import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';

export const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};
```

### Animations
Add smooth animations:
```jsx
// Install framer-motion: npm install framer-motion
import { motion } from 'framer-motion';

export const AnimatedSection = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
```

## 🔧 Performance Optimization

### Image Optimization
```jsx
// Use optimized images
<img
  src="/images/hero.webp"
  alt="Hero"
  loading="lazy"
  width={800}
  height={600}
  className="object-cover"
/>
```

### Code Splitting
```jsx
// Lazy load components
import { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./HeavyComponent'));

const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <LazyComponent />
  </Suspense>
);
```

## 🚀 Deployment Configurations

### Vercel Setup
```json
// vercel.json
{
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

### Netlify Setup
```toml
# netlify.toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

Need help with any specific customization? Contact [Data Science Tech](mailto:info@datasciencetech.ca) for professional support!
