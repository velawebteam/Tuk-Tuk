import { motion } from 'motion/react';
import { Users, Map, Star, ChevronRight, Camera, Coffee, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { tukTukTours, jeepTours } from '@/src/data/tours';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';

export default function Home() {
  const { t } = useTranslation();
  const featuredTours = [...tukTukTours.slice(0, 2), ...jeepTours.slice(0, 1)];

  return (
    <div>
      <SEO 
        title={t('hero.title_part1') + t('hero.title_highlight')}
        description={t('hero.subtitle')}
        canonical="/"
      />
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden bg-brand-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/d/10h7VJYsdSK7Vg2-W28Es38EHUA3cHx1g" 
            alt="Tavira Algarve" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center pt-20 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6">
              {t('hero.title_part1')}<span className="text-white">{t('hero.title_highlight')}</span>{t('hero.title_part2')}
            </h1>
            <p className="text-lg md:text-2xl text-brand-cream mb-10 leading-relaxed max-w-3xl mx-auto px-4">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-6">
              <Link to="/tuk-tuk" className="px-8 py-4 bg-brand-brown hover:bg-brand-brown-light text-white rounded-full font-bold text-lg transition-all transform hover:scale-105 text-center shadow-lg shadow-brand-brown/20">
                {t('hero.cta_tuk')}
              </Link>
              <Link to="/jipe" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 rounded-full font-bold text-lg transition-all transform hover:scale-105 text-center">
                {t('hero.cta_jeep')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Differentiator Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-black mb-4">{t('diff.title')}</h2>
            <div className="h-1.5 w-24 bg-brand-brown mx-auto rounded-full"></div>
            <p className="mt-6 text-xl text-brand-black/60 max-w-3xl mx-auto font-medium">
              {t('diff.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Users className="text-brand-brown" size={32} />,
                title: t('diff.exclusivity_title'),
                desc: t('diff.exclusivity_desc')
              },
              {
                icon: <Map className="text-brand-brown" size={32} />,
                title: t('diff.authentic_title'),
                desc: t('diff.authentic_desc')
              },
              {
                icon: <Star className="text-brand-brown" size={32} />,
                title: t('diff.guides_title'),
                desc: t('diff.guides_desc')
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl bg-brand-cream border border-brand-brown/10 text-center"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-brand-brown/5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-3">{item.title}</h3>
                <p className="text-brand-black/60 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="py-16 md:py-24 bg-brand-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase tracking-tight">{t('home.featured_title')}</h2>
              <p className="text-brand-cream/70 text-lg font-medium">
                {t('home.featured_subtitle')}
              </p>
            </div>
            <Link to="/tuk-tuk" className="text-brand-brown font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
              {t('home.view_all')} <ChevronRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredTours.map((tour) => (
              <motion.div
                key={tour.id}
                className="group relative h-[500px] rounded-3xl overflow-hidden border border-white/5"
              >
                <img 
                  src={tour.image} 
                  alt={t(tour.nameKey)} 
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${tour.image.includes('1AgBECV3LgIOLdu520PZLGPzQNVrUFNbZ') ? 'object-left' : ''}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/30 to-transparent opacity-90"></div>
                <div className="absolute top-0 left-0 p-8 z-20">
                  <span className="inline-block px-3 py-1 rounded-full bg-brand-brown/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-brand-cream border border-brand-brown/30">
                    {tour.type === 'tuk-tuk' ? `${t('nav.tuk_tuk')} ${t('common.private')}` : `${t('nav.jeep')} ${t('common.private')}`}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-2xl font-bold mb-2 uppercase tracking-wide">{t(tour.nameKey)}</h3>
                      <p className="text-brand-cream/80 text-sm mb-4 line-clamp-2 font-medium">{t(tour.descriptionKey)}</p>
                      <div className="flex gap-2 text-[10px] font-bold uppercase tracking-widest text-white">
                        <span className="bg-black/80 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                          {tour.duration}
                        </span>
                        <span className="bg-black/80 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                          {tour.pax} {t('common.pax')}
                        </span>
                      </div>
                    </div>
                  </div>
                  <Link 
                    to={`/tour/${tour.id}`} 
                    className="mt-6 w-full py-4 bg-brand-brown text-white rounded-xl font-bold uppercase tracking-widest text-center block transition-all hover:bg-brand-brown-light shadow-lg shadow-brand-brown/20"
                  >
                    {t('common.view_details')}
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Attractions Grid (Icons) */}
      <section className="py-16 md:py-24 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-black mb-4 uppercase tracking-tight">{t('home.attractions_title')}</h2>
            <p className="text-brand-black/60 font-medium">{t('home.attractions_subtitle')}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Coffee size={32} />, name: t('home.chocolate') },
              { icon: <Leaf size={32} />, name: t('home.olives') },
              { icon: <Map size={32} />, name: t('home.salt') },
              { icon: <Camera size={32} />, name: t('home.pottery') },
            ].map((attr, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center text-brand-brown border border-brand-brown/10">
                  {attr.icon}
                </div>
                <span className="font-bold text-brand-black uppercase tracking-widest text-sm">{attr.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-black rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-brand-brown/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 uppercase tracking-tight">{t('home.cta_box_title')}</h2>
              <p className="text-brand-cream/80 text-lg mb-10 font-medium">
                {t('home.cta_box_subtitle')}
              </p>
              <Link to="/tuk-tuk" className="px-10 py-5 bg-brand-brown hover:bg-brand-brown-light text-white rounded-full font-black uppercase tracking-[0.2em] text-lg shadow-xl shadow-brand-brown/20 transition-all transform hover:scale-105 inline-block">
                {t('common.reserve_now')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
