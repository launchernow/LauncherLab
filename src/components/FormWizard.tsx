import React, { useState } from 'react';
import { 
  Building2, 
  Palette, 
  Sliders, 
  Briefcase, 
  FileText, 
  Plus, 
  Trash2, 
  Check, 
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Eye,
  Type,
  Phone,
  Mail,
  MapPin,
  Clock,
  Zap,
  Wand2,
  Image
} from 'lucide-react';
import type { BusinessConfig, IndustryType, VisualTheme, FontFamily, LayoutModel } from '../types/business';
import { INDUSTRY_PRESETS } from '../data/industryPresets';
import { generateBusinessWithAI } from '../utils/aiGenerator';
import { ImagePickerModal } from './ImagePickerModal';
import confetti from 'canvas-confetti';

interface FormWizardProps {
  config: BusinessConfig;
  onChange: (updated: BusinessConfig) => void;
  onPreviewClick: () => void;
  onOpenLogoBuilder: () => void;
}

export const FormWizard: React.FC<FormWizardProps> = ({ 
  config, 
  onChange, 
  onPreviewClick,
  onOpenLogoBuilder
}) => {
  const [step, setStep] = useState<number>(1);
  const [aiPrompt, setAiPrompt] = useState<string>('');
  const [isAiGenerating, setIsAiGenerating] = useState<boolean>(false);
  const [showImagePicker, setShowImagePicker] = useState<boolean>(false);

  const steps = [
    { id: 1, name: 'Negocio & IA', icon: Building2 },
    { id: 2, name: 'Textos & Hero', icon: FileText },
    { id: 3, name: 'Servicios', icon: Briefcase },
    { id: 4, name: 'Diseño & Colores', icon: Palette },
    { id: 5, name: 'Secciones', icon: Sliders }
  ];

  const handleGenerateAI = () => {
    if (!aiPrompt.trim()) return;
    setIsAiGenerating(true);
    setTimeout(() => {
      const generated = generateBusinessWithAI(aiPrompt);
      onChange(generated);
      setIsAiGenerating(false);
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.3 } });
    }, 1000);
  };

  const updateField = <K extends keyof BusinessConfig>(field: K, value: BusinessConfig[K]) => {
    onChange({ ...config, [field]: value });
  };

  const updatePalette = (key: keyof BusinessConfig['palette'], val: string) => {
    onChange({
      ...config,
      palette: { ...config.palette, [key]: val }
    });
  };

  const updateSection = (key: keyof BusinessConfig['sections'], val: boolean) => {
    onChange({
      ...config,
      sections: { ...config.sections, [key]: val }
    });
  };

  const handlePresetSelect = (presetId: IndustryType) => {
    const found = INDUSTRY_PRESETS.find(p => p.id === presetId);
    if (found && found.defaultConfig) {
      onChange({ ...config, ...found.defaultConfig } as BusinessConfig);
    }
  };

  const addService = () => {
    const newService = {
      id: `s-${Date.now()}`,
      title: 'Nuevo Servicio Premium',
      description: 'Descripción detallada de lo que incluye este servicio o producto para tus clientes.',
      price: '99 €',
      iconName: 'Sparkles'
    };
    onChange({
      ...config,
      services: [...config.services, newService]
    });
  };

  const removeService = (id: string) => {
    onChange({
      ...config,
      services: config.services.filter(s => s.id !== id)
    });
  };

  const updateService = (id: string, field: string, val: string) => {
    onChange({
      ...config,
      services: config.services.map(s => s.id === id ? { ...s, [field]: val } : s)
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      
      {/* AI Super-Bar Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-sky-950 to-indigo-950 text-white p-6 rounded-3xl mb-8 shadow-xl border border-sky-800/40 relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-sky-400 text-xs font-bold uppercase tracking-wider mb-1">
              <Wand2 className="w-4 h-4 animate-bounce" />
              <span>Generador por Inteligencia Artificial</span>
            </div>
            <h2 className="text-xl font-black">¿Quieres la Web Creada al Instante con IA?</h2>
            <p className="text-xs text-slate-300">Escribe el nombre o concepto del negocio y la IA redactará todo por ti.</p>
          </div>

          <div className="w-full md:w-auto flex items-center bg-white/10 p-1.5 rounded-2xl border border-white/20 backdrop-blur-md">
            <input
              type="text"
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              placeholder="ej. Taller de coches en Sevilla..."
              className="px-3 py-2 text-xs bg-transparent text-white placeholder-slate-400 focus:outline-none w-full md:w-64 font-medium"
            />
            <button
              onClick={handleGenerateAI}
              disabled={isAiGenerating}
              className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white text-xs font-extrabold shadow-lg flex items-center space-x-1.5 whitespace-nowrap transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isAiGenerating ? 'Generando...' : 'Generar IA'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Step Header */}
      <div className="bg-white border border-slate-200 p-6 rounded-3xl mb-8 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-black text-slate-900 flex items-center gap-2">
              Configurador LauncherLab
            </h1>
            <p className="text-xs text-slate-500 mt-0.5">Define los detalles del negocio para generar el sitio web en tiempo real.</p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setShowImagePicker(true)}
              className="flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-700 text-xs font-extrabold border border-sky-300 shadow-xs"
            >
              <Image className="w-3.5 h-3.5 text-sky-600" />
              <span>Subir Fotos & Logo</span>
            </button>

            <button
              onClick={onOpenLogoBuilder}
              className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold border border-slate-200"
            >
              <Image className="w-3.5 h-3.5 text-slate-500" />
              <span>Diseñar Logo SVG</span>
            </button>

            <button
              onClick={onPreviewClick}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-all shadow-md"
            >
              <Eye className="w-4 h-4" />
              <span>Ver Web Generada</span>
            </button>
          </div>
        </div>

        {/* Step Progress Bar */}
        <div className="grid grid-cols-5 gap-2">
          {steps.map((s) => {
            const Icon = s.icon;
            const isActive = step === s.id;
            const isDone = step > s.id;
            return (
              <button
                key={s.id}
                onClick={() => setStep(s.id)}
                className={`flex flex-col items-center p-3 rounded-2xl border text-center transition-all ${
                  isActive
                    ? 'bg-sky-50 border-sky-500 text-sky-700 shadow-sm'
                    : isDone
                    ? 'bg-slate-100 border-slate-200 text-slate-700'
                    : 'bg-slate-50 border-slate-200 text-slate-400'
                }`}
              >
                <Icon className={`w-5 h-5 mb-1 ${isActive ? 'text-sky-600' : isDone ? 'text-emerald-600' : 'text-slate-400'}`} />
                <span className="text-[11px] font-bold">{s.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step Content Card */}
      <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm min-h-[420px]">

        {/* STEP 1: BUSINESS IDENTIFICATION */}
        {step === 1 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <h2 className="text-lg font-bold text-slate-900">Paso 1: Identidad & Contacto del Negocio</h2>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-slate-500">Presets:</span>
                {INDUSTRY_PRESETS.slice(0, 4).map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handlePresetSelect(p.id)}
                    className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-sky-600 text-slate-700 hover:text-white text-[11px] font-bold transition-all"
                  >
                    {p.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Nombre de la Empresa / Marca</label>
                <input
                  type="text"
                  value={config.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-sky-500 font-bold"
                  placeholder="ej. BellaVista Gourmet"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Eslogan Corto</label>
                <input
                  type="text"
                  value={config.slogan}
                  onChange={(e) => updateField('slogan', e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-sky-500"
                  placeholder="ej. Alta Cocina y Ambiente Exclusivo"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1">
                  <Phone className="w-3.5 h-3.5 text-sky-600" /> Teléfono de Contacto
                </label>
                <input
                  type="text"
                  value={config.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-emerald-600" /> WhatsApp Directo (con prefijo)
                </label>
                <input
                  type="text"
                  value={config.whatsappNumber}
                  onChange={(e) => updateField('whatsappNumber', e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-sky-500"
                  placeholder="+34600000000"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-sky-600" /> Correo Electrónico
                </label>
                <input
                  type="text"
                  value={config.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-sky-600" /> Dirección Física
                </label>
                <input
                  type="text"
                  value={config.address}
                  onChange={(e) => updateField('address', e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-sky-600" /> Horarios de Atención
                </label>
                <input
                  type="text"
                  value={config.workingHours}
                  onChange={(e) => updateField('workingHours', e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: HEADLINES & TEXT CONTENT */}
        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-4">Paso 2: Titulares & Secciones Principales</h2>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Titular Principal del Hero (H1)</label>
              <input
                type="text"
                value={config.heroHeadline}
                onChange={(e) => updateField('heroHeadline', e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-sky-500 font-bold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">Subtitular Descriptivo</label>
              <textarea
                rows={3}
                value={config.heroSubheadline}
                onChange={(e) => updateField('heroSubheadline', e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-sky-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Texto del Botón Principal (CTA)</label>
                <input
                  type="text"
                  value={config.ctaText}
                  onChange={(e) => updateField('ctaText', e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Texto del Botón Secundario</label>
                <input
                  type="text"
                  value={config.secondaryCtaText}
                  onChange={(e) => updateField('secondaryCtaText', e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900 focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            <div className="border-t border-slate-200 pt-4">
              <h3 className="text-xs font-bold text-slate-800 mb-3">Sección "Sobre Nosotros"</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Título de la sección</label>
                  <input
                    type="text"
                    value={config.aboutTitle}
                    onChange={(e) => updateField('aboutTitle', e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-600 mb-1">Distintivo o Premio Badge</label>
                  <input
                    type="text"
                    value={config.aboutBadge}
                    onChange={(e) => updateField('aboutBadge', e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs text-slate-900"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-600 mb-1">Historia o Descripción del Negocio</label>
                <textarea
                  rows={3}
                  value={config.aboutText}
                  onChange={(e) => updateField('aboutText', e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900"
                />
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: SERVICES */}
        {step === 3 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <h2 className="text-lg font-bold text-slate-900">Paso 3: Catálogo de Servicios & Productos</h2>
              <button
                onClick={addService}
                className="flex items-center space-x-1 px-3 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold"
              >
                <Plus className="w-4 h-4" />
                <span>Añadir Servicio</span>
              </button>
            </div>

            <div className="space-y-4">
              {config.services.map((item, idx) => (
                <div key={item.id} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 relative group">
                  <button
                    onClick={() => removeService(item.id)}
                    className="absolute top-3 right-3 text-slate-400 hover:text-red-600 transition-colors p-1"
                    title="Eliminar servicio"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="md:col-span-2">
                      <label className="block text-[11px] font-bold text-slate-600 mb-1">Título del Servicio #{idx + 1}</label>
                      <input
                        type="text"
                        value={item.title}
                        onChange={(e) => updateService(item.id, 'title', e.target.value)}
                        className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 font-bold"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold text-slate-600 mb-1">Precio / Tarifa</label>
                      <input
                        type="text"
                        value={item.price}
                        onChange={(e) => updateService(item.id, 'price', e.target.value)}
                        className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-sky-700 font-bold"
                      />
                    </div>
                    <div className="md:col-span-3">
                      <label className="block text-[11px] font-bold text-slate-600 mb-1">Descripción Breve</label>
                      <input
                        type="text"
                        value={item.description}
                        onChange={(e) => updateService(item.id, 'description', e.target.value)}
                        className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-700"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 4: DESIGN & COLORS */}
        {step === 4 && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-4">Paso 4: Identidad Visual, Colores & Fuentes</h2>

            {/* Layout Model / Architectural Template */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-3">Modelo / Estructura de Maquetación (Layout Model)</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { id: 'luxury', name: '🌟 Studio Luxury', desc: 'Rejilla fotográfica asimétrica y tarjetas flotantes' },
                  { id: 'modern', name: '⚡ Modern SaaS & Tech', desc: 'Héroe centrado, contadores métricos y divisiones bold' },
                  { id: 'minimal', name: '🌿 Boutique Minimal', desc: 'Split 50/50 limpio y tipografía editorial' },
                  { id: 'conversion', name: '🚀 Lead Conversion', desc: 'Formulario de cita/reserva directo en el Hero' }
                ].map((m) => (
                  <button
                    key={m.id}
                    onClick={() => {
                      const newModel = m.id as LayoutModel;
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
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      (config.layoutModel || 'luxury') === m.id
                        ? 'bg-indigo-50 border-indigo-500 text-indigo-950 shadow-sm font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <div className="font-bold text-xs mb-1">{m.name}</div>
                    <div className="text-[10px] text-slate-500 leading-snug">{m.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Visual Theme Archetype */}
            <div className="border-t border-slate-200 pt-4">
              <label className="block text-xs font-bold text-slate-700 mb-3">Estilo / Arquetipo de Color</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { id: 'modern-glass', name: 'Modern Glass', desc: 'Neón, cristales y tecnología' },
                  { id: 'luxury-gold', name: 'Luxury Gold', desc: 'Elegancia dorada y serifa premium' },
                  { id: 'minimal-clean', name: 'Clean Minimal', desc: 'Claro, directo y sin distracciones' },
                  { id: 'vibrant-creative', name: 'Vibrant Creative', desc: 'Colores vivos y formas dinámicas' }
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => updateField('visualTheme', t.id as VisualTheme)}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      config.visualTheme === t.id
                        ? 'bg-sky-50 border-sky-500 text-sky-900 shadow-sm font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <div className="font-bold text-xs mb-1">{t.name}</div>
                    <div className="text-[10px] text-slate-500">{t.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Color Palette Picker */}
            <div className="border-t border-slate-200 pt-4">
              <label className="block text-xs font-bold text-slate-700 mb-3">Paleta de Colores Personalizada</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-900">Color Primario</div>
                    <div className="text-[10px] text-slate-500">Botones principales</div>
                  </div>
                  <input
                    type="color"
                    value={config.palette.primary}
                    onChange={(e) => updatePalette('primary', e.target.value)}
                    className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border-0"
                  />
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-900">Color Secundario</div>
                    <div className="text-[10px] text-slate-500">Fondos y tarjetas</div>
                  </div>
                  <input
                    type="color"
                    value={config.palette.secondary}
                    onChange={(e) => updatePalette('secondary', e.target.value)}
                    className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border-0"
                  />
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-slate-900">Color de Acento</div>
                    <div className="text-[10px] text-slate-500">Brillos y detalles</div>
                  </div>
                  <input
                    type="color"
                    value={config.palette.accent}
                    onChange={(e) => updatePalette('accent', e.target.value)}
                    className="w-10 h-10 rounded-lg cursor-pointer bg-transparent border-0"
                  />
                </div>
              </div>
            </div>

            {/* Mode & Fonts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-slate-200 pt-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2">Modo de Fondo</label>
                <div className="flex space-x-3">
                  <button
                    onClick={() => updatePalette('bgMode', 'dark')}
                    className={`flex-1 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                      config.palette.bgMode === 'dark'
                        ? 'bg-slate-900 border-sky-500 text-white'
                        : 'bg-slate-100 border-slate-200 text-slate-600'
                    }`}
                  >
                    🌙 Modo Oscuro
                  </button>
                  <button
                    onClick={() => updatePalette('bgMode', 'light')}
                    className={`flex-1 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                      config.palette.bgMode === 'light'
                        ? 'bg-white border-sky-500 text-slate-900 shadow-sm'
                        : 'bg-slate-100 border-slate-200 text-slate-600'
                    }`}
                  >
                    ☀️ Modo Claro
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-2 flex items-center gap-1">
                  <Type className="w-3.5 h-3.5 text-sky-600" /> Tipografía Principal
                </label>
                <select
                  value={config.fontFamily}
                  onChange={(e) => updateField('fontFamily', e.target.value as FontFamily)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:border-sky-500 font-bold"
                >
                  <option value="inter">Inter (Moderna y Neutra)</option>
                  <option value="jakarta">Plus Jakarta Sans (Corporativa)</option>
                  <option value="playfair">Playfair Display (Serifa Elegante / Lujo)</option>
                  <option value="space">Space Grotesk (Tech / Innovación)</option>
                </select>
              </div>
            </div>

          </div>
        )}

        {/* STEP 5: SECTIONS TOGGLE */}
        {step === 5 && (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-4">Paso 5: Activar / Desactivar Secciones de la Web</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: 'topBanner', name: 'Franja de Anuncio Superior', desc: 'Banner destacado de atención/promoción arriba del todo' },
                { id: 'hero', name: 'Sección Principal (Hero Banner)', desc: 'Titular, subtítulo y botones de llamada a la acción' },
                { id: 'about', name: 'Sobre Nosotros', desc: 'Historia del negocio y datos destacados' },
                { id: 'services', name: 'Servicios / Catálogo', desc: 'Tarjetas de servicios y precios' },
                { id: 'testimonials', name: 'Testimonios & Reseñas', desc: 'Opiniones con estrellas de clientes reales' },
                { id: 'faq', name: 'Preguntas Frecuentes (FAQ)', desc: 'Acordeón interactivo con dudas comunes' },
                { id: 'contact', name: 'Formulario de Contacto & Mapa', desc: 'Formulario directo y datos de localización' }
              ].map((s) => {
                const isEnabled = config.sections[s.id as keyof typeof config.sections];
                return (
                  <div
                    key={s.id}
                    onClick={() => updateSection(s.id as keyof typeof config.sections, !isEnabled)}
                    className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                      isEnabled
                        ? 'bg-sky-50 border-sky-400 text-sky-950 shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-400'
                    }`}
                  >
                    <div>
                      <div className="font-bold text-xs">{s.name}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{s.desc}</div>
                    </div>
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center border ${
                      isEnabled ? 'bg-sky-600 border-sky-500 text-white' : 'border-slate-300 bg-white'
                    }`}>
                      {isEnabled && <Check className="w-4 h-4" />}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

      </div>

      {/* Footer Navigation Buttons */}
      <div className="flex items-center justify-between mt-6">
        <button
          onClick={() => setStep(Math.max(1, step - 1))}
          disabled={step === 1}
          className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold transition-all ${
            step === 1
              ? 'opacity-30 cursor-not-allowed bg-slate-200 text-slate-400'
              : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Anterior</span>
        </button>

        <div className="text-xs text-slate-500 font-bold">
          Paso {step} de 5
        </div>

        {step < 5 ? (
          <button
            onClick={() => setStep(Math.min(5, step + 1))}
            className="flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-all shadow-md"
          >
            <span>Siguiente</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={onPreviewClick}
            className="flex items-center space-x-2 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>¡Ver Web Generada!</span>
          </button>
        )}
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
