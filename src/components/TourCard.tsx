import { Link } from 'react-router-dom';
import { Clock, Users, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Tour } from '@/src/data/tours';
import { useTranslation } from 'react-i18next';

interface TourCardProps {
  tour: Tour;
}

export function TourCard({ tour }: TourCardProps) {
  const { t } = useTranslation();
  
  return (
    <Link to={`/tour/${tour.id}`} className="block h-full group">
      <motion.div
        whileHover={{ y: -8 }}
        className="bg-white rounded-2xl overflow-hidden shadow-md border border-brand-brown/5 flex flex-col h-full transition-shadow hover:shadow-xl"
      >
        <div className="relative h-64 overflow-hidden">
          <img 
            src={tour.image} 
            alt={t(tour.nameKey)} 
            className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${tour.imagePosition || ''} ${tour.image?.includes?.('1AgBECV3LgIOLdu520PZLGPzQNVrUFNbZ') ? 'object-left' : ''}`}
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 backdrop-blur shadow-sm rounded-full text-[10px] font-bold uppercase tracking-wider text-brand-black">
              {tour.type === 'tuk-tuk' ? t('nav.tuk_tuk') : 'Jeep 4x4'}
            </span>
          </div>
          <div className="absolute bottom-4 right-4">
            <span className="px-3 py-1 bg-brand-brown text-white rounded-full text-[10px] font-bold uppercase tracking-widest">
              {t('common.private')}
            </span>
          </div>
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-bold text-brand-black mb-2 uppercase tracking-tight group-hover:text-brand-brown transition-colors">{t(tour.nameKey)}</h3>
          <p className="text-brand-black/60 text-sm mb-6 line-clamp-2 leading-relaxed flex-grow font-medium">
            {t(tour.descriptionKey)}
          </p>
          
          <div className="flex items-center justify-between py-4 border-t border-brand-brown/10 mb-6">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-wider text-brand-black/40 font-bold mb-1">{t('common.duration')}</span>
              <div className="flex items-center gap-1.5 text-sm font-bold text-brand-black">
                <Clock size={14} className="text-brand-brown" />
                {tour.duration}
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[10px] uppercase tracking-wider text-brand-black/40 font-bold mb-1">{t('common.capacity')}</span>
              <div className="flex items-center gap-1.5 text-sm font-bold text-brand-black">
                <Users size={14} className="text-brand-brown" />
                {tour.pax} {t('common.pax')}
              </div>
            </div>
          </div>
  
          <div className="mb-6">
            <span className="text-[10px] uppercase tracking-wider text-brand-black/40 font-bold mb-2 block">
              {t('common.languages_available')}
            </span>
            <div className="flex flex-wrap gap-2">
              {tour.languages.map((lang) => (
                <span 
                  key={lang} 
                  className="px-2 py-0.5 bg-brand-brown/5 text-brand-brown border border-brand-brown/10 rounded-md text-[10px] font-bold uppercase tracking-wider"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
  
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col min-w-0">
              <span className="text-[10px] uppercase tracking-wider text-brand-black/40 font-bold">{t('common.from')}</span>
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="text-xl font-black text-brand-brown leading-none">{tour.price}</span>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-brand-black/40 lowercase leading-none">/ pax</span>
                  {tour.priceWithFee && (
                    <span className="text-[8px] text-brand-black/40 font-bold leading-none mt-1 whitespace-nowrap">
                      ({tour.priceWithFee} total)
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div 
              className="w-12 h-12 bg-brand-black text-white rounded-full flex items-center justify-center group-hover:bg-brand-brown transition-all shadow-lg shadow-brand-black/10 shrink-0"
            >
              <ChevronRight size={20} />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
