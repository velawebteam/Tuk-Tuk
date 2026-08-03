import { useTranslation } from 'react-i18next';

export default function Terms() {
  const { t } = useTranslation();

  return (
    <div className="pt-28 md:pt-40 pb-24 max-w-4xl mx-auto px-4">
      <h1 className="text-4xl md:text-5xl font-black text-brand-black mb-12 uppercase tracking-tight">
        {t('legal.terms_title')}
      </h1>
      
      <div className="prose prose-lg max-w-none text-brand-black/70 space-y-12">
        <p className="text-xl leading-relaxed font-medium text-brand-black">
          {t('legal.terms_intro')}
        </p>
        
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
          <p>{t('legal.terms_section5_text')}</p>
        </section>
      </div>
    </div>
  );
}
