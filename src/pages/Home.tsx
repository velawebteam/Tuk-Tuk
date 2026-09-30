import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Users, Map, Star, ChevronRight, ChevronLeft, Camera, Coffee, Leaf, Wine, UtensilsCrossed, Fish, Castle, Clock, CheckCircle2, Anchor, Calendar, Compass, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { tukTukTours, jeepTours } from '@/src/data/tours';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';
import { trackEvent } from '../utils/analytics';

export default function Home() {
  const { t } = useTranslation();
  const [showBookingOptions, setShowBookingOptions] = useState(false);
  const [anchorImgIndex, setAnchorImgIndex] = useState(0);
  
  const featuredTours = [...tukTukTours.slice(0, 2), ...jeepTours.slice(0, 1)];
  const anchorTour = jeepTours.find(t => t.id === 'jeep-boat-anchors') || jeepTours[0];
  const anchorImages = anchorTour?.gallery && anchorTour.gallery.length > 0 ? anchorTour.gallery : [anchorTour.image];

  const nextAnchorImg = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setAnchorImgIndex((prev) => (prev + 1) % anchorImages.length);
  };

  const prevAnchorImg = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setAnchorImgIndex((prev) => (prev - 1 + anchorImages.length) % anchorImages.length);
  };

  return (
    <div>
      <SEO 
        title={t('seo.home_title')}
        description={t('seo.home_desc')}
        keywords={t('seo.home_keywords')}
        canonical="/"
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-brand-black w-full max-w-full py-12">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <iframe
            className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.78vh] scale-[1.35] -translate-x-1/2 -translate-y-1/2 pointer-events-none border-0 border-none outline-none object-cover"
            src="https://www.youtube.com/embed/kd1Y8XVpAvI?autoplay=1&mute=1&loop=1&playlist=kd1Y8XVpAvI&controls=0&showinfo=0&autohide=1&modestbranding=1&rel=0&hd=1&vq=hd1080"
            allow="autoplay; encrypted-media"
            title="Tavira Roots Background Video"
            style={{ border: 'none', outline: 'none', filter: 'contrast(1.1) brightness(0.8)' }}
            loading="eager"
          />
          <div className="absolute inset-0 bg-black/30 z-10"></div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center pt-28 md:pt-36 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
              {t('hero.title_part1')}<span className="text-white">{t('hero.title_highlight')}</span>{t('hero.title_part2')}
            </h1>
            <p className="text-base md:text-2xl text-brand-cream mb-6 leading-relaxed max-w-3xl mx-auto px-4 opacity-90">
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

      {/* Featured Highlight: Anchor Cemetery Tour */}
      {anchorTour && (
        <section className="py-16 md:py-24 bg-gradient-to-br from-brand-cream via-white to-brand-cream border-y border-brand-brown/10 overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-black rounded-[2.5rem] overflow-hidden text-white shadow-2xl relative border border-brand-brown/30">
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand-brown/25 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-brown/15 rounded-full blur-3xl pointer-events-none"></div>

              {/* Prominent Header Banner Inside Card */}
              <div className="pt-8 sm:pt-10 px-6 sm:px-8 md:px-12 text-center border-b border-white/10 pb-6 relative z-10 bg-brand-black">
                <div className="flex items-center justify-center gap-4 sm:gap-6 max-w-full">
                  <div className="hidden sm:block h-[2px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-brand-brown/80 rounded-full"></div>
                  <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brand-cream uppercase tracking-tight drop-shadow-md">
                    {t('home.anchor_section.title')}
                  </h2>
                  <div className="hidden sm:block h-[2px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-brand-brown/80 rounded-full"></div>
                </div>
                <div className="h-1.5 w-24 bg-brand-brown mx-auto rounded-full mt-3 shadow-sm"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 md:p-12 lg:p-14">
                {/* Left Column: Interactive Image Gallery */}
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-6 relative flex flex-col gap-3"
                >
                  <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group border border-white/10 bg-black">
                    <AnimatePresence mode="wait">
                      <motion.img 
                        key={anchorImgIndex}
                        src={anchorImages[anchorImgIndex]} 
                        alt={`${t(anchorTour.nameKey)} - ${anchorImgIndex + 1}`} 
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </AnimatePresence>

                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent pointer-events-none"></div>
                    
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                      <span className="px-3.5 py-1.5 bg-brand-brown text-white rounded-full text-xs font-black uppercase tracking-widest shadow-md">
                        {t('home.anchor_section.badge')}
                      </span>
                      <span className="px-3.5 py-1.5 bg-black/60 backdrop-blur-md text-white border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest">
                        {t('common.private')} 4x4
                      </span>
                    </div>

                    {/* Navigation Arrows */}
                    {anchorImages.length > 1 && (
                      <>
                        <button 
                          onClick={prevAnchorImg}
                          className="absolute left-3 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-brand-brown backdrop-blur-md text-white rounded-full transition-all shadow-xl z-20 cursor-pointer"
                          aria-label="Previous image"
                        >
                          <ChevronLeft size={22} />
                        </button>
                        <button 
                          onClick={nextAnchorImg}
                          className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-black/50 hover:bg-brand-brown backdrop-blur-md text-white rounded-full transition-all shadow-xl z-20 cursor-pointer"
                          aria-label="Next image"
                        >
                          <ChevronRight size={22} />
                        </button>
                      </>
                    )}

                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end z-10 text-white">
                      <div className="flex gap-2">
                        <span className="bg-black/80 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-white/10 flex items-center gap-1.5">
                          <Clock size={14} className="text-brand-brown" />
                          {anchorTour.duration}
                        </span>
                        <span className="bg-black/80 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-white/10 flex items-center gap-1.5">
                          <Users size={14} className="text-brand-brown" />
                          {anchorTour.pax} {t('common.pax')}
                        </span>
                      </div>
                      <span className="bg-black/80 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-sm border border-white/10 flex items-center gap-1.5">
                        <Camera size={14} className="text-brand-brown" />
                        {anchorImgIndex + 1} / {anchorImages.length}
                      </span>
                    </div>
                  </div>

                  {/* Thumbnail Strip */}
                  {anchorImages.length > 1 && (
                    <div className="flex gap-2.5 overflow-x-auto py-1 hide-scrollbar scroll-smooth w-full">
                      {anchorImages.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setAnchorImgIndex(i)}
                          className={`relative flex-shrink-0 transition-all rounded-xl overflow-hidden border cursor-pointer ${
                            anchorImgIndex === i 
                              ? 'border-brand-brown ring-2 ring-brand-brown ring-offset-1 ring-offset-brand-black scale-105 z-10' 
                              : 'border-white/10 opacity-50 hover:opacity-100'
                          }`}
                        >
                          <img 
                            src={img} 
                            alt={`Thumbnail ${i + 1}`} 
                            className="w-16 h-12 object-cover" 
                            referrerPolicy="no-referrer" 
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </motion.div>

                {/* Right Column: Tour Info & Highlights */}
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:col-span-6 space-y-6"
                >
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight leading-tight">
                    {t(anchorTour.nameKey)}
                  </h3>

                  <p className="text-brand-cream/80 text-base font-medium leading-relaxed">
                    {t('home.anchor_section.subtitle')}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {(anchorTour.itinerary || []).map((item, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-brand-cream/90 text-xs font-bold uppercase tracking-wide">
                        <CheckCircle2 size={16} className="text-brand-brown shrink-0" />
                        <span>{t(item.activity)}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/10">
                    <Link 
                      to={`/tour/${anchorTour.id}`}
                      className="px-8 py-4 bg-brand-brown hover:bg-brand-brown-light text-white rounded-2xl font-black uppercase tracking-widest text-center transition-all shadow-lg shadow-brand-brown/20 flex items-center justify-center gap-2"
                    >
                      {t('home.anchor_section.cta_details')}
                      <ChevronRight size={18} />
                    </Link>
                    <a 
                      href={`https://wa.me/351968995275?text=${encodeURIComponent(`Olá! Gostaria de reservar o passeio: ${t(anchorTour.nameKey)}`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackEvent('book_now_click', { tour_id: anchorTour.id, location: 'home_anchor_section' })}
                      className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-2xl font-black uppercase tracking-widest text-center transition-all flex items-center justify-center gap-2"
                    >
                      <Calendar size={18} className="text-brand-brown" />
                      {t('home.anchor_section.cta_book')}
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      )}

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
                  className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${tour.image?.includes?.('1AgBECV3LgIOLdu520PZLGPzQNVrUFNbZ') ? 'object-left' : ''}`}
                  referrerPolicy="no-referrer"
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
              { icon: <Castle size={32} />, name: t('home.city') },
              { icon: <Coffee size={32} />, name: t('home.chocolate') },
              { icon: <Leaf size={32} />, name: t('home.olives') },
              { icon: <Wine size={32} />, name: t('home.wine') },
              { icon: <UtensilsCrossed size={32} />, name: t('home.tapas') },
              { icon: <Map size={32} />, name: t('home.salt') },
              { icon: <Camera size={32} />, name: t('home.pottery') },
              { icon: <Fish size={32} />, name: t('home.octopus_tuna') },
            ].map((attr, i) => (
              <motion.div 
                key={i} 
                className="flex flex-col items-center gap-4"
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <div className="w-20 h-20 bg-white rounded-full shadow-md flex items-center justify-center text-brand-brown border border-brand-brown/10">
                  {attr.icon}
                </div>
                <span className="font-bold text-brand-black uppercase tracking-widest text-sm text-center">{attr.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tavira City Section */}
      <section className="py-20 md:py-32 bg-brand-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-brand-black mb-8 leading-tight">
                {t('home.city_tavira.title')}
              </h2>
              <div className="prose prose-lg text-brand-black/70 mb-10 leading-relaxed font-medium">
                <p>{t('home.city_tavira.description')}</p>
              </div>
              
              <div className="flex flex-wrap gap-3 md:gap-4">
                {[
                  t('home.city_tavira.highlight1'),
                  t('home.city_tavira.highlight2'),
                  t('home.city_tavira.highlight3')
                ].map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 bg-white p-3.5 md:p-4 rounded-2xl shadow-sm border border-brand-brown/5">
                    <div className="w-2 h-2 rounded-full bg-brand-brown shrink-0" />
                    <span className="font-bold text-xs sm:text-sm uppercase tracking-wider text-brand-black leading-tight whitespace-nowrap">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative group"
            >
              <div className="absolute -inset-4 bg-brand-brown/5 rounded-[2rem] transform rotate-2 transition-transform group-hover:rotate-1" />
              <div className="relative aspect-[4/5] md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://lh3.googleusercontent.com/d/1Z3XlPZaBaW5Xfh8pz9hKm_HEKQEFbBu3" 
                  alt="Centro Histórico de Tavira - Passeios e Tours em Tavira" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sotavento Section */}
      <section className="py-20 md:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative group lg:order-1"
            >
              <div className="absolute -inset-4 bg-brand-brown/5 rounded-[2rem] transform -rotate-2 transition-transform group-hover:-rotate-1" />
              <div className="relative aspect-[4/5] md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://lh3.googleusercontent.com/d/1Zzp1GzTuUTpAzKBx82KY_jkBtT9Y1N4f" 
                  alt="Paisagem do Sotavento Algarvio - Passeios de Jipe e Tuktuk Tavira" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:order-2"
            >
              <h2 className="text-4xl md:text-6xl font-bold text-brand-black mb-8 leading-tight">
                {t('home.sotavento.title')}
              </h2>
              <div className="prose prose-lg text-brand-black/70 mb-10 leading-relaxed font-medium">
                <p>{t('home.sotavento.description')}</p>
              </div>
              
              <div className="flex flex-wrap gap-3 md:gap-4">
                {[
                  t('home.sotavento.highlight1'),
                  t('home.sotavento.highlight2'),
                  t('home.sotavento.highlight3')
                ].map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 bg-brand-cream p-3.5 md:p-4 rounded-2xl shadow-sm border border-brand-brown/5">
                    <div className="w-2 h-2 rounded-full bg-brand-brown shrink-0" />
                    <span className="font-bold text-xs sm:text-sm uppercase tracking-wider text-brand-black leading-tight whitespace-nowrap">{highlight}</span>
                  </div>
                ))}
              </div>
            </motion.div>
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
              
              {!showBookingOptions ? (
                <button 
                  onClick={() => {
                    setShowBookingOptions(true);
                    trackEvent('book_now_click', { location: 'home_cta' });
                  }}
                  className="px-6 md:px-10 py-5 bg-brand-brown hover:bg-brand-brown-light text-white rounded-full font-black uppercase tracking-widest text-lg shadow-xl shadow-brand-brown/20 transition-all transform hover:scale-105 inline-block cursor-pointer"
                >
                  {t('common.reserve_now')}
                </button>
              ) : (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                  <Link to="/tuk-tuk" className="w-full sm:w-auto px-10 py-5 bg-brand-brown hover:bg-brand-brown-light text-white rounded-full font-black uppercase tracking-widest text-lg shadow-xl shadow-brand-brown/20 transition-all transform hover:scale-105">
                    {t('nav.tuk_tuk')}
                  </Link>
                  <Link to="/jipe" className="w-full sm:w-auto px-10 py-5 bg-brand-brown hover:bg-brand-brown-light text-white rounded-full font-black uppercase tracking-widest text-lg shadow-xl shadow-brand-brown/20 transition-all transform hover:scale-105">
                    {t('nav.jeep')}
                  </Link>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
