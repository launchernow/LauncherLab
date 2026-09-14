import React from 'react';
import { 
  Sparkles, 
  Shield, 
  Crown, 
  Flame, 
  Zap, 
  Award, 
  Star, 
  Compass, 
  Hexagon, 
  Code, 
  Building2,
  X,
  Check
} from 'lucide-react';
import type { BusinessConfig } from '../types/business';

interface LogoBuilderProps {
  config: BusinessConfig;
  onChange: (updated: BusinessConfig) => void;
  onClose: () => void;
}

export const LogoBuilder: React.FC<LogoBuilderProps> = ({ config, onChange, onClose }) => {
  const iconsList = [
    { name: 'Sparkles', icon: Sparkles },
    { name: 'Shield', icon: Shield },
    { name: 'Crown', icon: Crown },
    { name: 'Flame', icon: Flame },
    { name: 'Zap', icon: Zap },
    { name: 'Award', icon: Award },
    { name: 'Star', icon: Star },
    { name: 'Compass', icon: Compass },
    { name: 'Hexagon', icon: Hexagon },
    { name: 'Code', icon: Code },
    { name: 'Building2', icon: Building2 }
  ];

  const updateLogoIcon = (iconName: string) => {
    onChange({ ...config, logoIcon: iconName });
  };

  const updateLogoType = (type: 'text' | 'badge' | 'minimal') => {
    onChange({ ...config, logoType: type });
  };

  const SelectedIcon = iconsList.find(i => i.name === config.logoIcon)?.icon || Sparkles;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white rounded-3xl p-6 shadow-2xl relative border border-slate-200 text-slate-900">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 text-sky-600 text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Diseñador de Logos SVG</span>
        </div>

        <h2 className="text-2xl font-black mb-1 text-slate-900">Estudio de Identidad de Marca</h2>
        <p className="text-xs text-slate-500 mb-6">Personaliza el emblema vectorial que representará a {config.name}.</p>

        {/* Live SVG Logo Preview */}
        <div className="bg-slate-900 p-8 rounded-2xl mb-6 border border-slate-800 flex items-center justify-center min-h-[160px]">
          {config.logoType === 'badge' && (
            <div className="flex items-center space-x-3">
              <div 
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-xl"
                style={{ background: `linear-gradient(135deg, ${config.palette.primary}, ${config.palette.accent})` }}
              >
                <SelectedIcon className="w-8 h-8" />
              </div>
              <div className="text-left">
                <span className="text-2xl font-extrabold text-white block leading-none">{config.name}</span>
                <span className="text-xs font-semibold text-slate-400">{config.slogan}</span>
              </div>
            </div>
          )}

          {config.logoType === 'minimal' && (
            <div className="flex items-center space-x-3">
              <SelectedIcon className="w-10 h-10" style={{ color: config.palette.primary }} />
              <span className="text-2xl font-black text-white tracking-tight">{config.name}</span>
            </div>
          )}

          {config.logoType === 'text' && (
            <div className="text-center">
              <span 
                className="text-3xl font-black tracking-wider block bg-clip-text text-transparent"
                style={{ backgroundImage: `linear-gradient(135deg, ${config.palette.primary}, ${config.palette.accent})` }}
              >
                {config.name.toUpperCase()}
              </span>
              <span className="text-xs text-slate-400 font-medium tracking-widest uppercase">{config.slogan}</span>
            </div>
          )}
        </div>

        {/* Layout Selector */}
        <div className="mb-6">
          <label className="block text-xs font-bold text-slate-700 mb-2">Disposición del Emblema</label>
          <div className="grid grid-cols-3 gap-3">
            {[
              { id: 'badge', name: 'Insignia Gradiente' },
              { id: 'minimal', name: 'Icono Minimalista' },
              { id: 'text', name: 'Tipografía Pura' }
            ].map((t) => (
              <button
                key={t.id}
                onClick={() => updateLogoType(t.id as any)}
                className={`py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
                  config.logoType === t.id
                    ? 'bg-sky-50 border-sky-500 text-sky-700 shadow-sm'
                    : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                {t.name}
              </button>
            ))}
          </div>
        </div>

        {/* Icon Grid */}
        <div className="mb-6">
          <label className="block text-xs font-bold text-slate-700 mb-2">Selecciona un Simbolo Isotipo</label>
          <div className="grid grid-cols-6 gap-2">
            {iconsList.map((i) => {
              const IconComp = i.icon;
              const isSelected = config.logoIcon === i.name;
              return (
                <button
                  key={i.name}
                  onClick={() => updateLogoIcon(i.name)}
                  className={`p-3 rounded-xl border flex items-center justify-center transition-all ${
                    isSelected
                      ? 'bg-sky-600 border-sky-600 text-white shadow-md scale-105'
                      : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <IconComp className="w-5 h-5" />
                </button>
              );
            })}
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-lg flex items-center justify-center space-x-2"
        >
          <Check className="w-4 h-4" />
          <span>Guardar Logo en la Web</span>
        </button>
      </div>
    </div>
  );
};
