import { motion } from 'motion/react';
import { Heart, Shield, Map, Award } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-brand-black">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1518173946687-a4c8a9833786?q=80&w=2000&auto=format&fit=crop" 
            alt="Tavira Roots Team" 
            className="w-full h-full object-cover brightness-50"
          />
          <div className="absolute inset-0 bg-brand-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-black mb-4 uppercase tracking-tight">{t('nav.about')}</h1>
          <p className="text-xl md:text-2xl text-brand-brown font-bold uppercase tracking-[0.2em]">{t('about_page.hero_subtitle')}</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-black text-brand-black leading-tight uppercase tracking-tight">
              {t('about_page.story_title_part1')} <span className="text-brand-brown underline decoration-brand-brown/20 underline-offset-8">Tavira Roots</span> {t('about_page.story_title_part2')}
            </h2>
            <p className="text-brand-black/60 text-lg leading-relaxed font-medium">
              {t('about_page.story_p1')}
            </p>
            <p className="text-brand-black/60 text-lg leading-relaxed font-medium">
              {t('about_page.story_p2')}
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <span className="text-4xl font-black text-brand-brown">+5000</span>
                <p className="text-xs text-brand-black/40 uppercase tracking-widest font-bold mt-1">{t('about_page.stat1')}</p>
              </div>
              <div>
                <span className="text-4xl font-black text-brand-brown">100%</span>
                <p className="text-xs text-brand-black/40 uppercase tracking-widest font-bold mt-1">{t('about_page.stat2')}</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <img src="https://images.unsplash.com/photo-1548907040-4baa42d10919?q=80&w=600&auto=format&fit=crop" className="rounded-3xl h-48 md:h-64 w-full object-cover shadow-lg border border-brand-brown/5" alt="Chocolate Factory" />
            <img src="https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=600&auto=format&fit=crop" className="rounded-3xl h-48 md:h-64 w-full object-cover shadow-lg sm:mt-8 border border-brand-brown/5" alt="Tavira Views" />
            <img src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=600&auto=format&fit=crop" className="rounded-3xl h-48 md:h-64 w-full object-cover shadow-lg sm:-mt-8 border border-brand-brown/5" alt="Wine Tasting" />
            <img src="https://images.unsplash.com/photo-1520408222757-6f9f95d87d5d?q=80&w=600&auto=format&fit=crop" className="rounded-3xl h-48 md:h-64 w-full object-cover shadow-lg border border-brand-brown/5" alt="Pottery" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-brand-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight">{t('about_page.values_title')}</h2>
            <p className="text-brand-cream/40 font-medium">{t('about_page.values_subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { icon: <Shield size={24} />, title: t('about_page.value1_title'), desc: t('about_page.value1_desc') },
              { icon: <Heart size={24} />, title: t('about_page.value2_title'), desc: t('about_page.value2_desc') },
              { icon: <Map size={24} />, title: t('about_page.value3_title'), desc: t('about_page.value3_desc') },
              { icon: <Award size={24} />, title: t('about_page.value4_title'), desc: t('about_page.value4_desc') }
            ].map((v, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto text-white border border-white/5">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wide">{v.title}</h3>
                <p className="text-brand-cream/60 text-sm leading-relaxed font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
