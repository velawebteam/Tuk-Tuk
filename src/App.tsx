/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { VideoPreloader } from './components/VideoPreloader';
import { LoadingScreen } from './components/LoadingScreen';
import Home from './pages/Home';
import TukTuk from './pages/TukTuk';
import Jeep from './pages/Jeep';
import WalkingTours from './pages/WalkingTours';
import BeforeBooking from './pages/BeforeBooking';
import FAQs from './pages/FAQs';
import About from './pages/About';
import Contact from './pages/Contact';
import TourDetail from './pages/TourDetail';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import DisputeResolution from './pages/DisputeResolution';
import { CookieConsent } from './components/CookieConsent';

function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Track pageview on route change for Google Ads and Analytics
    if (typeof (window as any).gtag === 'function') {
      (window as any).gtag('config', 'AW-18443286620', {
        page_path: pathname,
      });
      (window as any).gtag('config', 'G-JJ1SWJFB11', {
        page_path: pathname,
      });
    }
  }, [pathname]);
  
  return null;
}

const isBotOrAudit = () => {
  if (typeof navigator === 'undefined') return true;
  if ((navigator as any).webdriver) return true;
  const ua = navigator.userAgent || '';
  return /bot|crawl|spider|slurp|googlebot|bingbot|yandex|baiduspider|facebookexternalhit|lighthouse|pagespeed|gtmetrix|headlesschrome/i.test(ua);
};

export default function App() {
  const [isLoading, setIsLoading] = useState(() => {
    if (isBotOrAudit()) return false;
    try {
      if (sessionStorage.getItem('tr_splash_seen') === '1') return false;
    } catch {
      // ignore storage errors
    }
    return true;
  });

  useEffect(() => {
    if (!isLoading) return;

    try {
      sessionStorage.setItem('tr_splash_seen', '1');
    } catch {
      // ignore storage errors
    }

    const minLoadingTime = new Promise(resolve => setTimeout(resolve, 900));
    const maxTimeout = new Promise(resolve => setTimeout(resolve, 1400));
    const windowLoad = new Promise(resolve => {
      if (document.readyState === 'complete') {
        resolve(null);
      } else {
        window.addEventListener('load', () => resolve(null), { once: true });
      }
    });

    Promise.race([
      Promise.all([minLoadingTime, windowLoad]),
      maxTimeout
    ]).then(() => {
      setIsLoading(false);
    });
  }, [isLoading]);

  return (
    <Router>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>
      
      <div className="min-h-screen bg-brand-cream font-sans text-brand-black overflow-x-hidden w-full max-w-full relative">
        <ScrollToTop />
        <VideoPreloader />
        <Navbar />
        <main className="overflow-x-hidden w-full max-w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tuk-tuk" element={<TukTuk />} />
            <Route path="/jipe" element={<Jeep />} />
            <Route path="/walking-tours" element={<WalkingTours />} />
            <Route path="/before-booking" element={<BeforeBooking />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/sobre-nos" element={<About />} />
            <Route path="/contactos" element={<Contact />} />
            <Route path="/tour/:id" element={<TourDetail />} />
            <Route path="/privacidade" element={<Privacy />} />
            <Route path="/termos" element={<Terms />} />
            <Route path="/cookies" element={<Cookies />} />
            <Route path="/resolucao-de-litigios" element={<DisputeResolution />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}
