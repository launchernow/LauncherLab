import React, { useState } from 'react';
import { 
  X, 
  Upload, 
  Image as ImageIcon, 
  Check, 
  Trash2, 
  Link as LinkIcon, 
  Sparkles,
  Briefcase,
  Users,
  Award
} from 'lucide-react';
import type { BusinessConfig } from '../types/business';

interface ImagePickerModalProps {
  config: BusinessConfig;
  onChange: (updated: BusinessConfig) => void;
  onClose: () => void;
}

export const ImagePickerModal: React.FC<ImagePickerModalProps> = ({
  config,
  onChange,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'logo' | 'hero' | 'services' | 'portfolio' | 'team'>('logo');

  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    callback: (dataUrl: string) => void
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      if (evt.target?.result) {
        callback(evt.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const updateLogoUrl = (url: string) => {
    onChange({ ...config, customLogoUrl: url });
  };

  const updateHeroUrl = (url: string) => {
    onChange({ ...config, customHeroUrl: url });
  };

  const updateServiceImage = (id: string, url: string) => {
    onChange({
      ...config,
      services: config.services.map(s => s.id === id ? { ...s, imageUrl: url } : s)
    });
  };

  const updatePortfolioImage = (id: string, url: string) => {
    if (!config.portfolio) return;
    onChange({
      ...config,
      portfolio: config.portfolio.map(p => p.id === id ? { ...p, imageUrl: url } : p)
    });
  };

  const updateTeamImage = (id: string, url: string) => {
    if (!config.team) return;
    onChange({
      ...config,
      team: config.team.map(t => t.id === id ? { ...t, imageUrl: url } : t)
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-auto animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl relative border border-slate-200 text-slate-900 my-8">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-2xl bg-sky-500/10 text-sky-600 flex items-center justify-center font-black">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-black text-slate-900">Subir Mis Propias Fotos & Logo</h2>
              <p className="text-xs text-slate-500">Añade el logo de tu empresa e imágenes personalizadas a cualquier sección.</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center space-x-2 border-b border-slate-200 pb-3 mb-6 overflow-x-auto text-xs font-extrabold">
          <button
            onClick={() => setActiveTab('logo')}
            className={`px-4 py-2 rounded-xl flex items-center space-x-2 transition-all shrink-0 ${
              activeTab === 'logo' ? 'bg-sky-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>1. Logo Empresa</span>
          </button>

          <button
            onClick={() => setActiveTab('hero')}
            className={`px-4 py-2 rounded-xl flex items-center space-x-2 transition-all shrink-0 ${
              activeTab === 'hero' ? 'bg-sky-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>2. Foto Hero</span>
          </button>

          <button
            onClick={() => setActiveTab('services')}
            className={`px-4 py-2 rounded-xl flex items-center space-x-2 transition-all shrink-0 ${
              activeTab === 'services' ? 'bg-sky-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>3. Servicios ({config.services.length})</span>
          </button>

          {config.portfolio && config.portfolio.length > 0 && (
            <button
              onClick={() => setActiveTab('portfolio')}
              className={`px-4 py-2 rounded-xl flex items-center space-x-2 transition-all shrink-0 ${
                activeTab === 'portfolio' ? 'bg-sky-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>4. Portfolio ({config.portfolio.length})</span>
            </button>
          )}

          {config.team && config.team.length > 0 && (
            <button
              onClick={() => setActiveTab('team')}
              className={`px-4 py-2 rounded-xl flex items-center space-x-2 transition-all shrink-0 ${
                activeTab === 'team' ? 'bg-sky-600 text-white shadow-md' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>5. Equipo ({config.team.length})</span>
            </button>
          )}
        </div>

        {/* TAB 1: LOGO */}
        {activeTab === 'logo' && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col md:flex-row items-center gap-6">
              <div className="w-32 h-32 rounded-2xl border-2 border-dashed border-slate-300 bg-white flex items-center justify-center p-3 relative overflow-hidden shadow-inner shrink-0">
                {config.customLogoUrl ? (
                  <img src={config.customLogoUrl} alt="Logo de la empresa" className="w-full h-full object-contain" />
                ) : (
                  <div className="text-center opacity-50">
                    <ImageIcon className="w-8 h-8 mx-auto mb-1 text-slate-400" />
                    <span className="text-[10px] font-bold block">Sin logo subido</span>
                  </div>
                )}
              </div>

              <div className="space-y-3 flex-1 text-left w-full">
                <h3 className="font-extrabold text-base text-slate-900">Logo de la Empresa</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Sube la imagen oficial de tu negocio (PNG con transparencia recomendado) o introduce el enlace de la imagen.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <label className="cursor-pointer px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shadow-md flex items-center space-x-2">
                    <Upload className="w-4 h-4" />
                    <span>Subir Logo desde mi PC</span>
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      onChange={(e) => handleFileUpload(e, updateLogoUrl)} 
                    />
                  </label>

                  {config.customLogoUrl && (
                    <button 
                      onClick={() => updateLogoUrl('')} 
                      className="px-4 py-2.5 rounded-xl border border-rose-200 bg-rose-50 text-rose-600 text-xs font-bold hover:bg-rose-100 flex items-center space-x-1.5"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Quitar Logo Personalizado</span>
                    </button>
                  )}
                </div>

                <div className="pt-2">
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">O pegar URL de imagen:</label>
                  <div className="flex items-center bg-white border border-slate-300 rounded-xl px-3 py-1.5">
                    <LinkIcon className="w-3.5 h-3.5 text-slate-400 mr-2" />
                    <input 
                      type="url"
                      value={config.customLogoUrl || ''}
                      onChange={(e) => updateLogoUrl(e.target.value)}
                      placeholder="https://midominio.com/logo.png"
                      className="w-full text-xs text-slate-900 focus:outline-none font-mono"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: FOTO HERO */}
        {activeTab === 'hero' && (
          <div className="space-y-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col md:flex-row items-center gap-6">
              <div className="w-48 h-32 rounded-2xl border border-slate-300 bg-white overflow-hidden shadow-inner shrink-0 relative">
                {config.customHeroUrl ? (
                  <img src={config.customHeroUrl} alt="Foto Portada Hero" className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center opacity-50 bg-slate-100">
                    <ImageIcon className="w-8 h-8 text-slate-400 mb-1" />
                    <span className="text-[10px] font-bold">Foto actual de plantilla</span>
                  </div>
                )}
              </div>

              <div className="space-y-3 flex-1 text-left w-full">
                <h3 className="font-extrabold text-base text-slate-900">Fotografía Principal de Portada (Hero)</h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Es la primera imagen que verá el cliente al entrar en la web.
                </p>

                <div className="flex flex-wrap items-center gap-3">
                  <label className="cursor-pointer px-4 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold shadow-md flex items-center space-x-2">
                    <Upload className="w-4 h-4" />
                    <span>Subir Foto Hero desde mi PC</span>
                    <input 
                      type="file" 
                      accept="image/*" 
                      className="hidden" 
                      onChange={(e) => handleFileUpload(e, updateHeroUrl)} 
                    />
                  </label>

                  {config.customHeroUrl && (
                    <button 
                      onClick={() => updateHeroUrl('')} 
                      className="px-4 py-2.5 rounded-xl border border-rose-200 bg-rose-50 text-rose-600 text-xs font-bold hover:bg-rose-100 flex items-center space-x-1.5"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Restaurar Foto Predeterminada</span>
                    </button>
                  )}
                </div>

                <div className="pt-2">
                  <label className="block text-[11px] font-bold text-slate-600 mb-1">O pegar URL de imagen:</label>
                  <div className="flex items-center bg-white border border-slate-300 rounded-xl px-3 py-1.5">
                    <LinkIcon className="w-3.5 h-3.5 text-slate-400 mr-2" />
                    <input 
                      type="url"
                      value={config.customHeroUrl || ''}
                      onChange={(e) => updateHeroUrl(e.target.value)}
                      placeholder="https://images.unsplash.com/photo-..."
                      className="w-full text-xs text-slate-900 focus:outline-none font-mono"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SERVICIOS */}
        {activeTab === 'services' && (
          <div className="space-y-4 max-h-[380px] overflow-y-auto pr-2">
            {config.services.map((service, idx) => (
              <div key={service.id} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/70 flex items-center gap-4 text-left">
                <div className="w-20 h-20 rounded-xl overflow-hidden border border-slate-300 bg-white shrink-0">
                  {service.imageUrl ? (
                    <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center opacity-40"><ImageIcon className="w-6 h-6 text-slate-400" /></div>
                  )}
                </div>

                <div className="flex-1 space-y-2">
                  <span className="font-extrabold text-xs text-slate-900 block">{idx + 1}. {service.title} ({service.price})</span>
                  
                  <div className="flex flex-wrap items-center gap-2">
                    <label className="cursor-pointer px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-[11px] font-bold shadow-xs flex items-center space-x-1.5">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Subir Foto</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => handleFileUpload(e, (url) => updateServiceImage(service.id, url))} 
                      />
                    </label>

                    <div className="flex-1 flex items-center bg-white border border-slate-300 rounded-lg px-2 py-1">
                      <LinkIcon className="w-3 h-3 text-slate-400 mr-1.5 shrink-0" />
                      <input 
                        type="url" 
                        value={service.imageUrl || ''} 
                        onChange={(e) => updateServiceImage(service.id, e.target.value)} 
                        placeholder="URL de foto..." 
                        className="w-full text-[11px] font-mono focus:outline-none" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 4: PORTFOLIO */}
        {activeTab === 'portfolio' && (
          <div className="space-y-4 max-h-[380px] overflow-y-auto pr-2">
            {config.portfolio?.map((item, idx) => (
              <div key={item.id} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/70 flex items-center gap-4 text-left">
                <div className="w-20 h-20 rounded-xl overflow-hidden border border-slate-300 bg-white shrink-0">
                  <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 space-y-2">
                  <span className="font-extrabold text-xs text-slate-900 block">{idx + 1}. {item.title} ({item.category})</span>
                  
                  <div className="flex flex-wrap items-center gap-2">
                    <label className="cursor-pointer px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-[11px] font-bold shadow-xs flex items-center space-x-1.5">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Subir Foto Caso</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => handleFileUpload(e, (url) => updatePortfolioImage(item.id, url))} 
                      />
                    </label>

                    <div className="flex-1 flex items-center bg-white border border-slate-300 rounded-lg px-2 py-1">
                      <LinkIcon className="w-3 h-3 text-slate-400 mr-1.5 shrink-0" />
                      <input 
                        type="url" 
                        value={item.imageUrl || ''} 
                        onChange={(e) => updatePortfolioImage(item.id, e.target.value)} 
                        placeholder="URL de foto..." 
                        className="w-full text-[11px] font-mono focus:outline-none" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 5: EQUIPO */}
        {activeTab === 'team' && (
          <div className="space-y-4 max-h-[380px] overflow-y-auto pr-2">
            {config.team?.map((member, idx) => (
              <div key={member.id} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/70 flex items-center gap-4 text-left">
                <div className="w-16 h-16 rounded-full overflow-hidden border border-slate-300 bg-white shrink-0">
                  <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 space-y-2">
                  <span className="font-extrabold text-xs text-slate-900 block">{idx + 1}. {member.name} ({member.role})</span>
                  
                  <div className="flex flex-wrap items-center gap-2">
                    <label className="cursor-pointer px-3 py-1.5 rounded-lg bg-sky-600 hover:bg-sky-500 text-white text-[11px] font-bold shadow-xs flex items-center space-x-1.5">
                      <Upload className="w-3.5 h-3.5" />
                      <span>Subir Perfil</span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={(e) => handleFileUpload(e, (url) => updateTeamImage(member.id, url))} 
                      />
                    </label>

                    <div className="flex-1 flex items-center bg-white border border-slate-300 rounded-lg px-2 py-1">
                      <LinkIcon className="w-3 h-3 text-slate-400 mr-1.5 shrink-0" />
                      <input 
                        type="url" 
                        value={member.imageUrl || ''} 
                        onChange={(e) => updateTeamImage(member.id, e.target.value)} 
                        placeholder="URL de foto..." 
                        className="w-full text-[11px] font-mono focus:outline-none" 
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal Footer */}
        <div className="border-t border-slate-200 pt-4 mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-black shadow-md flex items-center space-x-1.5"
          >
            <Check className="w-4 h-4" />
            <span>Guardar & Aplicar Fotos</span>
          </button>
        </div>

      </div>
    </div>
  );
};
