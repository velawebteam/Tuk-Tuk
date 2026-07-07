import { motion } from 'motion/react';
import { tukTukTours } from '@/src/data/tours';
import { TourCard } from '@/src/components/TourCard';
import { useTranslation } from 'react-i18next';

export default function TukTuk() {
  const { t } = useTranslation();
  
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="bg-brand-black py-12 md:py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-16 md:pt-0">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-brand-brown font-bold uppercase tracking-[0.2em] text-xs sm:text-sm"
          >
            {t('tuk_tuk_page.subtitle_top')}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-6xl font-black mt-4 mb-6 uppercase tracking-tight"
          >
            {t('tuk_tuk_page.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-brand-cream/80 text-lg md:text-xl max-w-2xl mx-auto font-medium px-4"
          >
            {t('tuk_tuk_page.description')}
          </motion.p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 md:-mt-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {tukTukTours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <TourCard tour={tour} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Extra Info */}
      <section className="mt-24 max-w-4xl mx-auto px-4 text-center">
        <div className="p-12 rounded-3xl bg-brand-cream border border-brand-brown/10">
          <h2 className="text-2xl font-black text-brand-black mb-4 uppercase tracking-tight">{t('tuk_tuk_page.faq_title')}</h2>
          <p className="text-brand-black/60 mb-8 font-medium">
            {t('tuk_tuk_page.faq_desc')}
          </p>
          <button className="px-10 py-4 bg-brand-brown text-white rounded-full font-bold uppercase tracking-widest hover:bg-brand-brown-light transition-all shadow-lg shadow-brand-brown/20 transform hover:scale-105">
            {t('common.contact_whatsapp')}
          </button>
        </div>
      </section>
    </div>
  );
}
