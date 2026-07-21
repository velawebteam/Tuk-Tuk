import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Languages } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/src/lib/utils';
import { useTranslation } from 'react-i18next';
import mapPattern from '@/src/assets/images/map_pattern.jpg';

export function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if the current page has a dark hero section
  const isHeroPage = ['/', '/jipe', '/tuk-tuk', '/sobre-nos'].includes(location.pathname);
  // Show transparent only on hero pages when not scrolled
  const isTransparent = isHeroPage && !isScrolled;
  const isSolid = !isTransparent;

  const navLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.tuk_tuk'), href: '/tuk-tuk' },
    { name: t('nav.jeep'), href: '/jipe' },
    { name: t('nav.before_booking'), href: '/before-booking' },
    { name: t('nav.faqs'), href: '/faqs' },
    { name: t('nav.about'), href: '/sobre-nos' },
    { name: t('nav.contact'), href: '/contactos' },
  ];

  const languages = [
    { code: 'pt', label: 'PT' },
    { code: 'en', label: 'EN' },
    { code: 'fr', label: 'FR' },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false);
    setIsOpen(false);
  };

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isSolid 
          ? "bg-brand-cream border-b border-brand-brown/10 shadow-md" 
          : "bg-transparent"
      )}
    >
      {/* Background Pattern Overlay */}
      {isSolid && (
        <div 
          className="absolute inset-0 z-0 opacity-15 pointer-events-none"
          style={{ 
            backgroundImage: `url(${mapPattern})`,
            backgroundSize: '600px',
            backgroundRepeat: 'repeat',
          }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={cn(
          "flex justify-between items-center transition-all duration-300 w-full",
          isScrolled ? "h-14 md:h-20" : "h-20 md:h-32"
        )}>
          {/* Logo - Left */}
          <Link to="/" className="flex items-center group">
            <img 
              src="https://lh3.googleusercontent.com/d/1nBgIFM_5E5vclRhVItfSWT8rdG_Xt_Ml" 
              alt="Tavira Roots Logo" 
              className={cn(
                "object-contain transition-all duration-300",
                isScrolled ? "w-[45px] h-[45px] md:w-[70px] md:h-[70px]" : "w-[65px] h-[65px] md:w-[100px] md:h-[100px]"
              )}
            />
          </Link>

          {/* Desktop Links - Right */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "text-base font-bold uppercase tracking-widest transition-all duration-300 hover:text-brand-brown relative group font-display",
                  isSolid ? "text-brand-black" : "text-white",
                  location.pathname === link.href && (isSolid ? "text-brand-brown" : "text-brand-cream")
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-brand-brown transition-all duration-300 group-hover:w-full",
                  location.pathname === link.href ? "w-full" : "w-0",
                  !isSolid && "bg-brand-cream"
                )}></span>
              </Link>
            ))}

            {/* Language Switcher Desktop */}
            <div className="relative ml-4">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className={cn(
                  "flex items-center gap-1 text-base font-bold transition-colors uppercase font-display",
                  isSolid ? "text-brand-black hover:text-brand-brown" : "text-white hover:text-brand-cream"
                )}
              >
                <Languages size={20} />
                {i18n.language.split('-')[0]}
              </button>
              
              <AnimatePresence>
                {isLangOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-2 w-24 bg-white border border-brand-cream/10 rounded-xl shadow-xl overflow-hidden"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => changeLanguage(lang.code)}
                          className={cn(
                            "w-full px-4 py-2 text-left text-sm font-bold transition-colors hover:bg-brand-cream hover:text-brand-brown",
                            i18n.language.startsWith(lang.code) ? "text-brand-brown bg-brand-cream" : "text-brand-black"
                          )}
                        >
                          {lang.label}
                        </button>
                      ))}
                    </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            {/* Language Toggle Mobile Quick Access */}
            <div className="flex gap-2 bg-brand-cream p-1 rounded-full border border-brand-brown/5">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => i18n.changeLanguage(lang.code)}
                  className={cn(
                    "w-8 h-8 rounded-full text-[10px] font-bold transition-all",
                    i18n.language.startsWith(lang.code) 
                      ? "bg-brand-brown text-white shadow-sm" 
                      : "text-brand-black hover:text-brand-brown"
                  )}
                >
                  {lang.label}
                </button>
              ))}
            </div>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn(
                "p-2 transition-colors",
                isSolid ? "text-brand-black hover:text-brand-brown" : "text-white hover:text-brand-cream"
              )}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-brand-cream/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-3 py-3 rounded-lg text-base font-bold uppercase tracking-widest transition-colors font-display",
                    location.pathname === link.href
                      ? "bg-brand-cream text-brand-brown"
                      : "text-brand-black hover:bg-brand-cream/50"
                  )}
                >
                  {link.name}
                  <ChevronRight size={18} className={location.pathname === link.href ? "text-brand-brown" : "text-brand-black/20"} />
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
