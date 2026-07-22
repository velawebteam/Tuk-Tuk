import { motion } from 'motion/react';
import { tukTukTours } from '@/src/data/tours';
import { TourCard } from '@/src/components/TourCard';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';

export default function TukTuk() {
  const { t } = useTranslation();
  
  return (
    <div className="pb-24">
      <SEO 
        title={t('tuk_tuk_page.title')}
        description={t('tuk_tuk_page.description')}
        canonical="/tuk-tuk"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": tukTukTours.map((tour, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "TouristTrip",
              "name": t(tour.nameKey),
              "description": t(tour.descriptionKey),
              "image": tour.image,
              "touristType": "Sightseeing",
              "itinerary": {
                "@type": "ItemList",
                "numberOfItems": 1,
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Tavira"
                  }
                ]
              }
            }
          }))
        }}
      />
      {/* Header */}
      <section className="relative h-[600px] md:h-[800px] overflow-hidden flex items-center justify-center text-white pt-28 md:pt-0 bg-black">
        {/* Video Background Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <iframe
            className="absolute top-1/2 left-1/2 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2"
            src="https://www.youtube.com/embed/8ZDu00ylXKY?autoplay=1&mute=1&loop=1&playlist=8ZDu00ylXKY&controls=0&showinfo=0&autohide=1&modestbranding=1&rel=0&hd=1"
            allow="autoplay; encrypted-media"
            title="Background Video"
            style={{ filter: 'contrast(1.1) brightness(0.9)' }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 md:pt-0 relative z-20">
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

      {/* Why Tuk Tuk? */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <div className="rounded-3xl overflow-hidden shadow-2xl h-[450px] md:h-[550px]">
                <img 
                  src="https://lh3.googleusercontent.com/d/1AjiBBg8TYYaCSnwPu7AA3Ses4lp9av0x" 
                  alt="Tuk Tuk Adventure" 
                  className="w-full h-full object-cover object-bottom"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-brand-black mb-6 uppercase tracking-tight">{t('tuk_tuk_page.diff_title')}</h2>
              <ul className="space-y-6">
                {[
                  { title: t('diff.exclusivity_title'), desc: t('diff.exclusivity_desc') },
                  { title: t('diff.authentic_title'), desc: t('diff.authentic_desc') },
                  { title: t('diff.guides_title'), desc: t('diff.guides_desc') }
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
