import React, { useState } from 'react';
import { 
  MessageSquare, 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Sparkles,
  ShieldCheck,
  X,
  CreditCard,
  Globe,
  CheckCircle2,
  Star,
  ChevronDown,
  ChevronUp,
  Clock,
  Award,
  Menu
} from 'lucide-react';
import type { BusinessConfig, AppLanguage, BlogPost } from '../types/business';
import confetti from 'canvas-confetti';

interface WebsiteTemplatesProps {
  config: BusinessConfig;
}

export const WebsiteTemplates: React.FC<WebsiteTemplatesProps> = ({ config }) => {
  const [activeTab, setActiveTab] = useState<'home' | 'services' | 'about' | 'portfolio' | 'blog' | 'contact'>('home');
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [showBookingModal, setShowBookingModal] = useState<boolean>(false);
  const [showPaymentModal, setShowPaymentModal] = useState<boolean>(false);
  const [legalModalType, setLegalModalType] = useState<'aviso' | 'privacidad' | 'cookies' | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState<string>('');
  const [selectedServicePrice, setSelectedServicePrice] = useState<string>('');
  const [currentLang, setCurrentLang] = useState<AppLanguage>(config.language || 'es');
  const [paymentDone, setPaymentDone] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [showCookieBanner, setShowCookieBanner] = useState<boolean>(true);

  const {
    name,
    slogan,
    heroHeadline,
    heroSubheadline,
    ctaText,
    secondaryCtaText,
    aboutTitle,
    aboutText,
    aboutBadge,
    aboutHistory,
    aboutValues,
    whatsappNumber,
    phone,
    email,
    address,
    workingHours,
    palette,
    fontFamily,
    services,
    testimonials,
    faqs,
    sections,
    benefits,
    portfolio,
    blog,
    team,
    legal
  } = config;

  const fontClass = {
    inter: 'font-inter',
    jakarta: 'font-jakarta',
    playfair: 'font-playfair',
    space: 'font-space'
  }[fontFamily];

  const isDark = palette.bgMode === 'dark';

  const triggerBooking = (title?: string, price?: string) => {
    if (title) setSelectedServiceTitle(title);
    if (price) setSelectedServicePrice(price);
    setShowBookingModal(true);
  };

  const triggerPayment = (title: string, price: string) => {
    setSelectedServiceTitle(title);
    setSelectedServicePrice(price);
    setShowPaymentModal(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
    setTimeout(() => {
      setShowBookingModal(false);
    }, 2000);
  };

  const handlePayComplete = (e: React.FormEvent) => {
    e.preventDefault();
    setPaymentDone(true);
    confetti({ particleCount: 120, spread: 80, origin: { y: 0.5 } });
    setTimeout(() => {
      setPaymentDone(false);
      setShowPaymentModal(false);
    }, 3500);
  };

  const t = {
    es: { home: 'Inicio', services: 'Servicios', about: 'Nosotros', portfolio: 'Portfolio', blog: 'Blog & Recursos', contact: 'Contacto', chat: 'WhatsApp Directo' },
    en: { home: 'Home', services: 'Services', about: 'About Us', portfolio: 'Portfolio', blog: 'Blog & Articles', contact: 'Contact', chat: 'Direct Chat' },
    fr: { home: 'Accueil', services: 'Services', about: 'À Propos', portfolio: 'Portfolio', blog: 'Blog & Articles', contact: 'Contact', chat: 'Chat Direct' },
    de: { home: 'Start', services: 'Leistungen', about: 'Über uns', portfolio: 'Portfolio', blog: 'Blog & Berichte', contact: 'Kontakt', chat: 'Direkt-Chat' }
  }[currentLang];

  // Pick primary hero image from portfolio or service photos
  const heroImage = portfolio && portfolio[0]?.imageUrl 
    ? portfolio[0].imageUrl 
    : services && services[0]?.imageUrl 
      ? services[0].imageUrl 
      : 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80';

  return (
    <div 
      className={`min-h-screen transition-colors duration-300 ${fontClass} pb-20 md:pb-0 ${
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      
      {/* HEADER WITH MULTI-PAGE NAVIGATION */}
      <header 
        className={`sticky top-0 z-40 backdrop-blur-md border-b transition-all ${
          isDark ? 'bg-slate-950/90 border-slate-800/80 shadow-slate-950/50' : 'bg-white/90 border-slate-200/90 shadow-xs'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div 
              className="w-10 h-10 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg"
              style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}
            >
              {name ? name.charAt(0) : 'W'}
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight block leading-none">{name}</span>
              <span className="text-[11px] opacity-70 font-semibold uppercase tracking-wider block mt-1">{slogan}</span>
            </div>
          </div>

          {/* Multi-Page Navigation Bar */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-extrabold">
            <button 
              onClick={() => setActiveTab('home')}
              className={`py-1 border-b-2 transition-all ${activeTab === 'home' ? 'border-sky-500 text-sky-400' : 'border-transparent opacity-70 hover:opacity-100'}`}
            >
              {t.home}
            </button>
            {sections.services && (
              <button 
                onClick={() => setActiveTab('services')}
                className={`py-1 border-b-2 transition-all ${activeTab === 'services' ? 'border-sky-500 text-sky-400' : 'border-transparent opacity-70 hover:opacity-100'}`}
              >
                {t.services}
              </button>
            )}
            {sections.about && (
              <button 
                onClick={() => setActiveTab('about')}
                className={`py-1 border-b-2 transition-all ${activeTab === 'about' ? 'border-sky-500 text-sky-400' : 'border-transparent opacity-70 hover:opacity-100'}`}
              >
                {t.about}
              </button>
            )}
            {sections.portfolio && portfolio && portfolio.length > 0 && (
              <button 
                onClick={() => setActiveTab('portfolio')}
                className={`py-1 border-b-2 transition-all ${activeTab === 'portfolio' ? 'border-sky-500 text-sky-400' : 'border-transparent opacity-70 hover:opacity-100'}`}
              >
                {t.portfolio}
              </button>
            )}
            {sections.blog && blog && blog.length > 0 && (
              <button 
                onClick={() => setActiveTab('blog')}
                className={`py-1 border-b-2 transition-all ${activeTab === 'blog' ? 'border-sky-500 text-sky-400' : 'border-transparent opacity-70 hover:opacity-100'}`}
              >
                {t.blog}
              </button>
            )}
            {sections.contact && (
              <button 
                onClick={() => setActiveTab('contact')}
                className={`py-1 border-b-2 transition-all ${activeTab === 'contact' ? 'border-sky-500 text-sky-400' : 'border-transparent opacity-70 hover:opacity-100'}`}
              >
                {t.contact}
              </button>
            )}
          </nav>

          {/* Actions & Language Selector */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className={`flex items-center p-1 rounded-xl border text-xs font-bold ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'}`}>
              <Globe className="w-3.5 h-3.5 mx-1 opacity-60 hidden xs:inline-block" />
              {(['es', 'en', 'fr', 'de'] as AppLanguage[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setCurrentLang(lang)}
                  className={`px-1.5 py-0.5 rounded-lg uppercase text-[10px] sm:text-xs ${
                    currentLang === lang ? 'bg-sky-600 text-white shadow-xs font-extrabold' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>

            <a
              href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 rounded-2xl text-white text-xs font-extrabold shadow-lg transition-all transform hover:-translate-y-0.5"
              style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.chat}</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-xl border transition-colors ${
                isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-slate-100 border-slate-200 text-slate-900'
              }`}
              aria-label="Menú Móvil"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Navigation Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden border-b px-6 py-4 space-y-3 backdrop-blur-xl animate-fadeIn ${
            isDark ? 'bg-slate-950/95 border-slate-800 text-white' : 'bg-white/95 border-slate-200 text-slate-900'
          }`}>
            <button 
              onClick={() => { setActiveTab('home'); setMobileMenuOpen(false); }}
              className={`w-full text-left py-2 px-3 rounded-xl font-extrabold text-sm ${activeTab === 'home' ? 'bg-sky-500/10 text-sky-400' : 'opacity-80'}`}
            >
              {t.home}
            </button>
            {sections.services && (
              <button 
                onClick={() => { setActiveTab('services'); setMobileMenuOpen(false); }}
                className={`w-full text-left py-2 px-3 rounded-xl font-extrabold text-sm ${activeTab === 'services' ? 'bg-sky-500/10 text-sky-400' : 'opacity-80'}`}
              >
                {t.services}
              </button>
            )}
            {sections.about && (
              <button 
                onClick={() => { setActiveTab('about'); setMobileMenuOpen(false); }}
                className={`w-full text-left py-2 px-3 rounded-xl font-extrabold text-sm ${activeTab === 'about' ? 'bg-sky-500/10 text-sky-400' : 'opacity-80'}`}
              >
                {t.about}
              </button>
            )}
            {sections.portfolio && portfolio && portfolio.length > 0 && (
              <button 
                onClick={() => { setActiveTab('portfolio'); setMobileMenuOpen(false); }}
                className={`w-full text-left py-2 px-3 rounded-xl font-extrabold text-sm ${activeTab === 'portfolio' ? 'bg-sky-500/10 text-sky-400' : 'opacity-80'}`}
              >
                {t.portfolio}
              </button>
            )}
            {sections.blog && blog && blog.length > 0 && (
              <button 
                onClick={() => { setActiveTab('blog'); setMobileMenuOpen(false); }}
                className={`w-full text-left py-2 px-3 rounded-xl font-extrabold text-sm ${activeTab === 'blog' ? 'bg-sky-500/10 text-sky-400' : 'opacity-80'}`}
              >
                {t.blog}
              </button>
            )}
            {sections.contact && (
              <button 
                onClick={() => { setActiveTab('contact'); setMobileMenuOpen(false); }}
                className={`w-full text-left py-2 px-3 rounded-xl font-extrabold text-sm ${activeTab === 'contact' ? 'bg-sky-500/10 text-sky-400' : 'opacity-80'}`}
              >
                {t.contact}
              </button>
            )}

            <a
              href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl text-white text-xs font-black uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md mt-2"
              style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.chat}</span>
            </a>
          </div>
        )}
      </header>

      {/* PAGE 1: HOME SECTION */}
      {activeTab === 'home' && (
        <main>
          {sections.hero && (
            <section className="relative py-16 md:py-24 overflow-hidden">
              {/* Background ambient lighting */}
              <div 
                className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl pointer-events-none"
                style={{ background: palette.primary }}
              />

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* MODEL 1: LUXURY STUDIO (Asymmetric grid + float card) */}
                {(config.layoutModel || 'luxury') === 'luxury' && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 space-y-6 text-left">
                      {aboutBadge && (
                        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-extrabold border shadow-sm" style={{ backgroundColor: `${palette.primary}15`, borderColor: `${palette.primary}40`, color: palette.primary }}>
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>{aboutBadge}</span>
                        </div>
                      )}
                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12]">
                        {heroHeadline}
                      </h1>
                      <p className="text-base sm:text-lg opacity-85 leading-relaxed font-medium max-w-xl">
                        {heroSubheadline}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 text-xs font-bold pt-2 opacity-90">
                        <div className="flex items-center space-x-1.5 bg-amber-500/10 text-amber-500 px-3 py-1.5 rounded-xl border border-amber-500/20">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span>4.9 / 5 Reseñas de Clientes</span>
                        </div>
                        <div className="flex items-center space-x-1.5 bg-emerald-500/10 text-emerald-500 px-3 py-1.5 rounded-xl border border-emerald-500/20">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>Garantía de Satisfacción</span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                        <button onClick={() => triggerBooking('Consulta General')} className="w-full sm:w-auto px-8 py-4 rounded-2xl text-white text-sm font-extrabold shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2.5" style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}>
                          <span>{ctaText}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                        {secondaryCtaText && (
                          <button onClick={() => setActiveTab('services')} className={`w-full sm:w-auto px-8 py-4 rounded-2xl text-sm font-extrabold border transition-all ${isDark ? 'border-slate-800 hover:border-slate-700 bg-slate-900/60' : 'border-slate-300 hover:border-slate-400 bg-white'}`}>
                            {secondaryCtaText}
                          </button>
                        )}
                      </div>
                    </div>
                    <div className="lg:col-span-5 relative">
                      <div className="relative mx-auto max-w-md lg:max-w-none">
                        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-900/10 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                          <img src={heroImage} alt={name} className="w-full h-[400px] object-cover" />
                        </div>
                        <div className={`absolute -bottom-6 -left-6 p-4 rounded-2xl border shadow-2xl max-w-xs flex items-center space-x-3 backdrop-blur-xl ${isDark ? 'bg-slate-900/90 border-slate-800 text-white' : 'bg-white/90 border-slate-200 text-slate-900'}`}>
                          <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0">
                            <Award className="w-6 h-6" />
                          </div>
                          <div>
                            <div className="font-extrabold text-sm">+1.200 Casos Exitosos</div>
                            <div className="text-[11px] opacity-70 font-medium">Atención profesional de alta gama</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* MODEL 2: MODERN TECH & SAAS (Centered hero + metric counters + photo hero) */}
                {config.layoutModel === 'modern' && (
                  <div className="text-center max-w-4xl mx-auto space-y-8">
                    {aboutBadge && (
                      <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider border shadow-md" style={{ backgroundColor: `${palette.primary}20`, borderColor: palette.primary, color: palette.accent }}>
                        <Sparkles className="w-4 h-4" />
                        <span>{aboutBadge}</span>
                      </div>
                    )}
                    <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-[1.08]">
                      {heroHeadline}
                    </h1>
                    <p className="text-lg opacity-85 leading-relaxed font-normal max-w-2xl mx-auto">
                      {heroSubheadline}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                      <button onClick={() => triggerBooking('Consulta General')} className="w-full sm:w-auto px-9 py-4 rounded-2xl text-white text-sm font-black shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center space-x-2" style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}>
                        <span>{ctaText}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      {secondaryCtaText && (
                        <button onClick={() => setActiveTab('services')} className={`w-full sm:w-auto px-9 py-4 rounded-2xl text-sm font-black border transition-all ${isDark ? 'border-slate-800 bg-slate-900/80 text-white hover:bg-slate-800' : 'border-slate-300 bg-white text-slate-900 hover:bg-slate-50'}`}>
                          {secondaryCtaText}
                        </button>
                      )}
                    </div>

                    {/* Metric Counter Bar */}
                    <div className={`mt-12 p-6 rounded-3xl border grid grid-cols-2 md:grid-cols-4 gap-6 backdrop-blur-xl ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'}`}>
                      <div>
                        <div className="text-3xl font-black" style={{ color: palette.accent }}>99.4%</div>
                        <div className="text-xs opacity-70 font-bold uppercase mt-1">Tasa de Éxito</div>
                      </div>
                      <div>
                        <div className="text-3xl font-black" style={{ color: palette.accent }}>+1.400</div>
                        <div className="text-xs opacity-70 font-bold uppercase mt-1">Clientes Satisfechos</div>
                      </div>
                      <div>
                        <div className="text-3xl font-black" style={{ color: palette.accent }}>24/7</div>
                        <div className="text-xs opacity-70 font-bold uppercase mt-1">Soporte Continuo</div>
                      </div>
                      <div>
                        <div className="text-3xl font-black" style={{ color: palette.accent }}>10 Años</div>
                        <div className="text-xs opacity-70 font-bold uppercase mt-1">Garantía Escrita</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* MODEL 3: BOUTIQUE MINIMAL (50/50 Editorial Split) */}
                {config.layoutModel === 'minimal' && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-left">
                      <span className="text-xs font-black uppercase tracking-widest block text-sky-400">
                        {aboutBadge || 'Estudio Profesional'}
                      </span>
                      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                        {heroHeadline}
                      </h1>
                      <div className="w-16 h-1 bg-sky-500 rounded-full"></div>
                      <p className="text-base opacity-80 leading-relaxed font-serif italic">
                        "{heroSubheadline}"
                      </p>
                      <div className="pt-4 flex items-center space-x-4">
                        <button onClick={() => triggerBooking('Consulta General')} className="px-8 py-3.5 rounded-xl text-white text-xs font-bold uppercase tracking-wider custom-gradient-btn shadow-md flex items-center space-x-2">
                          <span>{ctaText}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-800/40">
                      <img src={heroImage} alt={name} className="w-full h-[420px] object-cover" />
                    </div>
                  </div>
                )}

                {/* MODEL 4: LEAD CONVERSION (Embedded Booking Form in Hero) */}
                {config.layoutModel === 'conversion' && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 space-y-6 text-left">
                      <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-black bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Reserva Directa sin Esperas</span>
                      </div>
                      <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
                        {heroHeadline}
                      </h1>
                      <p className="text-base opacity-85 leading-relaxed">
                        {heroSubheadline}
                      </p>
                      <div className="flex items-center space-x-6 text-xs font-bold opacity-85 pt-2">
                        <div className="flex items-center space-x-2 text-emerald-400"><CheckCircle2 className="w-4 h-4" /><span>1ª Cita Gratuita</span></div>
                        <div className="flex items-center space-x-2 text-emerald-400"><CheckCircle2 className="w-4 h-4" /><span>Reserva 100% Segura</span></div>
                      </div>
                    </div>

                    {/* Embedded Hero Booking Form Card */}
                    <div className="lg:col-span-5">
                      <div className={`p-8 rounded-3xl border shadow-2xl ${isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'} text-left space-y-4`}>
                        <div className="flex items-center justify-between border-b border-slate-800/40 pb-3">
                          <h3 className="font-extrabold text-base text-slate-900 dark:text-white">Solicitar Cita / Información</h3>
                          <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400">Respuesta &lt; 15 min</span>
                        </div>
                        <form onSubmit={handleFormSubmit} className="space-y-3">
                          <div>
                            <label className="block text-[11px] font-bold opacity-80 mb-1">Nombre Completo</label>
                            <input type="text" required className="w-full px-3.5 py-2.5 rounded-xl border bg-slate-950 text-xs text-white focus:outline-none focus:border-sky-500" placeholder="Tu nombre..." />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold opacity-80 mb-1">Teléfono o WhatsApp</label>
                            <input type="text" required className="w-full px-3.5 py-2.5 rounded-xl border bg-slate-950 text-xs text-white focus:outline-none focus:border-sky-500" placeholder="+34 600 000 000" />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold opacity-80 mb-1">Servicio de Interés</label>
                            <select className="w-full px-3.5 py-2.5 rounded-xl border bg-slate-950 text-xs text-white focus:outline-none focus:border-sky-500 font-bold">
                              {services.map(s => <option key={s.id} value={s.title}>{s.title} ({s.price})</option>)}
                            </select>
                          </div>
                          <button type="submit" className="w-full py-3.5 rounded-xl text-white text-xs font-black uppercase tracking-wider custom-gradient-btn shadow-lg mt-2 flex items-center justify-center space-x-1">
                            <span>{ctaText}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                )}

              </div>
            </section>
          )}

          {/* BENEFITS GRID WITH ICONS */}
          {sections.benefits && benefits && benefits.length > 0 && (
            <section className={`py-16 border-t ${isDark ? 'border-slate-800/60 bg-slate-950/40' : 'border-slate-200 bg-slate-100/50'}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {benefits.map(b => (
                    <div key={b.id} className={`p-6 rounded-3xl border flex items-start space-x-4 shadow-sm ${isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200'}`}>
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-md" style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}>
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-extrabold text-base mb-1">{b.title}</h3>
                        <p className="text-xs opacity-80 leading-relaxed">{b.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* FEATURED SERVICES WITH HIGH-RES PHOTOS */}
          {sections.services && services.length > 0 && (
            <section className={`py-20 border-t ${isDark ? 'border-slate-800/60' : 'border-slate-200'}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider block mb-2" style={{ color: palette.primary }}>Prestaciones Destacadas</span>
                    <h2 className="text-3xl font-extrabold">Servicios Principales</h2>
                  </div>
                  <button onClick={() => setActiveTab('services')} className="text-xs font-extrabold text-sky-400 hover:underline flex items-center space-x-1">
                    <span>Ver catálogo completo ({services.length})</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {services.slice(0, 3).map((s) => (
                    <div key={s.id} className={`group rounded-3xl border overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg ${isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200'}`}>
                      <div>
                        {/* Service Photo */}
                        {s.imageUrl && (
                          <div className="relative h-48 overflow-hidden">
                            <img src={s.imageUrl} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            {s.badge && (
                              <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase text-white shadow-md" style={{ background: palette.primary }}>
                                {s.badge}
                              </span>
                            )}
                          </div>
                        )}
                        <div className="p-6">
                          <h3 className="text-lg font-extrabold mb-2">{s.title}</h3>
                          <p className="text-xs opacity-80 leading-relaxed mb-4">{s.description}</p>
                        </div>
                      </div>

                      <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-800/40">
                        <span className="font-black text-sky-400 text-base">{s.price}</span>
                        <button onClick={() => triggerBooking(s.title, s.price)} className="text-xs font-extrabold text-sky-400 hover:underline flex items-center space-x-1">
                          <span>Reservar</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* METHODOLOGY: HOW WE WORK (4 PASOS) */}
          <section className={`py-16 border-t ${isDark ? 'border-slate-800/60 bg-slate-950/60' : 'border-slate-200 bg-slate-100/40'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <span className="text-xs font-extrabold uppercase tracking-wider block mb-2" style={{ color: palette.primary }}>Proceso Garantizado</span>
              <h2 className="text-3xl font-extrabold mb-12">Cómo Trabajamos Con Nuestros Clientes</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                <div className={`p-6 rounded-3xl border ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <span className="text-2xl font-black text-sky-400 block mb-2">01.</span>
                  <h3 className="font-extrabold text-base mb-1">Diagnóstico & Cita</h3>
                  <p className="text-xs opacity-75 leading-relaxed">Evaluación gratuita sin compromiso para analizar tu caso en detalle.</p>
                </div>

                <div className={`p-6 rounded-3xl border ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <span className="text-2xl font-black text-sky-400 block mb-2">02.</span>
                  <h3 className="font-extrabold text-base mb-1">Plan Personalizado</h3>
                  <p className="text-xs opacity-75 leading-relaxed">Propuesta transparente con calendario y presupuesto cerrado por escrito.</p>
                </div>

                <div className={`p-6 rounded-3xl border ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <span className="text-2xl font-black text-sky-400 block mb-2">03.</span>
                  <h3 className="font-extrabold text-base mb-1">Ejecución de Precisión</h3>
                  <p className="text-xs opacity-75 leading-relaxed">Tratamiento o servicio ejecutado por profesionales titulados senior.</p>
                </div>

                <div className={`p-6 rounded-3xl border ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'}`}>
                  <span className="text-2xl font-black text-sky-400 block mb-2">04.</span>
                  <h3 className="font-extrabold text-base mb-1">Seguimiento & Garantía</h3>
                  <p className="text-xs opacity-75 leading-relaxed">Garantía post-servicio e informe detallado de mantenimiento.</p>
                </div>
              </div>
            </div>
          </section>

          {/* TESTIMONIALS ON HOME */}
          {sections.testimonials && testimonials && testimonials.length > 0 && (
            <section className={`py-20 border-t ${isDark ? 'border-slate-800/60' : 'border-slate-200'}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <span className="text-xs font-extrabold uppercase tracking-wider block mb-2" style={{ color: palette.primary }}>Reputación Verificada</span>
                  <h2 className="text-3xl font-extrabold mb-3">Lo que Opinan Nuestros Clientes</h2>
                  <p className="text-sm opacity-75">Reseñas de pacientes y clientes reales con verificación oficial.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {testimonials.map((tItem) => (
                    <div key={tItem.id} className={`p-8 rounded-3xl border shadow-lg ${isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200'}`}>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-1 text-amber-400">
                          {[...Array(tItem.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current" />
                          ))}
                        </div>
                        <span className="text-[10px] font-extrabold uppercase bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 px-2.5 py-1 rounded-full">Reseña Verificada</span>
                      </div>
                      <p className="text-sm sm:text-base italic mb-6 leading-relaxed opacity-90">"{tItem.comment}"</p>
                      <div className="flex items-center space-x-4">
                        <img src={tItem.avatar} alt={tItem.name} className="w-12 h-12 rounded-full object-cover border-2" style={{ borderColor: palette.primary }} />
                        <div>
                          <div className="font-extrabold text-sm">{tItem.name}</div>
                          <div className="text-xs opacity-60 font-semibold">{tItem.role}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* FAQ ACCORDION ON HOME */}
          {sections.faq && faqs && faqs.length > 0 && (
            <section className={`py-20 border-t ${isDark ? 'border-slate-800/60' : 'border-slate-200'}`}>
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                  <span className="text-xs font-extrabold uppercase tracking-wider block mb-2" style={{ color: palette.primary }}>Dudas Resueltas</span>
                  <h2 className="text-3xl font-extrabold">Preguntas Frecuentes</h2>
                </div>
                <div className="space-y-4">
                  {faqs.map((faq) => {
                    const isOpen = openFaq === faq.id;
                    return (
                      <div key={faq.id} className={`rounded-2xl border transition-all ${isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200'}`}>
                        <button onClick={() => setOpenFaq(isOpen ? null : faq.id)} className="w-full p-6 text-left flex items-center justify-between font-extrabold text-sm sm:text-base focus:outline-none">
                          <span>{faq.question}</span>
                          {isOpen ? <ChevronUp className="w-5 h-5 text-sky-400" /> : <ChevronDown className="w-5 h-5 opacity-60" />}
                        </button>
                        {isOpen && <div className="px-6 pb-6 text-sm opacity-80 leading-relaxed border-t pt-4 border-slate-800/40">{faq.answer}</div>}
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          )}

        </main>
      )}

      {/* PAGE 2: SERVICES PAGE (DETAILED DEEP PAGE) */}
      {activeTab === 'services' && (
        <main className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-wider block mb-2" style={{ color: palette.primary }}>Catálogo Completo</span>
            <h1 className="text-4xl font-extrabold mb-4">Servicios & Soluciones Especializadas</h1>
            <p className="text-base opacity-75">Conoce a fondo cada uno de nuestros servicios, la tecnología aplicada y las opciones de financiación para {name}.</p>
          </div>

          <div className="space-y-8">
            {services.map((service) => (
              <div key={service.id} className={`p-8 rounded-3xl border ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'} shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center`}>
                
                {/* Service Photo */}
                <div className="lg:col-span-4 rounded-2xl overflow-hidden shadow-md h-56">
                  <img src={service.imageUrl || heroImage} alt={service.title} className="w-full h-full object-cover" />
                </div>

                {/* Service Details */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="flex items-center space-x-3">
                    {service.badge && <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase text-white shadow-xs" style={{ background: palette.primary }}>{service.badge}</span>}
                    <h2 className="text-2xl font-extrabold">{service.title}</h2>
                  </div>
                  <p className="text-sm opacity-80 leading-relaxed">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-3 text-xs font-bold opacity-80 pt-2">
                    <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /><span>Primera valoración gratuita</span></div>
                    <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /><span>Garantía escrita 100%</span></div>
                  </div>
                </div>

                {/* Price & Booking Actions */}
                <div className="lg:col-span-3 p-6 rounded-2xl bg-slate-950/40 border border-slate-800 text-center flex flex-col justify-center items-center">
                  <span className="text-xs opacity-60 font-semibold block mb-1">Precio Transparente</span>
                  <span className="text-3xl font-black mb-4" style={{ color: palette.accent }}>{service.price}</span>
                  
                  <div className="space-y-2.5 w-full">
                    <button onClick={() => triggerBooking(service.title, service.price)} className="w-full py-3 rounded-xl text-white text-xs font-extrabold shadow-md custom-gradient-btn">Solicitar Cita / Info</button>
                    <button onClick={() => triggerPayment(service.title, service.price)} className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold flex items-center justify-center gap-1.5 shadow-md"><CreditCard className="w-4 h-4" /><span>Pagar Online</span></button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </main>
      )}

      {/* PAGE 3: ABOUT US (HISTORIA, EQUIPO Y VALORES) */}
      {activeTab === 'about' && (
        <main className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-extrabold uppercase tracking-wider block mb-2" style={{ color: palette.primary }}>Quiénes Somos</span>
            <h1 className="text-4xl font-extrabold mb-4">{aboutTitle}</h1>
            <p className="text-base opacity-75 leading-relaxed">{aboutText}</p>
          </div>

          {aboutHistory && (
            <div className={`p-8 rounded-3xl border mb-16 shadow-lg ${isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200'}`}>
              <h2 className="text-2xl font-extrabold mb-4">Nuestra Historia & Trayectoria</h2>
              <p className="text-sm opacity-85 leading-relaxed">{aboutHistory}</p>
            </div>
          )}

          {aboutValues && aboutValues.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-extrabold mb-6 text-center">Nuestros Valores Fundamentales</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {aboutValues.map((val, idx) => (
                  <div key={idx} className={`p-6 rounded-2xl border text-center font-extrabold text-xs sm:text-sm ${isDark ? 'bg-slate-900/80 border-slate-800 text-sky-300' : 'bg-white border-slate-200 text-sky-900'}`}>
                    ✨ {val}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TEAM MEMBERS WITH REAL HEADSHOTS */}
          {team && team.length > 0 && (
            <div>
              <h2 className="text-3xl font-extrabold mb-8 text-center">Equipo Profesional & Especialistas</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {team.map((member) => (
                  <div key={member.id} className={`p-8 rounded-3xl border text-center shadow-lg ${isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200'}`}>
                    <img src={member.imageUrl} alt={member.name} className="w-28 h-28 rounded-full mx-auto object-cover mb-4 border-4 shadow-md" style={{ borderColor: palette.primary }} />
                    <h3 className="font-extrabold text-lg">{member.name}</h3>
                    <span className="text-xs opacity-70 font-bold uppercase tracking-wider block mb-3 text-sky-400">{member.role}</span>
                    {member.bio && <p className="text-xs opacity-75 leading-relaxed">{member.bio}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      )}

      {/* PAGE 4: PORTFOLIO */}
      {activeTab === 'portfolio' && (
        <main className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-wider block mb-2" style={{ color: palette.primary }}>Casos de Éxito</span>
            <h1 className="text-4xl font-extrabold mb-4">Portfolio de Proyectos Realizados</h1>
            <p className="text-base opacity-75">Explora nuestros casos de éxito más emblemáticos y los resultados verificados logrados para nuestros clientes.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio?.map((project) => (
              <div key={project.id} className={`rounded-3xl overflow-hidden border ${isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200'} shadow-xl group`}>
                <div className="h-64 overflow-hidden relative">
                  <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase bg-slate-900/90 text-white backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-extrabold mb-3">{project.title}</h3>
                  <p className="text-xs sm:text-sm opacity-80 leading-relaxed mb-4">{project.description}</p>
                  {project.clientName && (
                    <div className="flex items-center justify-between text-xs opacity-60 font-bold border-t pt-4 border-slate-800/40">
                      <span>Cliente: {project.clientName}</span>
                      <span>{project.date}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* PAGE 5: BLOG */}
      {activeTab === 'blog' && (
        <main className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-wider block mb-2 text-sky-400">Recursos & Guías</span>
            <h1 className="text-4xl font-extrabold mb-4">Blog & Novedades del Sector</h1>
            <p className="text-base opacity-75">Artículos de estrategia, investigación y tendencias redactadas por nuestros especialistas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blog?.map((article) => (
              <article key={article.id} className={`rounded-3xl border overflow-hidden ${isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200'} shadow-xl flex flex-col justify-between`}>
                <div>
                  <img src={article.imageUrl} alt={article.title} className="w-full h-52 object-cover" />
                  <div className="p-8">
                    <span className="text-xs font-extrabold text-sky-400 block mb-2">{article.date} • {article.category} • {article.readTime}</span>
                    <h2 className="text-2xl font-extrabold mb-3">{article.title}</h2>
                    <p className="text-xs sm:text-sm opacity-80 leading-relaxed mb-6">{article.excerpt}</p>
                  </div>
                </div>
                <div className="p-8 pt-0">
                  <button onClick={() => setSelectedArticle(article)} className="text-xs font-extrabold text-sky-400 hover:underline flex items-center space-x-1">
                    <span>Leer Artículo Completo</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </main>
      )}

      {/* PAGE 6: CONTACTO */}
      {activeTab === 'contact' && (
        <main className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider block mb-2" style={{ color: palette.primary }}>Atención Directa</span>
              <h1 className="text-4xl font-extrabold mb-6">Ponte en Contacto Con Nosotros</h1>
              <p className="text-base opacity-75 mb-8 leading-relaxed">Estamos a tu disposición para atender cualquier consulta presencial o telemática.</p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md custom-gradient-btn"><Phone className="w-5 h-5" /></div>
                  <div><div className="text-xs opacity-60 font-semibold">Teléfono Directo</div><div className="font-extrabold text-base">{phone}</div></div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md custom-gradient-btn"><Mail className="w-5 h-5" /></div>
                  <div><div className="text-xs opacity-60 font-semibold">Email Corporativo</div><div className="font-extrabold text-base">{email}</div></div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md custom-gradient-btn"><MapPin className="w-5 h-5" /></div>
                  <div><div className="text-xs opacity-60 font-semibold">Dirección Física</div><div className="font-extrabold text-base">{address}</div></div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md custom-gradient-btn"><Clock className="w-5 h-5" /></div>
                  <div><div className="text-xs opacity-60 font-semibold">Horario Comercial</div><div className="font-extrabold text-base">{workingHours}</div></div>
                </div>
              </div>
            </div>

            {/* Interactive Contact Form */}
            <div className={`p-8 rounded-3xl border shadow-xl ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'}`}>
              <h3 className="text-xl font-extrabold mb-6">Envíanos un Mensaje</h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold mb-1.5 opacity-80">Nombre Completo</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border bg-slate-950 text-sm focus:outline-none" placeholder="Tu nombre..." />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5 opacity-80">Email o Teléfono de Contacto</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border bg-slate-950 text-sm focus:outline-none" placeholder="ejemplo@correo.com" />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5 opacity-80">Mensaje / Consulta</label>
                  <textarea rows={4} required className="w-full px-4 py-3 rounded-xl border bg-slate-950 text-sm focus:outline-none" placeholder="¿En qué te podemos ayudar?"></textarea>
                </div>
                <button type="submit" className="w-full py-4 rounded-xl text-white font-extrabold text-sm shadow-lg custom-gradient-btn">Enviar Consulta</button>
              </form>
            </div>
          </div>
        </main>
      )}

      {/* FOOTER & LEGAL PAGES MODALS */}
      <footer className={`py-12 border-t ${isDark ? 'bg-slate-950 border-slate-800' : 'bg-white border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="font-extrabold text-lg block">{name}</span>
            <span className="text-xs opacity-60 font-semibold">© {new Date().getFullYear()} {name}. Todos los derechos reservados.</span>
          </div>

          <div className="flex items-center space-x-6 text-xs font-extrabold opacity-75">
            <button onClick={() => setLegalModalType('aviso')} className="hover:underline">Aviso Legal</button>
            <button onClick={() => setLegalModalType('privacidad')} className="hover:underline">Política de Privacidad</button>
            <button onClick={() => setLegalModalType('cookies')} className="hover:underline">Política de Cookies</button>
          </div>

          <div className="text-xs opacity-60 font-medium">
            Horario: {workingHours}
          </div>
        </div>
      </footer>

      {/* LEGAL NOTICE MODAL */}
      {legalModalType && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-auto animate-fadeIn">
          <div className={`max-w-xl w-full p-8 rounded-3xl border shadow-2xl relative ${isDark ? 'bg-slate-900 text-white border-slate-800' : 'bg-white text-slate-900 border-slate-200'}`}>
            <button onClick={() => setLegalModalType(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1"><X className="w-5 h-5" /></button>
            <h3 className="text-xl font-extrabold mb-4 uppercase">{legalModalType === 'aviso' ? 'Aviso Legal' : legalModalType === 'privacidad' ? 'Política de Privacidad' : 'Política de Cookies'}</h3>
            <div className="text-xs opacity-85 leading-relaxed space-y-3 max-h-80 overflow-auto">
              <p>{legalModalType === 'aviso' ? legal?.avisoLegal : legalModalType === 'privacidad' ? legal?.privacidad : legal?.cookies}</p>
            </div>
          </div>
        </div>
      )}

      {/* BLOG ARTICLE FULL VIEW MODAL */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-auto animate-fadeIn">
          <div className={`max-w-2xl w-full p-8 rounded-3xl border shadow-2xl relative ${isDark ? 'bg-slate-900 text-white border-slate-800' : 'bg-white text-slate-900 border-slate-200'}`}>
            <button onClick={() => setSelectedArticle(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1"><X className="w-5 h-5" /></button>
            <span className="text-xs font-extrabold text-sky-400 block mb-2">{selectedArticle.date} • {selectedArticle.category}</span>
            <h2 className="text-2xl font-extrabold mb-4">{selectedArticle.title}</h2>
            <img src={selectedArticle.imageUrl} alt={selectedArticle.title} className="w-full h-64 object-cover rounded-2xl mb-6" />
            <p className="text-xs sm:text-sm opacity-90 leading-relaxed whitespace-pre-line">{selectedArticle.content}</p>
          </div>
        </div>
      )}

      {/* ONLINE PAYMENT MODAL */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="max-w-md w-full bg-white rounded-3xl p-6 shadow-2xl relative border border-slate-200 text-slate-900">
            <button onClick={() => setShowPaymentModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1"><X className="w-5 h-5" /></button>
            <h3 className="text-xl font-black mb-1">Pasarela de Pago Online</h3>
            <p className="text-xs text-slate-500 mb-6">Servicio: <span className="font-bold text-sky-700">{selectedServiceTitle}</span> ({selectedServicePrice})</p>
            {paymentDone ? (
              <div className="p-6 bg-emerald-50 text-emerald-900 rounded-2xl text-center font-extrabold">¡Pago Confirmado Con Éxito!</div>
            ) : (
              <form onSubmit={handlePayComplete} className="space-y-4">
                <input type="text" required className="w-full px-3 py-2.5 rounded-xl border text-xs" placeholder="Titular de la tarjeta" />
                <input type="text" required className="w-full px-3 py-2.5 rounded-xl border text-xs" placeholder="Número de tarjeta (**** **** **** ****)" />
                <button type="submit" className="w-full py-3.5 rounded-xl bg-emerald-600 text-white font-extrabold text-xs shadow-md">Confirmar Pago ({selectedServicePrice})</button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* BOOKING MODAL */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
          <div className="max-w-md w-full bg-white rounded-3xl p-6 shadow-2xl relative text-slate-900">
            <button onClick={() => setShowBookingModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1"><X className="w-5 h-5" /></button>
            <h3 className="text-xl font-extrabold mb-4">Solicitar Reserva / Cita</h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input type="text" required className="w-full px-3 py-2.5 rounded-xl border text-xs" placeholder="Nombre completo..." />
              <input type="text" required className="w-full px-3 py-2.5 rounded-xl border text-xs" placeholder="Teléfono de contacto..." />
              <button type="submit" className="w-full py-3.5 rounded-xl bg-sky-600 text-white font-extrabold text-xs shadow-md">Confirmar Reserva</button>
            </form>
          </div>
        </div>
      )}



      {/* FLOATING COOKIE CONSENT NOTICE */}
      {showCookieBanner && (
        <div className={`fixed bottom-16 md:bottom-6 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 p-4 rounded-2xl shadow-2xl border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs backdrop-blur-xl animate-fadeIn ${
          isDark ? 'bg-slate-900/90 border-slate-800 text-white' : 'bg-white/90 border-slate-200 text-slate-900'
        }`}>
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0" />
            <span className="opacity-85 font-medium">Utilizamos cookies esenciales para garantizar el correcto funcionamiento del sitio.</span>
          </div>
          <button
            onClick={() => setShowCookieBanner(false)}
            className="w-full sm:w-auto px-4 py-2 rounded-xl text-white font-extrabold text-xs shadow-md shrink-0 custom-gradient-btn"
          >
            Entendido
          </button>
        </div>
      )}

      {/* STICKY BOTTOM ACTION BAR FOR MOBILE */}
      <div className={`md:hidden fixed bottom-0 left-0 right-0 z-40 border-t backdrop-blur-lg p-3 px-4 flex items-center space-x-3 shadow-2xl ${
        isDark ? 'bg-slate-950/90 border-slate-800' : 'bg-white/90 border-slate-200'
      }`}>
        <a
          href={`tel:${phone.replace(/[^0-9+]/g, '')}`}
          className={`flex-1 py-3 rounded-2xl text-xs font-extrabold border flex items-center justify-center space-x-2 transition-all ${
            isDark ? 'bg-slate-900 border-slate-700 text-white' : 'bg-slate-100 border-slate-300 text-slate-900'
          }`}
        >
          <Phone className="w-4 h-4 text-sky-400" />
          <span>Llamar Directo</span>
        </a>

        <a
          href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 rounded-2xl text-white text-xs font-extrabold shadow-lg flex items-center justify-center space-x-2"
          style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>

    </div>
  );
};
