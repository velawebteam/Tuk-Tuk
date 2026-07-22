import { motion } from 'motion/react';
import { AlertCircle, Calendar, Users, MapPin, CreditCard, Info, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function BeforeBooking() {
  const { t } = useTranslation();

  const whatToBringItems = t('before_booking_page.what_to_bring.items', { returnObjects: true }) as string[];

  const sections = [
    {
      icon: <Users className="text-orange-600" />,
      title: t('before_booking_page.item1_title'),
      content: t('before_booking_page.item1_desc')
    },
    {
      icon: <Calendar className="text-orange-600" />,
      title: t('before_booking_page.item2_title'),
      content: t('before_booking_page.item2_desc')
    },
    {
      icon: <MapPin className="text-orange-600" />,
      title: t('before_booking_page.item3_title'),
      content: t('before_booking_page.item3_desc')
    },
    {
      icon: <AlertCircle className="text-orange-600" />,
      title: t('before_booking_page.item4_title'),
      content: t('before_booking_page.item4_desc')
    },
    {
      icon: <Info className="text-orange-600" />,
      title: t('before_booking_page.item5_title'),
      content: t('before_booking_page.item5_desc')
    },
    {
      icon: <CreditCard className="text-orange-600" />,
      title: t('before_booking_page.item6_title'),
      content: t('before_booking_page.item6_desc')
    }
  ];

  return (
    <div className="pt-28 md:pt-40 pb-24">
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Museum Closure Alert */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 p-6 bg-orange-50 border border-orange-200 rounded-3xl flex items-center gap-4 text-orange-900"
          >
            <AlertCircle className="shrink-0 text-orange-600" size={24} />
            <p className="font-bold text-sm md:text-base">
              {t('common.museum_closure_notice')}
            </p>
          </motion.div>

          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-6">{t('before_booking_page.title')}</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('before_booking_page.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm"
              >
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6">
                  {section.icon}
                </div>
                <h3 className="text-xl font-bold text-emerald-900 mb-4">{section.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>

          {/* What to Bring Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-16 bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm"
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
              <div className="max-w-md">
                <h2 className="text-3xl font-bold text-emerald-950 mb-4 uppercase tracking-tight">
                  {t('before_booking_page.what_to_bring.title')}
                </h2>
                <p className="text-gray-600">
                  {t('before_booking_page.subtitle')}
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 flex-1 min-w-0">
                {whatToBringItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-gray-50 px-6 py-4 rounded-2xl border border-gray-100/50 min-w-0">
                    <div className="shrink-0 w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Check size={14} className="text-emerald-600" />
                    </div>
                    <span className="font-bold text-emerald-900 text-sm leading-tight break-words">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="mt-20 p-8 md:p-12 bg-emerald-900 rounded-[2.5rem] text-white flex flex-col md:flex-row items-center gap-10">
            <div className="shrink-0 w-24 h-24 bg-white/10 rounded-full flex items-center justify-center">
              <Info size={48} className="text-orange-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">{t('before_booking_page.special_needs_title')}</h2>
              <p className="text-emerald-200/80 mb-0">
                {t('before_booking_page.special_needs_desc')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
