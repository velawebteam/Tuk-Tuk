import { Mail, Phone, MapPin, Instagram, Facebook, Clock } from 'lucide-react';
import { SEO } from '../components/SEO';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  
  return (
    <div className="pt-28 md:pt-40 pb-24 bg-brand-cream min-h-screen">
      <SEO 
        title={`${t('contact_page.title')} | Tavira Roots`}
        description={t('contact_page.subtitle')}
        canonical="/contactos"
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <h1 className="text-3xl md:text-5xl font-black text-brand-black mb-8 uppercase tracking-tight">{t('contact_page.title')}</h1>
            <p className="text-xl text-brand-black/60 mb-12 font-medium leading-relaxed">
              {t('contact_page.subtitle')}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-brown shrink-0 shadow-sm border border-brand-brown/5">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-black uppercase tracking-tight">{t('contact_page.phone_whatsapp')}</h3>
                  <p className="text-brand-black/60 font-medium">+351 968 995 275</p>
                  <p className="text-[10px] text-brand-black/30 font-bold uppercase tracking-widest mt-1">{t('contact_page.call_network_notice')}</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-brown shrink-0 shadow-sm border border-brand-brown/5">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-black uppercase tracking-tight">{t('contact_page.email')}</h3>
                  <p className="text-brand-black/60 font-medium">info@mariastuktuk.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-brown shrink-0 shadow-sm border border-brand-brown/5">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-black uppercase tracking-tight">{t('contact_page.location')}</h3>
                  <p className="text-brand-black/60 font-medium">Tavira, Algarve, Portugal</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-brown shrink-0 shadow-sm border border-brand-brown/5">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-black uppercase tracking-tight">{t('contact_page.working_hours')}</h3>
                  <p className="text-brand-black/60 font-medium">{t('contact_page.everyday')}: 09:00 - 19:00</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-black hover:bg-brand-brown hover:text-white transition-all shadow-sm border border-brand-brown/5">
                <Instagram size={24} />
              </a>
              <a href="#" className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-black hover:bg-brand-brown hover:text-white transition-all shadow-sm border border-brand-brown/5">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] shadow-xl p-8 md:p-12 border border-brand-brown/5">
            <h2 className="text-2xl font-black text-brand-black mb-8 uppercase tracking-tight">{t('contact_page.send_message')}</h2>
            <form action="mailto:info@mariastuktuk.com" method="POST" encType="text/plain" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-black/40 uppercase tracking-widest">{t('contact_page.name_label')}</label>
                  <input name="Nome" type="text" className="w-full px-4 py-3 rounded-xl bg-brand-cream/50 border-brand-brown/10 focus:bg-white focus:border-brand-brown focus:ring-0 transition-all font-medium" placeholder={t('contact_page.name_placeholder')} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-brand-black/40 uppercase tracking-widest">{t('contact_page.email_label')}</label>
                  <input name="Email" type="email" className="w-full px-4 py-3 rounded-xl bg-brand-cream/50 border-brand-brown/10 focus:bg-white focus:border-brand-brown focus:ring-0 transition-all font-medium" placeholder={t('contact_page.email_placeholder')} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-black/40 uppercase tracking-widest">{t('contact_page.subject_label')}</label>
                <select name="Assunto" className="w-full px-4 py-3 rounded-xl bg-brand-cream/50 border-brand-brown/10 focus:bg-white focus:border-brand-brown focus:ring-0 transition-all font-medium">
                  <option>{t('contact_page.subject_options.info')}</option>
                  <option>{t('contact_page.subject_options.group')}</option>
                  <option>{t('contact_page.subject_options.special')}</option>
                  <option>{t('contact_page.subject_options.other')}</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-brand-black/40 uppercase tracking-widest">{t('contact_page.message_label')}</label>
                <textarea name="Mensagem" rows={5} className="w-full px-4 py-3 rounded-xl bg-brand-cream/50 border-brand-brown/10 focus:bg-white focus:border-brand-brown focus:ring-0 transition-all font-medium" placeholder={t('contact_page.message_placeholder')}></textarea>
              </div>
              <button className="w-full py-5 bg-brand-brown hover:bg-brand-brown-light text-white rounded-xl font-black uppercase tracking-[0.2em] text-sm transition-all shadow-lg shadow-brand-brown/20">
                {t('contact_page.send_button')}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
