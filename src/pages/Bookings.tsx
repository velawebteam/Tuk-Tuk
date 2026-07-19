import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';
import { motion } from 'motion/react';

export default function Bookings() {
  const { t } = useTranslation();
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (calendarRef.current) {
      const script = document.createElement('script');
      script.src = "https://fareharbor.com/embeds/script/calendar/mariastuktuk/?full-items=yes&flow=1006571&fallback=simple";
      script.async = true;
      calendarRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="pt-40 pb-24 min-h-screen bg-brand-cream/30">
      <SEO 
        title={t('nav.bookings') || 'Reservas'}
        description={t('home.cta_box_subtitle')}
        canonical="/reservas"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-black text-brand-black mb-6 uppercase tracking-tight">
            {t('common.reserve_now')}
          </h1>
          <div className="h-1.5 w-24 bg-brand-brown mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-brand-black/60 max-w-2xl mx-auto font-medium">
            {t('home.cta_box_subtitle')}
          </p>
        </motion.div>

        <div className="bg-white rounded-[2.5rem] p-4 md:p-8 shadow-xl border border-brand-brown/5 min-h-[600px]">
          <div ref={calendarRef}></div>
        </div>
      </div>
    </div>
  );
}
