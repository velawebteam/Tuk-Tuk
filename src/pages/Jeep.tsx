import { motion } from 'motion/react';
import { jeepTours } from '@/src/data/tours';
import { TourCard } from '@/src/components/TourCard';
import { useTranslation } from 'react-i18next';

export default function Jeep() {
  const { t } = useTranslation();
  
  return (
    <div className="pb-24">
      {/* Header */}
      <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center text-white overflow-hidden bg-brand-black">
        <div className="absolute inset-0 z-0">
          <iframe
            className="w-[300%] h-[300%] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            src="https://www.youtube.com/embed/SMnjhz8hjaY?autoplay=1&mute=1&loop=1&playlist=SMnjhz8hjaY&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&vq=hd720"
            allow="autoplay; encrypted-media"
            style={{ border: 'none' }}
            loading="eager"
            title="Jeep Adventure Background"
          ></iframe>
          <div className="absolute inset-0 bg-brand-black/70 backdrop-blur-[1px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full pt-16 md:pt-0">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-brand-brown font-bold uppercase tracking-[0.2em] text-xs sm:text-sm"
          >
            {t('jeep_page.subtitle_top')}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-6xl font-black mt-4 mb-6 leading-tight uppercase tracking-tight"
          >
            {t('jeep_page.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-brand-cream/90 text-lg md:text-xl max-w-2xl mx-auto font-medium px-4"
          >
            {t('jeep_page.description')}
          </motion.p>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 md:-mt-10 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {jeepTours.map((tour, index) => (
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

      {/* Why Jeep? */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1000&auto=format&fit=crop" 
                alt="Jeep Adventure" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-brand-black mb-6 uppercase tracking-tight">{t('jeep_page.why_title')}</h2>
              <ul className="space-y-6">
                {[
                  { title: t('jeep_page.why_item1_title'), desc: t('jeep_page.why_item1_desc') },
                  { title: t('jeep_page.why_item2_title'), desc: t('jeep_page.why_item2_desc') },
                  { title: t('jeep_page.why_item3_title'), desc: t('jeep_page.why_item3_desc') },
                  { title: t('jeep_page.why_item4_title'), desc: t('jeep_page.why_item4_desc') }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand-cream flex items-center justify-center shrink-0 mt-1 border border-brand-brown/10">
                      <div className="w-2 h-2 rounded-full bg-brand-brown"></div>
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-black uppercase tracking-wide text-sm">{item.title}</h3>
                      <p className="text-brand-black/60 text-sm font-medium">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
