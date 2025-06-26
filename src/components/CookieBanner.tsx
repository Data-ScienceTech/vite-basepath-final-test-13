
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { useCookieConsent, CookieConsent } from '@/hooks/useCookieConsent';

export const CookieBanner = () => {
  const { t } = useTranslation();
  const { showBanner, saveConsent, acceptAll, rejectAll } = useCookieConsent();
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookieConsent>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  if (!showBanner) return null;

  const handlePreferenceChange = (key: keyof CookieConsent, value: boolean) => {
    setPreferences(prev => ({
      ...prev,
      [key]: key === 'essential' ? true : value, // Essential cookies can't be disabled
    }));
  };

  const handleAcceptSelected = () => {
    saveConsent(preferences);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="max-w-4xl mx-auto shadow-lg">
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex-1">
              <h3 className="font-semibold text-lg mb-2">{t('cookie.title')}</h3>
              <p className="text-gray-600 text-sm mb-4">{t('cookie.description')}</p>
              
              {showDetails && (
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-medium">{t('cookie.essential')}</span>
                      <p className="text-xs text-gray-500">Required for the website to function</p>
                    </div>
                    <Switch
                      checked={preferences.essential}
                      disabled={true}
                      onCheckedChange={(checked) => handlePreferenceChange('essential', checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-medium">{t('cookie.analytics')}</span>
                      <p className="text-xs text-gray-500">Help us improve our website</p>
                    </div>
                    <Switch
                      checked={preferences.analytics}
                      onCheckedChange={(checked) => handlePreferenceChange('analytics', checked)}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-medium">{t('cookie.marketing')}</span>
                      <p className="text-xs text-gray-500">Personalized ads and content</p>
                    </div>
                    <Switch
                      checked={preferences.marketing}
                      onCheckedChange={(checked) => handlePreferenceChange('marketing', checked)}
                    />
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowDetails(!showDetails)}
              >
                {showDetails ? 'Hide Details' : 'Customize'}
              </Button>
              <Button variant="outline" size="sm" onClick={rejectAll}>
                {t('cookie.reject_all')}
              </Button>
              {showDetails ? (
                <Button size="sm" onClick={handleAcceptSelected}>
                  {t('cookie.accept_selected')}
                </Button>
              ) : (
                <Button size="sm" onClick={acceptAll}>
                  {t('cookie.accept_all')}
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
