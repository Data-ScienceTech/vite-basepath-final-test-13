
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export interface CookieConsent {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_CONSENT_KEY = 'cookie-consent';

export const useCookieConsent = () => {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if analytics is disabled via environment variable
    const analyticsDisabled = import.meta.env.VITE_DISABLE_ANALYTICS === 'true';
    
    if (analyticsDisabled) {
      // Set consent to essential only if analytics is disabled
      setConsent({ essential: true, analytics: false, marketing: false });
      return;
    }

    const savedConsent = Cookies.get(COOKIE_CONSENT_KEY);
    if (savedConsent) {
      try {
        const parsedConsent = JSON.parse(savedConsent);
        setConsent(parsedConsent);
        // Only load analytics if previously consented
        if (parsedConsent.analytics) {
          loadAnalytics();
        }
      } catch (error) {
        console.error('Error parsing cookie consent:', error);
        setShowBanner(true);
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  const saveConsent = (newConsent: CookieConsent) => {
    // Don't allow analytics if disabled via environment
    const analyticsDisabled = import.meta.env.VITE_DISABLE_ANALYTICS === 'true';
    const finalConsent = analyticsDisabled 
      ? { ...newConsent, analytics: false, marketing: false }
      : newConsent;

    setConsent(finalConsent);
    setShowBanner(false);
    Cookies.set(COOKIE_CONSENT_KEY, JSON.stringify(finalConsent), { expires: 365 });
    
    // Load analytics if consented, or remove if not consented
    if (finalConsent.analytics) {
      loadAnalytics();
    } else {
      removeAnalytics();
    }
  };

  const acceptAll = () => {
    saveConsent({ essential: true, analytics: true, marketing: true });
  };

  const rejectAll = () => {
    saveConsent({ essential: true, analytics: false, marketing: false });
  };

  const loadAnalytics = () => {
    if (typeof window !== 'undefined' && !window.plausible) {
      // Remove any existing analytics scripts first
      removeAnalytics();
      
      const script = document.createElement('script');
      script.defer = true;
      script.dataset.domain = window.location.hostname;
      script.src = 'https://plausible.io/js/script.js';
      script.id = 'plausible-script';
      document.head.appendChild(script);
    }
  };

  const removeAnalytics = () => {
    // Remove Plausible script
    const existingScript = document.getElementById('plausible-script');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Clear plausible function
    if (typeof window !== 'undefined' && window.plausible) {
      delete window.plausible;
    }
  };

  return {
    consent,
    showBanner,
    saveConsent,
    acceptAll,
    rejectAll,
  };
};
