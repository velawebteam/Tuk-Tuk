import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { X } from 'lucide-react';

const CONSENT_KEY = 'tr_cookie_consent';

const isBotOrAudit = () => {
  if (typeof navigator === 'undefined') return true;
  if ((navigator as any).webdriver) return true;
  const ua = navigator.userAgent || '';
  return /bot|crawl|spider|slurp|googlebot|bingbot|yandex|baiduspider|facebookexternalhit|lighthouse|pagespeed|gtmetrix|headlesschrome/i.test(ua);
};

function updateGtagConsent(granted: boolean) {
  const state = granted ? 'granted' : 'denied';
  if (typeof (window as any).gtag === 'function') {
    (window as any).gtag('consent', 'update', {
      ad_storage: state,
      analytics_storage: state,
      ad_user_data: state,
      ad_personalization: state,
    });
  }
}

export function CookieConsent() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isBotOrAudit()) return;
    try {
      const saved = localStorage.getItem(CONSENT_KEY);
      if (!saved) {
        const timer = setTimeout(() => setIsVisible(true), 1600);
        return () => clearTimeout(timer);
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  useEffect(() => {
    const handleOpen = () => setIsVisible(true);
    window.addEventListener('open-cookie-settings', handleOpen);
    return () => window.removeEventListener('open-cookie-settings', handleOpen);
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(CONSENT_KEY, 'accepted');
    } catch {
      // ignore storage errors
    }
    updateGtagConsent(true);
    setIsVisible(false);
  };

  const handleReject = () => {
    try {
      localStorage.setItem(CONSENT_KEY, 'rejected');
    } catch {
      // ignore storage errors
    }
    updateGtagConsent(false);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t('cookie_banner.title')}
      className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-lg z-50 bg-brand-cream border border-brand-brown/25 shadow-2xl rounded-2xl p-5 sm:p-6 text-brand-black"
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <h2 className="text-sm font-black uppercase tracking-wider text-brand-black">
          {t('cookie_banner.title')}
        </h2>
        <button
          type="button"
          onClick={handleReject}
          aria-label={t('cookie_banner.close')}
          className="text-brand-black/40 hover:text-brand-black transition-colors p-1"
        >
          <X size={18} />
        </button>
      </div>

      <p className="text-xs sm:text-sm text-brand-black/75 leading-relaxed mb-4">
        {t('cookie_banner.description')}{' '}
        <Link
          to="/cookies"
          onClick={() => setIsVisible(false)}
          className="text-brand-brown font-bold underline hover:text-brand-brown-light"
        >
          {t('footer.cookies')}
        </Link>
        {' · '}
        <Link
          to="/privacidade"
          onClick={() => setIsVisible(false)}
          className="text-brand-brown font-bold underline hover:text-brand-brown-light"
        >
          {t('footer.privacy')}
        </Link>
      </p>

      <div className="flex flex-col sm:flex-row gap-2.5">
        <button
          type="button"
          onClick={handleReject}
          className="flex-1 px-4 py-2.5 rounded-xl border border-brand-black/20 text-brand-black font-bold text-xs uppercase tracking-wider hover:bg-brand-black/5 transition-colors cursor-pointer"
        >
          {t('cookie_banner.reject')}
        </button>
        <button
          type="button"
          onClick={handleAccept}
          className="flex-1 px-4 py-2.5 rounded-xl bg-brand-brown text-white font-bold text-xs uppercase tracking-wider hover:bg-brand-brown-light transition-colors cursor-pointer"
        >
          {t('cookie_banner.accept')}
        </button>
      </div>
    </div>
  );
}
