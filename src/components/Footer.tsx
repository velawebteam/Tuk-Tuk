import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import mapPattern from '@/src/assets/images/map_pattern.jpg';

export function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer 
      className="bg-brand-cream text-brand-black pt-20 pb-10 border-t border-brand-brown/10 relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 z-0 opacity-15 pointer-events-none"
        style={{ 
          backgroundImage: `url(${mapPattern})`,
          backgroundSize: '600px',
          backgroundRepeat: 'repeat',
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand & Mission */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="https://lh3.googleusercontent.com/d/1_oz5jkibMRM3DtpxiwDJxKeBCRoqe1yo" 
                alt="Tavira Roots Logo" 
                className="h-12 w-auto"
              />
            </Link>
            <p className="text-brand-black/80 text-sm leading-relaxed font-bold uppercase tracking-widest">
              {t('footer.mission')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-brown hover:text-brand-brown-light transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-brand-brown hover:text-brand-brown-light transition-colors">
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-brand-black font-bold uppercase tracking-widest text-sm mb-6">{t('footer.explore')}</h3>
            <ul className="space-y-4 text-sm text-brand-black/60">
              <li><Link to="/tuk-tuk" className="hover:text-brand-brown transition-colors font-bold uppercase tracking-wider">{t('hero.cta_tuk')}</Link></li>
              <li><Link to="/jipe" className="hover:text-brand-brown transition-colors font-bold uppercase tracking-wider">{t('hero.cta_jeep')}</Link></li>
              <li><Link to="/sobre-nos" className="hover:text-brand-brown transition-colors font-bold uppercase tracking-wider">{t('nav.about')}</Link></li>
              <li><Link to="/faqs" className="hover:text-brand-brown transition-colors font-bold uppercase tracking-wider">{t('nav.faqs')}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-brand-black font-bold uppercase tracking-widest text-sm mb-6">{t('nav.contact')}</h3>
            <ul className="space-y-4 text-sm text-brand-black/60">
              <li className="flex items-center gap-3 font-bold uppercase tracking-wider">
                <Phone size={18} className="text-brand-brown" />
                <span>+351 968 995 275</span>
              </li>
              <li className="flex items-center gap-3 font-bold uppercase tracking-wider">
                <Mail size={18} className="text-brand-brown" />
                <span>info@taviraroots.com</span>
              </li>
              <li className="flex items-start gap-3 font-bold uppercase tracking-wider">
                <MapPin size={18} className="text-brand-brown shrink-0 mt-0.5" />
                <span>Tavira, Algarve, Portugal</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-brand-black font-bold uppercase tracking-widest text-sm mb-6">{t('footer.legal')}</h3>
            <ul className="space-y-4 text-sm text-brand-black/60">
              <li><Link to="/privacidade" className="hover:text-brand-brown transition-colors font-bold uppercase tracking-wider">{t('footer.privacy')}</Link></li>
              <li><Link to="/termos" className="hover:text-brand-brown transition-colors font-bold uppercase tracking-wider">{t('footer.terms')}</Link></li>
              <li><a href="https://www.livroreclamacoes.pt/Inicio/" target="_blank" rel="noopener noreferrer" className="hover:text-brand-brown transition-colors font-bold uppercase tracking-wider">{t('footer.complaints')}</a></li>
              <li><span className="text-xs opacity-40 text-brand-black/40">RNAAT nº XXXX/XXXX</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-brand-brown/10 text-center text-[10px] text-brand-black/40 font-bold uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} TAVIRA ROOTS. {t('footer.rights')}.</p>
        </div>
      </div>
    </footer>
  );
}
