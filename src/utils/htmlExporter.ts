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
    aboutHistory,
    whatsappNumber,
    phone,
    email,
    address,
    workingHours,
    palette,
    fontFamily,
    services,
    testimonials,
    sections,
    benefits,
    portfolio,
    blog,
    legal
  } = config;

  const fontGoogleUrl = {
    inter: 'family=Inter:wght@400;600;700;800;900',
    jakarta: 'family=Plus+Jakarta+Sans:wght@400;600;700;800',
    playfair: 'family=Playfair+Display:wght@400;600;700;900',
    space: 'family=Space+Grotesk:wght@400;600;700'
  }[fontFamily] || 'family=Inter:wght@400;600;700;800';

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

  const heroPhoto = portfolio && portfolio[0]?.imageUrl 
    ? portfolio[0].imageUrl 
    : services && services[0]?.imageUrl 
      ? services[0].imageUrl 
      : 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80';

  return `<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <!-- SEO & OpenGraph Meta Tags -->
  <meta property="og:title" content="${name} | ${slogan}">
  <meta property="og:description" content="${heroSubheadline.replace(/"/g, '&quot;')}">
  <meta property="og:image" content="${heroPhoto}">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${name} | ${slogan}">
  <meta name="twitter:description" content="${heroSubheadline.replace(/"/g, '&quot;')}">
  <meta name="twitter:image" content="${heroPhoto}">

  <!-- Schema.org JSON-LD Structured Data for LocalBusiness -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "${name}",
    "description": "${heroSubheadline.replace(/"/g, '&quot;')}",
    "telephone": "${phone}",
    "email": "${email}",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "${address}"
    },
    "openingHours": "${workingHours}"
  }
  </script>
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
      opacity: 0.94;
      transform: translateY(-1px);
    }
    .card-custom {
      background-color: ${cardBgColor};
      border: 1px solid ${borderColor};
    }
  </style>
</head>
<body class="antialiased min-h-screen flex flex-col pb-16 md:pb-0">

  <!-- Header Navigation -->
  <header class="sticky top-0 z-50 backdrop-blur-md border-b" style="background-color: ${cardBgColor}ee; border-color: ${borderColor};">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <div class="w-10 h-10 rounded-xl flex items-center justify-center text-white font-extrabold text-xl custom-gradient-btn shadow-md">
          ${name.charAt(0)}
        </div>
        <div>
          <span class="text-xl font-extrabold tracking-tight block leading-none" style="color: ${textColor};">${name}</span>
          <span class="text-xs uppercase font-semibold tracking-wider opacity-75" style="color: ${mutedTextColor};">${slogan}</span>
        </div>
      </div>
      
      <nav class="hidden md:flex items-center space-x-6 text-sm font-extrabold">
        <a href="#home" class="hover:text-sky-400">Inicio</a>
        ${sections.services ? `<a href="#services" class="hover:text-sky-400">Servicios</a>` : ''}
        ${sections.about ? `<a href="#about" class="hover:text-sky-400">Nosotros</a>` : ''}
        ${sections.portfolio && portfolio && portfolio.length > 0 ? `<a href="#portfolio" class="hover:text-sky-400">Portfolio</a>` : ''}
        ${sections.blog && blog && blog.length > 0 ? `<a href="#blog" class="hover:text-sky-400">Blog</a>` : ''}
        ${sections.contact ? `<a href="#contact" class="hover:text-sky-400">Contacto</a>` : ''}
      </nav>

      <div class="flex items-center space-x-2">
        <a href="https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}" target="_blank" class="hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-white text-xs font-extrabold custom-gradient-btn shadow-lg">
          <i data-lucide="message-square"></i>
          <span>Contacto Directo</span>
        </a>
        <button id="mobile-menu-btn" class="md:hidden p-2.5 rounded-2xl border" style="border-color: ${borderColor}; color: ${textColor};" aria-label="Abrir Menú">
          <i data-lucide="menu"></i>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Drawer -->
    <div id="mobile-menu" class="hidden md:hidden border-t px-6 py-4 space-y-3" style="border-color: ${borderColor}; background-color: ${cardBgColor};">
      <a href="#home" class="block py-2 text-sm font-extrabold" style="color: ${textColor};" onclick="document.getElementById('mobile-menu').classList.add('hidden');">Inicio</a>
      ${sections.services ? `<a href="#services" class="block py-2 text-sm font-extrabold" style="color: ${textColor};" onclick="document.getElementById('mobile-menu').classList.add('hidden');">Servicios</a>` : ''}
      ${sections.about ? `<a href="#about" class="block py-2 text-sm font-extrabold" style="color: ${textColor};" onclick="document.getElementById('mobile-menu').classList.add('hidden');">Nosotros</a>` : ''}
      ${sections.portfolio && portfolio && portfolio.length > 0 ? `<a href="#portfolio" class="block py-2 text-sm font-extrabold" style="color: ${textColor};" onclick="document.getElementById('mobile-menu').classList.add('hidden');">Portfolio</a>` : ''}
      ${sections.blog && blog && blog.length > 0 ? `<a href="#blog" class="block py-2 text-sm font-extrabold" style="color: ${textColor};" onclick="document.getElementById('mobile-menu').classList.add('hidden');">Blog</a>` : ''}
      ${sections.contact ? `<a href="#contact" class="block py-2 text-sm font-extrabold" style="color: ${textColor};" onclick="document.getElementById('mobile-menu').classList.add('hidden');">Contacto</a>` : ''}
    </div>
  </header>

  <!-- Hero Section with Photo Grid -->
  <section id="home" class="relative py-20 md:py-28 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-7 space-y-6 text-left">
          ${aboutBadge ? `
          <span class="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs font-extrabold border" style="background-color: ${palette.primary}15; color: ${palette.primary}; border-color: ${palette.primary}40;">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>${aboutBadge}</span>
          </span>
          ` : ''}
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight" style="color: ${textColor};">
            ${heroHeadline}
          </h1>
          <p class="text-base sm:text-lg leading-relaxed font-medium" style="color: ${mutedTextColor};">
            ${heroSubheadline}
          </p>
          <div class="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <a href="#contact" class="w-full sm:w-auto px-8 py-4 rounded-2xl text-white text-sm font-extrabold custom-gradient-btn shadow-xl text-center">
              ${ctaText} &rarr;
            </a>
            ${secondaryCtaText ? `
            <a href="#services" class="w-full sm:w-auto px-8 py-4 rounded-2xl text-sm font-extrabold border text-center" style="border-color: ${borderColor}; color: ${textColor};">
              ${secondaryCtaText}
            </a>` : ''}
          </div>
        </div>

        <div class="lg:col-span-5 relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4" style="border-color: ${borderColor};">
            <img src="${heroPhoto}" alt="${name}" class="w-full h-[380px] object-cover rounded-3xl shadow-2xl" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Benefits Section -->
  ${sections.benefits && benefits && benefits.length > 0 ? `
  <section class="py-16 border-t" style="border-color: ${borderColor};">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        ${benefits.map(b => `
        <div class="p-6 rounded-3xl card-custom flex items-start space-x-4">
          <div class="w-12 h-12 rounded-2xl flex items-center justify-center text-white shrink-0 custom-gradient-btn">
            <i data-lucide="shield-check"></i>
          </div>
          <div>
            <h3 class="font-extrabold text-base mb-1">${b.title}</h3>
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
        <h2 class="text-3xl font-extrabold mb-3">Servicios & Soluciones Especializadas</h2>
        <p style="color: ${mutedTextColor};">Servicios profesionales ejecutados con tecnología avanzada y la máxima garantía de calidad.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        ${services.map(s => `
        <div class="rounded-3xl card-custom overflow-hidden flex flex-col justify-between shadow-lg">
          <div>
            ${s.imageUrl ? `<img src="${s.imageUrl}" alt="${s.title}" class="w-full h-48 object-cover" />` : ''}
            <div class="p-6">
              ${s.badge ? `<span class="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase text-white mb-3 inline-block" style="background-color: ${palette.primary};">${s.badge}</span>` : ''}
              <h3 class="text-xl font-extrabold mb-2">${s.title}</h3>
              <p class="text-xs opacity-80 leading-relaxed mb-4">${s.description}</p>
            </div>
          </div>
          <div class="p-6 pt-0 flex items-center justify-between border-t" style="border-color: ${borderColor};">
            <span class="text-lg font-black" style="color: ${palette.accent};">${s.price}</span>
            <a href="#contact" class="text-xs font-extrabold hover:underline" style="color: ${palette.primary};">Reservar &rarr;</a>
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
          <h2 class="text-3xl font-extrabold mb-6">${aboutTitle}</h2>
          <p class="text-base mb-8 leading-relaxed" style="color: ${mutedTextColor};">
            ${aboutText}
          </p>
          ${aboutHistory ? `<div class="p-6 rounded-2xl card-custom mb-6 text-xs leading-relaxed opacity-85">${aboutHistory}</div>` : ''}
        </div>
        <div class="rounded-3xl overflow-hidden shadow-2xl card-custom h-96">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80" alt="Sobre Nosotros" class="w-full h-full object-cover opacity-90" />
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
        <h2 class="text-3xl font-extrabold mb-3">Portfolio de Casos de Éxito</h2>
        <p style="color: ${mutedTextColor};">Casos reales de clientes que han confiado en nuestro equipo profesional.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        ${portfolio.map(p => `
        <div class="rounded-3xl overflow-hidden card-custom shadow-xl">
          <img src="${p.imageUrl}" alt="${p.title}" class="w-full h-60 object-cover" />
          <div class="p-8">
            <span class="text-xs font-extrabold uppercase tracking-wider block mb-2" style="color: ${palette.accent};">${p.category}</span>
            <h3 class="text-xl font-extrabold mb-2">${p.title}</h3>
            <p class="text-xs opacity-80 leading-relaxed mb-4">${p.description}</p>
            ${p.clientName ? `<div class="text-xs opacity-60 font-bold">Cliente: ${p.clientName}</div>` : ''}
          </div>
        </div>
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
        <h2 class="text-3xl font-extrabold mb-3">Reseñas de Clientes Reales</h2>
        <p style="color: ${mutedTextColor};">La satisfacción y opinión de nuestros clientes es nuestra mejor garantía.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        ${testimonials.map(t => `
        <div class="p-8 rounded-3xl card-custom shadow-lg">
          <div class="flex items-center space-x-1 text-amber-400 mb-4">
            ${'★'.repeat(t.rating)}
          </div>
          <p class="text-sm sm:text-base italic mb-6 leading-relaxed opacity-90">"${t.comment}"</p>
          <div class="flex items-center space-x-4">
            <img src="${t.avatar}" alt="${t.name}" class="w-12 h-12 rounded-full object-cover" />
            <div>
              <div class="font-extrabold text-sm">${t.name}</div>
              <div class="text-xs opacity-60 font-semibold">${t.role}</div>
            </div>
          </div>
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
          <h2 class="text-3xl font-extrabold mb-6">Ponte en Contacto</h2>
          <p class="mb-8" style="color: ${mutedTextColor};">Estamos a tu disposición para atender cualquier solicitud.</p>
          
          <div class="space-y-6">
            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 rounded-2xl flex items-center justify-center custom-gradient-btn text-white">
                <i data-lucide="phone"></i>
              </div>
              <div>
                <div class="text-xs opacity-60 font-semibold">Teléfono Directo</div>
                <div class="font-extrabold text-base">${phone}</div>
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 rounded-2xl flex items-center justify-center custom-gradient-btn text-white">
                <i data-lucide="mail"></i>
              </div>
              <div>
                <div class="text-xs opacity-60 font-semibold">Email Corporativo</div>
                <div class="font-extrabold text-base">${email}</div>
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <div class="w-12 h-12 rounded-2xl flex items-center justify-center custom-gradient-btn text-white">
                <i data-lucide="map-pin"></i>
              </div>
              <div>
                <div class="text-xs opacity-60 font-semibold">Dirección Física</div>
                <div class="font-extrabold text-base">${address}</div>
              </div>
            </div>
          </div>
        </div>

        <form class="p-8 rounded-3xl card-custom space-y-4" onsubmit="event.preventDefault(); alert('¡Consulta enviada con éxito!');">
          <h3 class="text-xl font-extrabold mb-4">Envíanos un Mensaje</h3>
          <div>
            <label class="block text-xs font-semibold mb-1">Nombre Completo</label>
            <input type="text" required class="w-full px-4 py-3 rounded-xl border bg-transparent text-sm focus:outline-none" style="border-color: ${borderColor};" placeholder="Tu nombre..." />
          </div>
          <div>
            <label class="block text-xs font-semibold mb-1">Email / Teléfono</label>
            <input type="text" required class="w-full px-4 py-3 rounded-xl border bg-transparent text-sm focus:outline-none" style="border-color: ${borderColor};" placeholder="ejemplo@email.com" />
          </div>
          <div>
            <label class="block text-xs font-semibold mb-1">Mensaje o Consulta</label>
            <textarea rows="4" required class="w-full px-4 py-3 rounded-xl border bg-transparent text-sm focus:outline-none" style="border-color: ${borderColor};" placeholder="¿En qué te podemos ayudar?"></textarea>
          </div>
          <button type="submit" class="w-full py-4 rounded-xl text-white font-extrabold text-sm custom-gradient-btn shadow-lg">
            Enviar Consulta
          </button>
        </form>
      </div>
    </div>
  </section>
  ` : ''}

  <!-- Footer -->
  <footer class="mt-auto py-12 border-t" style="border-color: ${borderColor}; background-color: ${cardBgColor};">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <span class="font-extrabold text-lg" style="color: ${textColor};">${name}</span>
        <p class="text-xs mt-1 opacity-60">© ${new Date().getFullYear()} ${name}. Todos los derechos reservados.</p>
      </div>
      
      <div class="flex items-center space-x-6 text-xs font-extrabold opacity-75">
        <button onclick="alert('${(legal?.avisoLegal || '').replace(/'/g, "\\'")}')">Aviso Legal</button>
        <button onclick="alert('${(legal?.privacidad || '').replace(/'/g, "\\'")}')">Privacidad</button>
        <button onclick="alert('${(legal?.cookies || '').replace(/'/g, "\\'")}')">Cookies</button>
      </div>

      <div class="text-xs opacity-60 font-medium">
        Horario: ${workingHours}
      </div>
    </div>
  </footer>

  <!-- Floating WhatsApp Widget -->
  <a href="https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}" target="_blank" class="fixed bottom-6 right-6 z-50 w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-all transform hover:scale-110">
    <svg class="w-8 h-8 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
  </a>

  <!-- Floating Cookie Consent Notice -->
  <div id="cookie-banner" class="fixed bottom-16 md:bottom-6 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 p-4 rounded-2xl shadow-2xl border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs backdrop-blur-xl" style="background-color: ${cardBgColor}f0; border-color: ${borderColor}; color: ${textColor};">
    <div class="flex items-center space-x-2">
      <i data-lucide="shield-check" class="w-5 h-5 text-sky-400 shrink-0"></i>
      <span class="opacity-85">Utilizamos cookies esenciales para garantizar el correcto funcionamiento del sitio.</span>
    </div>
    <button onclick="document.getElementById('cookie-banner').style.display='none';" class="w-full sm:w-auto px-4 py-2 rounded-xl text-white font-extrabold custom-gradient-btn shrink-0 shadow-md">
      Entendido
    </button>
  </div>

  <!-- Sticky Bottom Action Bar for Mobile -->
  <div class="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t backdrop-blur-md p-3 px-4 flex items-center space-x-3 shadow-2xl" style="background-color: ${cardBgColor}ee; border-color: ${borderColor};">
    <a href="tel:${phone.replace(/[^0-9+]/g, '')}" class="flex-1 py-3 rounded-2xl text-xs font-extrabold border flex items-center justify-center space-x-2 text-center" style="border-color: ${borderColor}; color: ${textColor};">
      <i data-lucide="phone" class="w-4 h-4 text-sky-400"></i>
      <span>Llamar Directo</span>
    </a>
    <a href="https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}" target="_blank" class="flex-1 py-3 rounded-2xl text-white text-xs font-extrabold custom-gradient-btn flex items-center justify-center space-x-2 text-center">
      <i data-lucide="message-square" class="w-4 h-4"></i>
      <span>WhatsApp</span>
    </a>
  </div>

  <script>
    lucide.createIcons();
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    if (btn && menu) {
      btn.addEventListener('click', function() {
        menu.classList.toggle('hidden');
      });
    }
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
