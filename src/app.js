import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './LanguageContext';
import Navbar from './ui-components/Navbar';
import Hero from './ui-components/Hero';
import CompanySection from './ui-components/CompanySection';
import ProjectsGallery from './ui-components/ProjectsGallery';
import TestimonialsSection from './ui-components/TestimonialsSection';
import ConsultationForm from './ui-components/ConsultationForm';
import Footer from './ui-components/Footer';

const scrollToHashElement = (hash) => {
  if (!hash || !hash.startsWith('#')) return false;
  const targetId = hash.slice(1);
  if (!targetId) return false;
  const el = document.getElementById(targetId);
  if (el) {
    const headerOffset = 88;
    const elementPosition = el.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = Math.max(0, elementPosition - headerOffset);
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    return true;
  }
  return false;
};

const HomePage = () => {
  return (
    <main style={{ width: '100%', overflowX: 'hidden' }}>
      <Hero />
      <CompanySection />
      <ProjectsGallery />
      <TestimonialsSection />
      <ConsultationForm />
    </main>
  );
};

export const App = () => {
  useEffect(() => {
    if (window.location.hash) {
      const normalizedHash = window.location.hash.replace(/^#\/+/, '#');
      if (normalizedHash !== window.location.hash) {
        window.history.replaceState(null, '', normalizedHash);
      }
      setTimeout(() => {
        scrollToHashElement(normalizedHash);
      }, 100);
    }

    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      if (scrollToHashElement(href)) {
        e.preventDefault();
        window.history.pushState(null, '', href);
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <div className="dreamhome-app" style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <Routes>
            <Route path="/free-quote" element={<ConsultationForm />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;


