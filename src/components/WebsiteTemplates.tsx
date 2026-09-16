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
  Menu,
  Utensils,
  Dumbbell
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
  const [faqSearchQuery, setFaqSearchQuery] = useState<string>('');
  const [reservaTime, setReservaTime] = useState<string>('14:00');
  const [reservaGuests, setReservaGuests] = useState<number>(2);
  const [activeTimetableDay, setActiveTimetableDay] = useState<'lunes' | 'martes' | 'miercoles' | 'jueves' | 'viernes'>('lunes');

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

  const filteredFaqs = (faqs || []).filter(f => 
    !faqSearchQuery || 
    f.question.toLowerCase().includes(faqSearchQuery.toLowerCase()) || 
    f.answer.toLowerCase().includes(faqSearchQuery.toLowerCase())
  );

  const t = {
    es: { home: 'Inicio', services: 'Servicios', about: 'Nosotros', portfolio: 'Portfolio', blog: 'Blog & Recursos', contact: 'Contacto', chat: 'WhatsApp Directo' },
    en: { home: 'Home', services: 'Services', about: 'About Us', portfolio: 'Portfolio', blog: 'Blog & Articles', contact: 'Contact', chat: 'Direct Chat' },
    fr: { home: 'Accueil', services: 'Services', about: 'À Propos', portfolio: 'Portfolio', blog: 'Blog & Articles', contact: 'Contact', chat: 'Chat Direct' },
    de: { home: 'Start', services: 'Leistungen', about: 'Über uns', portfolio: 'Portfolio', blog: 'Blog & Berichte', contact: 'Kontakt', chat: 'Direkt-Chat' }
  }[currentLang];

  // Pick primary hero image from customHeroUrl, portfolio or service photos
  const heroImage = config.customHeroUrl 
    ? config.customHeroUrl
    : portfolio && portfolio[0]?.imageUrl 
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
      {/* MODEL SPECIFIC TOP ANNOUNCEMENT STRIP */}
      {sections.topBanner !== false && config.layoutModel === 'conversion' && (
        <div 
          className="text-white text-[11px] sm:text-xs font-black py-2 px-4 text-center tracking-wider uppercase flex items-center justify-center space-x-2 shadow-md"
          style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>🔥 1ª CONSULTA O RESERVA CON VALORACIÓN 100% GRATUITA</span>
          <span className="hidden sm:inline">•</span>
          <span className="hidden sm:inline">RESPUESTA EN MENOS DE 15 MINUTOS</span>
        </div>
      )}

      {sections.topBanner !== false && config.layoutModel === 'luxury' && (
        <div 
          className="border-b text-[11px] font-serif py-1.5 px-4 text-center tracking-widest uppercase"
          style={{ backgroundColor: `${palette.primary}18`, borderColor: `${palette.primary}30`, color: palette.accent }}
        >
          ✦ ATENCIÓN DE AUTOR Y SERVICIOS PROFESIONALES DE ALTA GAMA ✦
        </div>
      )}

      {sections.topBanner !== false && config.layoutModel === 'modern' && (
        <div 
          className="border-b text-[11px] font-mono py-1.5 px-4 text-center tracking-wider uppercase flex items-center justify-center space-x-2"
          style={{ backgroundColor: isDark ? 'rgba(15, 23, 42, 0.9)' : 'rgba(241, 245, 249, 0.9)', borderColor: `${palette.primary}30`, color: palette.accent }}
        >
          <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: palette.accent }}></span>
          <span>SISTEMA DE RESERVAS Y ATENCIÓN EN TIEMPO REAL OPERATIVO</span>
        </div>
      )}

      {/* HEADER WITH MULTI-PAGE NAVIGATION */}
      <header 
        className={`sticky top-0 z-40 backdrop-blur-xl border-b transition-all ${
          config.layoutModel === 'luxury' ? 'shadow-2xl font-serif' :
          config.layoutModel === 'modern' ? 'shadow-2xl backdrop-blur-2xl' :
          config.layoutModel === 'minimal' ? 'shadow-none' : 'shadow-xl'
        } ${
          isDark ? 'bg-slate-950/90' : 'bg-white/90'
        }`}
        style={{ borderColor: `${palette.primary}40` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            {config.customLogoUrl ? (
              <img src={config.customLogoUrl} alt={name} className="h-10 w-auto max-w-[150px] object-contain rounded-xl shadow-sm" />
            ) : (
              <div 
                className={`w-10 h-10 flex items-center justify-center text-white font-black text-xl shadow-lg transform hover:scale-105 transition-transform ${
                  config.layoutModel === 'minimal' ? 'rounded-md bg-zinc-900 text-white' : 'rounded-2xl'
                }`}
                style={{ background: config.layoutModel === 'minimal' ? undefined : `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}
              >
                {name ? name.charAt(0) : 'W'}
              </div>
            )}
            <div>
              <span className={`text-xl font-extrabold tracking-tight block leading-none ${config.layoutModel === 'luxury' ? 'font-serif' : ''}`}>{name}</span>
              <span className="text-[11px] opacity-70 font-semibold uppercase tracking-wider block mt-1">{slogan}</span>
            </div>
          </div>

          {/* Multi-Page Navigation Bar */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-extrabold">
            {(['home', 'services', 'about', 'portfolio', 'blog', 'contact'] as const).map((tabKey) => {
              if (tabKey === 'services' && !sections.services) return null;
              if (tabKey === 'about' && !sections.about) return null;
              if (tabKey === 'portfolio' && (!sections.portfolio || !portfolio || portfolio.length === 0)) return null;
              if (tabKey === 'blog' && (!sections.blog || !blog || blog.length === 0)) return null;
              if (tabKey === 'contact' && !sections.contact) return null;
              
              const isActive = activeTab === tabKey;
              return (
                <button 
                  key={tabKey}
                  onClick={() => setActiveTab(tabKey)}
                  className={`py-1 border-b-2 transition-all ${
                    isActive ? 'font-extrabold' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                  style={{
                    borderColor: isActive ? palette.primary : 'transparent',
                    color: isActive ? palette.primary : undefined
                  }}
                >
                  {t[tabKey]}
                </button>
              );
            })}
          </nav>

          {/* Actions & Language Selector */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className={`flex items-center p-1 border text-xs font-bold ${
              config.layoutModel === 'minimal' ? 'rounded-md border-slate-300 dark:border-zinc-800' : 'rounded-xl'
            } ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-slate-100 border-slate-200'}`}>
              <Globe className="w-3.5 h-3.5 mx-1 opacity-60 hidden xs:inline-block" />
              {(['es', 'en', 'fr', 'de'] as AppLanguage[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setCurrentLang(lang)}
                  className={`px-1.5 py-0.5 uppercase text-[10px] sm:text-xs transition-all ${
                    config.layoutModel === 'minimal' ? 'rounded-sm' : 'rounded-lg'
                  } ${
                    currentLang === lang ? 'text-white shadow-xs font-extrabold' : 'opacity-60 hover:opacity-100'
                  }`}
                  style={{ backgroundColor: currentLang === lang ? palette.primary : undefined }}
                >
                  {lang}
                </button>
              ))}
            </div>

            <a
              href={`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 text-white text-xs font-extrabold shadow-lg transition-all transform hover:-translate-y-0.5 ${
                config.layoutModel === 'conversion' 
                  ? 'rounded-xl' 
                  : config.layoutModel === 'minimal'
                  ? 'rounded-md'
                  : 'rounded-2xl'
              }`}
              style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.chat}</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 border transition-colors ${
                config.layoutModel === 'minimal' ? 'rounded-md' : 'rounded-xl'
              } ${
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
            {(['home', 'services', 'about', 'portfolio', 'blog', 'contact'] as const).map((tabKey) => {
              if (tabKey === 'services' && !sections.services) return null;
              if (tabKey === 'about' && !sections.about) return null;
              if (tabKey === 'portfolio' && (!sections.portfolio || !portfolio || portfolio.length === 0)) return null;
              if (tabKey === 'blog' && (!sections.blog || !blog || blog.length === 0)) return null;
              if (tabKey === 'contact' && !sections.contact) return null;

              const isActive = activeTab === tabKey;
              return (
                <button 
                  key={tabKey}
                  onClick={() => { setActiveTab(tabKey); setMobileMenuOpen(false); }}
                  className="w-full text-left py-2 px-3 rounded-xl font-extrabold text-sm transition-all"
                  style={{
                    backgroundColor: isActive ? `${palette.primary}18` : undefined,
                    color: isActive ? palette.primary : undefined
                  }}
                >
                  {t[tabKey]}
                </button>
              );
            })}

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
            <section 
              className="relative py-16 md:py-24 overflow-hidden"
              style={{
                background: isDark 
                  ? `radial-gradient(ellipse 80% 60% at 50% 0%, ${palette.primary}20 0%, transparent 100%)` 
                  : `radial-gradient(ellipse 80% 60% at 50% 0%, ${palette.primary}0d 0%, transparent 100%)`
              }}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* MODEL 1: LUXURY STUDIO (Asymmetric grid + glass floating cards) */}
                {(config.layoutModel || 'luxury') === 'luxury' && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 space-y-6 text-left">
                      
                      {/* Top Trust Badge Row */}
                      <div className="flex flex-wrap items-center gap-3">
                        {aboutBadge && (
                          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-extrabold border shadow-sm badge-glow" style={{ backgroundColor: `${palette.primary}18`, borderColor: `${palette.primary}40`, color: palette.primary }}>
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>{aboutBadge}</span>
                          </div>
                        )}
                        <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-extrabold border" style={{ backgroundColor: `${palette.accent}18`, borderColor: `${palette.accent}40`, color: palette.accent }}>
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span>4.9/5 en Google Maps (+120 Reseñas)</span>
                        </div>
                      </div>

                      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12]">
                        {heroHeadline}
                      </h1>
                      <p className="text-base sm:text-lg opacity-85 leading-relaxed font-medium max-w-xl">
                        {heroSubheadline}
                      </p>

                      <div className="flex flex-wrap items-center gap-4 text-xs font-bold pt-1 opacity-95">
                        <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border" style={{ backgroundColor: `${palette.primary}15`, borderColor: `${palette.primary}30`, color: palette.primary }}>
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>Garantía de Satisfacción 100%</span>
                        </div>
                        <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border" style={{ backgroundColor: `${palette.accent}15`, borderColor: `${palette.accent}30`, color: palette.accent }}>
                          <Clock className="w-3.5 h-3.5" />
                          <span>Respuesta Rápida &lt; 15 min</span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                        <button onClick={() => triggerBooking('Consulta General')} className="w-full sm:w-auto px-9 py-4 rounded-2xl text-white text-sm font-extrabold shadow-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center space-x-2.5" style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}>
                          <span>{ctaText}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                        {secondaryCtaText && (
                          <button onClick={() => setActiveTab('services')} className={`w-full sm:w-auto px-8 py-4 rounded-2xl text-sm font-extrabold border transition-all ${isDark ? 'border-slate-800 hover:border-slate-700 bg-slate-900/80 hover:bg-slate-900 text-white' : 'border-slate-300 hover:border-slate-400 bg-white text-slate-900'}`}>
                            {secondaryCtaText}
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="lg:col-span-5 relative">
                      <div className="relative mx-auto max-w-md lg:max-w-none">
                        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-900/10 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                          <img src={heroImage} alt={name} referrerPolicy="no-referrer" className="w-full h-[400px] object-cover" />
                        </div>
                        <div className={`absolute -bottom-6 -left-6 p-4 rounded-2xl border shadow-2xl max-w-xs flex items-center space-x-3 backdrop-blur-xl ${isDark ? 'bg-slate-900/90 border-slate-800 text-white' : 'bg-white/90 border-slate-200 text-slate-900'}`}>
                          <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0">
                            <ShieldCheck className="w-6 h-6" />
                          </div>
                          <div>
                            <div className="font-extrabold text-sm">Atención Personalizada</div>
                            <div className="text-[11px] opacity-70 font-medium">{address ? address.split(',')[0] : 'Presupuestos transparentes sin compromiso'}</div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                )}

                {/* MODEL 2: MODERN TECH & SAAS (Centered hero + value pillars + photo hero) */}
                {config.layoutModel === 'modern' && (
                  <div className="text-center max-w-4xl mx-auto space-y-8">
                    {aboutBadge && (
                      <div className="inline-flex items-center space-x-2 px-5 py-2 rounded-full text-xs font-black uppercase tracking-wider border shadow-md badge-glow" style={{ backgroundColor: `${palette.primary}20`, borderColor: palette.primary, color: palette.accent }}>
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

                    {/* Business Real Image Showcase */}
                    {heroImage && (
                      <div className="mt-8 rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-900/10 max-w-3xl mx-auto max-h-[380px]">
                        <img src={heroImage} alt={name} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                      </div>
                    )}

                    {/* Honest Value Pillars (sin porcentajes ni cifras inventadas) */}
                    <div className={`mt-12 p-6 rounded-3xl border grid grid-cols-2 md:grid-cols-4 gap-6 backdrop-blur-xl ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'}`}>
                      <div>
                        <div className="text-lg font-black" style={{ color: palette.accent }}>Opiniones Reales</div>
                        <div className="text-xs opacity-70 font-semibold mt-1">Verificadas en Google</div>
                      </div>
                      <div>
                        <div className="text-lg font-black" style={{ color: palette.accent }}>Trato Directo</div>
                        <div className="text-xs opacity-70 font-semibold mt-1">Sin intermediarios</div>
                      </div>
                      <div>
                        <div className="text-lg font-black" style={{ color: palette.accent }}>Presupuesto Claro</div>
                        <div className="text-xs opacity-70 font-semibold mt-1">Cerrado por escrito</div>
                      </div>
                      <div>
                        <div className="text-lg font-black" style={{ color: palette.accent }}>Atención Cercana</div>
                        <div className="text-xs opacity-70 font-semibold mt-1">Cita previa y seguimiento</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* MODEL 3: BOUTIQUE MINIMAL */}
                {config.layoutModel === 'minimal' && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-left">
                      <span className="text-xs font-black uppercase tracking-widest block" style={{ color: palette.primary }}>
                        {aboutBadge || 'Estudio Profesional'}
                      </span>
                      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                        {heroHeadline}
                      </h1>
                      <div className="w-16 h-1 rounded-full" style={{ backgroundColor: palette.primary }}></div>
                      <p className="text-base opacity-80 leading-relaxed font-serif italic">
                        "{heroSubheadline}"
                      </p>
                      <div className="pt-4 flex items-center space-x-4">
                        <button onClick={() => triggerBooking('Consulta General')} className="px-8 py-3.5 rounded-xl text-white text-xs font-bold uppercase tracking-wider shadow-md flex items-center space-x-2" style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}>
                          <span>{ctaText}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-800/40">
                      <img src={heroImage} alt={name} referrerPolicy="no-referrer" className="w-full h-[420px] object-cover" />
                    </div>
                  </div>
                )}

                {/* MODEL 4: LEAD CONVERSION */}
                {config.layoutModel === 'conversion' && (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 space-y-6 text-left">
                      <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-black border" style={{ backgroundColor: `${palette.primary}18`, borderColor: `${palette.primary}40`, color: palette.primary }}>
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
                        <div className="flex items-center space-x-2" style={{ color: palette.primary }}><CheckCircle2 className="w-4 h-4" /><span>1ª Cita Gratuita</span></div>
                        <div className="flex items-center space-x-2" style={{ color: palette.primary }}><CheckCircle2 className="w-4 h-4" /><span>Reserva 100% Segura</span></div>
                      </div>
                    </div>

                    <div className="lg:col-span-5">
                      <div className={`p-8 rounded-3xl border shadow-2xl ${isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'} text-left space-y-4`}>
                        <div className="flex items-center justify-between border-b border-slate-800/40 pb-3">
                          <h3 className="font-extrabold text-base text-slate-900 dark:text-white">Solicitar Cita / Información</h3>
                          <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full border" style={{ backgroundColor: `${palette.primary}18`, borderColor: `${palette.primary}40`, color: palette.primary }}>Respuesta &lt; 15 min</span>
                        </div>
                        <form onSubmit={handleFormSubmit} className="space-y-3">
                          <div>
                            <label className="block text-[11px] font-bold opacity-80 mb-1">Nombre Completo</label>
                            <input type="text" required className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`} placeholder="Tu nombre..." />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold opacity-80 mb-1">Teléfono o WhatsApp</label>
                            <input type="text" required className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`} placeholder="+34 600 000 000" />
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold opacity-80 mb-1">Servicio de Interés</label>
                            <select className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-bold focus:outline-none ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}>
                              {services.map(s => <option key={s.id} value={s.title}>{s.title} ({s.price})</option>)}
                            </select>
                          </div>
                          <button type="submit" className="w-full py-3.5 rounded-xl text-white text-xs font-black uppercase tracking-wider shadow-lg mt-2 flex items-center justify-center space-x-1" style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}>
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

          {/* BENEFITS GRID WITH LAYOUT-MODEL SPECIFIC ARCHITECTURE */}
          {sections.benefits && benefits && benefits.length > 0 && (
            <section className={`py-16 border-t ${isDark ? 'border-slate-800/60 bg-slate-950/40' : 'border-slate-200 bg-slate-100/50'}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Luxury Benefits */}
                {(config.layoutModel || 'luxury') === 'luxury' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    {benefits.map((b, idx) => (
                      <div key={b.id} className="space-y-3 p-6 rounded-3xl border backdrop-blur-md" style={{ borderColor: `${palette.primary}35`, backgroundColor: isDark ? 'rgba(15, 23, 42, 0.5)' : 'rgba(255, 255, 255, 0.8)' }}>
                        <span className="font-serif font-black text-lg" style={{ color: palette.accent }}>✦ Ventaja 0{idx + 1}</span>
                        <h3 className="font-serif font-bold text-xl">{b.title}</h3>
                        <p className="text-xs opacity-80 leading-relaxed font-serif italic">{b.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Modern SaaS Benefits */}
                {config.layoutModel === 'modern' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((b) => (
                      <div key={b.id} className={`p-6 rounded-3xl border flex items-start space-x-4 shadow-xl backdrop-blur-xl studio-card-hover ${isDark ? 'bg-slate-900/80' : 'bg-white'}`} style={{ borderColor: `${palette.primary}40` }}>
                        <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-md" style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}>
                          <ShieldCheck className="w-6 h-6" />
                        </div>
                        <div className="text-left">
                          <h3 className="font-extrabold text-base mb-1" style={{ color: palette.primary }}>{b.title}</h3>
                          <p className="text-xs opacity-80 leading-relaxed">{b.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Minimal Benefits */}
                {config.layoutModel === 'minimal' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left divide-y md:divide-y-0 md:divide-x divide-slate-800/60 pt-4 md:pt-0">
                    {benefits.map((b) => (
                      <div key={b.id} className="md:px-6 space-y-2 pt-4 md:pt-0">
                        <h3 className="font-bold text-base tracking-tight">{b.title}</h3>
                        <p className="text-xs opacity-75 leading-relaxed">{b.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Conversion Benefits */}
                {config.layoutModel === 'conversion' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {benefits.map((b) => (
                      <div key={b.id} className={`p-6 rounded-2xl border-2 text-left flex items-start space-x-3.5 shadow-md ${isDark ? 'bg-slate-900' : 'bg-white'}`} style={{ borderColor: `${palette.primary}40` }}>
                        <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5" style={{ color: palette.primary }} />
                        <div>
                          <span className="text-[10px] font-black uppercase block mb-0.5" style={{ color: palette.primary }}>Garantía Verificada</span>
                          <h3 className="font-extrabold text-base mb-1">{b.title}</h3>
                          <p className="text-xs opacity-80 leading-relaxed">{b.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </section>
          )}

          {/* FEATURED SERVICES WITH LAYOUT-MODEL SPECIFIC ARCHITECTURE */}
          {sections.services && services.length > 0 && (
            <section className={`py-20 border-t ${isDark ? 'border-slate-800/60' : 'border-slate-200'}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 text-left">
                  <div>
                    <span className="text-xs font-black uppercase tracking-widest block mb-2" style={{ color: palette.primary }}>
                      {config.layoutModel === 'luxury' ? '✦ Catálogo de Autor' : config.layoutModel === 'minimal' ? 'Catálogo Seleccionado' : 'Prestaciones Destacadas'}
                    </span>
                    <h2 className={`text-3xl sm:text-4xl font-black ${config.layoutModel === 'luxury' ? 'font-serif' : ''}`}>
                      Servicios Principales
                    </h2>
                  </div>
                  <button onClick={() => setActiveTab('services')} className="text-xs font-extrabold hover:underline flex items-center space-x-1" style={{ color: palette.primary }}>
                    <span>Ver catálogo completo ({services.length})</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* ARCHITECTURE 1: LUXURY (Full-width Magazine Editorial Rows) */}
                {(config.layoutModel || 'luxury') === 'luxury' && (
                  <div className="space-y-6">
                    {services.slice(0, 3).map((s, idx) => (
                      <div key={s.id} className={`p-8 rounded-3xl border transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-8 text-left shadow-xl ${isDark ? 'bg-slate-900/60' : 'bg-white'}`} style={{ borderColor: `${palette.primary}35` }}>
                        {s.imageUrl && (
                          <div className="w-full md:w-56 h-40 rounded-2xl overflow-hidden shrink-0 shadow-md">
                            <img src={s.imageUrl} alt={s.title} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                          </div>
                        )}
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center space-x-3">
                            <span className="text-2xl font-serif font-black opacity-40">0{idx + 1}.</span>
                            <h3 className="text-2xl font-serif font-bold">{s.title}</h3>
                            {s.badge && <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase border" style={{ backgroundColor: `${palette.primary}20`, borderColor: `${palette.primary}40`, color: palette.primary }}>{s.badge}</span>}
                          </div>
                          <p className="text-sm opacity-80 leading-relaxed font-serif italic">{s.description}</p>
                        </div>
                        <div className="text-right shrink-0 flex flex-col items-end justify-center space-y-3">
                          <span className="text-2xl font-black font-serif" style={{ color: palette.accent }}>{s.price}</span>
                          <button onClick={() => triggerBooking(s.title, s.price)} className="px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white shadow-md" style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}>
                            Reservar
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* ARCHITECTURE 2: MODERN TECH & SAAS (3-Column Dark Glass Cards with Top Accent Glow) */}
                {config.layoutModel === 'modern' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.slice(0, 3).map((s) => (
                      <div key={s.id} className={`group rounded-3xl border overflow-hidden flex flex-col justify-between studio-card-hover shadow-2xl backdrop-blur-xl ${isDark ? 'bg-slate-900/80' : 'bg-white'}`} style={{ borderColor: `${palette.primary}40` }}>
                        <div>
                          {s.imageUrl && (
                            <div className="relative h-48 overflow-hidden">
                              <img src={s.imageUrl} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                              {s.badge && (
                                <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-black uppercase text-white shadow-md" style={{ backgroundColor: palette.primary }}>
                                  {s.badge}
                                </span>
                              )}
                            </div>
                          )}
                          <div className="p-6 text-left">
                            <h3 className="text-lg font-black mb-2">{s.title}</h3>
                            <p className="text-xs opacity-80 leading-relaxed mb-4">{s.description}</p>
                          </div>
                        </div>
                        <div className="p-6 pt-0 flex items-center justify-between border-t border-slate-800/40">
                          <span className="font-black text-base" style={{ color: palette.accent }}>{s.price}</span>
                          <button onClick={() => triggerBooking(s.title, s.price)} className="text-xs font-extrabold hover:underline flex items-center space-x-1" style={{ color: palette.primary }}>
                            <span>Solicitar</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* ARCHITECTURE 3: MINIMAL (Monochromatic Architectural Hairline List) */}
                {config.layoutModel === 'minimal' && (
                  <div className="divide-y divide-slate-800/60 text-left">
                    {services.slice(0, 3).map((s) => (
                      <div key={s.id} className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-opacity hover:opacity-80">
                        <div className="space-y-1">
                          <h3 className="text-xl font-bold">{s.title}</h3>
                          <p className="text-xs opacity-75 leading-relaxed max-w-xl">{s.description}</p>
                        </div>
                        <div className="flex items-center space-x-6 shrink-0">
                          <span className="font-mono text-sm font-extrabold opacity-90">{s.price}</span>
                          <button onClick={() => triggerBooking(s.title, s.price)} className="text-xs uppercase tracking-widest font-bold underline" style={{ color: palette.primary }}>
                            Consultar
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* ARCHITECTURE 4: CONVERSION (High-converting Direct Action Cards) */}
                {config.layoutModel === 'conversion' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.slice(0, 3).map((s) => (
                      <div key={s.id} className={`rounded-3xl border-2 overflow-hidden flex flex-col justify-between shadow-2xl text-left ${isDark ? 'bg-slate-900' : 'bg-white'}`} style={{ borderColor: `${palette.primary}40` }}>
                        {s.imageUrl && (
                          <img src={s.imageUrl} alt={s.title} className="w-full h-48 object-cover" />
                        )}
                        <div className="p-6 space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-black uppercase px-2.5 py-0.5 rounded-full border" style={{ backgroundColor: `${palette.primary}18`, borderColor: `${palette.primary}40`, color: palette.primary }}>1ª Valoración Gratis</span>
                            <span className="font-black text-lg" style={{ color: palette.primary }}>{s.price}</span>
                          </div>
                          <h3 className="text-lg font-extrabold">{s.title}</h3>
                          <p className="text-xs opacity-80 leading-relaxed">{s.description}</p>
                        </div>
                        <div className="p-6 pt-0 space-y-2">
                          <button onClick={() => triggerBooking(s.title, s.price)} className="w-full py-3 rounded-xl text-white text-xs font-black uppercase tracking-wider shadow-lg flex items-center justify-center space-x-1.5" style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}>
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Reservar Cita Ahora</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </section>
          )}

          {/* SPECIALIZED MODULE FOR RESTAURANT: CARTA DIGITAL & RESERVA DE MESA */}
          {config.industry === 'restaurant' && (
            <section className={`py-16 border-t ${isDark ? 'border-slate-800/60 bg-slate-950/80' : 'border-slate-200 bg-slate-100/40'}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Left Column: Motor de Reserva de Mesa */}
                  <div className="lg:col-span-6 space-y-6 text-left">
                    <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-black border" style={{ backgroundColor: `${palette.primary}18`, borderColor: `${palette.primary}40`, color: palette.primary }}>
                      <Utensils className="w-4 h-4" />
                      <span>Motor de Reserva de Mesa Online</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                      Reserva tu Mesa al Instante sin Esperas
                    </h2>
                    <p className="text-sm opacity-80 leading-relaxed">
                      Elige fecha, turno de comida/cena y número de comensales. Recibirás confirmación automática por WhatsApp y correo electrónico.
                    </p>

                    <form onSubmit={handleFormSubmit} className={`p-6 rounded-3xl border shadow-xl space-y-4 ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-bold opacity-80 mb-1">📅 Fecha de la Reserva</label>
                          <input 
                            type="date" 
                            required 
                            defaultValue={new Date().toISOString().split('T')[0]} 
                            className={`w-full px-3 py-2.5 rounded-xl border text-xs font-bold focus:outline-none ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`} 
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-bold opacity-80 mb-1">🕒 Hora / Turno</label>
                          <select 
                            value={reservaTime} 
                            onChange={(e) => setReservaTime(e.target.value)} 
                            className={`w-full px-3 py-2.5 rounded-xl border text-xs font-bold focus:outline-none ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                          >
                            <option value="13:30">13:30 h (Almuerzo)</option>
                            <option value="14:00">14:00 h (Almuerzo)</option>
                            <option value="14:30">14:30 h (Almuerzo)</option>
                            <option value="20:30">20:30 h (Cena)</option>
                            <option value="21:00">21:00 h (Cena)</option>
                            <option value="21:30">21:30 h (Cena)</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold opacity-80 mb-1">👥 Número de Comensales</label>
                        <select 
                          value={reservaGuests} 
                          onChange={(e) => setReservaGuests(Number(e.target.value))} 
                          className={`w-full px-3 py-2.5 rounded-xl border text-xs font-bold focus:outline-none ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`}
                        >
                          <option value={1}>1 Comensal</option>
                          <option value={2}>2 Comensales (Pareja)</option>
                          <option value={4}>4 Comensales (Mesa Estándar)</option>
                          <option value={6}>6 Comensales (Mesa Familiar)</option>
                          <option value={8}>8+ Comensales (Salón VIP / Evento)</option>
                        </select>
                      </div>

                      <button type="submit" className="w-full py-3.5 rounded-xl text-white text-xs font-black uppercase tracking-wider shadow-lg flex items-center justify-center space-x-2" style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}>
                        <Utensils className="w-4 h-4" />
                        <span>Confirmar Reserva de Mesa</span>
                      </button>
                    </form>
                  </div>

                  {/* Right Column: Destacados de la Carta */}
                  <div className="lg:col-span-6 space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800/40 pb-3">
                      <h3 className="text-xl font-extrabold">Especialidades Recomendadas del Chef</h3>
                      <button onClick={() => setActiveTab('services')} className="text-xs font-extrabold hover:underline" style={{ color: palette.primary }}>Ver Carta Completa &rarr;</button>
                    </div>

                    <div className="space-y-3">
                      {services.slice(0, 3).map((dish) => (
                        <div key={dish.id} className={`p-4 rounded-2xl border flex items-center gap-4 ${isDark ? 'bg-slate-900/90 border-slate-800' : 'bg-white border-slate-200'} shadow-md`}>
                          {dish.imageUrl && (
                            <img src={dish.imageUrl} alt={dish.title} className="w-20 h-20 rounded-xl object-cover shrink-0" />
                          )}
                          <div className="flex-1 text-left">
                            <div className="flex items-center justify-between">
                              <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">{dish.title}</h4>
                              <span className="font-black text-sm" style={{ color: palette.accent }}>{dish.price}</span>
                            </div>
                            <p className="text-xs opacity-75 line-clamp-2 mt-1">{dish.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </section>
          )}

          {/* SPECIALIZED MODULE FOR GYM: HORARIO SEMANAL DE CLASES */}
          {config.industry === 'gym' && (
            <section className={`py-16 border-t ${isDark ? 'border-slate-800/60 bg-slate-950/90' : 'border-slate-200 bg-slate-100/40'}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full text-xs font-black border mb-3" style={{ backgroundColor: `${palette.primary}18`, borderColor: `${palette.primary}40`, color: palette.primary }}>
                    <Dumbbell className="w-4 h-4" />
                    <span>Planificación Semanal Directa</span>
                  </div>
                  <h2 className="text-3xl font-extrabold">Horario Interactivo de Clases Dirigidas</h2>
                  <p className="text-sm opacity-75 mt-2">Selecciona el día de la semana y reserva tu plaza en Spinning, CrossFit, Yoga o HIIT.</p>
                </div>

                {/* Day Filter Tabs */}
                <div className="flex items-center justify-center space-x-2 mb-8 text-xs font-bold overflow-x-auto pb-2">
                  {(['lunes', 'martes', 'miercoles', 'jueves', 'viernes'] as const).map((day) => (
                    <button
                      key={day}
                      onClick={() => setActiveTimetableDay(day)}
                      className={`px-5 py-2.5 rounded-xl capitalize transition-all shrink-0 ${
                        activeTimetableDay === day 
                          ? 'text-white shadow-lg font-black' 
                          : isDark ? 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white' : 'bg-white border border-slate-300 text-slate-600 hover:bg-slate-100'
                      }`}
                      style={{ backgroundColor: activeTimetableDay === day ? palette.primary : undefined }}
                    >
                      {day}
                    </button>
                  ))}
                </div>

                {/* Class List Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { time: '09:00 - 10:00 h', title: activeTimetableDay === 'lunes' ? 'Spinning High Intensity' : activeTimetableDay === 'martes' ? 'Pilates Reformer Core' : 'HIIT Fat Burner 360', coach: 'Kevyn Miller', slots: '3 plazas libres' },
                    { time: '18:00 - 19:00 h', title: activeTimetableDay === 'lunes' ? 'CrossFit WOD Pro' : activeTimetableDay === 'jueves' ? 'Spinning Endurance' : 'BodyPump Tonificación', coach: 'Sandra Vega', slots: '5 plazas libres' },
                    { time: '19:30 - 20:30 h', title: activeTimetableDay === 'miercoles' ? 'Yoga Vinyasa & Mobility' : activeTimetableDay === 'jueves' ? 'Calistenia & Dominadas' : 'Powerlifting & Fuerza', coach: 'Carlos Ruiz', slots: 'Últimas 2 plazas' }
                  ].map((cls, idx) => (
                    <div key={idx} className={`p-6 rounded-3xl border flex items-center justify-between shadow-lg studio-card-hover ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
                      <div className="text-left space-y-1">
                        <span className="text-xs font-black flex items-center space-x-1" style={{ color: palette.primary }}>
                          <Clock className="w-3.5 h-3.5" />
                          <span>{cls.time}</span>
                        </span>
                        <h3 className="font-extrabold text-base text-slate-900 dark:text-white">{cls.title}</h3>
                        <div className="text-[11px] opacity-70 font-semibold">Coach: {cls.coach} • <span style={{ color: palette.accent }}>{cls.slots}</span></div>
                      </div>
                      <button onClick={() => triggerBooking(cls.title)} className="px-4 py-2.5 rounded-xl text-white text-xs font-extrabold shadow-md shrink-0" style={{ backgroundColor: palette.primary }}>
                        Reservar Plaza
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* METHODOLOGY: HOW WE WORK (4 PASOS) - LAYOUT SPECIFIC */}
          {sections.process !== false && (
            <section className={`py-16 border-t ${isDark ? 'border-slate-800/60 bg-slate-950/60' : 'border-slate-200 bg-slate-100/40'}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <span className="text-xs font-extrabold uppercase tracking-wider block mb-2" style={{ color: palette.primary }}>
                  {config.layoutModel === 'luxury' ? '✦ Metodología de Autor' : 'Proceso Garantizado'}
                </span>
                <h2 className={`text-3xl font-extrabold mb-12 ${config.layoutModel === 'luxury' ? 'font-serif' : ''}`}>
                  Cómo Trabajamos Con Nuestros Clientes
                </h2>

                {/* Luxury Process Architecture */}
                {(config.layoutModel || 'luxury') === 'luxury' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
                    {[
                      { step: '01', title: 'Diagnóstico Editorial', desc: 'Análisis detallado sin compromiso en sesión privada.' },
                      { step: '02', title: 'Diseño Personalizado', desc: 'Plan a medida con calendario y presupuesto estipulado.' },
                      { step: '03', title: 'Ejecución de Precisión', desc: 'Prestación técnica directa por especialistas de firma.' },
                      { step: '04', title: 'Garantía & Excelencia', desc: 'Seguimiento continuo e informe detallado post-servicio.' }
                    ].map((p, idx) => (
                      <div key={idx} className="p-8 rounded-3xl border bg-slate-900/60 space-y-3" style={{ borderColor: `${palette.primary}30` }}>
                        <span className="text-4xl font-serif font-black block" style={{ color: palette.accent }}>{p.step}.</span>
                        <h3 className="font-serif font-bold text-lg">{p.title}</h3>
                        <p className="text-xs opacity-80 leading-relaxed font-serif italic">{p.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Modern Tech Process Architecture */}
                {config.layoutModel === 'modern' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                    {[
                      { step: 'PASO 01', title: 'Diagnóstico & Cita', desc: 'Evaluación rápida sin compromiso.' },
                      { step: 'PASO 02', title: 'Plan Personalizado', desc: 'Propuesta transparente y presupuesto cerrado.' },
                      { step: 'PASO 03', title: 'Ejecución Pro', desc: 'Ejecutado por especialistas de alto nivel.' },
                      { step: 'PASO 04', title: 'Soporte Continuo', desc: 'Garantía por escrito y asistencia 24/7.' }
                    ].map((p, idx) => (
                      <div key={idx} className="p-6 rounded-3xl border bg-slate-900/80 backdrop-blur-xl studio-card-hover space-y-2" style={{ borderColor: `${palette.primary}40` }}>
                        <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase border inline-block" style={{ backgroundColor: `${palette.primary}20`, borderColor: `${palette.primary}40`, color: palette.primary }}>{p.step}</span>
                        <h3 className="font-extrabold text-base text-white">{p.title}</h3>
                        <p className="text-xs opacity-75 leading-relaxed">{p.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Minimal Process Architecture */}
                {config.layoutModel === 'minimal' && (
                  <div className="divide-y divide-slate-800/60 text-left">
                    {[
                      { step: '01', title: 'Diagnóstico & Consulta', desc: 'Análisis minucioso sin compromiso.' },
                      { step: '02', title: 'Definición de Hoja de Ruta', desc: 'Plan cerrado de trabajo y calendario de entrega.' },
                      { step: '03', title: 'Desarrollo Especializado', desc: 'Ejecución con estándares de alta calidad.' },
                      { step: '04', title: 'Revisión & Garantía', desc: 'Verificación final y entrega de documentación.' }
                    ].map((p, idx) => (
                      <div key={idx} className="py-6 flex items-center justify-between gap-6">
                        <div className="flex items-center space-x-6">
                          <span className="text-xl font-mono opacity-50 font-bold">{p.step}</span>
                          <div>
                            <h3 className="font-bold text-base">{p.title}</h3>
                            <p className="text-xs opacity-75 leading-relaxed">{p.desc}</p>
                          </div>
                        </div>
                        <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: palette.primary }} />
                      </div>
                    ))}
                  </div>
                )}

                {/* Conversion Process Architecture */}
                {config.layoutModel === 'conversion' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                    {[
                      { step: '1', title: 'Reserva Tu Cita', desc: 'Elige fecha y hora en 30 segundos.' },
                      { step: '2', title: 'Diagnóstico Gratis', desc: '1ª consulta de valoración 100% gratuita.' },
                      { step: '3', title: 'Tratamiento Pro', desc: 'Atención personalizada inmediata.' },
                      { step: '4', title: 'Garantía 100%', desc: 'Respaldado por garantía por escrito.' }
                    ].map((p, idx) => (
                      <div key={idx} className={`p-6 rounded-3xl border-2 text-left space-y-2 shadow-lg ${isDark ? 'bg-slate-900' : 'bg-white'}`} style={{ borderColor: `${palette.primary}40` }}>
                        <div className="w-9 h-9 rounded-full text-white font-black text-sm flex items-center justify-center shadow-md" style={{ backgroundColor: palette.primary }}>{p.step}</div>
                        <h3 className="font-extrabold text-base">{p.title}</h3>
                        <p className="text-xs opacity-80 leading-relaxed">{p.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </section>
          )}

          {/* TESTIMONIALS WITH LAYOUT-MODEL SPECIFIC ARCHITECTURE */}
          {sections.testimonials && testimonials && testimonials.length > 0 && (
            <section className={`py-20 border-t ${isDark ? 'border-slate-800/60' : 'border-slate-200'}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-12">
                  <span className="text-xs font-extrabold uppercase tracking-wider block mb-2" style={{ color: palette.primary }}>Reputación Verificada</span>
                  <h2 className="text-3xl font-extrabold mb-3">Lo que Opinan Nuestros Clientes</h2>
                  <p className="text-sm opacity-75">Reseñas de pacientes y clientes reales con verificación oficial.</p>
                </div>

                {/* Luxury Testimonials Spotlight */}
                {(config.layoutModel || 'luxury') === 'luxury' && (
                  <div className="space-y-8">
                    <div className="p-10 rounded-3xl border bg-slate-900/80 backdrop-blur-xl text-center space-y-6 max-w-4xl mx-auto shadow-2xl" style={{ borderColor: `${palette.primary}40` }}>
                      <div className="flex justify-center space-x-1" style={{ color: palette.accent }}>
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                      </div>
                      <blockquote className="text-xl sm:text-2xl font-serif italic opacity-95 leading-relaxed">
                        "{testimonials[0]?.comment}"
                      </blockquote>
                      <div className="flex items-center justify-center space-x-4 pt-2">
                        {testimonials[0]?.avatar && testimonials[0]?.avatar.includes('googleusercontent.com') ? (
                          <img src={testimonials[0]?.avatar} alt={testimonials[0]?.name} referrerPolicy="no-referrer" className="w-14 h-14 rounded-full object-cover border-2 shadow-md" style={{ borderColor: palette.primary }} />
                        ) : (
                          <div className="w-14 h-14 rounded-full flex items-center justify-center font-serif font-black text-lg text-white shadow-md shrink-0" style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}>
                            {(testimonials[0]?.name || 'C').trim().charAt(0).toUpperCase()}
                          </div>
                        )}
                        <div className="text-left">
                          <div className="font-serif font-bold text-lg">{testimonials[0]?.name}</div>
                          <div className="text-xs opacity-70 font-serif italic">{testimonials[0]?.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Modern Tech Testimonials Grid */}
                {config.layoutModel === 'modern' && (
                  <div>
                    <div className={`max-w-xl mx-auto p-4 mb-10 rounded-2xl border flex items-center justify-between text-xs font-extrabold ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'}`}>
                      <div className="flex items-center space-x-2">
                        <span className="font-black text-base" style={{ color: palette.accent }}>⭐ 4.9 / 5</span>
                        <span className="opacity-80">en Google Reviews</span>
                      </div>
                      <span className="px-3 py-1 rounded-full border uppercase text-[10px]" style={{ backgroundColor: `${palette.primary}18`, borderColor: `${palette.primary}40`, color: palette.primary }}>100% Verificadas</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {testimonials.map((tItem) => (
                        <div key={tItem.id} className={`p-8 rounded-3xl border shadow-xl backdrop-blur-xl studio-card-hover ${isDark ? 'bg-slate-900/80' : 'bg-white'}`} style={{ borderColor: `${palette.primary}35` }}>
                          <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-1" style={{ color: palette.accent }}>
                              {[...Array(tItem.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                              ))}
                            </div>
                            <span className="text-[10px] font-extrabold uppercase border px-2.5 py-1 rounded-full" style={{ backgroundColor: `${palette.primary}15`, borderColor: `${palette.primary}30`, color: palette.primary }}>Reseña Verificada</span>
                          </div>
                          <p className="text-sm sm:text-base italic mb-6 leading-relaxed opacity-90 text-left">"{tItem.comment}"</p>
                          <div className="flex items-center space-x-4">
                            {tItem.avatar && tItem.avatar.includes('googleusercontent.com') ? (
                              <img src={tItem.avatar} alt={tItem.name} referrerPolicy="no-referrer" className="w-12 h-12 rounded-full object-cover border-2" style={{ borderColor: palette.primary }} />
                            ) : (
                              <div className="w-12 h-12 rounded-full flex items-center justify-center font-black text-base text-white shadow-sm shrink-0" style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}>
                                {(tItem.name || 'C').trim().charAt(0).toUpperCase()}
                              </div>
                            )}
                            <div className="text-left">
                              <div className="font-extrabold text-sm">{tItem.name}</div>
                              <div className="text-xs opacity-60 font-semibold">{tItem.role}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Minimal Testimonials */}
                {config.layoutModel === 'minimal' && (
                  <div className="divide-y divide-slate-800/60 text-left max-w-4xl mx-auto">
                    {testimonials.map((tItem) => (
                      <div key={tItem.id} className="py-8 space-y-4">
                        <p className="text-lg font-serif italic opacity-90 leading-relaxed">"{tItem.comment}"</p>
                        <div className="flex items-center space-x-3 text-xs opacity-75 font-semibold">
                          <span className="font-bold">{tItem.name}</span>
                          <span>—</span>
                          <span>{tItem.role}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Conversion Testimonials */}
                {config.layoutModel === 'conversion' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((tItem) => (
                      <div key={tItem.id} className={`p-8 rounded-3xl border-2 text-left shadow-xl ${isDark ? 'bg-slate-900' : 'bg-white'}`} style={{ borderColor: `${palette.primary}40` }}>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-1" style={{ color: palette.accent }}>
                            {[...Array(tItem.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                          </div>
                          <span className="text-[10px] font-black uppercase border px-3 py-1 rounded-full" style={{ backgroundColor: `${palette.primary}18`, borderColor: `${palette.primary}40`, color: palette.primary }}>Cliente Verificado</span>
                        </div>
                        <p className="text-sm font-medium mb-6 opacity-90">"{tItem.comment}"</p>
                        <div className="flex items-center space-x-3 border-t border-slate-800/40 pt-4">
                          {tItem.avatar && tItem.avatar.includes('googleusercontent.com') ? (
                            <img src={tItem.avatar} alt={tItem.name} referrerPolicy="no-referrer" className="w-10 h-10 rounded-full object-cover" />
                          ) : (
                            <div className="w-10 h-10 rounded-full flex items-center justify-center font-black text-sm text-white shadow-sm shrink-0" style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}>
                              {(tItem.name || 'C').trim().charAt(0).toUpperCase()}
                            </div>
                          )}
                          <div>
                            <div className="font-black text-sm">{tItem.name}</div>
                            <div className="text-[11px] font-bold" style={{ color: palette.primary }}>{tItem.role}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            </section>
          )}

          {/* FAQ ACCORDION ON HOME WITH SEARCH FILTER */}
          {sections.faq && faqs && faqs.length > 0 && (
            <section className={`py-20 border-t ${isDark ? 'border-slate-800/60' : 'border-slate-200'}`}>
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-8">
                  <span className="text-xs font-extrabold uppercase tracking-wider block mb-2" style={{ color: palette.primary }}>Dudas Resueltas</span>
                  <h2 className={`text-3xl font-extrabold mb-4 ${config.layoutModel === 'luxury' ? 'font-serif' : ''}`}>Preguntas Frecuentes</h2>
                  
                  {/* Search FAQs Input */}
                  <div className="max-w-md mx-auto relative">
                    <input 
                      type="text" 
                      value={faqSearchQuery}
                      onChange={(e) => setFaqSearchQuery(e.target.value)}
                      placeholder="Buscar duda (ej: precios, cita, garantía)..."
                      className={`w-full px-4 py-3 rounded-2xl border text-xs font-bold focus:outline-none transition-all ${
                        isDark ? 'bg-slate-900 border-slate-800 text-white' : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                    {faqSearchQuery && (
                      <button onClick={() => setFaqSearchQuery('')} className="absolute right-3 top-3 text-xs opacity-60 hover:opacity-100">✕</button>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  {filteredFaqs.map((faq) => {
                    const isOpen = openFaq === faq.id;
                    return (
                      <div key={faq.id} className={`rounded-2xl border transition-all ${isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200'}`}>
                        <button onClick={() => setOpenFaq(isOpen ? null : faq.id)} className="w-full p-6 text-left flex items-center justify-between font-extrabold text-sm sm:text-base focus:outline-none">
                          <span className={config.layoutModel === 'luxury' ? 'font-serif' : ''}>{faq.question}</span>
                          {isOpen ? <ChevronUp className="w-5 h-5" style={{ color: palette.primary }} /> : <ChevronDown className="w-5 h-5 opacity-60" />}
                        </button>
                        {isOpen && <div className="px-6 pb-6 text-sm opacity-80 leading-relaxed border-t pt-4 border-slate-800/40">{faq.answer}</div>}
                      </div>
                    );
                  })}
                  {filteredFaqs.length === 0 && (
                    <div className="text-center py-8 opacity-60 text-xs font-bold">No se encontraron preguntas para "{faqSearchQuery}".</div>
                  )}
                </div>

                {config.layoutModel === 'conversion' && (
                  <div className="mt-8 p-6 rounded-2xl border text-center flex flex-col sm:flex-row items-center justify-between gap-4" style={{ backgroundColor: `${palette.primary}12`, borderColor: `${palette.primary}30` }}>
                    <span className="text-xs font-extrabold" style={{ color: palette.primary }}>¿Tienes alguna otra consulta urgente?</span>
                    <button onClick={() => triggerBooking('Consulta General')} className="px-6 py-2.5 rounded-xl text-white text-xs font-black uppercase tracking-wider shadow-md" style={{ backgroundColor: palette.primary }}>
                      Hablar Con Un Asesor
                    </button>
                  </div>
                )}

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
                  <img src={service.imageUrl || heroImage} alt={service.title} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
                </div>

                {/* Service Details */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="flex items-center space-x-3">
                    {service.badge && <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase text-white shadow-xs" style={{ background: palette.primary }}>{service.badge}</span>}
                    <h2 className="text-2xl font-extrabold">{service.title}</h2>
                  </div>
                   <div className="grid grid-cols-2 gap-3 text-xs font-bold opacity-80 pt-2">
                    <div className="flex items-center space-x-2" style={{ color: palette.primary }}><CheckCircle2 className="w-4 h-4" /><span>Primera valoración gratuita</span></div>
                    <div className="flex items-center space-x-2" style={{ color: palette.primary }}><CheckCircle2 className="w-4 h-4" /><span>Garantía escrita 100%</span></div>
                  </div>
                </div>

                {/* Price & Booking Actions */}
                <div className="lg:col-span-3 p-6 rounded-2xl bg-slate-950/40 border border-slate-800 text-center flex flex-col justify-center items-center">
                  <span className="text-xs opacity-60 font-semibold block mb-1">Precio Transparente</span>
                  <span className="text-3xl font-black mb-4" style={{ color: palette.accent }}>{service.price}</span>
                  
                  <div className="space-y-2.5 w-full">
                    <button onClick={() => triggerBooking(service.title, service.price)} className="w-full py-3 rounded-xl text-white text-xs font-extrabold shadow-md" style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}>Solicitar Cita / Info</button>
                    <button onClick={() => triggerPayment(service.title, service.price)} className="w-full py-3 rounded-xl text-white text-xs font-extrabold flex items-center justify-center gap-1.5 shadow-md" style={{ backgroundColor: palette.primary }}><CreditCard className="w-4 h-4" /><span>Pagar Online</span></button>
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
                  <div key={idx} className={`p-6 rounded-2xl border text-center font-extrabold text-xs sm:text-sm ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'}`} style={{ color: palette.primary, borderColor: `${palette.primary}30` }}>
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
                    <img src={member.imageUrl} alt={member.name} referrerPolicy="no-referrer" className="w-28 h-28 rounded-full mx-auto object-cover mb-4 border-4 shadow-md" style={{ borderColor: palette.primary }} />
                    <h3 className="font-extrabold text-lg">{member.name}</h3>
                    <span className="text-xs opacity-80 font-bold uppercase tracking-wider block mb-3" style={{ color: palette.primary }}>{member.role}</span>
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
                  <img src={project.imageUrl} alt={project.title} referrerPolicy="no-referrer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
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
            <span className="text-xs font-extrabold uppercase tracking-wider block mb-2" style={{ color: palette.primary }}>Recursos & Guías</span>
            <h1 className="text-4xl font-extrabold mb-4">Blog & Novedades del Sector</h1>
            <p className="text-base opacity-75">Artículos de estrategia, investigación y tendencias redactadas por nuestros especialistas.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blog?.map((article) => (
              <article key={article.id} className={`rounded-3xl border overflow-hidden ${isDark ? 'bg-slate-900/70 border-slate-800' : 'bg-white border-slate-200'} shadow-xl flex flex-col justify-between`}>
                <div>
                  <img src={article.imageUrl} alt={article.title} referrerPolicy="no-referrer" className="w-full h-52 object-cover" />
                  <div className="p-8">
                    <span className="text-xs font-extrabold block mb-2" style={{ color: palette.primary }}>{article.date} • {article.category} • {article.readTime}</span>
                    <h2 className="text-2xl font-extrabold mb-3">{article.title}</h2>
                    <p className="text-xs sm:text-sm opacity-80 leading-relaxed mb-6">{article.excerpt}</p>
                  </div>
                </div>
                <div className="p-8 pt-0">
                  <button onClick={() => setSelectedArticle(article)} className="text-xs font-extrabold hover:underline flex items-center space-x-1" style={{ color: palette.primary }}>
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
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md" style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}><Phone className="w-5 h-5" /></div>
                  <div><div className="text-xs opacity-60 font-semibold">Teléfono Directo</div><div className="font-extrabold text-base">{phone}</div></div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md" style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}><Mail className="w-5 h-5" /></div>
                  <div><div className="text-xs opacity-60 font-semibold">Email Corporativo</div><div className="font-extrabold text-base">{email}</div></div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md" style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}><MapPin className="w-5 h-5" /></div>
                  <div><div className="text-xs opacity-60 font-semibold">Dirección Física</div><div className="font-extrabold text-base">{address}</div></div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md" style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}><Clock className="w-5 h-5" /></div>
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
                  <input type="text" required className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`} placeholder="Tu nombre..." />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5 opacity-80">Email o Teléfono de Contacto</label>
                  <input type="text" required className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`} placeholder="ejemplo@correo.com" />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5 opacity-80">Mensaje / Consulta</label>
                  <textarea rows={4} required className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none ${isDark ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-300 text-slate-900'}`} placeholder="¿En qué te podemos ayudar?"></textarea>
                </div>
                <button type="submit" className="w-full py-4 rounded-xl text-white font-extrabold text-sm shadow-lg" style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}>Enviar Consulta</button>
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
            <span className="text-xs font-extrabold block mb-2" style={{ color: palette.primary }}>{selectedArticle.date} • {selectedArticle.category}</span>
            <h2 className="text-2xl font-extrabold mb-4">{selectedArticle.title}</h2>
            <img src={selectedArticle.imageUrl} alt={selectedArticle.title} referrerPolicy="no-referrer" className="w-full h-64 object-cover rounded-2xl mb-6" />
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
            <p className="text-xs text-slate-500 mb-6">Servicio: <span className="font-bold" style={{ color: palette.primary }}>{selectedServiceTitle}</span> ({selectedServicePrice})</p>
            {paymentDone ? (
              <div className="p-6 rounded-2xl text-center font-extrabold" style={{ backgroundColor: `${palette.primary}18`, color: palette.primary }}>¡Pago Confirmado Con Éxito!</div>
            ) : (
              <form onSubmit={handlePayComplete} className="space-y-4">
                <input type="text" required className="w-full px-3 py-2.5 rounded-xl border text-xs" placeholder="Titular de la tarjeta" />
                <input type="text" required className="w-full px-3 py-2.5 rounded-xl border text-xs" placeholder="Número de tarjeta (**** **** **** ****)" />
                <button type="submit" className="w-full py-3.5 rounded-xl text-white font-extrabold text-xs shadow-md" style={{ backgroundColor: palette.primary }}>Confirmar Pago ({selectedServicePrice})</button>
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
              <button type="submit" className="w-full py-3.5 rounded-xl text-white font-extrabold text-xs shadow-md" style={{ backgroundColor: palette.primary }}>Confirmar Reserva</button>
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
            <ShieldCheck className="w-5 h-5 shrink-0" style={{ color: palette.primary }} />
            <span className="opacity-85 font-medium">Utilizamos cookies esenciales para garantizar el correcto funcionamiento del sitio.</span>
          </div>
          <button
            onClick={() => setShowCookieBanner(false)}
            className="w-full sm:w-auto px-4 py-2 rounded-xl text-white font-extrabold text-xs shadow-md shrink-0"
            style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}
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
          <Phone className="w-4 h-4" style={{ color: palette.primary }} />
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
