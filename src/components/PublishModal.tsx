import React, { useState } from 'react';
import { Rocket, CheckCircle2, Copy, ExternalLink, X, Sparkles } from 'lucide-react';
import type { BusinessConfig } from '../types/business';
import confetti from 'canvas-confetti';

interface PublishModalProps {
  config: BusinessConfig;
  onChange: (updated: BusinessConfig) => void;
  onClose: () => void;
}

export const PublishModal: React.FC<PublishModalProps> = ({ config, onChange, onClose }) => {
  const [subdomain, setSubdomain] = useState<string>(
    config.name.toLowerCase().replace(/[^a-z0-9]/g, '') || 'mi-negocio'
  );
  const [isDeploying, setIsDeploying] = useState<boolean>(false);
  const [deployStep, setDeployStep] = useState<number>(0);
  const [copied, setCopied] = useState<boolean>(false);

  const fullUrl = `https://${subdomain}.launcherlab.app`;

  const startPublishing = () => {
    setIsDeploying(true);
    setDeployStep(1);

    setTimeout(() => setDeployStep(2), 1200);
    setTimeout(() => setDeployStep(3), 2400);
    setTimeout(() => {
      setDeployStep(4);
      setIsDeploying(false);
      onChange({ ...config, publishedUrl: fullUrl });
      confetti({ particleCount: 150, spread: 90, origin: { y: 0.5 } });
    }, 3600);
  };

  const copyUrl = () => {
    navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-3xl p-6 shadow-2xl relative border border-slate-200 text-slate-900">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 text-sky-600 text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Publicador 1-Clic en la Nube</span>
        </div>

        <h2 className="text-2xl font-black mb-1 text-slate-900">Desplegar Web en Vivo</h2>
        <p className="text-xs text-slate-500 mb-6">Publica la web del cliente en un subdominio rápido con certificado SSL HTTPS.</p>

        {/* Subdomain Input */}
        <div className="mb-6">
          <label className="block text-xs font-bold text-slate-700 mb-1.5">Dirección URL Personalizada</label>
          <div className="flex items-center border border-slate-300 rounded-xl overflow-hidden focus-within:border-sky-500">
            <span className="bg-slate-100 px-3 py-3 text-xs text-slate-500 font-mono border-r">https://</span>
            <input
              type="text"
              value={subdomain}
              onChange={(e) => setSubdomain(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
              className="w-full px-3 py-3 text-xs font-bold text-slate-900 focus:outline-none"
              placeholder="nombre-negocio"
            />
            <span className="bg-slate-100 px-3 py-3 text-xs text-slate-500 font-mono border-l">.launcherlab.app</span>
          </div>
        </div>

        {/* Deploy Steps Progress */}
        {isDeploying && (
          <div className="bg-slate-900 p-5 rounded-2xl text-white mb-6 space-y-3">
            <div className={`flex items-center space-x-3 text-xs ${deployStep >= 1 ? 'text-sky-400 font-bold' : 'text-slate-500'}`}>
              <div className={`w-2 h-2 rounded-full ${deployStep >= 1 ? 'bg-sky-400 animate-ping' : 'bg-slate-600'}`} />
              <span>1. Empaquetando recursos HTML5 & CSS3...</span>
            </div>

            <div className={`flex items-center space-x-3 text-xs ${deployStep >= 2 ? 'text-sky-400 font-bold' : 'text-slate-500'}`}>
              <div className={`w-2 h-2 rounded-full ${deployStep >= 2 ? 'bg-sky-400 animate-ping' : 'bg-slate-600'}`} />
              <span>2. Asignando certificado SSL (HTTPS)...</span>
            </div>

            <div className={`flex items-center space-x-3 text-xs ${deployStep >= 3 ? 'text-sky-400 font-bold' : 'text-slate-500'}`}>
              <div className={`w-2 h-2 rounded-full ${deployStep >= 3 ? 'bg-sky-400 animate-ping' : 'bg-slate-600'}`} />
              <span>3. Desplegando en Edge CDN Global...</span>
            </div>
          </div>
        )}

        {/* Live URL Created Result */}
        {deployStep === 4 && (
          <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl mb-6 text-center">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
            <h4 className="text-sm font-extrabold text-emerald-900 mb-1">¡Web Publicada en Vivo!</h4>
            <p className="text-xs text-emerald-700 mb-4 font-mono truncate">{fullUrl}</p>
            
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={copyUrl}
                className="px-4 py-2 rounded-xl bg-white border border-emerald-300 text-emerald-800 font-bold text-xs flex items-center space-x-1.5 shadow-sm hover:bg-emerald-100"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? '¡Copiado!' : 'Copiar URL'}</span>
              </button>

              <a
                href={fullUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center space-x-1.5 shadow-md hover:bg-emerald-500"
              >
                <span>Abrir Enlace</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {deployStep < 4 && !isDeploying && (
          <button
            onClick={startPublishing}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-extrabold text-xs shadow-xl flex items-center justify-center space-x-2 transition-all"
          >
            <Rocket className="w-4 h-4" />
            <span>Publicar Web en 1-Clic</span>
          </button>
        )}

      </div>
    </div>
  );
};
