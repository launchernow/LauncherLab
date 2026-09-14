import type { IndustryPreset } from '../types/business';

export const INDUSTRY_PRESETS: IndustryPreset[] = [
  {
    id: 'restaurant',
    name: 'Restaurante & Gastrobar',
    description: 'Menú interactivo, reservas en línea, fotos de platos y ubicación.',
    icon: 'Utensils',
    defaultConfig: {
      name: 'BellaVista Gourmet',
      slogan: 'Una experiencia gastronómica inolvidable',
      industry: 'restaurant',
      logoIcon: 'Utensils',
      logoType: 'badge',
      heroHeadline: 'Sabores Auténticos que Despiertan tus Sentidos',
      heroSubheadline: 'Cocina de autor elaborada con ingredientes orgánicos de la más alta calidad y un ambiente exclusivo en el corazón de la ciudad.',
      ctaText: 'Reservar Mesa Ahora',
      secondaryCtaText: 'Ver Menú Gourmet',
      aboutTitle: 'Tradición y Pasión por la Alta Cocina',
      aboutBadge: 'Estrella Culinary 2025',
      aboutText: 'Desde 2012, BellaVista ha transformado la gastronomía local combinando recetas tradicionales con vanguardia culinaria. Nuestro equipo de chefs internacionales selecciona personalmente cada ingrediente fresco.',
      aboutHistory: 'Fundado por el reconocido chef Marc Duprat, BellaVista comenzó como un íntimo bistró de 8 mesas y hoy es uno de los referentes culinarios más premiados de la región.',
      aboutValues: ['Ingredientes Orgánicos 100%', 'Cocina Sustentable', 'Servicio de Excelencia VIP', 'Bodega Privada Exclusiva'],
      whatsappNumber: '+34600112233',
      phone: '+34 912 345 678',
      email: 'reservas@bellavistagourmet.com',
      address: 'Paseo de la Castellana 120, Madrid',
      workingHours: 'Lun - Dom: 13:00 - 23:30',
      visualTheme: 'luxury-gold',
      fontFamily: 'playfair',
      palette: {
        primary: '#d97706',
        secondary: '#451a03',
        accent: '#f59e0b',
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
        team: true,
        blog: true,
        faq: true,
        contact: true,
        map: true,
        legal: true
      },
      currency: '€',
      benefits: [
        { id: 'b1', title: 'Ingredientes de Proximidad', description: 'Seleccionados a diario de agricultores locales ecológicos.', iconName: 'Leaf' },
        { id: 'b2', title: 'Chef Ejecutivo Galardonado', description: 'Menús diseñados por chefs reconocidos internacionalmente.', iconName: 'Award' },
        { id: 'b3', title: 'Bodega con Más de 400 D.O.', description: 'Maridajes guiados por sommelier profesional dedicado.', iconName: 'Wine' }
      ],
      services: [
        { id: 's1', title: 'Menú Degustación del Chef', description: '7 pases maridados con vinos de selección exclusiva de nuestra bodega privada.', price: '85 €', iconName: 'Wine', badge: 'Más Popular' },
        { id: 's2', title: 'Reserva VIP & Salón Privado', description: 'Espacio íntimo para eventos corporativos y celebraciones especiales.', price: 'Desde 250 €', iconName: 'Crown' },
        { id: 's3', title: 'Catering Exclusivo para Eventos', description: 'Llevamos la experiencia BellaVista a tu evento corporativo o boda de lujo.', price: 'Personalizado', iconName: 'PartyPopper' },
        { id: 's4', title: 'Taller de Maridaje & Sommelier', description: 'Catas guiadas de vinos internacionales y queso artesano.', price: '60 €', iconName: 'GlassWater' },
        { id: 's5', title: 'Experiencia Mesa del Chef', description: 'Cena dentro de la propia cocina interactuando con el equipo culinario.', price: '120 €', iconName: 'UtensilsCrossed' },
        { id: 's6', title: 'Bono Regalo Gastronómico', description: 'Caja regalo elegante digital o física para sorprender a quien quieras.', price: 'Desde 90 €', iconName: 'Gift' }
      ],
      portfolio: [
        { id: 'p1', title: 'Gala Anual Corporativa Grupo Santander', category: 'Eventos VIP', imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80', description: 'Catering exclusivo para 180 ejecutivos en palacio histórico.', clientName: 'Grupo Santander', date: '2025' },
        { id: 'p2', title: 'Renovación Carta Primavera 2025', category: 'Gastronomía', imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80', description: 'Lanzamiento de 12 platos de autor con productos de mar y trufa blanca.', clientName: 'BellaVista Studio', date: '2025' }
      ],
      testimonials: [
        { id: 't1', name: 'Carlos Mendoza', role: 'Crítico Gastronómico', comment: 'La mejor experiencia de cenar en Madrid este año. El solomillo a la trufa es sencillamente espectacular.', rating: 5, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' },
        { id: 't2', name: 'Elena Rostova', role: 'Empresaria', comment: 'Celebramos nuestro aniversario en el salón VIP. La atención del equipo y la bodega fue impecable.', rating: 5, avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80' },
        { id: 't3', name: 'David Fernández', role: 'Sommelier Invitado', comment: 'La carta de vinos es una joya impecable. Temperatura y maridajes de nivel internacional.', rating: 5, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
        { id: 't4', name: 'Marta Soler', role: 'Directora de Eventos', comment: 'Organizamos nuestra cena de gala anual y todos los invitados quedaron fascinados.', rating: 5, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80' }
      ],
      faqs: [
        { id: 'f1', question: '¿Requieren reserva previa?', answer: 'Recomendamos reservar con al menos 48 horas de antelación para fines de semana a través de nuestro botón directo de WhatsApp o formulario.' },
        { id: 'f2', question: '¿Disponen de opciones veganas y sin gluten?', answer: 'Sí, disponemos de una carta especial adaptada a intolerancias, celiacos y preferencias vegetarianas/veganas.' },
        { id: 'f3', question: '¿Cuál es el código de vestimenta?', answer: 'Recomendamos un código elegante-casual (smart casual) para preservar el ambiente exclusivo de nuestro comedor principal.' },
        { id: 'f4', question: '¿Disponen de aparcamiento o servicio de aparcacoches?', answer: 'Contamos con convenio de aparcamiento privado gratuito de 3 horas para nuestros clientes a 50 metros del local.' },
        { id: 'f5', question: '¿Se pueden realizar reservas de grupos o eventos privados?', answer: 'Sí, disponemos de 2 salones privados con capacidad de hasta 40 personas con menús de grupo personalizados.' },
        { id: 'f6', question: '¿Aceptan tarjetas internacionales y métodos de pago digitales?', answer: 'Aceptamos Visa, Mastercard, American Express, Apple Pay, Google Pay y Bizum.' }
      ],
      blog: [
        { id: 'b1', title: 'Los Secretos del Maridaje: Cómo Elegir el Vino Perfecto para la Carne', date: '10 Sep 2025', category: 'Cultura del Vino', readTime: '5 min', excerpt: 'Descubre cómo los taninos y la crianza del vino potencian el sabor de los cortes de alta maduración.', content: 'El maridaje entre vino y gastronomía es un arte de equilibrio...', imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80' },
        { id: 'b2', title: 'Tendencias Gastronómicas 2026: La Era de los Ingredientes Orgánicos', date: '02 Sep 2025', category: 'Alta Cocina', readTime: '4 min', excerpt: 'La sostenibilidad y la trazabilidad del producto local dominan las cocinas más prestigiosas de Europa.', content: 'Los comensales buscan autenticidad y frescura directa de la huerta...', imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80' }
      ],
      team: [
        { id: 'm1', name: 'Chef Marc Duprat', role: 'Executive Chef & Fundador', imageUrl: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=400&q=80' },
        { id: 'm2', name: 'Lucía Alarcón', role: 'Head Sommelier', imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80' }
      ],
      legal: {
        avisoLegal: 'BellaVista Gourmet S.L. NIF B-12345678. Registro Mercantil de Madrid, Tomo 450, Folio 12. Todos los derechos reservados.',
        privacidad: 'Los datos proporcionados en los formularios de reserva serán tratados exclusivamente para gestionar su mesa y enviarle confirmación.',
        cookies: 'Utilizamos cookies propias y de análisis de rendimiento para garantizar la mejor navegación.'
      }
    }
  },
  {
    id: 'dental',
    name: 'Salud & Clínica Dental',
    description: 'Citas médicas, cuadro médico, tratamientos y testimonios de pacientes.',
    icon: 'Stethoscope',
    defaultConfig: {
      name: 'Aura Dental Clinic',
      slogan: 'Tu sonrisa perfecta en manos de expertos',
      industry: 'dental',
      logoIcon: 'Sparkles',
      logoType: 'badge',
      heroHeadline: 'Odontología Avanzada y Estética de Vanguardia',
      heroSubheadline: 'Devolvemos la salud y la confianza a tu sonrisa con tecnología 3D indolora y los mejores especialistas reconocidos.',
      ctaText: 'Solicitar 1ª Cita Gratuita',
      secondaryCtaText: 'Ver Tratamientos',
      aboutTitle: 'Más de 15 años cuidando la salud bucodental',
      aboutBadge: 'Certificación de Excelencia 2025',
      aboutText: 'En Aura Dental combinamos el trato humano y cercano con escáneres intraorales de última generación para ofrecer diagnósticos precisos sin molestias.',
      aboutHistory: 'Fundada en 2010, Aura Dental ha atendido a más de 12.000 pacientes con un modelo de odontología ética, transparente y sin dolor.',
      aboutValues: ['Diagnóstico 3D Gratuito', 'Tratamientos Indoloros', 'Financiación hasta 36 Meses', 'Especialistas Titulados'],
      whatsappNumber: '+34611223344',
      phone: '+34 915 678 901',
      email: 'contacto@auradental.com',
      address: 'Calle Velázquez 45, Madrid',
      workingHours: 'Lun - Vie: 09:00 - 20:00',
      visualTheme: 'modern-glass',
      fontFamily: 'jakarta',
      palette: {
        primary: '#0284c7',
        secondary: '#0f172a',
        accent: '#38bdf8',
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
        team: true,
        blog: true,
        faq: true,
        contact: true,
        map: true,
        legal: true
      },
      currency: '€',
      benefits: [
        { id: 'b1', title: 'Primera Visita & Escáner 3D Gratis', description: 'Diagnóstico integral con radiografía digital panorámica sin coste.', iconName: 'Sparkles' },
        { id: 'b2', title: 'Tecnología de Anestesia Mágica Indolora', description: 'Sistemas de sedación consciente para pacientes con ansiedad.', iconName: 'ShieldCheck' },
        { id: 'b3', title: 'Financiación a tu Medida sin Intereses', description: 'Facilidades de pago hasta en 36 meses ajustadas a tu presupuesto.', iconName: 'CreditCard' }
      ],
      services: [
        { id: 's1', title: 'Ortodoncia Invisible (Invisalign)', description: 'Alinea tus dientes de forma discreta y cómoda con férulas transparentes a medida.', price: 'Desde 1.490 €', iconName: 'Smile', badge: 'Top Estética' },
        { id: 's2', title: 'Implantes Dentales Guiados 3D', description: 'Recupera piezas perdidas en una sola sesión con cirugía mínimamente invasiva.', price: 'Desde 650 €', iconName: 'ShieldCheck' },
        { id: 's3', title: 'Blanqueamiento Dental LED', description: 'Aclara hasta 4 tonos en 45 minutos sin sensibilidad posterior.', price: '190 €', iconName: 'Zap' },
        { id: 's4', title: 'Carillas de Porcelana & Disilicato', description: 'Diseño digital de sonrisa para corregir forma y color dental de manera permanente.', price: 'Desde 290 €', iconName: 'Sparkles' },
        { id: 's5', title: 'Endodoncia Rotatoria Mapeada', description: 'Salva piezas naturales con tratamientos de conducto rápidos y sin dolor.', price: '140 €', iconName: 'Activity' },
        { id: 's6', title: 'Odontopediatría & Ortodoncia Infantil', description: 'Cuidado dental preventivo para los más pequeños en un entorno divertido.', price: 'Desde 45 €', iconName: 'Heart' }
      ],
      portfolio: [
        { id: 'p1', title: 'Rehabilitación Oral Completa de Sonrisa', category: 'Implantes 3D', imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80', description: 'Colocación de 6 implantes superiores y prótesis fija fija en 24 horas.', clientName: 'Paciente J.M.', date: '2025' }
      ],
      testimonials: [
        { id: 't1', name: 'Laura Sánchez', role: 'Paciente Invisalign', comment: 'Tenía pánico al dentista y el equipo de Aura me hizo sentir super tranquila. Mi alineación quedó perfecta.', rating: 5, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80' },
        { id: 't2', name: 'Roberto Gómez', role: 'Paciente de Implantes', comment: 'Cirugía indolora de verdad. En una sola mañana salí con dientes nuevos y comiendo con normalidad.', rating: 5, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' }
      ],
      faqs: [
        { id: 'f1', question: '¿La primera revisión incluye diagnóstico X-Ray?', answer: 'Sí, la primera cita incluye revisión completa, radiografía panorámica digital y plan de tratamiento totalmente gratuito.' },
        { id: 'f2', question: '¿Duele el procedimiento de implantes dentales?', answer: 'No, aplicamos anestesia local de alta eficacia y sedación consciente si el paciente lo requiere. El postoperatorio es muy suave.' },
        { id: 'f3', question: '¿Cuánto tiempo dura el tratamiento de ortodoncia invisible?', answer: 'La duración media oscila entre 6 y 18 meses dependiendo de la complejidad del caso.' },
        { id: 'f4', question: '¿Ofrecen garantías por escrito en los tratamientos?', answer: 'Sí, todos nuestros implantes y prótesis cuentan con garantía por escrito de hasta 10 años.' }
      ],
      blog: [
        { id: 'b1', title: '5 Consejos para Mantener tus Dientes Blancos Tras un Blanqueamiento', date: '08 Sep 2025', category: 'Salud Oral', readTime: '3 min', excerpt: 'Evita alimentos con colorantes y mantén una higiene rigurosa para prolongar el brillo de tu sonrisa.', content: 'Mantener el blanco tras un blanqueamiento requiere ciertos cuidados sencillos...', imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80' }
      ],
      team: [
        { id: 'm1', name: 'Dra. Patricia Blanco', role: 'Directora Médica & Ortodoncista', imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80' }
      ],
      legal: {
        avisoLegal: 'Aura Dental S.L. Registro Sanitario Nº 4892/CS. Colegiados oficiales en el Ilustre Colegio de Odontólogos de Madrid.',
        privacidad: 'Sus datos de salud serán protegidos bajo el más estricto secreto médico profesional según el RGPD.',
        cookies: 'Utilizamos cookies estrictamente necesarias para la solicitud de citas en línea.'
      }
    }
  },
  {
    id: 'tech',
    name: 'Agencia Digital & Tech Startup',
    description: 'Servicios de software, portfolio de proyectos, calculador de presupuestos.',
    icon: 'Code',
    defaultConfig: {
      name: 'Nexus Digital Studio',
      slogan: 'Transformamos ideas en productos digitales de alto impacto',
      industry: 'tech',
      logoIcon: 'Cpu',
      logoType: 'badge',
      heroHeadline: 'Construimos el Software que Escala tu Negocio',
      heroSubheadline: 'Diseño UX/UI de nivel mundial, aplicaciones web y móviles impulsadas por IA creadas para convertir más usuarios.',
      ctaText: 'Solicitar Presupuesto',
      secondaryCtaText: 'Explorar Portafolio',
      aboutTitle: 'Ingeniería de Software & Diseño sin Limites',
      aboutBadge: 'Top Tech Agency 2025',
      aboutText: 'Ayudamos a startups y grandes corporaciones a crear plataformas intuitivas, rápidas y escalables con metodologías ágiles.',
      aboutHistory: 'Nacidos en 2018 como estudio boutique, hemos entregado más de 80 productos digitales SaaS a nivel mundial.',
      aboutValues: ['Desarrollo Ágil Sprint', 'Código Limpio Escalable', 'Diseño UX Centrado en Conversión', 'Soporte 24/7'],
      whatsappNumber: '+34622334455',
      phone: '+34 900 800 900',
      email: 'hello@nexusstudio.io',
      address: 'Gran Vía 28, Madrid',
      workingHours: 'Lun - Vie: 09:00 - 18:00',
      visualTheme: 'vibrant-creative',
      fontFamily: 'space',
      palette: {
        primary: '#8b5cf6',
        secondary: '#0f172a',
        accent: '#ec4899',
        bgMode: 'dark',
      },
      language: 'es',
      paymentMethods: { stripe: true, bizum: true, paypal: true },
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
      currency: '€',
      benefits: [
        { id: 'b1', title: 'Velocidad de Carga Ultrarrápida', description: 'Plataformas optimizadas para obtener puntuaciones 100/100 en Google PageSpeed.', iconName: 'Zap' },
        { id: 'b2', title: 'Propiedad 100% del Código Fuente', description: 'Entrega de repositorios sin dependencias ni ataduras propietarias.', iconName: 'Code' }
      ],
      services: [
        { id: 's1', title: 'Desarrollo Web & Apps Móviles', description: 'Creación de plataformas SaaS y aplicaciones nativas a medida con React, Next.js y Flutter.', price: 'Desde 2.500 €', iconName: 'Smartphone', badge: 'Destacado' },
        { id: 's2', title: 'Diseño UX/UI & Sistema de Diseño', description: 'Prototipado interactivo y auditorías de conversión para optimizar la experiencia de usuario.', price: 'Desde 1.200 €', iconName: 'Layout' },
        { id: 's3', title: 'Integración de IA & Automatizaciones', description: 'Conectamos modelos LLM y chatbots inteligentes a los procesos internos de tu empresa.', price: 'Desde 1.800 €', iconName: 'Bot' }
      ],
      portfolio: [
        { id: 'p1', title: 'Dashboard Analítico SaaS FinCloud', category: 'UX/UI & Dev', imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', description: 'Plataforma de finanzas con procesamiento en tiempo real.', clientName: 'FinCloud Inc.', date: '2025' }
      ],
      testimonials: [
        { id: 't1', name: 'Marcos Alonso', role: 'CEO de FinCloud', comment: 'Nexus renovó nuestra app corporativa. Incrementamos las conversiones un 140% en los primeros 3 meses.', rating: 5, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' }
      ],
      faqs: [
        { id: 'f1', question: '¿Cuánto tiempo tarda el desarrollo de un proyecto típico?', answer: 'Dependiendo del alcance, los proyectos suelen completarse entre 3 y 8 semanas con entregas semanales iterativas.' }
      ],
      blog: [
        { id: 'b1', title: 'Por qué React y Next.js son los Reyes del Web Dev en 2026', date: '11 Sep 2025', category: 'Frontend', readTime: '5 min', excerpt: 'Descubre las razones técnicas detrás del dominio de Next.js para SEO y rendimiento.', content: 'La arquitectura híbrida de renderizado en servidor...', imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80' }
      ],
      team: [
        { id: 'm1', name: 'Alex Rivera', role: 'Lead Fullstack Architect', imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80' }
      ],
      legal: {
        avisoLegal: 'Nexus Digital Studio S.L. CIF B-98765432. Inscrita en el Registro Mercantil de Madrid.',
        privacidad: 'Tratamiento de datos personales para la prestación de servicios de consultoría informática.',
        cookies: 'Uso de cookies de rendimiento analítico anónimo.'
      }
    }
  },
  {
    id: 'gym',
    name: 'Gimnasio & Fitness Center',
    description: 'Planes de membresía, clases guiadas, entrenadores personales y reservas.',
    icon: 'Dumbbell',
    defaultConfig: {
      name: 'Apex Fitness Club',
      slogan: 'Supera tus límites cada día',
      industry: 'gym',
      logoIcon: 'Zap',
      logoType: 'badge',
      heroHeadline: 'Transforma tu Cuerpo y Mente en Apex Club',
      heroSubheadline: 'Maquinaria de última generación, entrenamientos de alta intensidad y un equipo de instructores certificados para lograr tus metas.',
      ctaText: 'Probar 1 Día Gratis',
      secondaryCtaText: 'Ver Cuotas & Horarios',
      aboutTitle: 'La comunidad fitness número 1 de la ciudad',
      aboutBadge: 'Zona de Entrenamiento 24/7',
      aboutText: 'Más de 1.500 m² equipados con zonas de crossfit, musculación libre, piscina climatizada y spa de recuperación muscular.',
      aboutHistory: 'Abierto en 2015, Apex Fitness es la instalación deportiva de referencia con más de 3.000 socios activos.',
      aboutValues: ['Acceso 24/7', 'Entrenadores Certificados', 'Maquinaria Hammer Strength', 'Zona SPA & Recuperación'],
      whatsappNumber: '+34633445566',
      phone: '+34 911 223 344',
      email: 'info@apexfitness.com',
      address: 'Calle Aribau 88, Barcelona',
      workingHours: 'Lun - Dom: 06:00 - 23:00',
      visualTheme: 'vibrant-creative',
      fontFamily: 'inter',
      palette: {
        primary: '#ef4444',
        secondary: '#0f172a',
        accent: '#f97316',
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
        team: true,
        blog: true,
        faq: true,
        contact: true,
        map: true,
        legal: true
      },
      currency: '€',
      benefits: [
        { id: 'b1', title: 'Acceso Ilimitado 365 Días', description: 'Entrena cuando quieras sin restricciones de horario.', iconName: 'Clock' }
      ],
      services: [
        { id: 's1', title: 'Plan Mensual Total Access', description: 'Acceso ilimitado a gimnasio, clases colectivas (Spinning, Yoga, HIIT) y zona de spa.', price: '49 € / mes', iconName: 'Flame', badge: 'Recomendado' }
      ],
      portfolio: [
        { id: 'p1', title: 'Zona Crossfit & Funcional 2025', category: 'Instalaciones', imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80', description: 'Ampliación de 400m2 dedicados al entrenamiento funcional.', clientName: 'Apex Club', date: '2025' }
      ],
      testimonials: [
        { id: 't1', name: 'David Torres', role: 'Socio desde 2023', comment: 'La maquinaria es de primera y el ambiente de la zona crossfit es inmejorable.', rating: 5, avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80' }
      ],
      faqs: [
        { id: 'f1', question: '¿Tienen permanencia en los planes?', answer: 'No, en Apex Fitness no exigimos permanencias. Puedes cancelar o pausar tu suscripción en cualquier momento.' }
      ],
      blog: [
        { id: 'b1', title: 'Rutina HIIT de 20 Minutos para Quemar Grasa Efectivamente', date: '04 Sep 2025', category: 'Entrenamiento', readTime: '4 min', excerpt: 'Combina ejercicios compuestos con intervalos de alta densidad.', content: 'El entrenamiento interválico de alta intensidad...', imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80' }
      ],
      team: [
        { id: 'm1', name: 'Kevyn Miller', role: 'Head Trainer & Nutricionista', imageUrl: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=400&q=80' }
      ],
      legal: {
        avisoLegal: 'Apex Fitness Club S.L. NIF B-55443322.',
        privacidad: 'Tratamiento de datos personales para la gestión de la membresía y acceso mediante huella o código.',
        cookies: 'Uso de cookies analíticas.'
      }
    }
  },
  {
    id: 'law',
    name: 'Bufete de Abogados & Asesores',
    description: 'Servicios jurídicos, consulta directa, equipo legal y reputación.',
    icon: 'Scale',
    defaultConfig: {
      name: 'Vanguard Legal Consultores',
      slogan: 'Defendemos tus derechos con rigor y experiencia',
      industry: 'law',
      logoIcon: 'Scale',
      logoType: 'badge',
      heroHeadline: 'Soluciones Jurídicas Estratégicas para tu Empresa',
      heroSubheadline: 'Asesoramiento legal corporativo, defensa procesal y gestión fiscal con un firme compromiso por la excelencia y la discreción.',
      ctaText: 'Solicitar Primera Consulta',
      secondaryCtaText: 'Nuestras Áreas de Práctica',
      aboutTitle: 'Más de dos décadas de solvencia jurídica',
      aboutBadge: 'Firma Reconocida en España',
      aboutText: 'Vanguard Legal cuenta con abogados multidisciplinares altamente especializados en derecho mercantil, laboral y penal económico.',
      aboutHistory: 'Fundado en 2002, Vanguard Legal representa a corporaciones e individuos en litigios complejos con una tasa de éxito superior al 92%.',
      aboutValues: ['Confidencialidad Absoluta', 'Rigor Procesal', 'Transparencia de Honorarios', 'Atención Personalizada'],
      whatsappNumber: '+34644556677',
      phone: '+34 913 456 789',
      email: 'consultas@vanguardlegal.es',
      address: 'Calle Serrano 10, Madrid',
      workingHours: 'Lun - Vie: 08:30 - 19:30',
      visualTheme: 'luxury-gold',
      fontFamily: 'playfair',
      palette: {
        primary: '#1e3a8a',
        secondary: '#0f172a',
        accent: '#c084fc',
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
        team: true,
        blog: true,
        faq: true,
        contact: true,
        map: true,
        legal: true
      },
      currency: '€',
      benefits: [
        { id: 'b1', title: 'Primera Consulta de Evaluación', description: 'Estudio de viabilidad procesal confidencial.', iconName: 'ShieldAlert' }
      ],
      services: [
        { id: 's1', title: 'Derecho Mercantil & Societario', description: 'Fusión de empresas, redacción de contratos internacionales y resolución de conflictos entre socios.', price: 'Consulta a medida', iconName: 'Building2', badge: 'Especialidad' }
      ],
      portfolio: [
        { id: 'p1', title: 'Asesoramiento en Fusión Corporativa de 15M€', category: 'Mercantil', imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80', description: 'Estructuración jurídica de adquisición empresarial.', clientName: 'Confidencial', date: '2025' }
      ],
      testimonials: [
        { id: 't1', name: 'Ignacio de la Torre', role: 'Director Financiero Grupo Alfa', comment: 'La asesoría de Vanguard Legal durante la reestructuración de nuestro grupo fue clave.', rating: 5, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80' }
      ],
      faqs: [
        { id: 'f1', question: '¿La consulta inicial es confidencial?', answer: 'Absolutamente. Todas nuestras consultas están amparadas bajo el secreto profesional más estricto.' }
      ],
      blog: [
        { id: 'b1', title: 'Novedades Fiscales y Tributarias para Pymes en 2026', date: '01 Sep 2025', category: 'Derecho Fiscal', readTime: '6 min', excerpt: 'Repasamos los cambios normativos en el Impuesto de Sociedades.', content: 'La nueva ley de medidas tributarias incluye deducciones...', imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80' }
      ],
      team: [
        { id: 'm1', name: 'Lic. Fernando Vanguardia', role: 'Socio Fundador', imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80' }
      ],
      legal: {
        avisoLegal: 'Vanguard Legal Consultores S.L. Despacho colegiado en el ICAM bajo el número 12490.',
        privacidad: 'Tratamiento amparado bajo el secreto profesional del artículo 542 de la LOPJ.',
        cookies: 'Cookies técnicas para la correcta funcionalidad del sitio.'
      }
    }
  },
  {
    id: 'beauty',
    name: 'Centro de Belleza, Estética & Spa',
    description: 'Tratamientos de spa, peluquería, manicura, catálogo de servicios y citas.',
    icon: 'Sparkle',
    defaultConfig: {
      name: 'Velvet Beauty & Spa',
      slogan: 'Tu oasis de relajación y belleza integral',
      industry: 'beauty',
      logoIcon: 'Sparkles',
      logoType: 'badge',
      heroHeadline: 'Resalta tu Belleza Natural con Tratamientos Exclusivos',
      heroSubheadline: 'Un espacio de desconexión donde la cosmética natural avanzada y las manos de nuestros terapeutas renuevan tu bienestar.',
      ctaText: 'Reservar Tratamiento',
      secondaryCtaText: 'Ver Carta de Servicios',
      aboutTitle: 'El arte del cuidado personal y el relax',
      aboutBadge: 'Premio Beauty Spa 2025',
      aboutText: 'En Velvet nos enfocamos en experiencias holísticas. Disfruta de un ambiente de paz pura con aromaterapia y música relajante.',
      aboutHistory: 'Inaugurado en 2017, Velvet ha revolucionado los tratamientos estéticos combinando ingredientes botánicos orgánicos y tecnología facial LED.',
      aboutValues: ['Cosmética 100% Orgánica', 'Cabinas VIP Individuales', 'Terapeutas Tituladas', 'Aromaterapia Holística'],
      whatsappNumber: '+34655667788',
      phone: '+34 933 221 100',
      email: 'citas@velvetbeauty.com',
      address: 'Passeig de Gràcia 54, Barcelona',
      workingHours: 'Lun - Sáb: 10:00 - 20:30',
      visualTheme: 'luxury-gold',
      fontFamily: 'playfair',
      palette: {
        primary: '#ec4899',
        secondary: '#831843',
        accent: '#f472b6',
        bgMode: 'light',
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
        team: true,
        blog: true,
        faq: true,
        contact: true,
        map: true,
        legal: true
      },
      currency: '€',
      benefits: [
        { id: 'b1', title: 'Cosmética Vegana & Cruelty-Free', description: 'Productos respetuosos con tu piel y con el medio ambiente.', iconName: 'Sparkles' }
      ],
      services: [
        { id: 's1', title: 'Tratamiento Facial Illuminating Glow', description: 'Limpieza profunda con ácido hialurónico y velo de colágeno para una piel radiante.', price: '75 €', iconName: 'Sparkles', badge: 'Favorito' }
      ],
      portfolio: [
        { id: 'p1', title: 'Cabina de Aromaterapia & Hidromasaje', category: 'Spa VIP', imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80', description: 'Espacio de relajación profunda de diseño sensorial.', clientName: 'Velvet Spa', date: '2025' }
      ],
      testimonials: [
        { id: 't1', name: 'Sofía Martin', role: 'Cliente habitual', comment: 'Velvet es mi lugar sagrado para desconectar del estrés semanal. Salgo renovada siempre.', rating: 5, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' }
      ],
      faqs: [
        { id: 'f1', question: '¿Disponen de tarjetas de regalo?', answer: 'Sí, preparamos bonos regalo personalizados en cajas de lujo físicas o formato digital inmediato.' }
      ],
      blog: [
        { id: 'b1', title: 'Beneficios del Ácido Hialurónico en el Cuidado Facial Diario', date: '09 Sep 2025', category: 'Estética', readTime: '3 min', excerpt: 'Descubre cómo retener la hidratación profunda y rejuvenecer el rostro.', content: 'El ácido hialurónico es una molécula presente de forma natural...', imageUrl: 'https://images.unsplash.com/photo-1512290900673-7002b521761c?auto=format&fit=crop&w=800&q=80' }
      ],
      team: [
        { id: 'm1', name: 'Valeria Gómez', role: 'Master Estetiscista', imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80' }
      ],
      legal: {
        avisoLegal: 'Velvet Beauty & Spa S.L. CIF B-33221100.',
        privacidad: 'Tratamiento confidencial de datos de cita e historial de preferencias cosméticas.',
        cookies: 'Cookies de sesión para la reserva en línea.'
      }
    }
  }
];
