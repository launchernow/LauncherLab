import React, { useState } from 'react';
import { 
  Monitor, 
  Tablet, 
  Smartphone, 
  Sliders, 
  Globe, 
  FileText, 
  QrCode, 
  Share2 
} from 'lucide-react';
import type { BusinessConfig, FontFamily } from '../types/business';
import { WebsiteTemplates } from './WebsiteTemplates';

interface ClientPitchProps {
  config: BusinessConfig;
  onChange: (updated: BusinessConfig) => void;
  onExportZip: () => void;
  onOpenPdfProposal: () => void;
  onOpenQrModal: () => void;
  onOpenOgPreview: () => void;
  onOpenPublishModal: () => void;
}

export const ClientPitch: React.FC<ClientPitchProps> = ({ 
  config, 
  onChange, 
  onOpenPdfProposal,
  onOpenQrModal,
  onOpenOgPreview,
  onOpenPublishModal
}) => {
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [showTweaker, setShowTweaker] = useState<boolean>(false);

  const updatePalette = (key: keyof BusinessConfig['palette'], val: string) => {
    onChange({
      ...config,
      palette: { ...config.palette, [key]: val }
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

        {/* Commercial Pitch Toolbar Tools */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setShowTweaker(!showTweaker)}
            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all ${
              showTweaker 
                ? 'bg-sky-600 border-sky-500 text-white shadow-sm' 
                : 'bg-slate-100 border-slate-200/80 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>Ajustes en Vivo</span>
          </button>

          <button
            onClick={onOpenPdfProposal}
            className="flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-xs"
          >
            <FileText className="w-3.5 h-3.5 text-sky-400" />
            <span>PDF Propuesta</span>
          </button>

          <button
            onClick={onOpenQrModal}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/80"
            title="Código QR & vCard"
          >
            <QrCode className="w-4 h-4 text-emerald-600" />
          </button>

          <button
            onClick={onOpenOgPreview}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200/80"
            title="Previsualizador Redes"
          >
            <Share2 className="w-4 h-4 text-purple-600" />
          </button>

          <button
            onClick={onOpenPublishModal}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shadow-xs"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Publicar 1-Clic</span>
          </button>
        </div>
      </div>

      {/* Floating Live Tweaker Drawer */}
      {showTweaker && (
        <div className="bg-white/95 backdrop-blur-md border-b border-slate-200 p-4 sticky top-28 z-40 shadow-md animate-fadeIn">
          <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
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

    </div>
  );
};
