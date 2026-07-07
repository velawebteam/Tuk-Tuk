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
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-white rounded-2xl overflow-hidden shadow-md border border-brand-brown/5 flex flex-col h-full"
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={tour.image} 
          alt={t(tour.nameKey)} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
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
        <h3 className="text-xl font-bold text-brand-black mb-2 line-clamp-1 uppercase tracking-tight">{t(tour.nameKey)}</h3>
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

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] uppercase tracking-wider text-brand-black/40 font-bold">{t('common.from')}</span>
            <span className="text-xl font-black text-brand-brown">{tour.price}</span>
          </div>
          <Link 
            to={`/tour/${tour.id}`}
            className="w-12 h-12 bg-brand-black text-white rounded-full flex items-center justify-center hover:bg-brand-brown transition-all shadow-lg shadow-brand-black/10"
          >
            <ChevronRight size={20} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
