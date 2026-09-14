import React, { useState } from 'react';
import { X, Sparkles, MessageSquare, Globe, Share2 } from 'lucide-react';
import type { BusinessConfig } from '../types/business';

interface SocialOgPreviewModalProps {
  config: BusinessConfig;
  onClose: () => void;
}

export const SocialOgPreviewModal: React.FC<SocialOgPreviewModalProps> = ({ config, onClose }) => {
  const [platform, setPlatform] = useState<'whatsapp' | 'linkedin' | 'twitter'>('whatsapp');
  const targetUrl = config.publishedUrl || `https://${config.name.toLowerCase().replace(/[^a-z0-9]/g, '')}.launcherlab.app`;
  const heroImage = "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80";

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
          <span>Simulador OpenGraph / SEO Social</span>
        </div>

        <h2 className="text-2xl font-black mb-1 text-slate-900">Previsualizador en Redes</h2>
        <p className="text-xs text-slate-500 mb-6">Así se verá el enlace de la web cuando se comparta por chat o redes sociales.</p>

        {/* Platform Selector Tabs */}
        <div className="flex space-x-2 bg-slate-100 p-1 rounded-xl mb-6">
          <button
            onClick={() => setPlatform('whatsapp')}
            className={`flex-1 py-2 rounded-lg text-xs font-bold flex items-center justify-center space-x-1.5 transition-all ${
              platform === 'whatsapp' ? 'bg-emerald-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </button>

          <button
            onClick={() => setPlatform('linkedin')}
            className={`flex-1 py-2 rounded-lg text-xs font-bold flex items-center justify-center space-x-1.5 transition-all ${
              platform === 'linkedin' ? 'bg-blue-700 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </button>

          <button
            onClick={() => setPlatform('twitter')}
            className={`flex-1 py-2 rounded-lg text-xs font-bold flex items-center justify-center space-x-1.5 transition-all ${
              platform === 'twitter' ? 'bg-sky-500 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>X / Twitter</span>
          </button>
        </div>

        {/* Card Mockup Preview */}
        {platform === 'whatsapp' && (
          <div className="bg-emerald-950/90 p-4 rounded-2xl border border-emerald-800 text-white font-sans">
            <div className="bg-emerald-900/60 p-3 rounded-xl border border-emerald-700/50">
              <div className="text-[10px] text-emerald-300 font-bold mb-1">💬 Chat de WhatsApp</div>
              <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700 shadow-xl">
                <img src={heroImage} alt="OG Thumbnail" className="w-full h-36 object-cover" />
                <div className="p-3 bg-slate-800">
                  <div className="font-bold text-xs text-white leading-tight mb-1">{config.name} | {config.slogan}</div>
                  <div className="text-[11px] text-slate-400 line-clamp-2">{config.heroSubheadline}</div>
                  <div className="text-[10px] text-slate-500 mt-2 font-mono">{targetUrl}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {(platform === 'linkedin' || platform === 'twitter') && (
          <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 text-white">
            <div className="border border-slate-700 rounded-xl overflow-hidden shadow-xl bg-slate-950">
              <img src={heroImage} alt="OG Card" className="w-full h-40 object-cover" />
              <div className="p-4 border-t border-slate-800">
                <div className="text-[10px] uppercase font-bold text-slate-400 mb-1">{targetUrl.replace('https://', '')}</div>
                <div className="font-bold text-sm text-white leading-snug mb-1">{config.heroHeadline}</div>
                <div className="text-xs text-slate-400 line-clamp-2">{config.heroSubheadline}</div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
