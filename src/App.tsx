/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
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
  return (
    <Router>
      <div className="min-h-screen bg-brand-cream font-sans text-brand-black">
        <ScrollToTop />
        <Navbar />
        <main>
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
