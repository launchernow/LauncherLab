import type { IndustryPreset } from '../types/business';

export const INDUSTRY_PRESETS: IndustryPreset[] = [
  {
    id: 'restaurant',
    name: 'Restaurante & Gastrobar',
    description: 'Menú interactivo de autor, reservas en línea, bodega de maridaje y eventos VIP.',
    icon: 'Utensils',
    defaultConfig: {
      name: 'BellaVista Gourmet',
      slogan: 'Gastronomía mediterránea de autor y bodega de colección',
      industry: 'restaurant',
      logoIcon: 'Utensils',
      logoType: 'badge',
      heroHeadline: 'Sabores Auténticos Elaborados con Pasión y Fuego de Leña',
      heroSubheadline: 'Platos de autor preparados con ingredientes ecológicos de proximidad, masa madre fermentada 72 horas y una bodega galardonada con más de 400 referencias.',
      ctaText: 'Reservar Mesa en Línea',
      secondaryCtaText: 'Ver Carta & Menú Degustación',
      aboutTitle: 'Tradición Culinaria & Vanguardia Gastronómica',
      aboutBadge: '⭐️ Guía Gastronómica 2026',
      aboutText: 'Desde 2012, BellaVista ha transformado la alta cocina local combinando la herencia de las recetas tradicionales mediterráneas con técnicas de vanguardia a baja temperatura.',
      aboutHistory: 'Fundado por el chef Marc Duprat tras su paso por emblemáticas cocinas de París y San Sebastián, BellaVista comenzó como un reservado de 8 mesas y hoy es un referente gastronómico internacional.',
      aboutValues: ['Ingredientes Ecológicos D.O.', 'Pescados de Lonja Diaria', 'Bodega Privada Climatizada', 'Servicio Sommelier VIP'],
      whatsappNumber: '+34600112233',
      phone: '+34 912 345 678',
      email: 'reservas@bellavistagourmet.com',
      address: 'Paseo de la Castellana 120, Madrid',
      workingHours: 'Lun - Dom: 13:00 - 16:30 | 20:00 - 23:30',
      visualTheme: 'luxury-gold',
      layoutModel: 'luxury',
      fontFamily: 'playfair',
      palette: {
        primary: '#d97706',
        secondary: '#0f172a',
        accent: '#f59e0b',
        bgMode: 'dark',
      },
      language: 'es',
      paymentMethods: { stripe: true, bizum: true, paypal: false },
      sections: {
        hero: true,
        benefits: true,
        process: true,
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
        { id: 'b1', title: 'Producto de Lonja y Huerto Ecológico', description: 'Recepción diaria de pescado fresco de lonja e hortalizas recolectadas a primera hora.', iconName: 'Leaf' },
        { id: 'b2', title: 'Masa Madre Fermentada 72 Horas', description: 'Panes e ingredientes horneados artesanalmente en nuestro horno napolitano a 480°C.', iconName: 'Flame' },
        { id: 'b3', title: 'Bodega Privada con Sommelier Dedicado', description: 'Más de 400 referencias seleccionadas y maridajes personalizados para cada pase.', iconName: 'Wine' }
      ],
      services: [
        { id: 's1', title: 'Menú Degustación "Origen" (7 Pases)', description: 'Recorrido sensorial por nuestra gastronomía con maridaje opcional de grandes añadas.', price: '85 € / persona', iconName: 'Wine', badge: 'Recomendado del Chef', imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80' },
        { id: 's2', title: 'Reserva Salón VIP & Eventos Privados', description: 'Comedor privado insonorizado con capacidad para 24 comensales y atención dedicada.', price: 'Desde 250 €', iconName: 'Crown', imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80' },
        { id: 's3', title: 'Catering Gastronómico Corporativo', description: 'Servicio exclusivo para bodas de lujo, galas de empresa y cócteles privados.', price: 'Presupuesto a medida', iconName: 'PartyPopper', imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80' },
        { id: 's4', title: 'Taller de Maridaje & Cata de Vinos', description: 'Experiencia guiada por nuestra Head Sommelier explorando quesos de autor y añadas históricas.', price: '65 € / persona', iconName: 'GlassWater', imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80' },
        { id: 's5', title: 'Experiencia "Mesa de la Cocina"', description: 'Cena interactiva dentro de nuestra propia cocina viendo trabajar al equipo de 8 cocineros.', price: '130 € / persona', iconName: 'UtensilsCrossed', imageUrl: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=800&q=80' },
        { id: 's6', title: 'Bono Regalo Gastronómico VIP', description: 'Tarjeta regalo física en estuche de piel o digital instantánea para sorprender.', price: 'Desde 90 €', iconName: 'Gift', imageUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80' }
      ],
      portfolio: [
        { id: 'p1', title: 'Catering Gala Anual Grupo Santander', category: 'Eventos Corporativos VIP', imageUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80', description: 'Catering para 220 ejecutivos internacionales en palacio histórico de Madrid.', clientName: 'Grupo Santander', date: '2025' },
        { id: 'p2', title: 'Lanzamiento Carta de Otoño-Invierno', category: 'Alta Cocina', imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80', description: 'Presentación de 14 creaciones de temporada con trufa negra y caza de monte.', clientName: 'BellaVista Studio', date: '2025' },
        { id: 'p3', title: 'Cena Privada de Embajada Internacional', category: 'Reservado VIP', imageUrl: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80', description: 'Servicio a puerta cerrada para cuerpo diplomático con menú degustación de 9 pases.', clientName: 'Embajada Diplomática', date: '2025' },
        { id: 'p4', title: 'Maridaje Anual Grandes Añadas Rioja', category: 'Cultura Sommelier', imageUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=800&q=80', description: 'Cata privada con botellas de cosecha seleccionada de entre 1982 y 2010.', clientName: 'Club del Vino', date: '2025' }
      ],
      testimonials: [
        { id: 't1', name: 'Carlos Mendoza', role: 'Crítico Gastronómico', comment: 'El solomillo de vaca madurada con trufa negra y la reducción de vino amontillado es simplemente memorable. El trato en sala marca la diferencia.', rating: 5, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' },
        { id: 't2', name: 'Elena Rostova', role: 'Directora Ejecutiva', comment: 'Organizamos nuestra junta directiva anual en el salón VIP. La privacidad, la puntualidad del servicio y la carta de vinos dejaron fascinados a todos.', rating: 5, avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80' },
        { id: 't3', name: 'David Fernández', role: 'Sommelier Invitado', comment: 'La temperatura de servicio, la cristalería Riedel y la pasión con la que explican cada maridaje convierten la cena en un espectáculo.', rating: 5, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
        { id: 't4', name: 'Marta Soler', role: 'Arquitecta de Interiores', comment: 'No es solo la comida insuperable, es el ambiente, la iluminación cálida y la música acústica tenue. Volveremos cada mes.', rating: 5, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80' }
      ],
      faqs: [
        { id: 'f1', question: '¿Con cuánta antelación debo reservar mesa?', answer: 'Recomendamos efectuar la reserva con 48 a 72 horas de antelación para servicios de fin de semana. Para el Salón VIP o la Mesa del Chef, aconsejamos 10 días de antelación.' },
        { id: 'f2', question: '¿Disponen de opciones para alergias, celiacos o dieta vegana?', answer: 'Absolutamente. Al confirmar su reserva o informar a su camarero, adaptamos cualquiera de nuestros menús degustación a requerimientos celiacos, sin lactosa o veganos.' },
        { id: 'f3', question: '¿Disponen de aparcamiento o servicio de aparcacoches?', answer: 'Ofrecemos 3 horas de aparcamiento gratuito concertado en el parking subterráneo adyacente a la entrada de Paseo de la Castellana.' },
        { id: 'f4', question: '¿Existe algún código de vestimenta (dress code)?', answer: 'Sugerimos un vestuario elegante-casual (smart casual) para preservar la atmósfera refinada de nuestro comedor principal.' },
        { id: 'f5', question: '¿Se pueden adquirir tarjetas regalo físicas o digitales?', answer: 'Sí, disponemos de Bonos Regalo para Menú Degustación presentados en estuche físico o enviados por PDF interactivo instantáneo.' }
      ],
      blog: [
        { id: 'b1', title: 'La Ciencia Detrás de las Maduraciones de Carne en Seco (Dry Aging)', date: '12 Sep 2025', category: 'Cultura Culinaria', readTime: '5 min lectura', excerpt: 'Cómo la fermentación enzimática controlada a 1.5°C potencia los matices mantecosos y la terneza de la carne.', content: 'La maduración en seco es una disciplina de precisión absoluta. Durante 45 a 90 días, la humedad controlada deshidrata la pieza...', imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80' },
        { id: 'b2', title: 'Maridajes Inusuales: Grandes Tintos con Pescados Azules de Lonja', date: '04 Sep 2025', category: 'Sommelier', readTime: '4 min lectura', excerpt: 'Rompemos los mitos clásicos analizando por qué un atún rojo a la brasa armoniza a la perfección con un Mencía o Pinot Noir.', content: 'Tradicionalmente se ha asociado el pescado al vino blanco, pero cuando trabajamos pescados grasos a la brasa de encina...', imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80' }
      ],
      team: [
        { id: 'm1', name: 'Chef Marc Duprat', role: 'Executive Chef & Fundador', imageUrl: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=400&q=80', bio: 'Más de 18 años al frente de cocinas de autor en París, San Sebastián y Madrid. Apasionado del producto de origen.' },
        { id: 'm2', name: 'Lucía Alarcón', role: 'Head Sommelier & Directora de Sala', imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80', bio: 'Mejor Sommelier de la Comunidad en 2024. Especialista en recuperación de pequeñas bodegas de autor.' },
        { id: 'm3', name: 'Antoine Moreau', role: 'Chef Pastelero & Repostero', imageUrl: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=400&q=80', bio: 'Maestro chocolatero graduado en la École Lenôtre de París. Creador de los célebres postres escultóricos de la casa.' }
      ],
      legal: {
        avisoLegal: 'BellaVista Gourmet S.L. NIF B-12345678. Inscrita en el Registro Mercantil de Madrid, Tomo 450, Folio 12, Hoja M-9821. Domicilio social en Paseo de la Castellana 120, Madrid.',
        privacidad: 'En cumplimiento del RGPD (UE 2016/679), le informamos que sus datos serán tratados exclusivamente para gestionar la confirmación de su reserva y enviarle alertas de servicio.',
        cookies: 'Utilizamos cookies técnicas necesarias para el funcionamiento del motor de reservas en línea y cookies de análisis anónimo.'
      }
    }
  },
  {
    id: 'dental',
    name: 'Salud & Clínica Dental 3D',
    description: 'Diagnóstico 3D, ortodoncia invisible Invisalign®, implantes inmediatos y odontología indolora.',
    icon: 'Stethoscope',
    defaultConfig: {
      name: 'Aura Dental Studio 3D',
      slogan: 'Odontología digital de precisión y diseño de sonrisa indoloro',
      industry: 'dental',
      logoIcon: 'Sparkles',
      logoType: 'badge',
      heroHeadline: 'Recupera la Salud y la Confianza de tu Sonrisa en 1 Cita',
      heroSubheadline: 'Escáner intraoral 3D sin moldes incómodos, implantes guiados por ordenador con cirugía mínimamente invasiva y financiación hasta 36 meses sin intereses.',
      ctaText: 'Solicitar 1ª Visita & TAC 3D Gratis',
      secondaryCtaText: 'Ver Tratamientos & Precios',
      aboutTitle: '15 Años de Excelencia Odontológica & Trato Humano',
      aboutBadge: '🏥 Registro Sanitario Certificado N.º 2800412',
      aboutText: 'En Aura Dental combinamos tecnología médica de vanguardia con un trato cercano y transparente. Nuestro equipo de implantólogos y ortodoncistas ha devuelto la sonrisa a más de 14.000 pacientes.',
      aboutHistory: 'Fundada en 2010 por la Dra. Patricia Blanco, la clínica nació con la premisa de eliminar el dolor y el miedo al dentista incorporando sistemas alemanes de sedación consciente y escáner digital iTero.',
      aboutValues: ['Diagnóstico 3D Gratuito', 'Garantía 10 Años por Escrito', 'Tratamiento Indoloro con Sedación', 'Financiación 100% Flexible'],
      whatsappNumber: '+34611223344',
      phone: '+34 915 678 901',
      email: 'contacto@auradental3d.com',
      address: 'Calle Velázquez 45, 1º Izq, Madrid',
      workingHours: 'Lun - Vie: 09:00 - 20:30 | Sáb: 10:00 - 14:00',
      visualTheme: 'modern-glass',
      layoutModel: 'conversion',
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
        process: true,
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
        { id: 'b1', title: '1ª Cita Gratuita con TAC 3D & Mapeo', description: 'Diagnóstico radiológico digital completo y simulación 3D de tu sonrisa sin compromiso.', iconName: 'Sparkles' },
        { id: 'b2', title: 'Cirugía Digital Guiada Mínimamente Invasiva', description: 'Colocación de implantes sin incisiones agresivas ni puntos de sutura incómodos.', iconName: 'ShieldCheck' },
        { id: 'b3', title: 'Financiación Flexible hasta 36 Meses', description: 'Planes de pago personalizados adaptados a tu presupuesto sin sorpresas finales.', iconName: 'CreditCard' }
      ],
      services: [
        { id: 's1', title: 'Ortodoncia Invisible (Invisalign® Platinum Provider)', description: 'Alineadores transparentes extraíbles con simulación 3D de resultados antes de iniciar.', price: 'Desde 1.490 €', iconName: 'Smile', badge: 'Más Solicitado', imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80' },
        { id: 's2', title: 'Implantes Dentales de Carga Inmediata (Dientes en 24h)', description: 'Recupera piezas perdidas con coronas fijas de zirconio el mismo día de la intervención.', price: 'Desde 690 €', iconName: 'ShieldCheck', imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80' },
        { id: 's3', title: 'Blanqueamiento Dental LED Philips Zoom®', description: 'Aclara hasta 5 tonos en 1 sola sesión clínica de 45 minutos sin sensibilidad posterior.', price: '210 €', iconName: 'Zap', imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80' },
        { id: 's4', title: 'Carillas de Porcelana & Disilicato de Litio', description: 'Diseño digital de sonrisa para perfeccionar la forma, el color y el cierre de espacios.', price: 'Desde 310 € / pieza', iconName: 'Sparkles', imageUrl: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80' },
        { id: 's5', title: 'Endodoncia Mapeada por Microscopio', description: 'Tratamientos de conducto de alta precisión para conservar tus dientes naturales intactos.', price: '150 €', iconName: 'Activity', imageUrl: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80' },
        { id: 's6', title: 'Odontopediatría & Ortodoncia Infantil', description: 'Prevención y guía del crecimiento dental en niños en un espacio lúdico y sin estrés.', price: 'Desde 45 €', iconName: 'Heart', imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80' }
      ],
      portfolio: [
        { id: 'p1', title: 'Rehabilitación Superior Completa con Implantes 3D', category: 'Implantología Digital', imageUrl: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80', description: 'Colocación de 6 implantes de titanio y prótesis fija de zirconio en 24h para paciente de 58 años.', clientName: 'Caso Paciente R.M.', date: '2025' },
        { id: 'p2', title: 'Diseño de Sonrisa con 8 Carillas de Disilicato', category: 'Estética Dental', imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80', description: 'Corrección de desgastes y asimetrías mediante microcarillas ultra-finas sin tallado agresivo.', clientName: 'Caso Paciente L.S.', date: '2025' },
        { id: 'p3', title: 'Tratamiento Invisalign Comprehensive 14 Meses', category: 'Ortodoncia Invisible', imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80', description: 'Cierre de apiñamiento severo y alineación de mordida sin extracciones.', clientName: 'Caso Paciente A.G.', date: '2025' }
      ],
      testimonials: [
        { id: 't1', name: 'Laura Sánchez', role: 'Paciente Invisalign', comment: 'Tenía fobia al dentista desde niña. La Dra. Patricia y su equipo me explicaron todo con el escáner 3D y el proceso con alineadores ha sido facilísimo y sin dolor.', rating: 5, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80' },
        { id: 't2', name: 'Roberto Gómez', role: 'Paciente de Implantes Inmediatos', comment: 'Llegué con mucha incertidumbre para ponerme dos implantes. Me intervinieron por la mañana con sedación suave y por la tarde ya tenía mis dientes fijos puestos.', rating: 5, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' },
        { id: 't3', name: 'Carmen Fernández', role: 'Paciente de Carillas Estéticas', comment: 'Mis dientes estaban manchados y desgastados. El diseño digital me permitió ver el resultado en pantalla antes de tocar nada. El cambio ha sido espectacular.', rating: 5, avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80' }
      ],
      faqs: [
        { id: 'f1', question: '¿Qué incluye la primera consulta gratuita?', answer: 'Incluye exploración clínica completa por el odontólogo especialista, radiografía panorámica digital 2D, escaneado intraoral 3D y presupuesto cerrado sin compromiso.' },
        { id: 'f2', question: '¿La colocación de implantes dentales produce dolor?', answer: 'No. Aplicamos anestesia local de última generación y opcionalmente sedación consciente supervisada por anestesista. El postoperatorio requiere analgesia suave durante 24-48h.' },
        { id: 'f3', question: '¿Qué diferencia hay entre Invisalign y los brackets tradicionales?', answer: 'Invisalign utiliza férulas transparentes hechas a medida que se pueden retirar para comer y cepillarse, evitando llagas, urgencias por alambres y siendo casi invisibles a la vista.' },
        { id: 'f4', question: '¿Qué garantía tienen los implantes y carillas?', answer: 'Todos nuestros implantes y prótesis cuentan con garantía por escrito de 10 años respaldada por los mejores laboratorios protésicos de España.' }
      ],
      blog: [
        { id: 'b1', title: 'Ventajas del Escáner Intraoral 3D Frente a los Moldes de Silicona', date: '08 Sep 2025', category: 'Tecnología Médica', readTime: '4 min lectura', excerpt: 'Cómo la tecnología óptica iTero elimina las náuseas y captura más de 6.000 fotos por segundo con exactitud micrométrica.', content: 'Tomar impresiones dentales con siliconas incómodas es cosa del pasado...', imageUrl: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80' },
        { id: 'b2', title: 'Cómo Mantener tus Dientes Blancos Tras un Blanqueamiento LED', date: '01 Sep 2025', category: 'Salud Oral', readTime: '3 min lectura', excerpt: 'La regla de la "dieta blanca" durante las primeras 72 horas y el uso de pastas desensibilizantes.', content: 'Tras un blanqueamiento clínicamente supervisado, los túbulos de la dentina...', imageUrl: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80' }
      ],
      team: [
        { id: 'm1', name: 'Dra. Patricia Blanco', role: 'Directora Médica & Especialista en Ortodoncia 3D', imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80', bio: 'Licenciada en Odontología por la UCM, Master en Ortodoncia por Invisalign e investigadora en escaneado óptico.' },
        { id: 'm2', name: 'Dr. Alejandro Ruiz', role: 'Cirujano Máxilofacial & Implantólogo', imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80', bio: 'Más de 5.000 implantes de titanio colocados. Especialista en cirugías complejas de regeneración ósea.' },
        { id: 'm3', name: 'Dra. Sofía Navarro', role: 'Especialista en Estética & Odontopediatría', imageUrl: 'https://images.unsplash.com/photo-1594824813572-c2885966eb85?auto=format&fit=crop&w=400&q=80', bio: 'Experta en carillas ultrafinas de disilicato y tratamiento preventivo en niños sin ansiedad.' }
      ],
      legal: {
        avisoLegal: 'Aura Dental Studio 3D S.L. Registro Sanitario de la Comunidad de Madrid Nº 4892/CS. Médicos colegiados en el Ilustre Colegio Oficial de Odontólogos y Estomatólogos de Madrid (COEM).',
        privacidad: 'Sus datos de salud están amparados bajo el secreto profesional médico y protegidos mediante cifrado según el artículo 9 del RGPD.',
        cookies: 'Utilizamos cookies estrictamente necesarias para la gestión de citas y analítica anónima de tráfico médico.'
      }
    }
  },
  {
    id: 'tech',
    name: 'Agencia Digital & Tech Studio',
    description: 'Desarrollo de software SaaS, apps móviles React Native/Flutter, diseño UX/UI e integración de IA.',
    icon: 'Code',
    defaultConfig: {
      name: 'Nexus Tech & Design Studio',
      slogan: 'Arquitectura de software escalable y productos digitales de alto rendimiento',
      industry: 'tech',
      logoIcon: 'Cpu',
      logoType: 'badge',
      heroHeadline: 'Ingeniería de Software & Diseño UX/UI Creados para Escalar',
      heroSubheadline: 'Desarrollamos aplicaciones web progresivas, plataformas SaaS nativas en la nube e integraciones de IA avanzada diseñadas para aumentar la conversión de tu negocio.',
      ctaText: 'Solicitar Presupuesto Técnico',
      secondaryCtaText: 'Ver Proyectos & Casos de Éxito',
      aboutTitle: 'Creamos el Software Detrás de las Startups de Mayor Crecimiento',
      aboutBadge: '🚀 Agencia Top Web 2026',
      aboutText: 'En Nexus unimos código limpio, arquitectura Serverless en AWS y sistemas de diseño atómicos en Figma para convertir ideas complejas en productos digitales ágiles y rentables.',
      aboutHistory: 'Nacidos en 2018 como estudio boutique de ingeniería, hemos lanzado con éxito más de 95 productos digitales para startups de Silicon Valley, Madrid y Londres.',
      aboutValues: ['Sprints de Entrega Semanal', 'Código 100% Propietario', 'Arquitectura AWS Serverless', 'Optimización Google PageSpeed 100'],
      whatsappNumber: '+34622334455',
      phone: '+34 900 800 900',
      email: 'hello@nexustechstudio.io',
      address: 'Gran Vía 28, Planta 4, Madrid',
      workingHours: 'Lun - Vie: 09:00 - 18:30',
      visualTheme: 'vibrant-creative',
      layoutModel: 'modern',
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
        process: true,
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
        { id: 'b1', title: 'Velocidad & Puntuación 100/100 en Google PageSpeed', description: 'Plataformas optimizadas con Server-Side Rendering para tiempos de carga inferiores a 0.8 segundos.', iconName: 'Zap' },
        { id: 'b2', title: 'Propiedad 100% del Código & Repositorio GitHub', description: 'Entregamos repositorios Git documentados sin ataduras a plataformas propietarias cerradas.', iconName: 'Code' },
        { id: 'b3', title: 'Arquitectura Cloud Escalable & Ciberseguridad', description: 'Despliegues automatizados en Vercel/AWS con certificados SSL, protección anti-DDoS y backups.', iconName: 'ShieldCheck' }
      ],
      services: [
        { id: 's1', title: 'Desarrollo Web & SaaS a Medida (React / Next.js)', description: 'Plataformas web rápidas, escalables y orientadas a SEO con arquitectura de microservicios.', price: 'Desde 2.450 €', iconName: 'Layout', badge: 'Servicio Estrella', imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80' },
        { id: 's2', title: 'Diseño UX/UI & Sistema de Diseño Atómico', description: 'Auditorías de usabilidad, prototipos interactivos en Figma y guías de estilos para marca.', price: 'Desde 1.200 €', iconName: 'Smartphone', imageUrl: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80' },
        { id: 's3', title: 'Integración de Inteligencia Artificial & Chatbots LLM', description: 'Conectamos modelos de OpenAI, Anthropic y agentes autónomos a los datos internos de tu negocio.', price: 'Desde 1.850 €', iconName: 'Cpu', imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80' },
        { id: 's4', title: 'Desarrollo de Apps Móviles Nativas (iOS & Android)', description: 'Aplicaciones de alto rendimiento desarrolladas con React Native y Flutter con notificaciones push.', price: 'Desde 3.200 €', iconName: 'Smartphone', imageUrl: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80' },
        { id: 's5', title: 'Auditoría de Ciberseguridad & Infraestructura Cloud', description: 'Optimización de servidores AWS/Google Cloud, tests de penetración y cumplimiento RGPD.', price: 'Desde 950 €', iconName: 'ShieldCheck', imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80' },
        { id: 's6', title: 'E-commerce Avanzado (Shopify Headless / Stripe)', description: 'Tiendas en línea de alta conversión integradas con pasarelas de pago y ERP logístico.', price: 'Desde 1.950 €', iconName: 'CreditCard', imageUrl: 'https://images.unsplash.com/photo-1556742049-0a67daf4005a?auto=format&fit=crop&w=800&q=80' }
      ],
      portfolio: [
        { id: 'p1', title: 'Plataforma Analítica SaaS FinCloud (Fintech)', category: 'Desarrollo SaaS & UX', imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', description: 'Dashboard financiero en tiempo real con procesamiento de 100.000 datos por segundo y exportación PDF.', clientName: 'FinCloud Technologies', date: '2025' },
        { id: 'p2', title: 'App Móvil de Reserva de Pistas SportPass', category: 'App iOS & Android', imageUrl: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=800&q=80', description: 'Aplicación nativa con geolocalización, pago por Bizum/Stripe y más de 45.000 descargas activas.', clientName: 'SportPass Global', date: '2025' },
        { id: 'p3', title: 'Rediseño E-commerce de Lujo Silk & Co.', category: 'Headless E-Commerce', imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80', description: 'Plataforma de venta internacional en 4 idiomas con carga en 0.6s y aumento del 165% en conversión.', clientName: 'Silk & Co. London', date: '2025' }
      ],
      testimonials: [
        { id: 't1', name: 'Marcos Alonso', role: 'CEO de FinCloud Fintech', comment: 'Nexus rediseñó y programó nuestra plataforma en tiempo récord. El rendimiento en móviles es asombroso y la conversión subió un 140% en 90 días.', rating: 5, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
        { id: 't2', name: 'Beatriz Solano', role: 'Directora de Producto en SportPass', comment: 'El equipo de diseño UX entendió a la perfección lo que necesitaban nuestros usuarios. La comunicación en Slack durante los sprints fue de 10.', rating: 5, avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80' },
        { id: 't3', name: 'Javier Roca', role: 'CTO de LogisticsNow', comment: 'Cero quebraderos de cabeza con el código. Todo está documentado en TypeScript limpio con cobertura de tests del 95%. Volveremos a trabajar con ellos seguro.', rating: 5, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' }
      ],
      faqs: [
        { id: 'f1', question: '¿Cuál es el tiempo medio de desarrollo de un proyecto?', answer: 'Un proyecto de sitio web corporativo o Landing Page suele llevar entre 2 y 3 semanas. Una plataforma SaaS o App móvil completa oscila entre 5 y 9 semanas con sprints semanales probables en un entorno de staging.' },
        { id: 'f2', question: '¿El código fuente es totalmente de mi propiedad?', answer: 'Sí. Al finalizar el proyecto y realizar la entrega, transferimos la propiedad total del repositorio Git, diseños en Figma y credenciales de servidores.' },
        { id: 'f3', question: '¿Ofrecen servicio de mantenimiento y actualizaciones post-lanzamiento?', answer: 'Disponemos de planes de soporte técnico continuo que incluyen parches de seguridad, backups diarios, monitorización 24/7 y horas mensuales para nuevas funcionalidades.' }
      ],
      blog: [
        { id: 'b1', title: 'Por qué Next.js 15 y TailwindCSS Dominan el Desarrollo Web en 2026', date: '11 Sep 2025', category: 'Frontend Architecture', readTime: '5 min lectura', excerpt: 'Analizamos las ventajas del Server-Side Rendering (SSR) frente al renderizado cliente tradicional para posicionar en Google.', content: 'La velocidad de respuesta inicial es hoy el factor número uno de ranking en Google...', imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80' },
        { id: 'b2', title: 'Cómo Integrar Agentes de IA en tu Software sin Elevar Costes de Servidor', date: '03 Sep 2025', category: 'Artificial Intelligence', readTime: '6 min lectura', excerpt: 'Uso de arquitecturas de streaming de respuestas y cachés semánticas con Redis.', content: 'Conectar modelos de lenguaje directamente a peticiones HTTP sin control de caché puede disparar la factura de OpenAI...', imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80' }
      ],
      team: [
        { id: 'm1', name: 'Alex Rivera', role: 'Lead Software Architect & Co-Fundador', imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80', bio: 'Ingeniero Informático con 12 años de experiencia en arquitectura Serverless AWS y React Core.' },
        { id: 'm2', name: 'Elena Beltrán', role: 'Head of UX/UI Design', imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80', bio: 'Ex-Lead Designer en Spotify. Especialista en sistemas de diseño escalables y conversión micro-interactiva.' },
        { id: 'm3', name: 'Guillermo Sanz', role: 'DevOps & Cloud Security Specialist', imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80', bio: 'Experto en Kubernetes, Docker pipelines y ciberseguridad con certificaciones oficiales de Amazon Web Services.' }
      ],
      legal: {
        avisoLegal: 'Nexus Tech & Design Studio S.L. NIF B-98765432. Inscrita en el Registro Mercantil de Madrid, Tomo 320, Folio 45. Domicilio en Gran Vía 28, Madrid.',
        privacidad: 'Sus datos de contacto serán tratados exclusivamente para responder a su solicitud de presupuesto bajo las exigencias del RGPD.',
        cookies: 'Utilizamos cookies de rendimiento anónimo para medir interacciones del sitio web.'
      }
    }
  },
  {
    id: 'gym',
    name: 'Gimnasio & Fitness Club 24/7',
    description: 'Musculación, zona de CrossFit, clases guiadas de HIIT y entrenamiento personal con nutrición.',
    icon: 'Dumbbell',
    defaultConfig: {
      name: 'Apex Performance Club',
      slogan: 'Supera tus límites en el centro deportivo más avanzado',
      industry: 'gym',
      logoIcon: 'Zap',
      logoType: 'badge',
      heroHeadline: 'Transforma tu Fuerza y Rendimiento Físico',
      heroSubheadline: 'Más de 1.600 m² equipados con maquinaria Hammer Strength®, zona de peso libre Eleiko®, estudio de CrossFit y área SPA de recuperación muscular.',
      ctaText: 'Probar 1 Día Totalmente Gratis',
      secondaryCtaText: 'Ver Cuotas & Horarios de Clases',
      aboutTitle: 'La Comunidad Fitness Referente en la Ciudad',
      aboutBadge: '🔥 Instalación Deporte 2026',
      aboutText: 'Apex Club nació para ofrecer un entorno de alta motivación donde tanto atletas avanzados como principiantes encuentran la maquinaria y el apoyo técnico necesarios.',
      aboutHistory: 'Inaugurado en 2016 por los campeones nacionales Kevyn Miller y Sandra Vega, Apex ha crecido hasta contar con más de 3.200 socios activos y un ratio de 1 entrenador por cada 8 usuarios en zona libre.',
      aboutValues: ['Acceso Digital 24 Horas', 'Entrenadores Graduados en CAFYD', 'Zona SPA & Criosauna', 'App Móvil de Reserva de Clases'],
      whatsappNumber: '+34633445566',
      phone: '+34 911 223 344',
      email: 'info@apexperformance.com',
      address: 'Calle Aribau 88, Barcelona',
      workingHours: 'Abierto 24 Horas / 365 Días',
      visualTheme: 'vibrant-creative',
      layoutModel: 'modern',
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
        process: true,
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
        { id: 'b1', title: 'Acceso Ilimitado 24/7 con Huella / QR', description: 'Entrena a cualquier hora del día o de la noche con total seguridad y control de acceso.', iconName: 'Clock' },
        { id: 'b2', title: 'Maquinaria de Competición Hammer & Eleiko', description: 'Equipamiento oficial utilizado por atletas profesionales para evitar lesiones articulares.', iconName: 'Flame' },
        { id: 'b3', title: 'Estudio de Nutrición & Análisis de InBody', description: 'Bioimpedancia eléctrica mensual para medir tu porcentaje de grasa y masa muscular real.', iconName: 'Activity' }
      ],
      services: [
        { id: 's1', title: 'Plan Mensual "Total Access 24/7"', description: 'Acceso ilimitado a todas las zonas de musculación, clases dirigidas (Spinning, HIIT, Yoga) y spa.', price: '45 € / mes', iconName: 'Flame', badge: 'Plan Más Popular', imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80' },
        { id: 's2', title: 'Entrenamiento Personalizado 1-a-1', description: 'Plan individualizado con entrenador certificado enfocado en hipertrofia, pérdida de grasa o rehabilitación.', price: 'Desde 28 € / sesión', iconName: 'UserCheck', imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80' },
        { id: 's3', title: 'Clases de CrossFit & Hyrox Conditioning', description: 'Grupos reducidos de alta intensidad guiados por coaches oficiales para llevar tus pulsaciones al máximo.', price: 'Incluido en cuota VIP', iconName: 'Zap', imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80' },
        { id: 's4', title: 'Zona SPA, Sauna Finlandesa & Baño Turco', description: 'Circuito térmico de relajación para reacondicionar el sistema nervioso y acelerar la recuperación.', price: 'Incluido en cuota VIP', iconName: 'Sparkles', imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80' },
        { id: 's5', title: 'Asesoramiento Nutricional Deportivo', description: 'Pauta de alimentación flexible calculada según tu gasto calórico basal y tus objetivos físicos.', price: '35 € / revisión', iconName: 'Heart', imageUrl: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80' },
        { id: 's6', title: 'Estudio de Reformer Pilates & Movilidad', description: 'Sesiones de tonificación muscular profunda, corrección postural y salud articular.', price: 'Desde 15 € / clase', iconName: 'Smile', imageUrl: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80' }
      ],
      portfolio: [
        { id: 'p1', title: 'Ampliación Zona CrossFit & Hyrox 2025', category: 'Instalaciones VIP', imageUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80', description: 'Nueva nave adyacente de 500 m² con 12 racks de sentadilla Eleiko y césped de arrastre de trineo.', clientName: 'Apex Club', date: '2025' },
        { id: 'p2', title: 'Transformación Física 12 Semanas (Caso Real)', category: 'Entrenamiento Personal', imageUrl: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80', description: 'Reducción del 14% de grasa corporal con aumento de 4.2 kg de masa magra en socio de 34 años.', clientName: 'Socio M.R.', date: '2025' }
      ],
      testimonials: [
        { id: 't1', name: 'David Torres', role: 'Socio desde 2023', comment: 'Llevo 10 años entrenando y este es sin duda el mejor gimnasio en el que he estado. La maquinaria de peso libre Eleiko no falla nunca y el ambiente de respeto en la sala es excelente.', rating: 5, avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80' },
        { id: 't2', name: 'Claudia Pastor', role: 'Usuaria de Clases HIIT', comment: 'Las clases de Crossfit de la mañana me dan la energía para todo el día. Los monitores están súper encima tuyo para corregir la técnica de los levantamientos.', rating: 5, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' }
      ],
      faqs: [
        { id: 'f1', question: '¿Existe permanencia obligatoria en la cuota?', answer: 'No. Creemos en la libertad del socio. Puedes congelar tu suscripción durante vacaciones o cancelarla sin penalizaciones con un solo clic.' },
        { id: 'f2', question: '¿Cómo funciona el pase de 1 día de prueba gratuito?', answer: 'Solo debes pulsar el botón de WhatsApp o rellenar el formulario. Te enviaremos un código QR a tu móvil para acceder hoy mismo y probar las instalaciones sin coste.' },
        { id: 'f3', question: '¿Qué incluye la cuota mensual estándar?', answer: 'Incluye acceso a la zona de pesas, cardio, taquillas individuales con cierre digital, duchas y todas las clases colectivas del horario general.' }
      ],
      blog: [
        { id: 'b1', title: 'Rutina de Fuerza Basal: Por qué los Ejercicios Multiarticulares Ganan a las Máquinas', date: '04 Sep 2025', category: 'Fisiología Deportiva', readTime: '5 min lectura', excerpt: 'Análisis de la activación neuromuscular en sentadilla, peso muerto y press militar.', content: 'Los ejercicios básicos compuestos reclutan una mayor densidad de unidades motoras...', imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80' }
      ],
      team: [
        { id: 'm1', name: 'Kevyn Miller', role: 'Head Coach & Director Técnico', imageUrl: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=400&q=80', bio: 'Graduado en Ciencias de la Actividad Física y el Deporte (CAFYD). Ex-atleta de halterofilia de competición.' },
        { id: 'm2', name: 'Sandra Vega', role: 'Master Trainer & Nutricionista', imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80', bio: 'Especialista en biomecánica deportiva y nutrición clínica enfocada en recomposición corporal.' }
      ],
      legal: {
        avisoLegal: 'Apex Performance Club S.L. CIF B-55443322. Domicilio social en Calle Aribau 88, Barcelona.',
        privacidad: 'Los datos biométricos o de acceso por QR son utilizados exclusivamente para la verificación de entrada del socio.',
        cookies: 'Cookies técnicas necesarias para el portal de socios.'
      }
    }
  },
  {
    id: 'law',
    name: 'Bufete de Abogados & Asesores',
    description: 'Derecho mercantil, procesal, asesoría fiscal corporativa y litigios complejos.',
    icon: 'Scale',
    defaultConfig: {
      name: 'Vanguard Legal Consultores',
      slogan: 'Defensa jurídica estratégica y solvencia en litigios corporativos',
      industry: 'law',
      logoIcon: 'Scale',
      logoType: 'badge',
      heroHeadline: 'Soluciones Legales Rigurosas que Protegen tu Empresa',
      heroSubheadline: 'Asesoramiento jurídico corporativo, mediación mercantil y defensa procesal ante tribunales con una tasa de éxito superior al 93% en reclamaciones de alta complejidad.',
      ctaText: 'Solicitar 1ª Consulta Confidencial',
      secondaryCtaText: 'Conocer Áreas de Práctica',
      aboutTitle: 'Más de 20 Años de Rigor Procesal & Éxito Judicial',
      aboutBadge: '⚖️ Despacho Colegiado ICAM N.º 12490',
      aboutText: 'En Vanguard Legal combinamos la tradición del ejercicio del derecho con un enfoque estratégico ágil. Representamos a grupos empresariales, inversores y particulares en procedimientos de gran calado.',
      aboutHistory: 'Fundado en 2002 por el letrado Fernando Vanguardia, el despacho ha intervenido en fusiones transfronterizas y litigios bancarios recuperando más de 45 millones de euros para nuestros clientes.',
      aboutValues: ['Confidencialidad & Secreto Profesional', 'Presupuestos Cerrados sin Sorpresas', 'Atención Directa por Abogado Socio', 'Estrategia Procesal de Alta Precisión'],
      whatsappNumber: '+34644556677',
      phone: '+34 913 456 789',
      email: 'consultas@vanguardlegal.es',
      address: 'Calle Serrano 10, Planta 3ª, Madrid',
      workingHours: 'Lun - Vie: 08:30 - 19:30',
      visualTheme: 'luxury-gold',
      layoutModel: 'minimal',
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
        process: true,
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
        { id: 'b1', title: 'Primera Consulta de Viabilidad Gratuita', description: 'Estudiamos su documentación procesal antes de iniciar acciones para garantizar probabilidades reales de éxito.', iconName: 'ShieldAlert' },
        { id: 'b2', title: 'Presupuesto Cerrado por Escrito', description: 'Hoja de encargo transparente con desglose claro de honorarios y costes procesales desde el primer día.', iconName: 'FileText' },
        { id: 'b3', title: 'Amparo del Secreto Profesional Médico-Legal', description: 'Máxima confidencialidad amparada bajo el artículo 542 de la Ley Orgánica del Poder Judicial.', iconName: 'ShieldCheck' }
      ],
      services: [
        { id: 's1', title: 'Derecho Mercantil & Fusiones (M&A)', description: 'Redacción de pactos de socios, reestructuración de grupos empresariales y auditorías Due Diligence.', price: 'Presupuesto por encargo', iconName: 'Building2', badge: 'Especialidad', imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80' },
        { id: 's2', title: 'Litigación Procesal & Defensa en Juzgados', description: 'Representación en juicios civiles, mercantiles y contencioso-administrativos en todas las instancias.', price: 'Hoja de encargo fija', iconName: 'Scale', imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80' },
        { id: 's3', title: 'Planificación Fiscal Corporativa & Tributaria', description: 'Optimización legal de impuestos para PYMES y grandes patrimonios bajo la normativa tributaria vigente.', price: 'Desde 350 € / mes', iconName: 'CreditCard', imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80' },
        { id: 's4', title: 'Derecho Penal Económico & Compliance Legal', description: 'Defensa en delitos societarios, estafas y prevención de responsabilidad penal para administradores.', price: 'Consulta prioritaria', iconName: 'ShieldCheck', imageUrl: 'https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80' },
        { id: 's5', title: 'Propiedad Intelectual, Marcas & Patentes', description: 'Protección internacional de software, registro de marcas comerciales en la OEPM y secretos industriales.', price: 'Desde 490 €', iconName: 'Sparkles', imageUrl: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80' },
        { id: 's6', title: 'Derecho Inmobiliario & Transacciones Financieras', description: 'Asesoramiento en compraventa de inmuebles, contratos de arrendamiento corporativo y cargas urbanísticas.', price: 'Consulta individual', iconName: 'Building2', imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80' }
      ],
      portfolio: [
        { id: 'p1', title: 'Asesoramiento en Fusión Mercantil de 18,5 M€', category: 'Derecho Corporativo', imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80', description: 'Redacción de pactos de socios y Due Diligence completa para adquisición de grupo logístico.', clientName: 'Cliente Confidencial', date: '2025' },
        { id: 'p2', title: 'Sentencia Favorable en Recurso Contencioso', category: 'Defensa Procesal', imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80', description: 'Anulación de sanción administrativa de 2.4 M€ interpuesta a constructora nacional.', clientName: 'Grupo Inmobiliario Norte', date: '2025' }
      ],
      testimonials: [
        { id: 't1', name: 'Ignacio de la Torre', role: 'Director Financiero Grupo Alfa', comment: 'El rigor técnico del letrado Fernando Vanguardia en la negociación de nuestro concurso de acreedores fue brillante. Logramos una quita del 40% y la viabilidad total.', rating: 5, avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80' },
        { id: 't2', name: 'Mercedes Alarcón', role: 'Fundadora de TechSolutions', comment: 'Llevan la asesoría fiscal y mercantil de nuestra empresa desde hace 6 años. La tranquilidad de tener abogados que responden el teléfono al instante no tiene precio.', rating: 5, avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80' }
      ],
      faqs: [
        { id: 'f1', question: '¿Cómo se estructura el cobro de honorarios?', answer: 'Presentamos una hoja de encargo previa con presupuesto cerrado detallando la consulta, redacción de escritos o vistas judiciales. Sin costes ocultos.' },
        { id: 'f2', question: '¿Puedo realizar una primera consulta de valoración por videollamada?', answer: 'Sí. Ofrecemos reuniones presenciales en nuestro despacho de la Calle Serrano o consultas telemáticas seguras vía Microsoft Teams o Zoom.' }
      ],
      blog: [
        { id: 'b1', title: 'Claves Fiscales y Deducciones del Impuesto de Sociedades en 2026', date: '01 Sep 2025', category: 'Derecho Tributario', readTime: '6 min lectura', excerpt: 'Repaso detallado de las nuevas bonificaciones por inversión en I+D y transición energética.', content: 'Las modificaciones en el impuesto de sociedades introducen deducciones del 25%...', imageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80' }
      ],
      team: [
        { id: 'm1', name: 'Lic. Fernando Vanguardia', role: 'Socio Fundador & Especialista Mercantil', imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80', bio: 'Abogado colegiado con 24 años de experiencia en estrados. Ex-asesor jurídico de entidades bancarias internacionales.' },
        { id: 'm2', name: 'Dra. Carmen de la Rosa', role: 'Socia de Derecho Procesal & Penal Económico', imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80', bio: 'Doctora en Derecho Procesal por la UCM. Autora de 3 libros sobre mediación mercantil y compliance corporativo.' }
      ],
      legal: {
        avisoLegal: 'Vanguard Legal Consultores S.L. CIF B-11223344. Despacho profesional inscrito en el Ilustre Colegio de Abogados de Madrid (ICAM) bajo el número 12490.',
        privacidad: 'Los datos e informaciones facilitadas están amparadas bajo el Secreto Profesional regulado en el Estatuto General de la Abogacía Española.',
        cookies: 'Cookies técnicas de uso exclusivo para la funcionalidad de la plataforma web.'
      }
    }
  },
  {
    id: 'beauty',
    name: 'Centro de Belleza, Estética & Spa',
    description: 'Tratamientos faciales con ácido hialurónico, maderoterapia corporal, masajes holísticos y estética avanzada.',
    icon: 'Sparkle',
    defaultConfig: {
      name: 'Velvet Wellness & Spa',
      slogan: 'Tu santuario de belleza natural, regeneración facial y calma interior',
      industry: 'beauty',
      logoIcon: 'Sparkles',
      logoType: 'badge',
      heroHeadline: 'Renueva tu Piel y Equilibra tu Cuerpo en un Entorno Sensorial',
      heroSubheadline: 'Tratamientos faciales botánicos de alta cosmética, maderoterapia corporal de remodelación y rituales de aromaterapia holística para una desconexión total.',
      ctaText: 'Reservar Cita en Línea',
      secondaryCtaText: 'Ver Carta de Tratamientos & Precios',
      aboutTitle: 'El Arte de la Estética Avanzada & la Cosmética Orgánica',
      aboutBadge: '✨ Galardón Beauty Spa 2026',
      aboutText: 'En Velvet creemos que la verdadera belleza brota del equilibrio entre el cuidado cutáneo de precisión y el bienestar emocional. Nuestras cabinas VIP ofrecen un retiro de paz en pleno centro.',
      aboutHistory: 'Inaugurado en 2017 por la estetiscista Valeria Gómez, Velvet se ha consolidado como el centro de belleza de referencia combinando cosmética certificada 100% cruelty-free y aparatología de diodo de última generación.',
      aboutValues: ['Cosmética Orgánica 100% Vegana', 'Cabinas VIP Insonorizadas', 'Diagnóstico Cutáneo Digital', 'Rituales Sensoriales de Bienestar'],
      whatsappNumber: '+34655667788',
      phone: '+34 933 221 100',
      email: 'citas@velvetwellness.com',
      address: 'Passeig de Gràcia 54, Barcelona',
      workingHours: 'Lun - Sáb: 10:00 - 20:30',
      visualTheme: 'luxury-gold',
      layoutModel: 'luxury',
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
        process: true,
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
        { id: 'b1', title: 'Cosmética Vegana Certificada & Sin Parabenos', description: 'Tratamientos formulados con extractos botánicos puros respetuosos con las pieles más sensibles.', iconName: 'Sparkles' },
        { id: 'b2', title: 'Diagnóstico Facial Gratuito con Escáner Derm', description: 'Analizamos el nivel de hidratación, colágeno y poros para prescribir la rutina perfecta.', iconName: 'Heart' },
        { id: 'b3', title: 'Cabinas Sensoriales de Privacidad VIP', description: 'Ambientes climatizados con luces tenue, aromaterapia de lavanda y música de relajación profunda.', iconName: 'ShieldCheck' }
      ],
      services: [
        { id: 's1', title: 'Tratamiento Facial "Illuminating Glow" (Ácido Hialurónico)', description: 'Limpieza ultrasónica, velo de colágeno marino y masaje oxigenante para devolver la luminosidad.', price: '75 € / sesión', iconName: 'Sparkles', badge: 'Tratamiento Estrella', imageUrl: 'https://images.unsplash.com/photo-1512290900673-7002b521761c?auto=format&fit=crop&w=800&q=80' },
        { id: 's2', title: 'Ritual Masaje Holístico con Piedras Volcánicas', description: 'Terapia térmica relajante que alivia tensiones musculares profundas y drena toxinas.', price: '85 € / 60 min', iconName: 'Heart', imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80' },
        { id: 's3', title: 'Maderoterapia Corporal & Remodelación', description: 'Técnica ancestral con elementos de madera de loto para reafirmar y combatir la celulitis.', price: '65 € / sesión', iconName: 'Zap', imageUrl: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=80' },
        { id: 's4', title: 'Manicura & Pedicura Rusa Combinada VIP', description: 'Limpieza exhaustiva de cutícula, torno de precisión y esmaltado permanente de larga duración.', price: 'Desde 42 €', iconName: 'Smile', imageUrl: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=800&q=80' },
        { id: 's5', title: 'Depilación Láser Diodo Médica Indolora', description: 'Eliminación permanente del vello corporal con sistema de cabezal frío de zafiro a -5°C.', price: 'Desde 29 € / zona', iconName: 'ShieldCheck', imageUrl: 'https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=800&q=80' },
        { id: 's6', title: 'Diseño de Cejas con Henna & Microblading 3D', description: 'Pigmentación pelo a pelo para unas cejas tupidas, simétricas y de aspecto totalmente natural.', price: 'Desde 180 €', iconName: 'Sparkles', imageUrl: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80' }
      ],
      portfolio: [
        { id: 'p1', title: 'Rejuvenecimiento Facial Completo 5 Sesiones', category: 'Facial Estético', imageUrl: 'https://images.unsplash.com/photo-1512290900673-7002b521761c?auto=format&fit=crop&w=800&q=80', description: 'Reducción visible de líneas de expresión e incremento del 35% de firmeza en paciente de 46 años.', clientName: 'Caso Cliente M.T.', date: '2025' },
        { id: 'p2', title: 'Remodelación Corporal con Maderoterapia', category: 'Corporal Spa', imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80', description: 'Tratamiento drenante de 8 sesiones consiguiendo una reducción de 4 cm de contorno.', clientName: 'Caso Cliente S.V.', date: '2025' }
      ],
      testimonials: [
        { id: 't1', name: 'Sofía Martín', role: 'Cliente habitual', comment: 'Velvet es mi templo sagrado para desconectar de la rutina. Las manos de Valeria en el facial oxigenante hacen milagros. Salgo con la piel suave como la seda.', rating: 5, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80' },
        { id: 't2', name: 'Alba Rocamora', role: 'Cliente Spa VIP', comment: 'El masaje con piedras volcánicas me quitó contracturas en la espalda que llevaba arrastrando meses. El ambiente con música suave y té orgánico al finalizar es un 10.', rating: 5, avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80' }
      ],
      faqs: [
        { id: 'f1', question: '¿Cómo puedo comprar una Tarjeta Regalo para un tratamiento?', answer: 'Puedes adquirir Bonos Regalo desde nuestra web o en recepción. Los preparamos en una caja de regalo perfumada con muestras o te enviamos el PDF de regalo al instante.' },
        { id: 'f2', question: '¿La depilación láser duele o quema la piel?', answer: 'No. Contamos con tecnología de diodo frío a -5°C que adormece la zona epidérmica mientras actúa el pulso, haciendo la sesión cómoda e indolora.' }
      ],
      blog: [
        { id: 'b1', title: 'Propiedades del Ácido Hialurónico de Alto y Bajo Peso Molecular', date: '09 Sep 2025', category: 'Cosmética Avanzada', readTime: '4 min lectura', excerpt: 'Cómo rellenar arrugas superficiales mientras penetras en la dermis profunda.', content: 'El ácido hialurónico no actúa igual según su tamaño molecular...', imageUrl: 'https://images.unsplash.com/photo-1512290900673-7002b521761c?auto=format&fit=crop&w=800&q=80' }
      ],
      team: [
        { id: 'm1', name: 'Valeria Gómez', role: 'Master Estetiscista & Fundadora', imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80', bio: 'Más de 14 años de formación en cosmetología y dermoestética en Barcelona y Milán.' },
        { id: 'm2', name: 'Camila Rossi', role: 'Especialista en Maderoterapia & Quiromasaje', imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80', bio: 'Terapeuta experta en masaje corporal holístico y drenaje linfático asistido.' }
      ],
      legal: {
        avisoLegal: 'Velvet Wellness & Spa S.L. CIF B-33221100. Registro Comercial en Barcelona. Domicilio en Passeig de Gràcia 54.',
        privacidad: 'Tratamiento estrictamente confidencial de datos de reserva según el Reglamento Europeo de Protección de Datos (RGPD).',
        cookies: 'Cookies técnicas necesarias para el proceso de cita previa en línea.'
      }
    }
  }
];
