import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { walkingTours } from '@/src/data/tours';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';
import { trackEvent } from '../utils/analytics';
import { SerpentineItinerary } from '../components/SerpentineItinerary';
import { 
  Footprints, 
  MapPin, 
  Camera, 
  Users, 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  ChevronDown,
  Calendar, 
  ShieldCheck, 
  Ticket,
  Sparkles,
  Map,
  Compass,
  History,
  Building2
} from 'lucide-react';

export default function WalkingTours() {
  const { t } = useTranslation();
  const tour = walkingTours[0]; // The available Tavira Walking Tour
  const [selectedPhoto, setSelectedPhoto] = useState(0);

  return (
    <div className="pb-24 bg-brand-cream min-h-screen">
      <SEO 
        title={t('seo.walking_title')}
        description={t('seo.walking_desc')}
        keywords={t('seo.walking_keywords')}
        canonical="/walking-tours"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": walkingTours.map((tour, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
              "@type": "TouristTrip",
              "name": t(tour.nameKey),
              "description": t(tour.descriptionKey),
              "image": tour.image,
              "touristType": "Walking Tour"
            }
          }))
        }}
      />

      {/* Hero Banner Header: General Concept Focus */}
      <section className="relative min-h-[75vh] md:min-h-[85vh] flex items-center text-white overflow-hidden bg-brand-black w-full max-w-full">
        {/* Background Atmosphere Image */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img 
            src="https://lh3.googleusercontent.com/d/161LiIXSjLdw84RReCbtnfNZLoWX3Y4Nc" 
            alt="Tavira Historic Center Walking Tour"
            className="w-full h-full object-cover scale-105 filter brightness-[0.65]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-brand-black/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-32 md:pt-40 pb-16 text-center">
          <div className="max-w-5xl mx-auto space-y-6">
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-none uppercase tracking-tight text-white text-center sm:whitespace-nowrap"
              >
                Tavira Walking Tour
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="text-xl sm:text-3xl md:text-4xl font-bold text-brand-brown uppercase tracking-widest text-center"
              >
                Discover Tavira on foot
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-brand-cream/90 text-lg md:text-xl font-medium leading-relaxed max-w-2xl mx-auto text-center"
            >
              {t('walking_page.description')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Concept Explanation Pillars Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black text-brand-black uppercase tracking-tight">
            {t('walking_page.concept_title')}
          </h2>
          <p className="text-brand-black/70 text-base md:text-lg font-medium leading-relaxed">
            {t('walking_page.concept_subtitle')}
          </p>
        </div>

        {/* 4 Concept Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-white p-8 rounded-3xl border border-brand-brown/10 shadow-sm flex flex-col space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-brand-brown/10 flex items-center justify-center text-brand-brown font-bold shrink-0">
              <Ticket size={24} />
            </div>
            <h3 className="text-lg font-bold text-brand-black uppercase tracking-tight">
              {t('walking_page.concept_card1_title')}
            </h3>
            <p className="text-xs text-brand-black/60 font-medium leading-relaxed flex-grow">
              {t('walking_page.concept_card1_desc')}
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-white p-8 rounded-3xl border border-brand-brown/10 shadow-sm flex flex-col space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-brand-brown/10 flex items-center justify-center text-brand-brown font-bold shrink-0">
              <Footprints size={24} />
            </div>
            <h3 className="text-lg font-bold text-brand-black uppercase tracking-tight">
              {t('walking_page.concept_card2_title')}
            </h3>
            <p className="text-xs text-brand-black/60 font-medium leading-relaxed flex-grow">
              {t('walking_page.concept_card2_desc')}
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-white p-8 rounded-3xl border border-brand-brown/10 shadow-sm flex flex-col space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-brand-brown/10 flex items-center justify-center text-brand-brown font-bold shrink-0">
              <History size={24} />
            </div>
            <h3 className="text-lg font-bold text-brand-black uppercase tracking-tight">
              {t('walking_page.concept_card3_title')}
            </h3>
            <p className="text-xs text-brand-black/60 font-medium leading-relaxed flex-grow">
              {t('walking_page.concept_card3_desc')}
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -6 }}
            className="bg-white p-8 rounded-3xl border border-brand-brown/10 shadow-sm flex flex-col space-y-4"
          >
            <div className="w-12 h-12 rounded-2xl bg-brand-brown/10 flex items-center justify-center text-brand-brown font-bold shrink-0">
              <Camera size={24} />
            </div>
            <h3 className="text-lg font-bold text-brand-black uppercase tracking-tight">
              {t('walking_page.concept_card4_title')}
            </h3>
            <p className="text-xs text-brand-black/60 font-medium leading-relaxed flex-grow">
              {t('walking_page.concept_card4_desc')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Available Walking Tour Section */}
      <section id="passeio-disponivel" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 scroll-mt-24">
        {/* Section Header */}
        <div className="mb-10 text-center md:text-left space-y-2">
          <h2 className="text-3xl md:text-5xl font-black text-brand-black uppercase tracking-tight">
            {t('walking_page.tour_showcase_title')}
          </h2>
          <p className="text-brand-black/60 font-medium text-base">
            {t('walking_page.tour_showcase_subtitle')}
          </p>
        </div>

        {/* Featured Tour Card Box */}
        <div className="bg-white rounded-[2.5rem] p-6 sm:p-10 md:p-12 border border-brand-brown/10 shadow-xl space-y-12">
          {/* Section Title Banner */}
          <div className="pb-8 border-b border-brand-brown/10">
            <h3 className="text-2xl sm:text-4xl font-black text-brand-black uppercase tracking-tight">
              {t(tour.nameKey)}
            </h3>
          </div>

          {/* Gallery Carousel & Photo Selector */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-brand-brown/10 bg-black group">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={selectedPhoto}
                    src={tour.gallery?.[selectedPhoto] || tour.image}
                    alt={`Tavira Walking Tour photo ${selectedPhoto + 1}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>

                {/* Left & Right Navigation Arrows */}
                {tour.gallery && tour.gallery.length > 1 && (
                  <>
                    <button
                      onClick={() => setSelectedPhoto((prev) => (prev === 0 ? tour.gallery!.length - 1 : prev - 1))}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-brand-brown text-white backdrop-blur-md flex items-center justify-center transition-all border border-white/20 shadow-lg cursor-pointer hover:scale-110 z-20"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft size={22} />
                    </button>

                    <button
                      onClick={() => setSelectedPhoto((prev) => (prev === tour.gallery!.length - 1 ? 0 : prev + 1))}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-brand-brown text-white backdrop-blur-md flex items-center justify-center transition-all border border-white/20 shadow-lg cursor-pointer hover:scale-110 z-20"
                      aria-label="Next photo"
                    >
                      <ChevronRight size={22} />
                    </button>

                    {/* Photo Counter Badge */}
                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-md text-white rounded-full text-xs font-bold tracking-wider border border-white/20 z-20">
                      {selectedPhoto + 1} / {tour.gallery.length}
                    </div>
                  </>
                )}
              </div>

              {/* Photo Thumbnails */}
              {tour.gallery && tour.gallery.length > 0 && (
                <div className="grid grid-cols-6 sm:grid-cols-12 gap-2">
                  {tour.gallery.map((photo, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedPhoto(idx)}
                      className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                        selectedPhoto === idx ? 'border-brand-brown scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={photo} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Tour Narrative Details */}
            <div className="lg:col-span-5 space-y-6">
              <p className="text-brand-black/80 font-medium leading-relaxed text-base">
                {t(tour.descriptionKey)}
              </p>

              {/* Quick Specs List */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-brand-brown/10">
                <div className="flex items-center gap-3">
                  <Clock className="text-brand-brown shrink-0" size={20} />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-brand-black/40 block">{t('common.duration')}</span>
                    <span className="font-bold text-brand-black text-sm">{tour.duration}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Users className="text-brand-brown shrink-0" size={20} />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-brand-black/40 block">{t('common.capacity')}</span>
                    <span className="font-bold text-brand-black text-sm">{tour.pax} {t('common.pax')}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="text-brand-brown shrink-0" size={20} />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-brand-black/40 block">{t('walking_page.meeting_point_title')}</span>
                    <span className="font-bold text-brand-black text-xs">{t('walking_page.meeting_point_location')}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Ticket className="text-brand-brown shrink-0" size={20} />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-brand-black/40 block">{t('walking_page.price_per_person_label')}</span>
                    <span className="font-bold text-brand-brown text-sm">{tour.price} / {t('walking_page.per_person')}</span>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div>
                <span className="text-[10px] uppercase tracking-wider text-brand-black/40 font-bold mb-2 block">
                  {t('common.languages_available')}
                </span>
                <div className="flex flex-wrap gap-2">
                  {tour.languages.map((lang) => (
                    <span key={lang} className="px-3 py-1 bg-brand-brown/10 text-brand-brown rounded-lg text-xs font-bold uppercase tracking-wider">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features Checkmarks */}
              <div className="space-y-2 pt-2">
                {tour.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-bold text-brand-black/70 uppercase tracking-wide">
                    <CheckCircle2 size={16} className="text-brand-brown shrink-0" />
                    <span>{t(feat)}</span>
                  </div>
                ))}
              </div>

              {/* Price & Booking Button (Desktop: Placed below checkmarks; Mobile: Placed after itinerary) */}
              <div className="hidden sm:flex items-center justify-between gap-4 bg-brand-cream/60 p-4 sm:p-5 rounded-2xl border border-brand-brown/10 mt-4">
                <div>
                  <span className="text-[10px] uppercase font-bold text-brand-black/40 block">{t('walking_page.price_per_person_label')}</span>
                  <span className="text-2xl sm:text-3xl font-black text-brand-brown">{tour.price}</span>
                </div>
                <button 
                  type="button"
                  disabled
                  aria-disabled="true"
                  className="w-auto text-center px-6 py-3.5 bg-brand-black/15 text-brand-black/40 rounded-xl font-bold uppercase tracking-wide text-xs cursor-not-allowed select-none border border-brand-black/10 shadow-none"
                >
                  {t('walking_page.cta_unavailable', 'Tour Unavailable at the moment')}
                </button>
              </div>
            </div>
          </div>

          {/* 10-Step Interactive Serpentine Itinerary */}
          {tour.itinerary && tour.itinerary.length > 0 && (
            <div className="pt-8 border-t border-brand-brown/10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-brand-brown/10 rounded-2xl flex items-center justify-center text-brand-brown shrink-0">
                  <Map size={22} />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-brand-black uppercase tracking-tight">
                    {t('walking_page.itinerary_title')}
                  </h4>
                  <p className="text-xs text-brand-black/60 font-medium">{t('walking_page.itinerary_subtitle')}</p>
                </div>
              </div>

              {/* Single Uniform Background Container for All Stops */}
              <div className="bg-brand-cream/60 p-4 sm:p-8 rounded-3xl border border-brand-brown/10 space-y-4">
                <SerpentineItinerary itinerary={tour.itinerary} desktopItemsPerRow={5} />
              </div>

              {/* Mobile Booking Card (Placed after itinerary on mobile) */}
              <div className="block sm:hidden">
                <div className="flex flex-col items-start justify-between gap-4 bg-brand-cream/60 p-4 rounded-2xl border border-brand-brown/10">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-brand-black/40 block">{t('walking_page.price_per_person_label')}</span>
                    <span className="text-2xl font-black text-brand-brown">{tour.price}</span>
                  </div>
                  <button 
                    type="button"
                    disabled
                    aria-disabled="true"
                    className="w-full text-center px-6 py-3.5 bg-brand-black/15 text-brand-black/40 rounded-xl font-bold uppercase tracking-wide text-xs cursor-not-allowed select-none border border-brand-black/10 shadow-none"
                  >
                    {t('walking_page.cta_unavailable', 'Tour Unavailable at the moment')}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Link to Full Detail Page */}
          <div className="pt-6 border-t border-brand-brown/10 flex justify-end">
            <Link 
              to={`/tour/${tour.id}`}
              className="inline-flex items-center gap-2 text-brand-brown hover:text-brand-brown-light font-black uppercase tracking-widest text-xs transition-colors"
            >
              <span>{t('walking_page.cta_details')}</span>
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Practical Information Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-3xl border border-brand-brown/10 shadow-sm space-y-3">
            <div className="w-10 h-10 bg-brand-brown/10 rounded-xl flex items-center justify-center text-brand-brown">
              <MapPin size={20} />
            </div>
            <h4 className="font-bold text-brand-black uppercase tracking-tight text-sm">{t('walking_page.info_meeting_title')}</h4>
            <p className="text-xs text-brand-black/60 font-medium leading-relaxed">
              {t('walking_page.info_meeting_desc')}
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-brand-brown/10 shadow-sm space-y-3">
            <div className="w-10 h-10 bg-brand-brown/10 rounded-xl flex items-center justify-center text-brand-brown">
              <ShieldCheck size={20} />
            </div>
            <h4 className="font-bold text-brand-black uppercase tracking-tight text-sm">{t('walking_page.info_includes_title')}</h4>
            <p className="text-xs text-brand-black/60 font-medium leading-relaxed">
              {t('walking_page.info_includes_desc')}
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-brand-brown/10 shadow-sm space-y-3">
            <div className="w-10 h-10 bg-brand-brown/10 rounded-xl flex items-center justify-center text-brand-brown">
              <Footprints size={20} />
            </div>
            <h4 className="font-bold text-brand-black uppercase tracking-tight text-sm">{t('walking_page.info_recommendations_title')}</h4>
            <p className="text-xs text-brand-black/60 font-medium leading-relaxed">
              {t('walking_page.info_recommendations_desc')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
