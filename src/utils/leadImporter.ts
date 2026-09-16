import type { BusinessConfig, IndustryType } from '../types/business';
import { INDUSTRY_PRESETS } from '../data/industryPresets';

/**
 * Normaliza la categoría del CRM al tipo de industria de LauncherLab
 */
export function normalizeCategory(rawCategory: string): IndustryType {
  const cat = (rawCategory || '').toLowerCase().trim();

  if (cat.includes('dent') || cat.includes('dient') || cat.includes('odontolog')) {
    return 'dental';
  }
  if (cat.includes('restaurante') || cat.includes('bar') || cat.includes('cafeter') || cat.includes('gastronom') || cat.includes('pizza') || cat.includes('comida')) {
    return 'restaurant';
  }
  if (cat.includes('peluquer') || cat.includes('estetic') || cat.includes('belleza') || cat.includes('spa') || cat.includes('uñas') || cat.includes('hair') || cat.includes('beauty')) {
    return 'beauty';
  }
  if (cat.includes('gimnasio') || cat.includes('gym') || cat.includes('fitness') || cat.includes('crossfit') || cat.includes('entrenad') || cat.includes('deport')) {
    return 'gym';
  }
  if (cat.includes('abogad') || cat.includes('legal') || cat.includes('jurid') || cat.includes('despacho') || cat.includes('bufete') || cat.includes('asesor')) {
    return 'law';
  }
  if (cat.includes('inmobiliaria') || cat.includes('realestate') || cat.includes('piso') || cat.includes('propiedad') || cat.includes('vivienda')) {
    return 'realestate';
  }
  if (cat.includes('tech') || cat.includes('software') || cat.includes('app') || cat.includes('agencia') || cat.includes('digital') || cat.includes('desarrollo') || cat.includes('web')) {
    return 'tech';
  }

  return 'custom';
}

export interface LeadUrlData {
  id?: string;
  name: string;
  category: string;
  industry: IndustryType;
  phone: string;
  address: string;
  rating?: number;
  reviewCount?: number;
  mapsUrl?: string;
  website?: string;
}

/**
 * Genera una plantilla base neutral para servicios profesionales
 */
function createCustomFallbackPreset(leadName: string, category: string): BusinessConfig {
  const isOptics = /óptic|optic|optom|gafas|lentill/i.test(leadName + ' ' + category);

  return {
    name: leadName,
    slogan: isOptics
      ? 'Cuidado integral de tu visión y últimas tendencias en monturas'
      : `Servicios profesionales de excelencia en ${category || 'tu sector'}`,
    industry: 'custom',
    logoIcon: isOptics ? 'Eye' : 'Sparkles',
    logoType: 'badge',
    heroHeadline: isOptics
      ? `Tu Visión y Salud Ocular en las Mejores Manos`
      : `Servicios Profesionales de Confianza en ${leadName}`,
    heroSubheadline: isOptics
      ? `Graduación precisa con tecnología de última generación, lentes de contacto a medida y una cuidada selección de monturas en ${leadName}.`
      : `Atención cercana, soluciones especializadas y máxima garantía para particulares y empresas en ${leadName}.`,
    ctaText: isOptics ? 'Pedir Cita para Graduación' : 'Solicitar Presupuesto',
    secondaryCtaText: isOptics ? 'Ver Catálogo de Monturas' : 'Conocer Servicios',
    aboutTitle: 'Compromiso con la Calidad y la Satisfacción',
    aboutBadge: '⭐️ Compromiso de Calidad 2026',
    aboutText: `En ${leadName} nos caracterizamos por ofrecer una atención rigurosa, cercana y adaptada a tus necesidades individuales.`,
    aboutHistory: 'Años de trayectoria consolidada brindando soluciones de alto valor con una atención minuciosa y orientada al detalle.',
    aboutValues: ['Atención Directa y Personalizada', 'Profesionales Cualificados', 'Garantía de Satisfacción', 'Transparencia Total'],
    whatsappNumber: '',
    phone: '',
    email: 'contacto@negocio.es',
    address: 'Madrid',
    workingHours: 'Lun - Vie: 10:00 - 14:00 | 17:00 - 20:30',
    visualTheme: 'modern-glass',
    layoutModel: 'modern',
    fontFamily: 'inter',
    palette: {
      primary: isOptics ? '#0284c7' : '#2563eb',
      secondary: '#0f172a',
      accent: isOptics ? '#38bdf8' : '#60a5fa',
      bgMode: 'dark',
    },
    language: 'es',
    paymentMethods: { stripe: true, bizum: true, paypal: false },
    sections: {
      hero: true,
      benefits: true,
      about: true,
      services: true,
      portfolio: true,
      testimonials: true,
      team: false,
      faq: true,
      contact: true,
      map: true,
      legal: true,
    },
    currency: '€',
    benefits: [
      { id: 'b1', title: 'Atención Individualizada', description: 'Trato directo y soluciones a tu medida desde el primer contacto.', iconName: 'UserCheck' },
      { id: 'b2', title: 'Tecnología Avanzada', description: 'Equipamiento moderno para diagnósticos y resultados de máxima precisión.', iconName: 'ShieldCheck' },
      { id: 'b3', title: 'Garantía de Satisfacción', description: 'Compromiso total con la excelencia en cada uno de nuestros trabajos.', iconName: 'Sparkles' },
    ],
    services: [
      {
        id: 's1',
        title: isOptics ? 'Graduación y Examen Optométrico' : `Servicio Especializado de ${category || 'Calidad'}`,
        description: isOptics ? 'Medición de agudeza visual y salud ocular con tecnología digital de alta resolución.' : 'Atención profesional adaptada a tus necesidades con garantía de satisfacción.',
        price: isOptics ? 'Incluido' : 'A consultar',
        iconName: isOptics ? 'Eye' : 'Sparkles',
        badge: 'Destacado',
        imageUrl: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 's2',
        title: isOptics ? 'Monturas de Vanguardia y Sol' : 'Asesoramiento y Diagnóstico Previo',
        description: isOptics ? 'Selección exclusiva de diseñadores y materiales ultraligeros de alta durabilidad.' : 'Evaluación detallada para proponerte la opción más conveniente sin compromiso.',
        price: isOptics ? 'Desde 79 €' : 'Gratuito',
        iconName: isOptics ? 'Sparkles' : 'FileText',
        imageUrl: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=600&q=80',
      },
      {
        id: 's3',
        title: isOptics ? 'Lentes de Contacto y Orto-K' : 'Seguimiento y Garantía Post-Servicio',
        description: isOptics ? 'Adaptación personalizada de lentillas blandas, progresivas y tratamientos nocturnos.' : 'Acompañamiento continuado para resolver cualquier duda tras la atención.',
        price: isOptics ? 'Desde 35 €' : 'Incluido',
        iconName: isOptics ? 'ShieldCheck' : 'CheckCircle',
        imageUrl: 'https://images.unsplash.com/photo-1583912267670-6575ad362e4a?auto=format&fit=crop&w=600&q=80',
      },
    ],
    portfolio: [
      {
        id: 'p1',
        title: 'Espacio de Atención Profesional',
        category: leadName,
        imageUrl: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
        description: `Instalaciones y espacio de atención al cliente de ${leadName}`,
      },
    ],
    testimonials: [
      {
        id: 't1',
        name: 'Cliente Verificado',
        role: 'Opinión en Google Maps',
        comment: `Un trato inmejorable en ${leadName}. Son extraordinariamente atentos y profesionales. Muy recomendable.`,
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      },
    ],
    faqs: [
      { id: 'f1', question: '¿Cómo puedo solicitar una cita o presupuesto?', answer: 'Puedes llamarnos directamente por teléfono o escribirnos un mensaje de WhatsApp para darte respuesta inmediata.' },
      { id: 'f2', question: '¿Cuál es el horario habitual?', answer: 'Atendemos en nuestro horario comercial continuado de lunes a viernes. Consúltanos para necesidades específicas.' },
    ],
    team: [],
  };
}

/**
 * Extrae y procesa los datos del lead desde la URL
 */
export function parseLeadFromUrl(searchParams: URLSearchParams): { config: BusinessConfig; lead: LeadUrlData } | null {
  const leadName = searchParams.get('lead_name') || searchParams.get('name');
  if (!leadName) return null;

  const leadId = searchParams.get('lead_id') || searchParams.get('leadId') || searchParams.get('id') || undefined;
  const rawCategory = searchParams.get('category') || '';
  const industry = normalizeCategory(rawCategory);
  const phone = searchParams.get('phone') || '';
  const address = searchParams.get('address') || '';
  const ratingStr = searchParams.get('rating');
  const reviewsStr = searchParams.get('reviews');
  const mapsUrl = searchParams.get('maps_url') || undefined;
  const website = searchParams.get('website') || undefined;

  const rating = ratingStr ? parseFloat(ratingStr) : undefined;
  const reviewCount = reviewsStr ? parseInt(reviewsStr, 10) : undefined;

  const leadData: LeadUrlData = {
    id: leadId,
    name: leadName,
    category: rawCategory,
    industry,
    phone,
    address,
    rating,
    reviewCount,
    mapsUrl,
    website,
  };

  // Base preset
  let baseConfig: BusinessConfig;
  const preset = INDUSTRY_PRESETS.find(p => p.id === industry);
  if (preset && preset.defaultConfig) {
    baseConfig = preset.defaultConfig as BusinessConfig;
  } else {
    baseConfig = createCustomFallbackPreset(leadName, rawCategory);
  }

  // Social Proof badge
  let aboutBadge = baseConfig.aboutBadge || '⭐️ Garantía de Excelencia 2026';
  if (rating && reviewCount) {
    aboutBadge = `⭐️ ${rating.toFixed(1)} en Google (${reviewCount} reseñas)`;
  } else if (rating) {
    aboutBadge = `⭐️ ${rating.toFixed(1)} estrellas de valoración`;
  }

  const cleanDomain = leadName.toLowerCase().replace(/[^a-z0-9]/g, '');

  const finalConfig: BusinessConfig = {
    ...baseConfig,
    name: leadName,
    slogan: baseConfig.slogan || `Excelencia en ${rawCategory || 'Servicios'}`,
    industry,
    aboutBadge,
    phone: phone || baseConfig.phone,
    whatsappNumber: phone || baseConfig.whatsappNumber,
    address: address || baseConfig.address,
    email: `contacto@${cleanDomain || 'negocio'}.es`,
    googleMapsEmbedUrl: mapsUrl || baseConfig.googleMapsEmbedUrl,
    sections: {
      ...baseConfig.sections,
      hero: true,
      services: true,
      about: true,
      testimonials: true,
      contact: true,
      map: Boolean(address || mapsUrl),
    },
  };

  return { config: finalConfig, lead: leadData };
}

export interface PrototypeAssetData {
  photos: string[];
  reviews: Array<{
    name: string;
    rating: number;
    comment: string;
    role?: string;
    avatar?: string;
  }>;
  config?: BusinessConfig;
}

/**
 * Consulta la configuración completa y los activos persistidos en el CRM / Supabase
 */
export async function fetchLeadPrototype(leadId: string): Promise<PrototypeAssetData | null> {
  const customUrl = localStorage.getItem('crm_api_url');
  const candidateUrls = customUrl ? [customUrl] : ['http://localhost:8765', 'http://127.0.0.1:8765'];

  for (const baseUrl of candidateUrls) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 35000);
      const resp = await fetch(`${baseUrl}/api/prototypes/${leadId}`, {
        signal: controller.signal,
      });
      clearTimeout(timeoutId);

      if (!resp.ok) continue;
      const data = await resp.json();
      if (data.ok && data.prototype) {
        return {
          photos: data.prototype.photos || [],
          reviews: data.prototype.reviews || [],
          config: data.prototype.config || undefined,
        };
      }
    } catch (err) {
      console.warn(`Intento de conexión a ${baseUrl} fallido:`, err);
    }
  }

  return null;
}

/**
 * Aplica las fotos y reseñas reales al BusinessConfig si no venía un config completo
 */
export function applyRealAssetsToConfig(
  baseConfig: BusinessConfig,
  assets: PrototypeAssetData
): BusinessConfig {
  const { photos, reviews } = assets;
  const updated = { ...baseConfig };

  if (photos && photos.length > 0) {
    const mainPhoto = photos[0];
    updated.services = updated.services.map((s, idx) => ({
      ...s,
      imageUrl: photos[idx % photos.length] || mainPhoto,
    }));

    updated.portfolio = photos.map((photoUrl, idx) => ({
      id: `real-p-${idx + 1}`,
      title: `Instalaciones ${idx + 1}`,
      category: updated.name,
      imageUrl: photoUrl,
      description: `Instalaciones y equipamiento profesional de ${updated.name}`,
    }));
  }

  if (reviews && reviews.length > 0) {
    updated.testimonials = reviews.map((r, idx) => ({
      id: `real-t-${idx + 1}`,
      name: r.name || `Cliente verificado`,
      role: r.role || 'Opinión en Google Maps',
      comment: r.comment,
      rating: r.rating || 5,
      avatar: r.avatar || `https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80`,
    }));
  }

  return updated;
}
