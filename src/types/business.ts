export type IndustryType = 
  | 'restaurant' 
  | 'dental' 
  | 'gym' 
  | 'tech' 
  | 'law' 
  | 'beauty' 
  | 'realestate' 
  | 'custom';

export type VisualTheme = 
  | 'modern-glass' 
  | 'luxury-gold' 
  | 'minimal-clean' 
  | 'vibrant-creative';

export type LayoutModel = 
  | 'luxury' 
  | 'modern' 
  | 'minimal' 
  | 'conversion';

export type FontFamily = 'inter' | 'jakarta' | 'playfair' | 'space';

export type AppLanguage = 'es' | 'en' | 'fr' | 'de';

export interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  bgMode: 'dark' | 'light';
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  fullContent?: string;
  price: string;
  iconName: string;
  badge?: string;
  imageUrl?: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  comment: string;
  rating: number;
  avatar: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  clientName?: string;
  date?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  bio?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string;
  imageUrl: string;
}

export interface LegalNotice {
  avisoLegal: string;
  privacidad: string;
  cookies: string;
}

export interface BusinessConfig {
  name: string;
  slogan: string;
  industry: IndustryType;
  logoIcon: string;
  logoType: 'text' | 'badge' | 'minimal';
  aboutTitle: string;
  aboutText: string;
  aboutBadge: string;
  aboutHistory?: string;
  aboutValues?: string[];
  heroHeadline: string;
  heroSubheadline: string;
  ctaText: string;
  secondaryCtaText: string;
  whatsappNumber: string;
  phone: string;
  email: string;
  address: string;
  workingHours: string;
  googleMapsEmbedUrl?: string;
  visualTheme: VisualTheme;
  layoutModel?: LayoutModel;
  fontFamily: FontFamily;
  palette: ColorPalette;
  customLogoUrl?: string;
  customHeroUrl?: string;
  aboutImageUrl?: string;
  language: AppLanguage;
  publishedUrl?: string;
  paymentMethods: {
    stripe: boolean;
    bizum: boolean;
    paypal: boolean;
  };
  sections: {
    hero: boolean;
    topBanner?: boolean;
    benefits?: boolean;
    process?: boolean;
    about: boolean;
    services: boolean;
    gallery?: boolean;
    calculator?: boolean;
    portfolio?: boolean;
    testimonials: boolean;
    team: boolean;
    blog?: boolean;
    faq: boolean;
    contact: boolean;
    map: boolean;
    legal?: boolean;
  };
  benefits?: BenefitItem[];
  services: ServiceItem[];
  gallery?: GalleryItem[];
  portfolio?: PortfolioItem[];
  testimonials: TestimonialItem[];
  faqs: FaqItem[];
  team: TeamMember[];
  blog?: BlogPost[];
  legal?: LegalNotice;
  currency: string;
}

export interface IndustryPreset {
  id: IndustryType;
  name: string;
  description: string;
  icon: string;
  defaultConfig: Partial<BusinessConfig>;
}
