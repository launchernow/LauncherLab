import React from 'react';
import { Download, X, Sparkles, Smartphone } from 'lucide-react';
import type { BusinessConfig } from '../types/business';
import { saveAs } from 'file-saver';

interface QrCardModalProps {
  config: BusinessConfig;
  onClose: () => void;
}

export const QrCardModal: React.FC<QrCardModalProps> = ({ config, onClose }) => {
  const qrTargetUrl = config.publishedUrl || `https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, '')}`;
  const qrImageUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(qrTargetUrl)}&color=0f172a`;

  const downloadVCard = () => {
    const vcardData = `BEGIN:VCARD
VERSION:3.0
N:;${config.name};;;
FN:${config.name}
ORG:${config.name}
TITLE:${config.slogan}
TEL;TYPE=WORK,VOICE:${config.phone}
TEL;TYPE=CELL:${config.whatsappNumber}
EMAIL;TYPE=PREF,INTERNET:${config.email}
ADR;TYPE=WORK:;;${config.address};;;;
URL:${qrTargetUrl}
END:VCARD`;

    const blob = new Blob([vcardData], { type: 'text/vcard;charset=utf-8' });
    saveAs(blob, `${config.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}-contact.vcf`);
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
          <span>Generador de QR & Tarjeta Digital</span>
        </div>

        <h2 className="text-2xl font-black mb-1 text-slate-900">Código QR & Contacto vCard</h2>
        <p className="text-xs text-slate-500 mb-6">Escanea para acceder a la web o guardar los datos en el móvil.</p>

        {/* QR Code Container */}
        <div className="bg-slate-50 p-6 rounded-2xl mb-6 border border-slate-200 flex flex-col items-center justify-center">
          <div className="bg-white p-4 rounded-xl shadow-md border border-slate-200 mb-3">
            <img src={qrImageUrl} alt="Código QR del Negocio" className="w-48 h-48 object-contain" />
          </div>
          <span className="text-[11px] font-mono text-slate-500 truncate max-w-full">{qrTargetUrl}</span>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={downloadVCard}
            className="w-full py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-lg flex items-center justify-center space-x-2 transition-all"
          >
            <Smartphone className="w-4 h-4" />
            <span>Descargar Tarjeta vCard (.vcf)</span>
          </button>

          <a
            href={qrImageUrl}
            download={`${config.name}-qr.png`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center space-x-2 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Descargar Código QR (PNG)</span>
          </a>
        </div>

      </div>
    </div>
  );
};
