import React from 'react';
import { X, Sparkles, CheckCircle2, ExternalLink } from 'lucide-react';

interface DeployGuideModalProps {
  onClose: () => void;
}

export const DeployGuideModal: React.FC<DeployGuideModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-auto">
      <div className="max-w-2xl w-full bg-white rounded-3xl p-6 md:p-8 shadow-2xl relative border border-slate-200 text-slate-900 my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 text-sky-600 text-xs font-bold uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Guía Paso a Paso de Publicación</span>
        </div>

        <h2 className="text-2xl font-black mb-1 text-slate-900">¿Cómo Desplegar tu Web en Internet Real?</h2>
        <p className="text-xs text-slate-500 mb-6">Existen 3 métodos súper sencillos para publicar el archivo `.ZIP` descargado en un servidor real con tu propio dominio.</p>

        {/* Option 1: Netlify Drop */}
        <div className="bg-sky-50 border border-sky-200 p-5 rounded-2xl mb-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-extrabold text-sm text-sky-950 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-sky-600 text-white flex items-center justify-center text-xs">1</span>
              Método Ultra-Rápido: Netlify Drop (Gratis en 10 Segundos)
            </h3>
            <span className="text-[10px] font-bold bg-sky-200 text-sky-800 px-2 py-0.5 rounded-full">Recomendado</span>
          </div>
          <ol className="text-xs text-slate-700 space-y-1.5 list-decimal list-inside pl-1">
            <li>Haz clic en <strong>Exportar WEB (.ZIP)</strong> en LauncherLab y descomprime la carpeta en tu ordenador.</li>
            <li>Abre en tu navegador la web oficial de <a href="https://app.netlify.com/drop" target="_blank" rel="noopener noreferrer" className="text-sky-700 font-bold underline inline-flex items-center gap-0.5">Netlify Drop <ExternalLink className="w-3 h-3" /></a>.</li>
            <li>Arrastra la carpeta descomprimida directamente al recuadro de la pantalla.</li>
            <li>¡Listo! Tu web estará online al instante con protocolo seguro <strong>HTTPS</strong>. Puedes asignarle un dominio propio (`.com` / `.es`) gratis desde su panel.</li>
          </ol>
        </div>

        {/* Option 2: Vercel */}
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl mb-4">
          <h3 className="font-extrabold text-sm text-slate-900 mb-2 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs">2</span>
            Método Profesional: Vercel Cloud
          </h3>
          <ol className="text-xs text-slate-700 space-y-1.5 list-decimal list-inside pl-1">
            <li>Crea una cuenta gratuita en <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-sky-700 font-bold underline inline-flex items-center gap-0.5">Vercel.com <ExternalLink className="w-3 h-3" /></a>.</li>
            <li>Haz clic en <strong>"Add New Project"</strong> y sube el proyecto.</li>
            <li>En la sección <i>Domains</i>, añade el dominio personalizado de tu cliente comprado en Namecheap o GoDaddy.</li>
          </ol>
        </div>

        {/* Option 3: Traditional cPanel/FTP */}
        <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl mb-6">
          <h3 className="font-extrabold text-sm text-slate-900 mb-2 flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs">3</span>
            Hosting Tradicional (cPanel / FTP / Hostinger / Ionos)
          </h3>
          <ol className="text-xs text-slate-700 space-y-1.5 list-decimal list-inside pl-1">
            <li>Accede al Administrador de Archivos de tu cPanel o conecta vía FTP (FileZilla).</li>
            <li>Navega hasta la carpeta raíz del servidor (normalmente llamada <code>public_html</code> o <code>www</code>).</li>
            <li>Sube el archivo <code>index.html</code> extraído de tu paquete ZIP. La web cargará automáticamente al visitar tu dominio.</li>
          </ol>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-lg flex items-center justify-center space-x-2"
        >
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>Entendido, Cerrar Guía</span>
        </button>

      </div>
    </div>
  );
};
