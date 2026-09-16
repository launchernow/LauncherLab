# LauncherLab

## Qué es
Plataforma y generador para LauncherNow (`launchernow.com`) orientado a automatizar la creación, previsualización, propuesta y exportación de páginas web para clientes de diferentes sectores.

## Stack
- Frontend: React 19, TypeScript (~6.0), Vite 8
- Estilos: Tailwind CSS v4 (`@tailwindcss/vite`)
- Utilidades: `lucide-react`, `jszip`, `file-saver`, `canvas-confetti`, `oxlint`
- Despliegue: Vercel

## Comandos
```bash
npm install     # instalar dependencias
npm run dev     # servidor de desarrollo local (Vite)
npm run build   # chequeo de tipos (tsc -b) y build de producción
npm run lint    # oxlint linter rápido
npm run preview # previsualizar build local
```

## Estructura
- `src/types/business.ts`: Modelo de datos principal (`BusinessConfig`, sectores, paletas, servicios, testimonios, secciones).
- `src/data/industryPresets.ts`: Presets y configuraciones por defecto según el sector (restaurante, dental, gym, tech, etc.).
- `src/utils/aiGenerator.ts`: Generador heurístico/mock de contenido web según prompt del usuario (actualmente basado en presets + fotos de Unsplash).
- `src/utils/leadImporter.ts`: Importador de leads del CRM y conexión con el endpoint de prototipos reales de Supabase.
- `src/utils/htmlExporter.ts`: Generador de HTML standalone listo para producción y empaquetador ZIP (`index.html` + `config.json`).
- `src/components/GenerationLoader.tsx`: Pantalla de carga animada con progreso por pasos para la extracción de Google Maps y síntesis de la propuesta.
- `src/components/FormWizard.tsx`: Wizard paso a paso para configurar la web.
- `src/components/ClientPitch.tsx`: Vista de presentación / mockup interactivo para el cliente.
- `src/components/WebsiteTemplates.tsx`: Renderizado reactivo de la plantilla web en vivo según la configuración.
- `src/components/PublishModal.tsx`: Modal de despliegue en la nube (actualmente simulado).
- `src/components/DeployGuideModal.tsx`: Guía para desplegar en Netlify Drop, Vercel o cPanel/FTP.

## Flujo de trabajo obligatorio

### 1. Antes de escribir código — planificar
- Para cualquier cambio que toque más de un fichero o introduzca un concepto nuevo, planificar antes de editar (`implementation_plan.md`).

### 2. Antes de implementar una utilidad — comprobar que no existe ya
- Verificar librerías reales antes de programar utilidades desde cero.

### 3. Al escribir — estándar de calidad
- TypeScript estricto sin `any`.
- Errores tipados y controlados.
- `npm run build` (`tsc -b && vite build`) limpio antes de considerar cualquier cambio terminado.

### 4. Antes de cada commit — revisión y aprobación
- Revisar el diff.
- Preguntar siempre a Alberto antes de `git commit` y antes de `git push`.
- Mantener este archivo actualizado si cambian comandos, stack o arquitectura.

## Gotchas & Deuda Técnica
- `aiGenerator.ts` es un generador mock basado en reglas y presets; no llama a APIs de LLMs reales todavía.
- `PublishModal.tsx` simula el despliegue con timers (`setTimeout`) y no despliega de forma real en Vercel ni Cloudflare.
- La web exportada en `htmlExporter.ts` usa Tailwind CDN (`cdn.tailwindcss.com`) y Lucide via CDN (`unpkg.com/lucide@latest`), adecuado para landings estáticas autónomas pero a revisar si se quiere backend dinámico o integraciones API (formularios reales, pasarelas de pago reales).
