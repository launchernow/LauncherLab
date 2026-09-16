import type { BusinessConfig, IndustryType } from '../types/business';
import { INDUSTRY_PRESETS } from '../data/industryPresets';

/**
 * Normaliza la categoría del CRM al tipo de industria de LauncherLab
 */
export function normalizeCategory(rawCategory: string): IndustryType {
  const cat = (rawCategory || '').toLowerCase().trim();

  if (cat.includes('dent') || cat.includes('dient') || cat.includes('odontolog') || cat.includes('salud')) {
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
 * Extrae y procesa los datos del lead desde la URL
 */
export function parseLeadFromUrl(searchParams: URLSearchParams): { config: BusinessConfig; lead: LeadUrlData } | null {
  const leadName = searchParams.get('lead_name') || searchParams.get('name');
  if (!leadName) return null;

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
    name: leadName,
    category: rawCategory,
    industry,
    phone,
    address,
    rating,
    reviewCount,
    mapsUrl,
    website
  };

  // Preset base de la industria
  const preset = INDUSTRY_PRESETS.find(p => p.id === industry) || INDUSTRY_PRESETS[0];
  const baseConfig = preset.defaultConfig as BusinessConfig;

  // Badge de prueba social basado en las reseñas reales de Google
  let aboutBadge = baseConfig.aboutBadge || '⭐️ Garantía de Excelencia 2026';
  if (rating && reviewCount) {
    aboutBadge = `⭐️ ${rating.toFixed(1)} en Google (${reviewCount} reseñas)`;
  } else if (rating) {
    aboutBadge = `⭐️ ${rating.toFixed(1)} estrellas de valoración`;
  }

  // Titular personalizado según industria y nombre
  let heroHeadline = baseConfig.heroHeadline;
  let heroSubheadline = baseConfig.heroSubheadline;

  if (industry === 'dental') {
    heroHeadline = `Tu Sonrisa y Salud Dental en las Mejores Manos`;
    heroSubheadline = `En ${leadName} cuidamos de tu bienestar con tratamientos de vanguardia, tecnología 3D y atención personalizada para toda la familia.`;
  } else if (industry === 'beauty') {
    heroHeadline = `Realza tu Belleza y Bienestar con Especialistas`;
    heroSubheadline = `Descubre una experiencia exclusiva de cuidado personal en ${leadName}. Tratamientos personalizados con productos de primera calidad.`;
  } else if (industry === 'restaurant') {
    heroHeadline = `Una Experiencia Gastronómica Inolvidable`;
    heroSubheadline = `En ${leadName} combinamos pasión por los mejores ingredientes, cocina artesanal y un ambiente pensado para disfrutar.`;
  } else if (industry === 'gym') {
    heroHeadline = `Transforma tu Rendimiento y Alcanza tus Metas`;
    heroSubheadline = `Entrenamiento de alto nivel, equipamiento de última generación y coaches dedicados a tu progreso diario en ${leadName}.`;
  } else if (industry === 'law') {
    heroHeadline = `Defensa Legal Rigurosa y Compromiso con tus Intereses`;
    heroSubheadline = `En ${leadName} aportamos soluciones jurídicas estratégicas con máxima transparencia, cercanía y eficacia demostrada.`;
  } else {
    heroHeadline = `Servicios Profesionales de Confianza en ${leadName}`;
    heroSubheadline = `Ofrecemos la máxima calidad, atención cercana y resultados contrastados para satisfacer cada una de tus necesidades.`;
  }

  const cleanDomain = leadName.toLowerCase().replace(/[^a-z0-9]/g, '');

  const finalConfig: BusinessConfig = {
    ...baseConfig,
    name: leadName,
    slogan: baseConfig.slogan || `Excelencia en ${rawCategory || 'Servicios'}`,
    industry,
    aboutBadge,
    heroHeadline,
    heroSubheadline,
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
      map: Boolean(address || mapsUrl)
    }
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
}

/**
 * Consulta las fotos y opiniones reales persistidas en el CRM / Supabase
 */
export async function fetchLeadPrototype(leadId: string): Promise<PrototypeAssetData | null> {
  try {
    const crmUrl = localStorage.getItem('crm_api_url') || 'http://localhost:8765';
    const resp = await fetch(`${crmUrl}/api/prototypes/${leadId}`);
    if (!resp.ok) return null;
    const data = await resp.json();
    if (data.ok && data.prototype) {
      return {
        photos: data.prototype.photos || [],
        reviews: data.prototype.reviews || []
      };
    }
  } catch (err) {
    console.warn('No se pudo conectar con el endpoint de prototipos del CRM:', err);
  }
  return null;
}

/**
 * Aplica las fotos y reseñas reales al BusinessConfig
 */
export function applyRealAssetsToConfig(
  baseConfig: BusinessConfig,
  assets: PrototypeAssetData
): BusinessConfig {
  const { photos, reviews } = assets;
  const updated = { ...baseConfig };

  // 1. Inyectar fotos reales del local en servicios y portfolio
  if (photos && photos.length > 0) {
    const mainPhoto = photos[0];
    updated.services = updated.services.map((s, idx) => ({
      ...s,
      imageUrl: photos[idx % photos.length] || mainPhoto
    }));

    updated.portfolio = photos.map((photoUrl, idx) => ({
      id: `real-p-${idx + 1}`,
      title: `Instalaciones ${idx + 1}`,
      category: updated.name,
      imageUrl: photoUrl,
      description: `Instalaciones y equipamiento profesional de ${updated.name}`
    }));
  }

  // 2. Inyectar reseñas reales con nombres reales de clientes de Google
  if (reviews && reviews.length > 0) {
    updated.testimonials = reviews.map((r, idx) => ({
      id: `real-t-${idx + 1}`,
      name: r.name || `Cliente verificado`,
      role: r.role || 'Opinión en Google Maps',
      comment: r.comment,
      rating: r.rating || 5,
      avatar: r.avatar || `https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80`
    }));
  }

  return updated;
}

