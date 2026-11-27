import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';
import { ExternalLink, Scale, BookOpen, Building2 } from 'lucide-react';

export default function DisputeResolution() {
  const { t } = useTranslation();

  return (
    <div className="pt-28 md:pt-40 pb-24 max-w-4xl mx-auto px-4">
      <SEO
        title={t('seo.ral_title')}
        description={t('seo.ral_desc')}
        canonical="/resolucao-de-litigios"
      />
      <h1 className="text-4xl md:text-5xl font-black text-brand-black mb-4 uppercase tracking-tight">
        {t('legal.ral_title')}
      </h1>
      <p className="text-xs font-bold uppercase tracking-widest text-brand-black/45 mb-10">
        {t('legal.last_updated')}
      </p>

      <div className="prose prose-lg max-w-none text-brand-black/75 space-y-10">
        <p className="text-xl leading-relaxed font-medium text-brand-black">
          {t('legal.ral_intro')}
        </p>

        {/* Company Identification (DL n.º 7/2004) */}
        <section className="bg-white/80 border border-brand-brown/15 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Building2 className="text-brand-brown shrink-0" size={24} />
            <h2 className="text-xl font-bold text-brand-black uppercase tracking-wide m-0">
              {t('legal.legal_id_title')}
            </h2>
          </div>
          <div className="space-y-2.5 text-base text-brand-black/80">
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
        </section>

        {/* CIMAAL - Lei 144/2015 */}
        <section className="bg-white/80 border border-brand-brown/15 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <Scale className="text-brand-brown shrink-0" size={24} />
            <h2 className="text-xl font-bold text-brand-black uppercase tracking-wide m-0">
              {t('legal.ral_entity_title')}
            </h2>
          </div>
          <p className="mb-4">{t('legal.ral_entity_text')}</p>
          <div className="space-y-2 text-base text-brand-black/80 bg-brand-cream/60 rounded-xl p-5 border border-brand-brown/10">
            <p className="font-bold text-brand-black">
              CIMAAL — Centro de Informação, Mediação e Arbitragem de Conflitos de Consumo do Algarve
            </p>
            <p>{t('legal.ral_cimaal_address')}</p>
            <p>{t('legal.ral_cimaal_contacts')}</p>
            <p>
              <a
                href="https://www.consumoalgarve.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-brand-brown font-bold hover:underline"
              >
                www.consumoalgarve.pt
                <ExternalLink size={14} />
              </a>
            </p>
          </div>
          <p className="mt-4 text-base">
            {t('legal.ral_portal_text')}{' '}
            <a
              href="https://www.consumidor.gov.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-brand-brown font-bold hover:underline"
            >
              www.consumidor.gov.pt
              <ExternalLink size={14} />
            </a>
          </p>
        </section>

        {/* Livro de Reclamações Eletrónico */}
        <section className="bg-white/80 border border-brand-brown/15 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="text-brand-brown shrink-0" size={24} />
            <h2 className="text-xl font-bold text-brand-black uppercase tracking-wide m-0">
              {t('legal.ral_complaints_title')}
            </h2>
          </div>
          <p className="mb-5">{t('legal.ral_complaints_text')}</p>
          <a
            href="https://www.livroreclamacoes.pt/Inicio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-brown text-white font-bold text-xs uppercase tracking-wider hover:bg-brand-brown-light transition-colors no-underline"
          >
            {t('footer.complaints')}
            <ExternalLink size={15} />
          </a>
        </section>
      </div>
    </div>
  );
}
