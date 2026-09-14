import React from 'react';
import { 
  Rocket, 
  Monitor, 
  Edit3, 
  Download, 
  Layers, 
  Play, 
  Sparkles, 
  FileText, 
  QrCode, 
  Share2, 
  Globe,
  HelpCircle,
  ChevronDown
} from 'lucide-react';
import { INDUSTRY_PRESETS } from '../data/industryPresets';
import type { BusinessConfig, IndustryType } from '../types/business';

interface NavbarProps {
  currentView: 'form' | 'pitch' | 'full';
  setCurrentView: (view: 'form' | 'pitch' | 'full') => void;
  onSelectPreset: (presetId: IndustryType) => void;
  onExportZip: () => void;
  onOpenLogoBuilder: () => void;
  onOpenPdfProposal: () => void;
  onOpenQrModal: () => void;
  onOpenOgPreview: () => void;
  onOpenPublishModal: () => void;
  onOpenDeployGuide: () => void;
  config: BusinessConfig;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  setCurrentView,
  onSelectPreset,
  onExportZip,
  onOpenLogoBuilder,
  onOpenPdfProposal,
  onOpenQrModal,
  onOpenOgPreview,
  onOpenPublishModal,
  onOpenDeployGuide,
}) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        
        {/* BLOQUE 1: MARCA & CONMUTADOR DE MODO */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2.5 cursor-pointer" onClick={() => setCurrentView('form')}>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-slate-900 via-sky-800 to-sky-500 flex items-center justify-center text-white shadow-md shadow-sky-500/15">
              <Rocket className="w-4 h-4 text-sky-200" />
            </div>
            <div>
              <span className="font-black text-base text-slate-900 tracking-tight flex items-center gap-1.5 leading-none">
                Launcher<span className="text-sky-600">Lab</span>
              </span>
              <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block mt-0.5">SaaS Studio</span>
            </div>
          </div>

          {/* Vistas Principales (Sin botones redundantes) */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200/70 text-xs">
            <button
              onClick={() => setCurrentView('form')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg font-bold transition-all ${
                currentView === 'form'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span>Editor & IA</span>
            </button>

            <button
              onClick={() => setCurrentView('pitch')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg font-bold transition-all ${
                currentView === 'pitch'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Monitor className="w-3.5 h-3.5" />
              <span>Pitch Cliente</span>
            </button>

            <button
              onClick={() => setCurrentView('full')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg font-bold transition-all ${
                currentView === 'full'
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Play className="w-3.5 h-3.5" />
              <span className="hidden md:inline">Pantalla Completa</span>
            </button>
          </div>
        </div>

        {/* BLOQUE 2: HERRAMIENTAS DE ESTUDIO (Agrupadas limpiamente) */}
        <div className="hidden lg:flex items-center space-x-1 bg-slate-50 p-1 rounded-xl border border-slate-200/80">
          <button
            onClick={onOpenLogoBuilder}
            className="flex items-center space-x-1 px-2.5 py-1.5 rounded-lg hover:bg-white text-slate-700 hover:text-sky-700 text-xs font-bold transition-all"
            title="Diseñador de Logos SVG"
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Logo SVG</span>
          </button>

          <button
            onClick={onOpenPdfProposal}
            className="flex items-center space-x-1 px-2.5 py-1.5 rounded-lg hover:bg-white text-slate-700 hover:text-indigo-700 text-xs font-bold transition-all"
            title="Propuesta Comercial PDF"
          >
            <FileText className="w-3.5 h-3.5 text-indigo-600" />
            <span>PDF Propuesta</span>
          </button>

          <button
            onClick={onOpenQrModal}
            className="flex items-center space-x-1 px-2.5 py-1.5 rounded-lg hover:bg-white text-slate-700 hover:text-emerald-700 text-xs font-bold transition-all"
            title="Generador QR & vCard"
          >
            <QrCode className="w-3.5 h-3.5 text-emerald-600" />
            <span>Código QR</span>
          </button>

          <button
            onClick={onOpenOgPreview}
            className="flex items-center space-x-1 px-2.5 py-1.5 rounded-lg hover:bg-white text-slate-700 hover:text-purple-700 text-xs font-bold transition-all"
            title="Previsualizador OpenGraph / Redes"
          >
            <Share2 className="w-3.5 h-3.5 text-purple-600" />
            <span>SEO Redes</span>
          </button>
        </div>

        {/* BLOQUE 3: DESPLIEGUE & EXPORTACIÓN */}
        <div className="flex items-center space-x-2">
          {/* Presets Selector Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-200/80 transition-all">
              <Layers className="w-3.5 h-3.5 text-sky-600" />
              <span>Presets</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>
            <div className="absolute right-0 mt-1 w-56 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 hidden group-hover:block z-50">
              <div className="text-[10px] font-bold text-slate-400 px-3 py-1.5 uppercase tracking-wider">
                Sectores Empresariales
              </div>
              <div className="space-y-0.5">
                {INDUSTRY_PRESETS.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => onSelectPreset(p.id)}
                    className="w-full text-left px-3 py-1.5 rounded-lg hover:bg-sky-50 text-slate-700 hover:text-sky-700 text-xs font-semibold transition-colors flex items-center justify-between"
                  >
                    <span>{p.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Deploy Help Guide */}
          <button
            onClick={onOpenDeployGuide}
            className="p-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200/80 transition-all"
            title="¿Cómo Publicar en Internet Real?"
          >
            <HelpCircle className="w-4 h-4 text-amber-600" />
          </button>

          {/* 1-Click Cloud Publish */}
          <button
            onClick={onOpenPublishModal}
            className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-extrabold shadow-sm transition-all transform hover:-translate-y-0.5"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Publicar 1-Clic</span>
          </button>

          {/* Export ZIP */}
          <button
            onClick={onExportZip}
            className="flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-extrabold shadow-sm transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>.ZIP</span>
          </button>
        </div>

      </div>
    </header>
  );
};
