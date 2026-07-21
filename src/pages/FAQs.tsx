import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus, AlertCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/SEO';

export default function FAQs() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: t('faqs_page.q1'),
      answer: t('faqs_page.a1')
    },
    {
      question: t('faqs_page.q2'),
      answer: t('faqs_page.a2')
    },
    {
      question: t('faqs_page.q3'),
      answer: t('faqs_page.a3')
    },
    {
      question: t('faqs_page.q4'),
      answer: t('faqs_page.a4')
    },
    {
      question: t('faqs_page.q5'),
      answer: t('faqs_page.a5')
    },
    {
      question: t('faqs_page.q6'),
      answer: t('faqs_page.a6')
    }
  ];

  return (
    <div className="pt-28 md:pt-40 pb-24 bg-brand-cream min-h-screen">
      <SEO 
        title={t('nav.faqs')}
        description={t('faqs_page.subtitle')}
        canonical="/faqs"
        schemaData={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        }}
      />
      <section className="max-w-4xl mx-auto px-4 py-12 md:py-20">
        <div className="text-center mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10 p-4 bg-orange-50 border border-orange-200 rounded-2xl flex items-center justify-center gap-3 text-orange-900"
          >
            <AlertCircle className="shrink-0 text-orange-600" size={20} />
            <p className="font-bold text-xs md:text-sm uppercase tracking-wide">
              {t('common.museum_closure_notice')}
            </p>
          </motion.div>
          <h1 className="text-3xl md:text-5xl font-black text-brand-black mb-6 uppercase tracking-tight">{t('nav.faqs')}</h1>
          <p className="text-brand-black/60 font-medium">{t('faqs_page.subtitle')}</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="border border-brand-brown/10 rounded-2xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-brand-cream transition-colors"
              >
                <span className="font-bold text-brand-black pr-8 uppercase tracking-tight">{faq.question}</span>
                <div className="shrink-0 text-brand-brown">
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-brand-black/60 font-medium leading-relaxed bg-white">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-brand-black/40 font-bold uppercase tracking-widest text-xs mb-6">{t('faqs_page.still_doubts')}</p>
          <a 
            href="/contactos" 
            className="inline-block px-10 py-4 bg-brand-brown text-white rounded-full font-black uppercase tracking-[0.2em] text-sm hover:bg-brand-brown-light transition-all shadow-lg shadow-brand-brown/20"
          >
            {t('faqs_page.contact_us')}
          </a>
        </div>
      </section>
    </div>
  );
}
