import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Clock, Users, ShieldCheck, MapPin, CheckCircle2, ChevronLeft, Calendar, Backpack, Info, XCircle, Map, Star } from 'lucide-react';
import { allTours } from '@/src/data/tours';
import { useTranslation } from 'react-i18next';

export default function TourDetail() {
  const { id } = useParams();
  const { t } = useTranslation();
  const tour = allTours.find(t => t.id === id);

  if (!tour) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h1 className="text-2xl font-bold">Tour não encontrada</h1>
        <Link to="/" className="text-orange-600 mt-4 inline-block underline">Voltar ao início</Link>
      </div>
    );
  }

  return (
    <div className="pb-24 bg-brand-cream min-h-screen">
      {/* Navigation Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 pt-32 pb-8">
        <Link to={tour.type === 'tuk-tuk' ? '/tuk-tuk' : '/jipe'} className="flex items-center gap-2 text-brand-black/40 hover:text-brand-brown transition-all font-bold uppercase tracking-widest text-xs group">
          <ChevronLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          <span>{t('nav.home')} / {tour.type === 'tuk-tuk' ? t('nav.tuk_tuk') : t('nav.jeep')}</span>
        </Link>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image & Key Info */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px]"
            >
              <img src={tour.image} alt={t(tour.nameKey)} className="w-full h-full object-cover" />
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
              <div className="bg-white p-4 md:p-6 rounded-3xl text-center border border-brand-brown/5 shadow-sm">
                <Clock className="mx-auto text-brand-brown mb-2" size={24} />
                <span className="block text-[10px] text-brand-black/40 uppercase font-bold tracking-widest">{t('common.duration')}</span>
                <span className="font-bold text-brand-black text-sm md:text-base">{tour.duration}</span>
              </div>
              <div className="bg-white p-4 md:p-6 rounded-3xl text-center border border-brand-brown/5 shadow-sm">
                <Users className="mx-auto text-brand-brown mb-2" size={24} />
                <span className="block text-[10px] text-brand-black/40 uppercase font-bold tracking-widest">{t('common.capacity')}</span>
                <span className="font-bold text-brand-black text-sm md:text-base">{tour.pax} {t('common.pax')}</span>
              </div>
              <div className="bg-white p-4 md:p-6 rounded-3xl text-center border border-brand-brown/5 shadow-sm col-span-2 sm:col-span-1">
                <ShieldCheck className="mx-auto text-brand-brown mb-2" size={24} />
                <span className="block text-[10px] text-brand-black/40 uppercase font-bold tracking-widest">{t('common.private')}</span>
                <span className="font-bold text-brand-black text-sm md:text-base">100%</span>
              </div>
            </div>

            {/* Why Book With Us Section */}
            <div className="bg-white p-8 rounded-[2rem] border border-brand-brown/5 shadow-sm space-y-6">
              <h3 className="text-xl font-black text-brand-black uppercase tracking-tight">Porquê reservar connosco?</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-brown/10 rounded-xl flex items-center justify-center text-brand-brown shrink-0">
                    <Star size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-black uppercase tracking-tight text-sm">Experiência Local Real</h4>
                    <p className="text-xs text-brand-black/60 font-medium leading-relaxed mt-1">Guias apaixonados que conhecem todos os segredos de Tavira.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-brown/10 rounded-xl flex items-center justify-center text-brand-brown shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-black uppercase tracking-tight text-sm">Privado e Exclusivo</h4>
                    <p className="text-xs text-brand-black/60 font-medium leading-relaxed mt-1">Sem grupos grandes. Apenas você, os seus amigos ou família.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-brown/10 rounded-xl flex items-center justify-center text-brand-brown shrink-0">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-black uppercase tracking-tight text-sm">Reserva Flexível</h4>
                    <p className="text-xs text-brand-black/60 font-medium leading-relaxed mt-1">Apoio total via WhatsApp para planear a sua experiência.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking & Description */}
          <div className="space-y-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-brown/10 text-brand-brown text-[10px] font-bold uppercase tracking-widest mb-4">
                {t('common.private')} {tour.type === 'tuk-tuk' ? t('nav.tuk_tuk') : t('nav.jeep')}
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-brand-black mb-6 leading-tight uppercase tracking-tight">{t(tour.nameKey)}</h1>
              <p className="text-xl text-brand-black/60 font-medium leading-relaxed mb-8">{t(tour.descriptionKey)}</p>
            </div>

            <div className="bg-brand-black rounded-3xl p-8 shadow-xl relative overflow-hidden text-white">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-brown/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                <div>
                  <span className="text-[10px] text-brand-cream/40 block mb-1 uppercase tracking-widest font-bold">Preço Total</span>
                  <span className="text-5xl font-black text-brand-cream leading-none">{tour.price}</span>
                </div>
                <a 
                  href={`https://wa.me/351968995275?text=${encodeURIComponent(`Olá! Gostaria de reservar o passeio: ${t(tour.nameKey)}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-grow md:flex-none px-12 py-5 bg-brand-brown hover:bg-brand-brown-light text-white rounded-2xl font-black uppercase tracking-widest text-sm transition-all transform hover:scale-105 shadow-lg shadow-brand-brown/20 flex items-center justify-center gap-3"
                >
                  <Calendar size={20} />
                  {t('common.reserve_now')}
                </a>
              </div>
              <p className="text-[10px] text-brand-cream/30 text-center uppercase tracking-widest font-bold flex items-center justify-center gap-2">
                <ShieldCheck size={14} className="text-brand-brown" />
                Reserva segura via WhatsApp / FareHarbor
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-black text-brand-black mb-6 uppercase tracking-tight">O que inclui?</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {tour.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-brand-black/60 font-medium">
                    <CheckCircle2 size={18} className="text-brand-brown shrink-0" />
                    <span className="uppercase tracking-wide text-xs font-bold">{feature}</span>
                  </li>
                ))}
                <li className="flex items-center gap-3 text-brand-black/60 font-medium">
                  <CheckCircle2 size={18} className="text-brand-brown shrink-0" />
                  <span className="uppercase tracking-wide text-xs font-bold">Guia Privado (PT/EN/FR)</span>
                </li>
                <li className="flex items-center gap-3 text-brand-black/60 font-medium">
                  <CheckCircle2 size={18} className="text-brand-brown shrink-0" />
                  <span className="uppercase tracking-wide text-xs font-bold">Seguro de Responsabilidade</span>
                </li>
              </ul>

              {tour.notIncluded && (
                <>
                  <h3 className="text-2xl font-black text-brand-black mb-6 uppercase tracking-tight">Não inclui</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {tour.notIncluded.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-brand-black/60 font-medium">
                        <XCircle size={18} className="text-brand-brown shrink-0" />
                        <span className="uppercase tracking-wide text-xs font-bold">{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tour.toBring && (
                <div className="bg-white p-6 rounded-3xl border border-brand-brown/5 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Backpack className="text-brand-brown" size={20} />
                    <h4 className="font-black text-brand-black uppercase tracking-tight">O que trazer</h4>
                  </div>
                  <ul className="space-y-2">
                    {tour.toBring.map((item, i) => (
                      <li key={i} className="text-xs text-brand-black/60 font-bold uppercase tracking-wide flex items-center gap-2">
                        <div className="w-1 h-1 bg-brand-brown rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {tour.goodToKnow && (
                <div className="bg-white p-6 rounded-3xl border border-brand-brown/5 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <Info className="text-brand-brown" size={20} />
                    <h4 className="font-black text-brand-black uppercase tracking-tight">Bom saber</h4>
                  </div>
                  <ul className="space-y-2">
                    {tour.goodToKnow.map((item, i) => (
                      <li key={i} className="text-xs text-brand-black/60 font-bold uppercase tracking-wide flex items-center gap-2">
                        <div className="w-1 h-1 bg-brand-brown rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {tour.itinerary && (
              <div className="bg-brand-cream-dark/20 p-8 rounded-[2rem] border border-brand-brown/5">
                <div className="flex items-center gap-3 mb-8">
                  <Map className="text-brand-brown" size={24} />
                  <h3 className="text-2xl font-black text-brand-black uppercase tracking-tight">Itinerário</h3>
                </div>
                <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-brand-brown/20">
                  {tour.itinerary.map((step, i) => (
                    <div key={i} className="relative pl-10">
                      <div className="absolute left-0 top-1 w-6 h-6 bg-brand-cream border-2 border-brand-brown rounded-full flex items-center justify-center z-10 shadow-sm" />
                      {step.time && (
                        <span className="text-[10px] font-black text-brand-brown uppercase tracking-widest block mb-1">{step.time}</span>
                      )}
                      <p className="text-sm text-brand-black font-bold uppercase tracking-wide">{step.activity}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-8 border-t border-brand-brown/10 flex items-start gap-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-brown shrink-0 shadow-sm border border-brand-brown/5">
                <MapPin size={20} />
              </div>
              <p className="text-sm text-brand-black/40 font-medium">
                <span className="font-bold text-brand-black block uppercase tracking-tight">{t('tour_detail.departure')}</span>
                {t('tour_detail.departure_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
