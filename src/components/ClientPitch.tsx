import React, { useState } from 'react';
import { 
  Monitor, 
  Tablet, 
  Smartphone, 
  Sliders,
  Image as ImageIcon
} from 'lucide-react';
import type { BusinessConfig, FontFamily, LayoutModel } from '../types/business';
import { WebsiteTemplates } from './WebsiteTemplates';
import { ImagePickerModal } from './ImagePickerModal';

interface ClientPitchProps {
  config: BusinessConfig;
  onChange: (updated: BusinessConfig) => void;
}

export const ClientPitch: React.FC<ClientPitchProps> = ({ 
  config, 
  onChange
}) => {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [showTweaker, setShowTweaker] = useState<boolean>(false);
  const [showImagePicker, setShowImagePicker] = useState<boolean>(false);

  const updatePalette = (key: keyof BusinessConfig['palette'], val: string) => {
    onChange({
      ...config,
      palette: { ...config.palette, [key]: val }
    });
  };

  const toggleSection = (sectionKey: keyof BusinessConfig['sections']) => {
    onChange({
      ...config,
      sections: {
        ...config.sections,
        [sectionKey]: !config.sections[sectionKey]
      }
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 flex flex-col font-inter">
      
      {/* Pitch Top Control Bar */}
      <div className="bg-white border-b border-slate-200 px-4 py-2.5 flex flex-wrap items-center justify-between gap-4 sticky top-16 z-30 shadow-xs">
        <div className="flex items-center space-x-3">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Dispositivo:</span>
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200/80">
            <button
              onClick={() => setDevice('desktop')}
              className={`p-1.5 px-3 rounded-lg text-xs font-bold flex items-center space-x-1.5 transition-all ${
                device === 'desktop' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Escritorio</span>
            </button>

            <button
              onClick={() => setDevice('tablet')}
              className={`p-1.5 px-3 rounded-lg text-xs font-bold flex items-center space-x-1.5 transition-all ${
                device === 'tablet' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Tablet className="w-3.5 h-3.5" />
              <span>Tablet</span>
            </button>

            <button
              onClick={() => setDevice('mobile')}
              className={`p-1.5 px-3 rounded-lg text-xs font-bold flex items-center space-x-1.5 transition-all ${
                device === 'mobile' ? 'bg-slate-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Móvil</span>
            </button>
          </div>
        </div>

        {/* Commercial Pitch Subheader Controls */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowImagePicker(true)}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl border border-sky-300 bg-sky-50 text-sky-700 hover:bg-sky-100 text-xs font-extrabold transition-all shadow-xs"
          >
            <ImageIcon className="w-3.5 h-3.5 text-sky-600" />
            <span>Subir Fotos & Logo</span>
          </button>

          <button
            onClick={() => setShowTweaker(!showTweaker)}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border text-xs font-extrabold transition-all ${
              showTweaker 
                ? 'bg-sky-600 border-sky-500 text-white shadow-sm' 
                : 'bg-slate-100 border-slate-200/80 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Sliders className="w-3.5 h-3.5 text-sky-500" />
            <span>Ajustes de Maquetación en Vivo</span>
          </button>
        </div>
      </div>

      {/* Floating Live Tweaker Drawer */}
      {showTweaker && (
        <div className="bg-white/95 backdrop-blur-md border-b border-slate-200 p-4 sticky top-28 z-40 shadow-md animate-fadeIn">
          <div className="max-w-5xl mx-auto space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 items-center">
              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Color Primario</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={config.palette.primary}
                    onChange={(e) => updatePalette('primary', e.target.value)}
                    className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0"
                  />
                  <span className="text-xs font-mono font-bold text-slate-800">{config.palette.primary}</span>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Color de Acento</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="color"
                    value={config.palette.accent}
                    onChange={(e) => updatePalette('accent', e.target.value)}
                    className="w-8 h-8 rounded-lg cursor-pointer bg-transparent border-0"
                  />
                  <span className="text-xs font-mono font-bold text-slate-800">{config.palette.accent}</span>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Modo de Fondo</label>
                <div className="flex space-x-2">
                  <button
                    onClick={() => updatePalette('bgMode', 'dark')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold border ${
                      config.palette.bgMode === 'dark' ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-100 text-slate-600 border-slate-200'
                    }`}
                  >
                    🌙 Oscuro
                  </button>
                  <button
                    onClick={() => updatePalette('bgMode', 'light')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold border ${
                      config.palette.bgMode === 'light' ? 'bg-white text-slate-900 border-sky-500 shadow-xs' : 'bg-slate-100 text-slate-600 border-slate-200'
                    }`}
                  >
                    ☀️ Claro
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Modelo de Estructura & Estilo</label>
                <select
                  value={config.layoutModel || 'luxury'}
                  onChange={(e) => {
                    const newModel = e.target.value as LayoutModel;
                    const modelPresets: Record<LayoutModel, { palette: typeof config.palette; fontFamily: FontFamily }> = {
                      luxury: {
                        palette: { primary: '#d97706', secondary: '#78350f', accent: '#f59e0b', bgMode: 'dark' },
                        fontFamily: 'playfair'
                      },
                      modern: {
                        palette: { primary: '#0284c7', secondary: '#4338ca', accent: '#38bdf8', bgMode: 'dark' },
                        fontFamily: 'space'
                      },
                      minimal: {
                        palette: { primary: '#18181b', secondary: '#3f3f46', accent: '#0f172a', bgMode: 'light' },
                        fontFamily: 'inter'
                      },
                      conversion: {
                        palette: { primary: '#059669', secondary: '#047857', accent: '#10b981', bgMode: 'dark' },
                        fontFamily: 'jakarta'
                      }
                    };
                    const preset = modelPresets[newModel];
                    onChange({
                      ...config,
                      layoutModel: newModel,
                      palette: preset ? preset.palette : config.palette,
                      fontFamily: preset ? preset.fontFamily : config.fontFamily
                    });
                  }}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1 text-xs text-slate-900 font-bold"
                >
                  <option value="luxury">🌟 Studio Luxury (Dorado / Clásico)</option>
                  <option value="modern">⚡ Modern Tech & SaaS (Cristalino / Neón)</option>
                  <option value="minimal">🌿 Boutique Minimal (Monocromo / Limpio)</option>
                  <option value="conversion">🚀 Lead Conversion (Esmeralda / Directo)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-600 mb-1">Tipografía</label>
                <select
                  value={config.fontFamily}
                  onChange={(e) => onChange({ ...config, fontFamily: e.target.value as FontFamily })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-lg px-2.5 py-1 text-xs text-slate-900 font-bold"
                >
                  <option value="inter">Inter (Neutral)</option>
                  <option value="jakarta">Plus Jakarta (Modern)</option>
                  <option value="playfair">Playfair (Serif Lujo)</option>
                  <option value="space">Space (Tech)</option>
                </select>
              </div>
            </div>

            {/* Dynamic Section Visibility Toggles */}
            <div className="border-t border-slate-200/80 pt-2.5 flex items-center justify-between flex-wrap gap-2">
              <span className="text-[11px] font-bold text-slate-600">🧩 Activar / Ocultar Secciones:</span>
              <div className="flex flex-wrap items-center gap-1.5">
                {[
                  { key: 'topBanner', label: '📢 Franja Superior' },
                  { key: 'services', label: '💼 Servicios' },
                  { key: 'process', label: '⚙️ Metodología' },
                  { key: 'portfolio', label: '🖼️ Portfolio' },
                  { key: 'blog', label: '📰 Blog' },
                  { key: 'about', label: '🏢 Nosotros' },
                  { key: 'testimonials', label: '⭐ Reseñas' },
                  { key: 'team', label: '👥 Equipo' },
                  { key: 'faq', label: '❓ Preguntas' },
                  { key: 'contact', label: '📞 Contacto' }
                ].map((sec) => {
                  const isEnabled = config.sections[sec.key as keyof BusinessConfig['sections']];
                  return (
                    <button
                      key={sec.key}
                      onClick={() => toggleSection(sec.key as keyof BusinessConfig['sections'])}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold border transition-all ${
                        isEnabled
                          ? 'bg-sky-50 border-sky-500 text-sky-700 shadow-xs'
                          : 'bg-slate-100 border-slate-200 text-slate-400 line-through opacity-70'
                      }`}
                    >
                      {sec.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Viewport Canvas */}
      <div className="flex-1 p-4 md:p-8 flex items-center justify-center overflow-auto">
        <div 
          className={`transition-all duration-300 shadow-xl rounded-3xl overflow-hidden border border-slate-300/80 bg-white ${
            device === 'desktop'
              ? 'w-full max-w-7xl'
              : device === 'tablet'
              ? 'w-[768px] h-[960px] my-4 rounded-3xl border-8 border-slate-800'
              : 'w-[375px] h-[750px] my-4 rounded-[40px] border-[12px] border-slate-800 relative'
          }`}
        >
          {device === 'mobile' && (
            <div className="w-32 h-5 bg-slate-800 mx-auto rounded-b-xl absolute top-0 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center">
              <div className="w-12 h-1 bg-slate-600 rounded-full"></div>
            </div>
          )}
          <div className="h-full overflow-auto">
            <WebsiteTemplates config={config} />
          </div>
        </div>
      </div>

      {showImagePicker && (
        <ImagePickerModal 
          config={config}
          onChange={onChange}
          onClose={() => setShowImagePicker(false)}
        />
      )}

    </div>
  );
};
