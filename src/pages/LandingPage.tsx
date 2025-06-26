
import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/Footer';
import { CookieBanner } from '@/components/CookieBanner';

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <Features />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default LandingPage;
