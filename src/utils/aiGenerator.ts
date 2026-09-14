import type { BusinessConfig, IndustryType, BlogPost, PortfolioItem, BenefitItem, ServiceItem, TestimonialItem, TeamMember } from '../types/business';
import { INDUSTRY_PRESETS } from '../data/industryPresets';

// Rich Unsplash Image Banks categorized by sector
const UNSPLASH_PHOTOS = {
  restaurant: [
    'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80'
  ],
  dental: [
    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80'
  ],
  tech: [
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  ],
  gym: [
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
  ],
  law: [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80'
  ],
  beauty: [
    'https://images.unsplash.com/photo-1512290900673-7002b521761c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80'
  ],
  architecture: [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80'
  ],
  realestate: [
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80'
  ],
  generic: [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'
  ]
};

export const generateBusinessWithAI = (promptText: string, selectedIndustry?: IndustryType): BusinessConfig => {
  const cleanPrompt = promptText.trim().toLowerCase();
  
  // Determine matching industry
  let targetIndustry: IndustryType = selectedIndustry || 'custom';
  if (!selectedIndustry) {
    if (cleanPrompt.includes('restaurante') || cleanPrompt.includes('comida') || cleanPrompt.includes('bar') || cleanPrompt.includes('cafe') || cleanPrompt.includes('gastro') || cleanPrompt.includes('pizza') || cleanPrompt.includes('sushi')) {
      targetIndustry = 'restaurant';
    } else if (cleanPrompt.includes('dental') || cleanPrompt.includes('salud') || cleanPrompt.includes('medico') || cleanPrompt.includes('clinica') || cleanPrompt.includes('diente')) {
      targetIndustry = 'dental';
    } else if (cleanPrompt.includes('gimnasio') || cleanPrompt.includes('fit') || cleanPrompt.includes('entrenador') || cleanPrompt.includes('deporte') || cleanPrompt.includes('crossfit')) {
      targetIndustry = 'gym';
    } else if (cleanPrompt.includes('tech') || cleanPrompt.includes('app') || cleanPrompt.includes('software') || cleanPrompt.includes('agencia') || cleanPrompt.includes('web') || cleanPrompt.includes('digital') || cleanPrompt.includes('desarrollo')) {
      targetIndustry = 'tech';
    } else if (cleanPrompt.includes('abogado') || cleanPrompt.includes('legal') || cleanPrompt.includes('despacho') || cleanPrompt.includes('asesor') || cleanPrompt.includes('bufete')) {
      targetIndustry = 'law';
    } else if (cleanPrompt.includes('spa') || cleanPrompt.includes('belleza') || cleanPrompt.includes('estetica') || cleanPrompt.includes('peluqueria') || cleanPrompt.includes('uñas') || cleanPrompt.includes('estetico')) {
      targetIndustry = 'beauty';
    } else if (cleanPrompt.includes('inmobiliaria') || cleanPrompt.includes('piso') || cleanPrompt.includes('casa') || cleanPrompt.includes('arquitectura')) {
      targetIndustry = 'realestate';
    }
  }

  const preset = INDUSTRY_PRESETS.find(p => p.id === targetIndustry) || INDUSTRY_PRESETS[0];
  const base = preset.defaultConfig;

  // Extract clean business name if user typed a specific name
  let generatedName = base.name || 'Estudio Vanguardia';
  if (promptText.length > 3 && !cleanPrompt.startsWith('crear') && !cleanPrompt.startsWith('generar') && !cleanPrompt.startsWith('haz')) {
    const words = promptText.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1));
    if (words.length > 0 && words.length <= 5) {
      generatedName = words.join(' ');
    }
  }

  // Curated photos array for this industry
  const photos = UNSPLASH_PHOTOS[targetIndustry as keyof typeof UNSPLASH_PHOTOS] || UNSPLASH_PHOTOS.generic;

  // Generate Hyper-Specific Benefits
  const benefits: BenefitItem[] = base.benefits || [
    {
      id: 'b1',
      title: 'Máxima Garantía de Calidad Certificada',
      description: `En ${generatedName} cada proceso es auditado bajo los más estrictos estándares de excelencia y cumplimiento.`,
      iconName: 'ShieldCheck'
    },
    {
      id: 'b2',
      title: 'Atención Directa por Especialistas Titulados',
      description: 'Trato cercano, personalizado y ágil sin intermediarios ni demoras de gestión.',
      iconName: 'UserCheck'
    },
    {
      id: 'b3',
      title: 'Innovación Tecnológica & Equipamiento 3D',
      description: 'Utilizamos instrumental de última generación y metodologías ágiles probadas.',
      iconName: 'Zap'
    }
  ];

  // Generate Services with Photos
  const services: ServiceItem[] = (base.services || []).map((s, idx) => ({
    ...s,
    imageUrl: s.imageUrl || photos[idx % photos.length]
  }));

  // Generate Portfolio Items with Photos & Realistic Client Metrics
  const portfolio: PortfolioItem[] = (base.portfolio || []).map((p, idx) => ({
    ...p,
    imageUrl: p.imageUrl || photos[(idx + 1) % photos.length]
  }));

  // Generate Testimonials with Avatars
  const testimonials: TestimonialItem[] = base.testimonials || [
    {
      id: 't1',
      name: 'Carlos Mendoza',
      role: 'Cliente Corporativo',
      comment: `El equipo de ${generatedName} superó todas nuestras expectativas. La rapidez de respuesta y la calidad técnica marcan la diferencia.`,
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    {
      id: 't2',
      name: 'Elena Rostova',
      role: 'Directora de Operaciones',
      comment: 'Servicio impecable y máxima profesionalidad desde el primer día. Totalmente recomendados.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
    }
  ];

  // Generate Blog Articles with High-Res Covers
  const blog: BlogPost[] = (base.blog || []).map((b, idx) => ({
    ...b,
    imageUrl: b.imageUrl || photos[(idx + 2) % photos.length]
  }));

  // Generate Team Members with Bios
  const team: TeamMember[] = base.team || [
    {
      id: 'm1',
      name: 'Director Principal',
      role: 'Socio Fundador',
      imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
      bio: 'Más de 15 años de liderazgo profesional entregando proyectos de alto impacto.'
    }
  ];

  // Legal Texts Compliance RGPD
  const legal = base.legal || {
    avisoLegal: `De conformidad con la Ley 34/2002 (LSSI-CE), se informa que ${generatedName}, con domicilio en ${base.address || 'Madrid'}, es titular del sitio web.`,
    privacidad: `De acuerdo con el Reglamento General de Protección de Datos (RGPD UE 2016/679), ${generatedName} garantiza el tratamiento confidencial de sus datos personales.`,
    cookies: `Este sitio web utiliza cookies estrictamente necesarias para garantizar la navegación y analítica anónima.`
  };

  return {
    name: generatedName,
    slogan: base.slogan || 'Excelencia y Profesionalidad a tu Servicio',
    industry: targetIndustry,
    logoIcon: base.logoIcon || 'Sparkles',
    logoType: 'badge',
    heroHeadline: base.heroHeadline || `Soluciones Profesionales de Alto Rendimiento`,
    heroSubheadline: base.heroSubheadline || `Ofrecemos la máxima calidad, atención personalizada y resultados garantizados para tu negocio.`,
    ctaText: base.ctaText || 'Solicitar Información',
    secondaryCtaText: base.secondaryCtaText || 'Ver Servicios & Precios',
    aboutTitle: base.aboutTitle || 'Nuestra Misión y Compromiso',
    aboutBadge: base.aboutBadge || '⭐️ Garantía de Excelencia 2026',
    aboutText: base.aboutText || `${generatedName} nace con la vocación de ofrecer un servicio excepcional respaldado por especialistas certificados.`,
    aboutHistory: base.aboutHistory || `${generatedName} inició su actividad consolidando una sólida reputación basada en la ética, la precisión y la rapidez.`,
    aboutValues: base.aboutValues || ['Transparencia Total', 'Excelencia en el Servicio', 'Innovación Constante', 'Compromiso Humano'],
    whatsappNumber: base.whatsappNumber || '+34600112233',
    phone: base.phone || '+34 900 123 456',
    email: base.email || `contacto@${generatedName.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`,
    address: base.address || 'Paseo de la Castellana 120, Madrid',
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
    paymentMethods: base.paymentMethods || {
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
    services,
    portfolio,
    testimonials,
    faqs: base.faqs || [],
    team,
    blog,
    legal,
    currency: '€'
  };
};
