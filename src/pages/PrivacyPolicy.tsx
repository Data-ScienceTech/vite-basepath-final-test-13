
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';

const PrivacyPolicy = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-gray max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            <p className="text-lg text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  [Company] ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains 
                  how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
                <h3 className="text-xl font-medium text-gray-800 mb-3">2.1 Personal Information</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4 ml-4">
                  <li>Fill out forms on our website</li>
                  <li>Contact us via email or phone</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Use our services</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  This information may include your name, email address, phone number, company name, job title, and mailing address.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use collected information for the following purposes:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>To provide and maintain our services</li>
                  <li>To communicate with you</li>
                  <li>To send marketing communications (with your consent)</li>
                  <li>To improve our website and services</li>
                  <li>To comply with legal requirements</li>
                  <li>To detect and prevent fraud</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Cookies and Tracking</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to enhance your experience on our website. 
                  Our cookie banner allows you to control which types of cookies you accept:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                  <div><strong>Essential Cookies:</strong> Required for the website to function properly</div>
                  <div><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</div>
                  <div><strong>Marketing Cookies:</strong> Used to provide personalized advertisements</div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Your Rights</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Access to your personal data</li>
                  <li>Correction of inaccurate data</li>
                  <li>Deletion of your data</li>
                  <li>Restriction of processing</li>
                  <li>Data portability</li>
                  <li>Objection to processing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <p><strong>Email:</strong> [CLIENT_EMAIL]</p>
                  <p><strong>Phone:</strong> [CLIENT_PHONE]</p>
                  <p><strong>Address:</strong> [CLIENT_ADDRESS]</p>
                  <div className="mt-3 pt-3 border-t border-blue-200">
                    <p className="text-sm text-gray-600">
                      <strong>Website created by:</strong>{' '}
                      <a 
                        href="mailto:info@datasciencetech.ca" 
                        className="text-blue-600 hover:text-blue-800"
                      >
                        Data Science Tech
                      </a>
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <Button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 rounded-full p-3"
            size="sm"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
