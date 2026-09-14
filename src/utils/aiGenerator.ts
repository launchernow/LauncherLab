import type { BusinessConfig, IndustryType, BlogPost, PortfolioItem, BenefitItem } from '../types/business';
import { INDUSTRY_PRESETS } from '../data/industryPresets';

export const generateBusinessWithAI = (promptText: string, selectedIndustry?: IndustryType): BusinessConfig => {
  const cleanPrompt = promptText.trim().toLowerCase();
  
  // Determine matching industry
  let targetIndustry: IndustryType = selectedIndustry || 'custom';
  if (!selectedIndustry) {
    if (cleanPrompt.includes('restaurante') || cleanPrompt.includes('comida') || cleanPrompt.includes('bar') || cleanPrompt.includes('cafe') || cleanPrompt.includes('gastro')) {
      targetIndustry = 'restaurant';
    } else if (cleanPrompt.includes('dental') || cleanPrompt.includes('salud') || cleanPrompt.includes('medico') || cleanPrompt.includes('clinica')) {
      targetIndustry = 'dental';
    } else if (cleanPrompt.includes('gimnasio') || cleanPrompt.includes('fit') || cleanPrompt.includes('entrenador') || cleanPrompt.includes('deporte')) {
      targetIndustry = 'gym';
    } else if (cleanPrompt.includes('tech') || cleanPrompt.includes('app') || cleanPrompt.includes('software') || cleanPrompt.includes('agencia') || cleanPrompt.includes('web')) {
      targetIndustry = 'tech';
    } else if (cleanPrompt.includes('abogado') || cleanPrompt.includes('legal') || cleanPrompt.includes('despacho') || cleanPrompt.includes('asesor')) {
      targetIndustry = 'law';
    } else if (cleanPrompt.includes('spa') || cleanPrompt.includes('belleza') || cleanPrompt.includes('estetica') || cleanPrompt.includes('peluqueria')) {
      targetIndustry = 'beauty';
    }
  }

  const preset = INDUSTRY_PRESETS.find(p => p.id === targetIndustry) || INDUSTRY_PRESETS[0];
  const base = preset.defaultConfig;

  let generatedName = base.name || 'Empresa Vanguardia';
  if (promptText.length > 3 && !cleanPrompt.includes('crear') && !cleanPrompt.includes('web')) {
    const words = promptText.split(' ').slice(0, 4).map(w => w.charAt(0).toUpperCase() + w.slice(1));
    if (words.length > 0) generatedName = words.join(' ');
  }

  // Generate Hyper-Specific Benefits
  const benefits: BenefitItem[] = [
    {
      id: 'b1',
      title: 'Máxima Garantía de Calidad',
      description: `En ${generatedName} cada proceso es supervisado para garantizar resultados impecables y duraderos.`,
      iconName: 'ShieldCheck'
    },
    {
      id: 'b2',
      title: 'Atención Directa y Personalizada',
      description: 'Trato cercano con un especialista asignado a tu caso sin intermediarios.',
      iconName: 'UserCheck'
    },
    {
      id: 'b3',
      title: 'Innovación & Tecnología Avanzada',
      description: 'Utilizamos metodologías modernas e instrumental de última generación.',
      iconName: 'Zap'
    }
  ];

  // Generate Hyper-Specific Portfolio Projects
  const portfolio: PortfolioItem[] = [
    {
      id: 'p1',
      title: `Proyecto Premium de ${generatedName}`,
      category: 'Casos de Éxito',
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      description: `Desarrollo y ejecución integral para un cliente corporativo de alta gama.`,
      clientName: 'Grupo Financiero Alfa',
      date: '2025'
    },
    {
      id: 'p2',
      title: 'Transformación & Rediseño Estratégico',
      category: 'Innovación',
      imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
      description: 'Optimización de procesos e implementación de soluciones a medida.',
      clientName: 'Corporación Innova',
      date: '2025'
    }
  ];

  // Generate Hyper-Specific SEO Blog Articles
  const blog: BlogPost[] = [
    {
      id: 'post1',
      title: `Guía Completa para Elegir los Mejores Servicios de ${generatedName}`,
      date: '12 Sep 2025',
      category: 'Tendencias & Consejos',
      readTime: '4 min lectura',
      excerpt: `Descubre las claves fundamentales que debes tener en cuenta al contratar profesionales de nuestro sector.`,
      content: `En el mercado actual, contar con especialistas cualificados marca la diferencia entre un resultado estándar y una experiencia excepcional. En ${generatedName} nos enfocamos en la transparencia, la rapidez y el uso de técnicas de vanguardia...`,
      imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'post2',
      title: 'Innovaciones y Novedades que Marcarán el Año 2026',
      date: '05 Sep 2025',
      category: 'Innovación',
      readTime: '6 min lectura',
      excerpt: 'Analizamos las tendencias emergentes que están transformando la atención al cliente y la eficiencia operacional.',
      content: `La tecnología y la personalización son los pilares de la nueva era comercial. Las empresas que adaptan sus canales digitales ofrecen una velocidad de respuesta hasta 5 veces superior...`,
      imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80'
    }
  ];

  // Legal Texts Compliance RGPD
  const legal = {
    avisoLegal: `De conformidad con el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, se informa que ${generatedName}, con domicilio en ${base.address || 'Madrid'}, es titular del sitio web. Para cualquier consulta, puede dirigirse a ${base.email || 'contacto@empresa.com'}.`,
    privacidad: `De acuerdo con el Reglamento General de Protección de Datos (RGPD), ${generatedName} garantiza la protección y confidencialidad de los datos personales facilitados por los usuarios a través de los formularios del sitio web. Los datos serán tratados con la única finalidad de prestar los servicios solicitados y no serán cedidos a terceros.`,
    cookies: `Este sitio web utiliza cookies propias y de terceros para recopilar información estadística sobre la navegación y mejorar la experiencia del usuario. Puede aceptar, rechazar o configurar sus preferencias en cualquier momento desde su navegador.`
  };

  return {
    name: generatedName,
    slogan: base.slogan || 'Innovación y Excelencia a tu Servicio',
    industry: targetIndustry,
    logoIcon: base.logoIcon || 'Sparkles',
    logoType: 'badge',
    heroHeadline: base.heroHeadline || `Soluciones Profesionales en ${generatedName}`,
    heroSubheadline: base.heroSubheadline || `Ofrecemos la máxima calidad y atención personalizada para garantizar el éxito de nuestros clientes.`,
    ctaText: base.ctaText || 'Solicitar Información',
    secondaryCtaText: base.secondaryCtaText || 'Ver Servicios',
    aboutTitle: base.aboutTitle || 'Nuestra Misión y Compromiso',
    aboutBadge: base.aboutBadge || 'Calidad Certificada 2025',
    aboutText: base.aboutText || `${generatedName} nace con la pasión de ofrecer un servicio impecable respaldado por profesionales altamente cualificados.`,
    aboutHistory: `${generatedName} inició su actividad con la visión de revolucionar la atención en el sector. A lo largo de los años hemos consolidado una reputación basada en la ética, la rapidez y el rigor profesional.`,
    aboutValues: ['Transparencia Total', 'Excelencia en el Servicio', 'Innovación Constante', 'Compromiso Humano'],
    whatsappNumber: base.whatsappNumber || '+34600112233',
    phone: base.phone || '+34 900 123 456',
    email: base.email || `contacto@${generatedName.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`,
    address: base.address || 'Calle Principal 15, Madrid',
    workingHours: base.workingHours || 'Lun - Vie: 09:00 - 20:00',
    visualTheme: base.visualTheme || 'modern-glass',
    fontFamily: base.fontFamily || 'jakarta',
    palette: base.palette || {
      primary: '#0284c7',
      secondary: '#0f172a',
      accent: '#38bdf8',
      bgMode: 'dark'
    },
    language: 'es',
    paymentMethods: {
      stripe: true,
      bizum: true,
      paypal: false
    },
    sections: {
      hero: true,
      benefits: true,
      about: true,
      services: true,
      portfolio: true,
      testimonials: true,
      team: true,
      blog: true,
      faq: true,
      contact: true,
      map: true,
      legal: true
    },
    benefits,
    services: base.services || [],
    portfolio,
    testimonials: base.testimonials || [],
    faqs: base.faqs || [],
    team: base.team || [],
    blog,
    legal,
    currency: '€'
  };
};
