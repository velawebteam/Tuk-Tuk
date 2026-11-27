import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';

export default function Terms() {
  const { t } = useTranslation();

  return (
    <div className="pt-28 md:pt-40 pb-24 max-w-4xl mx-auto px-4">
      <SEO 
        title={t('seo.terms_title')}
        description={t('seo.terms_desc')}
        canonical="/termos"
      />
      <h1 className="text-4xl md:text-5xl font-black text-brand-black mb-4 uppercase tracking-tight">
        {t('legal.terms_title')}
      </h1>
      <p className="text-xs font-bold uppercase tracking-widest text-brand-black/45 mb-10">
        {t('legal.last_updated')}
      </p>
      
      <div className="prose prose-lg max-w-none text-brand-black/70 space-y-12">
        <p className="text-xl leading-relaxed font-medium text-brand-black">
          {t('legal.terms_intro')}
        </p>

        <div className="bg-white/80 border border-brand-brown/15 rounded-2xl p-6 space-y-2.5 text-base text-brand-black/80 shadow-sm">
          <h2 className="text-lg font-bold text-brand-black uppercase tracking-wide mb-3">
            {t('legal.legal_id_title')}
          </h2>
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
            {' / '}
            <a href="mailto:info@mariastuktuk.com" className="text-brand-brown font-semibold hover:underline">
              info@mariastuktuk.com
            </a>
          </div>
          <div>
            <span className="font-bold text-brand-black">{t('legal.phone_label')}: </span>
            <span>+351 968 995 275</span>
          </div>
          <div>
            <span className="font-bold text-brand-black">{t('legal.rnaat_label')}: </span>
            <span>{t('legal.rnaat_value')}</span>
          </div>
        </div>
        
        <section>
          <h2 className="text-2xl font-bold text-brand-black mb-4 uppercase tracking-wide">
            {t('legal.terms_section1_title')}
          </h2>
          <p>{t('legal.terms_section1_text')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black mb-4 uppercase tracking-wide">
            {t('legal.terms_section2_title')}
          </h2>
          <p>{t('legal.terms_section2_text')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black mb-4 uppercase tracking-wide">
            {t('legal.terms_section3_title')}
          </h2>
          <p>{t('legal.terms_section3_text')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black mb-4 uppercase tracking-wide">
            {t('legal.terms_section4_title')}
          </h2>
          <p>{t('legal.terms_section4_text')}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black mb-4 uppercase tracking-wide">
            {t('legal.terms_section5_title')}
          </h2>
          <p className="mb-4">{t('legal.terms_section5_text')}</p>
          <div className="flex flex-wrap gap-4 text-sm font-bold">
            <Link to="/resolucao-de-litigios" className="text-brand-brown underline hover:text-brand-brown-light">
              {t('footer.ral')}
            </Link>
            <a
              href="https://www.consumoalgarve.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-brown underline hover:text-brand-brown-light"
            >
              CIMAAL (www.consumoalgarve.pt)
            </a>
            <a
              href="https://www.livroreclamacoes.pt/Inicio/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-brown underline hover:text-brand-brown-light"
            >
              {t('footer.complaints')}
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-black mb-4 uppercase tracking-wide">
            {t('legal.terms_section6_title')}
          </h2>
          <p>{t('legal.terms_section6_text')}</p>
        </section>
      </div>
    </div>
  );
}
