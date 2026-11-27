import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';

export default function Privacy() {
  const { t } = useTranslation();

  return (
    <div className="pt-28 md:pt-40 pb-24 max-w-4xl mx-auto px-4">
      <SEO 
        title={t('seo.privacy_title')}
        description={t('seo.privacy_desc')}
        canonical="/privacidade"
      />
      <h1 className="text-4xl md:text-5xl font-black text-brand-black mb-4 uppercase tracking-tight">
        {t('legal.privacy_title')}
      </h1>
      <p className="text-xs font-bold uppercase tracking-widest text-brand-black/45 mb-10">
        {t('legal.last_updated')}
      </p>
      
      <div className="prose prose-lg max-w-none text-brand-black/70 space-y-12">
        <p className="text-xl leading-relaxed font-medium text-brand-black">
          {t('legal.privacy_intro')}
        </p>
        
        <section>
          <h2 className="text-2xl font-bold text-brand-black mb-4 uppercase tracking-wide">
            {t('legal.privacy_section1_title')}
          </h2>
          <p className="mb-6">{t('legal.privacy_section1_text')}</p>
          <div className="bg-white/80 border border-brand-brown/15 rounded-2xl p-6 space-y-3 text-base text-brand-black/80 shadow-sm">
            <div>
              <span className="font-bold text-brand-black">{t('legal.company_label')}: </span>
              <span>{t('legal.company_name')}</span>
            </div>
            <div>
              <span className="font-bold text-brand-black">{t('legal.nif_label')}: </span>
              <span>{t('legal.nif_value')}</span>
            </div>
            <div>
              <span className="font-bold text-brand-black">{t('legal.address_label')}: </span>
              <span>{t('legal.address_value')}</span>
            </div>
            <div>
              <span className="font-bold text-brand-black">{t('legal.email_label')}: </span>
              <a href="mailto:joaocatarino@live.com" className="text-brand-brown font-semibold hover:underline">
                {t('legal.email_value')}
              </a>
            </div>
            <div>
              <span className="font-bold text-brand-black">{t('legal.rnaat_label')}: </span>
              <span>{t('legal.rnaat_value')}</span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black mb-4 uppercase tracking-wide">
            {t('legal.privacy_section2_title')}
          </h2>
          <p>{t('legal.privacy_section2_text')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black mb-4 uppercase tracking-wide">
            {t('legal.privacy_section3_title')}
          </h2>
          <p>{t('legal.privacy_section3_text')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black mb-4 uppercase tracking-wide">
            {t('legal.privacy_section4_title')}
          </h2>
          <p>{t('legal.privacy_section4_text')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black mb-4 uppercase tracking-wide">
            {t('legal.privacy_section5_title')}
          </h2>
          <p>
            {t('legal.privacy_section5_text')}{' '}
            <a
              href="https://www.cnpd.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-brown font-semibold hover:underline"
            >
              CNPD (www.cnpd.pt)
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black mb-4 uppercase tracking-wide">
            {t('legal.privacy_section6_title')}
          </h2>
          <p className="mb-4">{t('legal.privacy_section6_text')}</p>
          <div className="flex flex-wrap gap-4 text-sm font-bold">
            <Link to="/cookies" className="text-brand-brown underline hover:text-brand-brown-light">
              {t('footer.cookies')}
            </Link>
            <button
              type="button"
              onClick={() => window.dispatchEvent(new CustomEvent('open-cookie-settings'))}
              className="text-brand-brown underline hover:text-brand-brown-light cursor-pointer"
            >
              {t('footer.manage_cookies')}
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
