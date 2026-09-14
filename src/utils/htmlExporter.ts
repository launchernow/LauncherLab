import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import type { BusinessConfig } from '../types/business';

export const generateStandaloneHtml = (config: BusinessConfig): string => {
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
    legal
  } = config;

  const fontGoogleUrl = {
    inter: 'family=Inter:wght@300;400;600;700',
    jakarta: 'family=Plus+Jakarta+Sans:wght@400;600;700',
    playfair: 'family=Playfair+Display:wght@400;600;700',
    space: 'family=Space+Grotesk:wght@400;600;700'
  }[fontFamily] || 'family=Inter:wght@400;600;700';

  const fontClass = {
    inter: "'Inter', sans-serif",
    jakarta: "'Plus Jakarta Sans', sans-serif",
    playfair: "'Playfair Display', serif",
    space: "'Space Grotesk', sans-serif"
  }[fontFamily];

  const isDark = palette.bgMode === 'dark';
  const bgColor = isDark ? '#0b0f19' : '#f8fafc';
  const cardBgColor = isDark ? '#151c2c' : '#ffffff';
  const textColor = isDark ? '#f1f5f9' : '#0f172a';
  const mutedTextColor = isDark ? '#94a3b8' : '#64748b';
  const borderColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.08)';

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${name} | ${slogan}</title>
  <meta name="description" content="${heroSubheadline.replace(/"/g, '&quot;')}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?${fontGoogleUrl}&display=swap" rel="stylesheet">
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://unpkg.com/lucide@latest"></script>
  <style>
    :root {
      --primary: ${palette.primary};
      --secondary: ${palette.secondary};
      --accent: ${palette.accent};
      --bg-color: ${bgColor};
      --text-color: ${textColor};
    }
    body {
      font-family: ${fontClass};
      background-color: var(--bg-color);
      color: var(--text-color);
    }
    .custom-gradient-btn {
      background: linear-gradient(135deg, ${palette.primary}, ${palette.accent});
    }
    .custom-gradient-btn:hover {
      opacity: 0.92;
      box-shadow: 0 10px 25px -5px ${palette.primary}66;
    }
    .card-custom {
      background-color: ${cardBgColor};
      border: 1px solid ${borderColor};
    }
  </style>
</head>
<body class="antialiased min-h-screen flex flex-col">

  <!-- Header & Multi-page Nav -->
  <header class="sticky top-0 z-50 backdrop-blur-md border-b" style="background-color: ${cardBgColor}dd; border-color: ${borderColor};">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xl custom-gradient-btn">
          ${name.charAt(0)}
        </div>
        <div>
          <span class="text-xl font-bold block leading-none" style="color: ${textColor};">${name}</span>
          <span class="text-xs" style="color: ${mutedTextColor};">${slogan}</span>
        </div>
      </div>
      
      <nav class="hidden md:flex items-center space-x-6 text-sm font-semibold">
        <a href="#home" class="hover:opacity-80">Inicio</a>
        ${sections.services ? `<a href="#services" class="hover:opacity-80">Servicios</a>` : ''}
        ${sections.about ? `<a href="#about" class="hover:opacity-80">Nosotros</a>` : ''}
        ${sections.portfolio && portfolio && portfolio.length > 0 ? `<a href="#portfolio" class="hover:opacity-80">Portfolio</a>` : ''}
        ${sections.blog && blog && blog.length > 0 ? `<a href="#blog" class="hover:opacity-80 font-bold text-sky-400">Blog & Noticias</a>` : ''}
        ${sections.contact ? `<a href="#contact" class="hover:opacity-80">Contacto</a>` : ''}
      </nav>

      <a href="https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}" target="_blank" class="hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold custom-gradient-btn transition-all">
        <i data-lucide="message-square"></i>
        <span>Contacto Directo</span>
      </a>
    </div>
  </header>

  <!-- Hero Section -->
  <section id="home" class="relative py-24 md:py-32 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <span class="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border" style="background-color: ${palette.primary}15; color: ${palette.primary}; border-color: ${palette.primary}40;">
        ✨ ${aboutBadge || 'Excelente Servicio Garantizado'}
      </span>
      <h1 class="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 max-w-4xl mx-auto leading-tight" style="color: ${textColor};">
        ${heroHeadline}
      </h1>
      <p class="text-lg md:text-xl max-w-2xl mx-auto mb-10" style="color: ${mutedTextColor};">
        ${heroSubheadline}
      </p>
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a href="#contact" class="w-full sm:w-auto px-8 py-4 rounded-full text-white text-base font-bold custom-gradient-btn shadow-lg transition-all transform hover:-translate-y-0.5">
          ${ctaText}
        </a>
        ${secondaryCtaText ? `
        <a href="#services" class="w-full sm:w-auto px-8 py-4 rounded-full text-base font-bold border transition-all" style="border-color: ${borderColor}; color: ${textColor};">
          ${secondaryCtaText}
        </a>` : ''}
      </div>
    </div>
  </section>

  <!-- Benefits Section -->
  ${sections.benefits && benefits && benefits.length > 0 ? `
  <section class="py-16 border-t" style="border-color: ${borderColor};">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        ${benefits.map(b => `
        <div class="p-6 rounded-2xl card-custom flex items-start space-x-4">
          <div class="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 custom-gradient-btn">
            <i data-lucide="shield-check"></i>
          </div>
          <div>
            <h3 class="font-bold text-base mb-1">${b.title}</h3>
            <p class="text-xs opacity-75">${b.description}</p>
          </div>
        </div>
        `).join('')}
      </div>
    </div>
  </section>
  ` : ''}

  <!-- Services Section -->
  ${sections.services && services.length > 0 ? `
  <section id="services" class="py-20 border-t" style="border-color: ${borderColor};">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios Principales</h2>
        <p style="color: ${mutedTextColor};">Ofrecemos soluciones diseñadas a medida para satisfacer todas tus necesidades con la máxima calidad.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        ${services.map(s => `
        <div class="p-8 rounded-2xl card-custom flex flex-col justify-between hover:shadow-xl transition-all">
          <div>
            ${s.badge ? `<span class="px-3 py-1 rounded-full text-xs font-semibold mb-4 inline-block text-white" style="background-color: ${palette.primary};">${s.badge}</span>` : ''}
            <h3 class="text-xl font-bold mb-3">${s.title}</h3>
            <p class="text-sm mb-6" style="color: ${mutedTextColor};">${s.description}</p>
          </div>
          <div class="flex items-center justify-between pt-6 border-t" style="border-color: ${borderColor};">
            <span class="text-lg font-bold" style="color: ${palette.accent};">${s.price}</span>
            <a href="#contact" class="text-sm font-semibold hover:underline" style="color: ${palette.primary};">Solicitar &rarr;</a>
          </div>
        </div>
        `).join('')}
      </div>
    </div>
  </section>
  ` : ''}

  <!-- About Section -->
  ${sections.about ? `
  <section id="about" class="py-20 border-t" style="border-color: ${borderColor};">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold mb-6">${aboutTitle}</h2>
          <p class="text-base md:text-lg mb-8 leading-relaxed" style="color: ${mutedTextColor};">
            ${aboutText}
          </p>
          <div class="grid grid-cols-2 gap-6">
            <div class="p-4 rounded-xl card-custom">
              <div class="text-2xl font-bold mb-1" style="color: ${palette.primary};">100%</div>
              <div class="text-sm" style="color: ${mutedTextColor};">Satisfacción de clientes</div>
            </div>
            <div class="p-4 rounded-xl card-custom">
              <div class="text-2xl font-bold mb-1" style="color: ${palette.accent};">+10 Años</div>
              <div class="text-sm" style="color: ${mutedTextColor};">Experiencia en el sector</div>
            </div>
          </div>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-2xl card-custom h-96 flex items-center justify-center">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80" alt="Sobre Nosotros" class="w-full h-full object-cover opacity-80" />
        </div>
      </div>
    </div>
  </section>
  ` : ''}

  <!-- Portfolio Section -->
  ${sections.portfolio && portfolio && portfolio.length > 0 ? `
  <section id="portfolio" class="py-20 border-t" style="border-color: ${borderColor};">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Portfolio de Proyectos</h2>
        <p style="color: ${mutedTextColor};">Casos reales de clientes que han confiado en nuestro equipo.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        ${portfolio.map(p => `
        <div class="rounded-2xl overflow-hidden card-custom">
          <img src="${p.imageUrl}" alt="${p.title}" class="w-full h-56 object-cover" />
          <div class="p-6">
            <span class="text-xs font-bold uppercase tracking-wider block mb-1" style="color: ${palette.accent};">${p.category}</span>
            <h3 class="text-xl font-bold mb-2">${p.title}</h3>
            <p class="text-sm opacity-80 mb-4">${p.description}</p>
            ${p.clientName ? `<div class="text-xs font-semibold" style="color: ${mutedTextColor};">Cliente: ${p.clientName}</div>` : ''}
          </div>
        </div>
        `).join('')}
      </div>
    </div>
  </section>
  ` : ''}

  <!-- Blog Section -->
  ${sections.blog && blog && blog.length > 0 ? `
  <section id="blog" class="py-20 border-t" style="border-color: ${borderColor};">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Blog & Novedades del Sector</h2>
        <p style="color: ${mutedTextColor};">Artículos informativos y consejos prácticos elaborados por nuestros expertos.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        ${blog.map(article => `
        <article class="p-6 rounded-2xl card-custom">
          <span class="text-xs font-bold text-sky-400 block mb-2">${article.date} • ${article.category}</span>
          <h3 class="text-xl font-bold mb-3">${article.title}</h3>
          <p class="text-sm opacity-80 mb-4">${article.excerpt}</p>
          <div class="text-xs font-semibold hover:underline" style="color: ${palette.primary};">Leer artículo completo &rarr;</div>
        </article>
        `).join('')}
      </div>
    </div>
  </section>
  ` : ''}

  <!-- Testimonials -->
  ${sections.testimonials && testimonials.length > 0 ? `
  <section id="testimonials" class="py-20 border-t" style="border-color: ${borderColor};">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Lo que Opinan Nuestros Clientes</h2>
        <p style="color: ${mutedTextColor};">La confianza de nuestros clientes es nuestra mejor garantía.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        ${testimonials.map(t => `
        <div class="p-8 rounded-2xl card-custom">
          <div class="flex items-center space-x-1 text-amber-400 mb-4">
            ${'★'.repeat(t.rating)}
          </div>
          <p class="text-base italic mb-6">"${t.comment}"</p>
          <div class="flex items-center space-x-4">
            <img src="${t.avatar}" alt="${t.name}" class="w-12 h-12 rounded-full object-cover" />
            <div>
              <div class="font-bold text-sm">${t.name}</div>
              <div class="text-xs" style="color: ${mutedTextColor};">${t.role}</div>
            </div>
          </div>
        </div>
        `).join('')}
      </div>
    </div>
  </section>
  ` : ''}

  <!-- FAQ -->
  ${sections.faq && faqs.length > 0 ? `
  <section id="faq" class="py-20 border-t" style="border-color: ${borderColor};">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
      <div class="space-y-4">
        ${faqs.map(f => `
        <div class="p-6 rounded-xl card-custom">
          <h3 class="font-bold text-lg mb-2">${f.question}</h3>
          <p class="text-sm" style="color: ${mutedTextColor};">${f.answer}</p>
        </div>
        `).join('')}
      </div>
    </div>
  </section>
  ` : ''}

  <!-- Contact Section -->
  ${sections.contact ? `
  <section id="contact" class="py-20 border-t" style="border-color: ${borderColor};">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 class="text-3xl font-bold mb-6">Contacta con Nosotros</h2>
          <p class="mb-8" style="color: ${mutedTextColor};">Estamos a tu disposición para atender cualquier consulta.</p>
          
          <div class="space-y-6">
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center custom-gradient-btn text-white">
                <i data-lucide="phone"></i>
              </div>
              <div>
                <div class="text-xs" style="color: ${mutedTextColor};">Teléfono Directo</div>
                <div class="font-bold text-base">${phone}</div>
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center custom-gradient-btn text-white">
                <i data-lucide="mail"></i>
              </div>
              <div>
                <div class="text-xs" style="color: ${mutedTextColor};">Correo Electrónico</div>
                <div class="font-bold text-base">${email}</div>
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center custom-gradient-btn text-white">
                <i data-lucide="map-pin"></i>
              </div>
              <div>
                <div class="text-xs" style="color: ${mutedTextColor};">Ubicación</div>
                <div class="font-bold text-base">${address}</div>
              </div>
            </div>
          </div>
        </div>

        <form class="p-8 rounded-2xl card-custom space-y-4" onsubmit="event.preventDefault(); alert('¡Mensaje enviado con éxito!');">
          <h3 class="text-xl font-bold mb-4">Envíanos un Mensaje</h3>
          <div>
            <label class="block text-xs font-semibold mb-1">Nombre Completo</label>
            <input type="text" required class="w-full px-4 py-3 rounded-lg border bg-transparent text-sm focus:outline-none" style="border-color: ${borderColor};" placeholder="Tu nombre..." />
          </div>
          <div>
            <label class="block text-xs font-semibold mb-1">Email / Teléfono</label>
            <input type="text" required class="w-full px-4 py-3 rounded-lg border bg-transparent text-sm focus:outline-none" style="border-color: ${borderColor};" placeholder="ejemplo@email.com" />
          </div>
          <div>
            <label class="block text-xs font-semibold mb-1">Mensaje o Consulta</label>
            <textarea rows="4" required class="w-full px-4 py-3 rounded-lg border bg-transparent text-sm focus:outline-none" style="border-color: ${borderColor};" placeholder="¿En qué te podemos ayudar?"></textarea>
          </div>
          <button type="submit" class="w-full py-4 rounded-xl text-white font-bold text-sm custom-gradient-btn">
            Enviar Mensaje
          </button>
        </form>
      </div>
    </div>
  </section>
  ` : ''}

  <!-- Footer with Legal Modals Links -->
  <footer class="mt-auto py-12 border-t" style="border-color: ${borderColor}; background-color: ${cardBgColor};">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <span class="font-bold text-lg" style="color: ${textColor};">${name}</span>
        <p class="text-xs mt-1" style="color: ${mutedTextColor};">© ${new Date().getFullYear()} ${name}. Todos los derechos reservados.</p>
      </div>
      
      <div class="flex items-center space-x-6 text-xs text-slate-400">
        <button onclick="alert('${(legal?.avisoLegal || '').replace(/'/g, "\\'")}')">Aviso Legal</button>
        <button onclick="alert('${(legal?.privacidad || '').replace(/'/g, "\\'")}')">Privacidad</button>
        <button onclick="alert('${(legal?.cookies || '').replace(/'/g, "\\'")}')">Cookies</button>
      </div>

      <div class="text-xs" style="color: ${mutedTextColor};">
        Horario: ${workingHours}
      </div>
    </div>
  </footer>

  <!-- WhatsApp Widget -->
  <a href="https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}" target="_blank" class="fixed bottom-6 right-6 z-50 w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110">
    <svg class="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
  </a>

  <script>
    lucide.createIcons();
  </script>
</body>
</html>`;
};

export const downloadWebsiteZip = async (config: BusinessConfig): Promise<void> => {
  const zip = new JSZip();
  const htmlContent = generateStandaloneHtml(config);
  
  zip.file("index.html", htmlContent);
  zip.file("config.json", JSON.stringify(config, null, 2));

  const content = await zip.generateAsync({ type: "blob" });
  saveAs(content, `${config.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}-website.zip`);
};
