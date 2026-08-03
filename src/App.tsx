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
import BeforeBooking from './pages/BeforeBooking';
import FAQs from './pages/FAQs';
import About from './pages/About';
import Contact from './pages/Contact';
import TourDetail from './pages/TourDetail';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show loading screen for at least 3 seconds for branding
    // or until the window has finished loading everything
    const minLoadingTime = new Promise(resolve => setTimeout(resolve, 3000));
    const windowLoad = new Promise(resolve => {
      if (document.readyState === 'complete') {
        resolve(null);
      } else {
        window.addEventListener('load', resolve);
      }
    });

    Promise.all([minLoadingTime, windowLoad]).then(() => {
      setIsLoading(false);
    });
  }, []);

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
            <Route path="/before-booking" element={<BeforeBooking />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/sobre-nos" element={<About />} />
            <Route path="/contactos" element={<Contact />} />
            <Route path="/tour/:id" element={<TourDetail />} />
            <Route path="/privacidade" element={<Privacy />} />
            <Route path="/termos" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
