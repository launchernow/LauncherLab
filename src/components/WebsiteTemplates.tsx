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
  ChevronUp
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
    es: { home: 'Inicio', services: 'Servicios', about: 'Nosotros', portfolio: 'Portfolio', blog: 'Blog & Recursos', contact: 'Contacto', chat: 'Contacto Directo' },
    en: { home: 'Home', services: 'Services', about: 'About Us', portfolio: 'Portfolio', blog: 'Blog & Articles', contact: 'Contact', chat: 'Direct Chat' },
    fr: { home: 'Accueil', services: 'Services', about: 'À Propos', portfolio: 'Portfolio', blog: 'Blog & Articles', contact: 'Contact', chat: 'Chat Direct' },
    de: { home: 'Start', services: 'Leistungen', about: 'Über uns', portfolio: 'Portfolio', blog: 'Blog & Berichte', contact: 'Kontakt', chat: 'Direkt-Chat' }
  }[currentLang];

  return (
    <div 
      className={`min-h-screen transition-colors duration-300 ${fontClass} ${
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      
      {/* Header with Multi-Page Navigation */}
      <header 
        className={`sticky top-0 z-40 backdrop-blur-md border-b transition-all ${
          isDark ? 'bg-slate-950/80 border-slate-800/80' : 'bg-white/80 border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg"
              style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}
            >
              {name ? name.charAt(0) : 'W'}
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-tight block leading-none">{name}</span>
              <span className="text-xs opacity-70 font-medium">{slogan}</span>
            </div>
          </div>

          {/* Multi-Page Tabs */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-bold">
            <button 
              onClick={() => setActiveTab('home')}
              className={`py-1 border-b-2 transition-all ${activeTab === 'home' ? 'border-sky-500 text-sky-400' : 'border-transparent hover:opacity-75'}`}
            >
              {t.home}
            </button>
            {sections.services && (
              <button 
                onClick={() => setActiveTab('services')}
                className={`py-1 border-b-2 transition-all ${activeTab === 'services' ? 'border-sky-500 text-sky-400' : 'border-transparent hover:opacity-75'}`}
              >
                {t.services}
              </button>
            )}
            {sections.about && (
              <button 
                onClick={() => setActiveTab('about')}
                className={`py-1 border-b-2 transition-all ${activeTab === 'about' ? 'border-sky-500 text-sky-400' : 'border-transparent hover:opacity-75'}`}
              >
                {t.about}
              </button>
            )}
            {sections.portfolio && portfolio && portfolio.length > 0 && (
              <button 
                onClick={() => setActiveTab('portfolio')}
                className={`py-1 border-b-2 transition-all ${activeTab === 'portfolio' ? 'border-sky-500 text-sky-400' : 'border-transparent hover:opacity-75'}`}
              >
                {t.portfolio}
              </button>
            )}
            {sections.blog && blog && blog.length > 0 && (
              <button 
                onClick={() => setActiveTab('blog')}
                className={`py-1 border-b-2 transition-all ${activeTab === 'blog' ? 'border-sky-500 text-sky-400' : 'border-transparent hover:opacity-75'}`}
              >
                {t.blog}
              </button>
            )}
            {sections.contact && (
              <button 
                onClick={() => setActiveTab('contact')}
                className={`py-1 border-b-2 transition-all ${activeTab === 'contact' ? 'border-sky-500 text-sky-400' : 'border-transparent hover:opacity-75'}`}
              >
                {t.contact}
              </button>
            )}
          </nav>

          <div className="flex items-center space-x-3">
            <div className="flex items-center bg-slate-900/10 p-1 rounded-xl border border-slate-700/30 text-xs font-bold">
              <Globe className="w-3.5 h-3.5 mx-1.5 opacity-60" />
              {(['es', 'en', 'fr', 'de'] as AppLanguage[]).map((lang) => (
                <button
                  key={lang}
                  onClick={() => setCurrentLang(lang)}
                  className={`px-2 py-0.5 rounded-lg uppercase ${
                    currentLang === lang ? 'bg-sky-600 text-white shadow-sm' : 'opacity-60 hover:opacity-100'
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
              className="hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-white text-xs font-bold shadow-lg transition-all transform hover:scale-105"
              style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}
            >
              <MessageSquare className="w-4 h-4" />
              <span>{t.chat}</span>
            </a>
          </div>
        </div>
      </header>

      {/* PAGE 1: HOME */}
      {activeTab === 'home' && (
        <main>
          {sections.hero && (
            <section className="relative py-20 md:py-32 overflow-hidden">
              <div 
                className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
                style={{ background: palette.primary }}
              />

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                {aboutBadge && (
                  <div 
                    className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6 border shadow-sm"
                    style={{
                      backgroundColor: `${palette.primary}15`,
                      borderColor: `${palette.primary}40`,
                      color: palette.primary
                    }}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{aboutBadge}</span>
                  </div>
                )}

                <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 max-w-4xl mx-auto leading-[1.15]">
                  {heroHeadline}
                </h1>

                <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-80 leading-relaxed font-normal">
                  {heroSubheadline}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={() => triggerBooking('Consulta General')}
                    className="w-full sm:w-auto px-8 py-4 rounded-full text-white text-sm font-bold shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center space-x-2"
                    style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}
                  >
                    <span>{ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {secondaryCtaText && (
                    <button
                      onClick={() => setActiveTab('services')}
                      className={`w-full sm:w-auto px-8 py-4 rounded-full text-sm font-bold border transition-all ${
                        isDark ? 'border-slate-800 hover:border-slate-700 bg-slate-900/50' : 'border-slate-300 hover:border-slate-400 bg-white'
                      }`}
                    >
                      {secondaryCtaText}
                    </button>
                  )}
                </div>
              </div>
            </section>
          )}

          {/* Benefits Grid */}
          {sections.benefits && benefits && benefits.length > 0 && (
            <section className={`py-16 border-t ${isDark ? 'border-slate-800/60' : 'border-slate-200'}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {benefits.map(b => (
                    <div key={b.id} className={`p-6 rounded-2xl border flex items-start space-x-4 ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}>
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 shadow-md" style={{ background: `linear-gradient(135deg, ${palette.primary}, ${palette.accent})` }}>
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-bold text-base mb-1">{b.title}</h3>
                        <p className="text-xs opacity-75 leading-relaxed">{b.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Featured Services */}
          {sections.services && services.length > 0 && (
            <section className={`py-20 border-t ${isDark ? 'border-slate-800/60' : 'border-slate-200'}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-12">
                  <div>
                    <h2 className="text-3xl font-extrabold">Servicios Destacados</h2>
                    <p className="text-sm opacity-75 mt-1">Soluciones diseñadas para tus necesidades.</p>
                  </div>
                  <button onClick={() => setActiveTab('services')} className="text-xs font-bold text-sky-400 hover:underline">Ver Todos los Servicios &rarr;</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {services.slice(0, 3).map((s) => (
                    <div key={s.id} className={`p-6 rounded-3xl border flex flex-col justify-between ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}>
                      <div>
                        <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                        <p className="text-xs opacity-75 mb-4">{s.description}</p>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-slate-800/40">
                        <span className="font-black text-sky-400 text-base">{s.price}</span>
                        <button onClick={() => triggerBooking(s.title, s.price)} className="text-xs font-bold text-sky-400 hover:underline">Reservar &rarr;</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Testimonials on Home */}
          {sections.testimonials && testimonials && testimonials.length > 0 && (
            <section className={`py-20 border-t ${isDark ? 'border-slate-800/60' : 'border-slate-200'}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <h2 className="text-3xl font-extrabold mb-4">Lo que Opinan Nuestros Clientes</h2>
                  <p className="text-sm opacity-75">Reseñas reales verificadas de nuestros clientes.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {testimonials.map((tItem) => (
                    <div key={tItem.id} className={`p-8 rounded-3xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}>
                      <div className="flex items-center space-x-1 text-amber-400 mb-4">
                        {[...Array(tItem.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <p className="text-sm sm:text-base italic mb-6 leading-relaxed opacity-90">"{tItem.comment}"</p>
                      <div className="flex items-center space-x-4">
                        <img src={tItem.avatar} alt={tItem.name} className="w-12 h-12 rounded-full object-cover border-2" style={{ borderColor: palette.primary }} />
                        <div>
                          <div className="font-bold text-sm">{tItem.name}</div>
                          <div className="text-xs opacity-60">{tItem.role}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* FAQ Accordion on Home */}
          {sections.faq && faqs && faqs.length > 0 && (
            <section className={`py-20 border-t ${isDark ? 'border-slate-800/60' : 'border-slate-200'}`}>
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-extrabold text-center mb-12">Preguntas Frecuentes</h2>
                <div className="space-y-4">
                  {faqs.map((faq) => {
                    const isOpen = openFaq === faq.id;
                    return (
                      <div key={faq.id} className={`rounded-2xl border transition-all ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}>
                        <button onClick={() => setOpenFaq(isOpen ? null : faq.id)} className="w-full p-6 text-left flex items-center justify-between font-bold text-sm sm:text-base focus:outline-none">
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

      {/* PAGE 2: SERVICES (DETAILED DEEP PAGE) */}
      {activeTab === 'services' && (
        <main className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider block mb-2" style={{ color: palette.primary }}>Catálogo Completo</span>
            <h1 className="text-4xl font-extrabold mb-4">Servicios & Soluciones Especializadas</h1>
            <p className="text-base opacity-75">Conoce a fondo cada uno de nuestros servicios, la metodología de trabajo y los beneficios de contratar con {name}.</p>
          </div>

          <div className="space-y-8">
            {services.map((service) => (
              <div key={service.id} className={`p-8 rounded-3xl border ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'} shadow-lg grid grid-cols-1 lg:grid-cols-3 gap-8 items-center`}>
                <div className="lg:col-span-2">
                  <div className="flex items-center space-x-3 mb-3">
                    {service.badge && <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase text-white" style={{ background: palette.primary }}>{service.badge}</span>}
                    <h2 className="text-2xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-sm opacity-80 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-xs font-semibold opacity-75">
                    <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /><span>Asesoría inicial incluida</span></div>
                    <div className="flex items-center space-x-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /><span>Garantía de satisfacción</span></div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-slate-950/40 border border-slate-800 text-center flex flex-col justify-center items-center">
                  <span className="text-xs opacity-60 block mb-1">Inversión Estimada</span>
                  <span className="text-3xl font-black mb-4" style={{ color: palette.accent }}>{service.price}</span>
                  
                  <div className="space-y-2 w-full">
                    <button onClick={() => triggerBooking(service.title, service.price)} className="w-full py-3 rounded-xl text-white text-xs font-bold custom-gradient-btn">Solicitar Cita</button>
                    <button onClick={() => triggerPayment(service.title, service.price)} className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-1.5"><CreditCard className="w-4 h-4" /><span>Pagar Online</span></button>
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
            <span className="text-xs font-bold uppercase tracking-wider block mb-2" style={{ color: palette.primary }}>Conócenos</span>
            <h1 className="text-4xl font-extrabold mb-4">{aboutTitle}</h1>
            <p className="text-base opacity-75 leading-relaxed">{aboutText}</p>
          </div>

          {aboutHistory && (
            <div className={`p-8 rounded-3xl border mb-16 ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}>
              <h2 className="text-2xl font-bold mb-4">Nuestra Historia</h2>
              <p className="text-sm opacity-80 leading-relaxed">{aboutHistory}</p>
            </div>
          )}

          {aboutValues && aboutValues.length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-center">Nuestros Valores Corporativos</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {aboutValues.map((val, idx) => (
                  <div key={idx} className={`p-5 rounded-2xl border text-center font-bold text-sm ${isDark ? 'bg-slate-900/80 border-slate-800 text-sky-300' : 'bg-white border-slate-200 text-sky-800'}`}>
                    ✨ {val}
                  </div>
                ))}
              </div>
            </div>
          )}

          {team && team.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-8 text-center">Equipo Profesional</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {team.map((member) => (
                  <div key={member.id} className={`p-6 rounded-3xl border text-center ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'}`}>
                    <img src={member.imageUrl} alt={member.name} className="w-24 h-24 rounded-full mx-auto object-cover mb-4 border-2" style={{ borderColor: palette.primary }} />
                    <h3 className="font-bold text-lg">{member.name}</h3>
                    <span className="text-xs opacity-60 block mb-2">{member.role}</span>
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
            <span className="text-xs font-bold uppercase tracking-wider block mb-2" style={{ color: palette.primary }}>Casos de Éxito</span>
            <h1 className="text-4xl font-extrabold mb-4">Portfolio de Proyectos Realizados</h1>
            <p className="text-base opacity-75">Una selección de nuestros mejores trabajos para clientes de diversos sectores.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolio?.map((project) => (
              <div key={project.id} className={`rounded-3xl overflow-hidden border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'} shadow-lg`}>
                <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-400 block mb-1">{project.category}</span>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm opacity-80 mb-4">{project.description}</p>
                  {project.clientName && <div className="text-xs opacity-60 font-semibold">Cliente: {project.clientName}</div>}
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
            <span className="text-xs font-bold uppercase tracking-wider block mb-2 text-sky-400">Recursos & Guías</span>
            <h1 className="text-4xl font-extrabold mb-4">Blog & Artículos Destacados</h1>
            <p className="text-base opacity-75">Noticias, consejos y tendencias redactadas por nuestros expertos.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blog?.map((article) => (
              <article key={article.id} className={`p-8 rounded-3xl border ${isDark ? 'bg-slate-900/60 border-slate-800' : 'bg-white border-slate-200'} shadow-lg`}>
                <span className="text-xs font-bold text-sky-400 block mb-2">{article.date} • {article.category}</span>
                <h2 className="text-2xl font-bold mb-3">{article.title}</h2>
                <p className="text-sm opacity-80 mb-6 leading-relaxed">{article.excerpt}</p>
                <button onClick={() => setSelectedArticle(article)} className="text-xs font-bold text-sky-400 hover:underline">Leer Artículo Completo &rarr;</button>
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
              <span className="text-xs font-bold uppercase tracking-wider block mb-2" style={{ color: palette.primary }}>Atención Inmediata</span>
              <h1 className="text-4xl font-extrabold mb-6">Ponte en Contacto</h1>
              <p className="text-base opacity-75 mb-8">Estamos listos para atender tu solicitud de forma personalizada.</p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md custom-gradient-btn"><Phone className="w-5 h-5" /></div>
                  <div><div className="text-xs opacity-60 font-semibold">Teléfono Directo</div><div className="font-bold text-base">{phone}</div></div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md custom-gradient-btn"><Mail className="w-5 h-5" /></div>
                  <div><div className="text-xs opacity-60 font-semibold">Email</div><div className="font-bold text-base">{email}</div></div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-md custom-gradient-btn"><MapPin className="w-5 h-5" /></div>
                  <div><div className="text-xs opacity-60 font-semibold">Dirección</div><div className="font-bold text-base">{address}</div></div>
                </div>
              </div>
            </div>

            <div className={`p-8 rounded-3xl border shadow-xl ${isDark ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-200'}`}>
              <h3 className="text-xl font-bold mb-6">Envíanos un Mensaje</h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold mb-1 opacity-80">Nombre Completo</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border bg-slate-950 text-sm focus:outline-none" placeholder="Tu nombre..." />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1 opacity-80">Email o Teléfono</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border bg-slate-950 text-sm focus:outline-none" placeholder="ejemplo@correo.com" />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1 opacity-80">Mensaje / Consulta</label>
                  <textarea rows={4} required className="w-full px-4 py-3 rounded-xl border bg-slate-950 text-sm focus:outline-none" placeholder="¿En qué te podemos ayudar?"></textarea>
                </div>
                <button type="submit" className="w-full py-4 rounded-xl text-white font-bold text-sm shadow-lg custom-gradient-btn">Enviar Mensaje</button>
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
            <span className="text-xs opacity-60">© {new Date().getFullYear()} {name}. Todos los derechos reservados.</span>
          </div>

          <div className="flex items-center space-x-6 text-xs font-bold opacity-75">
            <button onClick={() => setLegalModalType('aviso')} className="hover:underline">Aviso Legal</button>
            <button onClick={() => setLegalModalType('privacidad')} className="hover:underline">Política de Privacidad</button>
            <button onClick={() => setLegalModalType('cookies')} className="hover:underline">Política de Cookies</button>
          </div>

          <div className="text-xs opacity-60">
            Horario: {workingHours}
          </div>
        </div>
      </footer>

      {/* LEGAL NOTICE MODAL */}
      {legalModalType && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-auto">
          <div className={`max-w-xl w-full p-6 rounded-3xl border shadow-2xl relative ${isDark ? 'bg-slate-900 text-white border-slate-800' : 'bg-white text-slate-900 border-slate-200'}`}>
            <button onClick={() => setLegalModalType(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1"><X className="w-5 h-5" /></button>
            <h3 className="text-xl font-bold mb-4 uppercase">{legalModalType === 'aviso' ? 'Aviso Legal' : legalModalType === 'privacidad' ? 'Política de Privacidad' : 'Política de Cookies'}</h3>
            <div className="text-xs opacity-80 leading-relaxed space-y-3 max-h-80 overflow-auto">
              <p>{legalModalType === 'aviso' ? legal?.avisoLegal : legalModalType === 'privacidad' ? legal?.privacidad : legal?.cookies}</p>
            </div>
          </div>
        </div>
      )}

      {/* BLOG ARTICLE FULL VIEW MODAL */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-auto">
          <div className={`max-w-2xl w-full p-8 rounded-3xl border shadow-2xl relative ${isDark ? 'bg-slate-900 text-white border-slate-800' : 'bg-white text-slate-900 border-slate-200'}`}>
            <button onClick={() => setSelectedArticle(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1"><X className="w-5 h-5" /></button>
            <span className="text-xs font-bold text-sky-400 block mb-2">{selectedArticle.date} • {selectedArticle.category}</span>
            <h2 className="text-2xl font-bold mb-4">{selectedArticle.title}</h2>
            <img src={selectedArticle.imageUrl} alt={selectedArticle.title} className="w-full h-56 object-cover rounded-2xl mb-6" />
            <p className="text-xs sm:text-sm opacity-90 leading-relaxed whitespace-pre-line">{selectedArticle.content}</p>
          </div>
        </div>
      )}

      {/* PAYMENT MODAL */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-3xl p-6 shadow-2xl relative border border-slate-200 text-slate-900">
            <button onClick={() => setShowPaymentModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1"><X className="w-5 h-5" /></button>
            <h3 className="text-xl font-black mb-1">Pasarela de Pago Online</h3>
            <p className="text-xs text-slate-500 mb-6">Servicio: <span className="font-bold text-sky-700">{selectedServiceTitle}</span> ({selectedServicePrice})</p>
            {paymentDone ? (
              <div className="p-6 bg-emerald-50 text-emerald-900 rounded-2xl text-center font-bold">¡Pago Confirmado!</div>
            ) : (
              <form onSubmit={handlePayComplete} className="space-y-4">
                <input type="text" required className="w-full px-3 py-2 rounded-xl border text-xs" placeholder="Titular de la tarjeta" />
                <input type="text" required className="w-full px-3 py-2 rounded-xl border text-xs" placeholder="Número de tarjeta" />
                <button type="submit" className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs">Confirmar Pago ({selectedServicePrice})</button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* BOOKING MODAL */}
      {showBookingModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-white rounded-3xl p-6 shadow-2xl relative text-slate-900">
            <button onClick={() => setShowBookingModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1"><X className="w-5 h-5" /></button>
            <h3 className="text-xl font-bold mb-4">Solicitar Reserva</h3>
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input type="text" required className="w-full px-3 py-2 rounded-xl border text-xs" placeholder="Nombre completo..." />
              <input type="text" required className="w-full px-3 py-2 rounded-xl border text-xs" placeholder="Teléfono..." />
              <button type="submit" className="w-full py-3 rounded-xl bg-sky-600 text-white font-bold text-xs">Confirmar Reserva</button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
