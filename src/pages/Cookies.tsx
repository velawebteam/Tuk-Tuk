import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';
import { Cookie } from 'lucide-react';

export default function Cookies() {
  const { t } = useTranslation();

  const handleOpenSettings = () => {
    window.dispatchEvent(new CustomEvent('open-cookie-settings'));
  };

  return (
    <div className="pt-28 md:pt-40 pb-24 max-w-4xl mx-auto px-4">
      <SEO
        title={t('seo.cookies_title')}
        description={t('seo.cookies_desc')}
        canonical="/cookies"
      />
      <h1 className="text-4xl md:text-5xl font-black text-brand-black mb-4 uppercase tracking-tight">
        {t('legal.cookies_title')}
      </h1>
      <p className="text-xs font-bold uppercase tracking-widest text-brand-black/45 mb-10">
        {t('legal.last_updated')}
      </p>

      <div className="prose prose-lg max-w-none text-brand-black/75 space-y-10">
        <p className="text-xl leading-relaxed font-medium text-brand-black">
          {t('legal.cookies_intro')}
        </p>

        <div className="bg-white/80 border border-brand-brown/15 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
          <div>
            <h2 className="text-base font-bold text-brand-black uppercase tracking-wide mb-1">
              {t('legal.cookies_manage_title')}
            </h2>
            <p className="text-sm text-brand-black/70">{t('legal.cookies_manage_desc')}</p>
          </div>
          <button
            type="button"
            onClick={handleOpenSettings}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-brown text-white font-bold text-xs uppercase tracking-wider hover:bg-brand-brown-light transition-colors shrink-0 cursor-pointer"
          >
            <Cookie size={16} />
            {t('legal.cookies_manage_btn')}
          </button>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-brand-black mb-4 uppercase tracking-wide">
            {t('legal.cookies_section1_title')}
          </h2>
          <p>{t('legal.cookies_section1_text')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black mb-4 uppercase tracking-wide">
            {t('legal.cookies_section2_title')}
          </h2>
          <div className="space-y-4">
            <div className="bg-white/70 border border-brand-brown/10 rounded-xl p-5">
              <h3 className="text-lg font-bold text-brand-black mb-2">
                {t('legal.cookies_cat_essential_title')}
              </h3>
              <p className="text-base">{t('legal.cookies_cat_essential_text')}</p>
            </div>
            <div className="bg-white/70 border border-brand-brown/10 rounded-xl p-5">
              <h3 className="text-lg font-bold text-brand-black mb-2">
                {t('legal.cookies_cat_analytics_title')}
              </h3>
              <p className="text-base">{t('legal.cookies_cat_analytics_text')}</p>
            </div>
            <div className="bg-white/70 border border-brand-brown/10 rounded-xl p-5">
              <h3 className="text-lg font-bold text-brand-black mb-2">
                {t('legal.cookies_cat_third_title')}
              </h3>
              <p className="text-base">{t('legal.cookies_cat_third_text')}</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black mb-4 uppercase tracking-wide">
            {t('legal.cookies_section3_title')}
          </h2>
          <p>{t('legal.cookies_section3_text')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black mb-4 uppercase tracking-wide">
            {t('legal.cookies_section4_title')}
          </h2>
          <p>
            {t('legal.cookies_section4_text')}{' '}
            <a href="mailto:joaocatarino@live.com" className="text-brand-brown font-semibold hover:underline">
              joaocatarino@live.com
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
