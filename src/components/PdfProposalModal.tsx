import React from 'react';
import { Printer, X, ShieldCheck, Sparkles } from 'lucide-react';
import type { BusinessConfig } from '../types/business';

interface PdfProposalModalProps {
  config: BusinessConfig;
  onClose: () => void;
}

export const PdfProposalModal: React.FC<PdfProposalModalProps> = ({ config, onClose }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-auto">
      <div className="max-w-2xl w-full bg-white rounded-3xl p-8 shadow-2xl relative border border-slate-200 text-slate-900 my-8">
        
        {/* Modal Controls (Hidden when printing) */}
        <div className="flex items-center justify-between border-b pb-4 mb-6 print:hidden">
          <div className="flex items-center space-x-2 text-sky-600 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Documento Comercial Oficial PDF</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold transition-all shadow-md"
            >
              <Printer className="w-4 h-4" />
              <span>Imprimir / Guardar en PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Document Body */}
        <div id="printable-proposal" className="space-y-6">
          
          {/* Document Header */}
          <div className="flex items-center justify-between border-b border-slate-200 pb-6">
            <div>
              <span className="text-2xl font-black tracking-tight text-slate-900">Launcher<span className="text-sky-600">Lab</span></span>
              <p className="text-xs text-slate-500 font-medium">Agencia Digital & Desarrollo de Software</p>
            </div>
            <div className="text-right">
              <span className="text-xs font-bold text-slate-400 block uppercase">Propuesta Nº</span>
              <span className="text-sm font-mono font-bold text-slate-900">LL-{Math.floor(100000 + Math.random() * 900000)}</span>
              <span className="text-xs text-slate-500 block">{new Date().toLocaleDateString('es-ES')}</span>
            </div>
          </div>

          {/* Client Details */}
          <div className="grid grid-cols-2 gap-6 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
            <div>
              <span className="text-slate-400 font-bold block mb-1 uppercase tracking-wider">Cliente</span>
              <span className="font-extrabold text-sm text-slate-900 block">{config.name}</span>
              <span className="text-slate-600 block">{config.slogan}</span>
              <span className="text-slate-600 block">{config.address}</span>
            </div>
            <div>
              <span className="text-slate-400 font-bold block mb-1 uppercase tracking-wider">Proyecto</span>
              <span className="font-extrabold text-sm text-sky-700 block">Desarrollo Web Profesional & Hosting</span>
              <span className="text-slate-600 block">Plazo de Entrega: 24 - 48 Horas</span>
              <span className="text-slate-600 block">Garantía: 100% Satisfacción</span>
            </div>
          </div>

          {/* Services Table Breakdown */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Desglose de Servicios & Prestaciones</h4>
            <div className="border border-slate-200 rounded-2xl overflow-hidden text-xs">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                    <th className="p-3">Concepto</th>
                    <th className="p-3">Estado</th>
                    <th className="p-3 text-right">Precio</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3">
                      <div className="font-bold text-slate-900">Diseño Web Responsive a Medida</div>
                      <div className="text-[11px] text-slate-500">Formato adaptable a Móvil, Tablet y Escritorio con UI minimalista.</div>
                    </td>
                    <td className="p-3 text-emerald-600 font-bold">Incluido</td>
                    <td className="p-3 text-right font-mono font-bold">450 €</td>
                  </tr>

                  <tr>
                    <td className="p-3">
                      <div className="font-bold text-slate-900">Integración de WhatsApp & Formulario de Reservas</div>
                      <div className="text-[11px] text-slate-500">Canal de atención directa y captura de clientes en tiempo real.</div>
                    </td>
                    <td className="p-3 text-emerald-600 font-bold">Incluido</td>
                    <td className="p-3 text-right font-mono font-bold">120 €</td>
                  </tr>

                  <tr>
                    <td className="p-3">
                      <div className="font-bold text-slate-900">Optimización SEO Básica & OpenGraph Social</div>
                      <div className="text-[11px] text-slate-500">Metadatos estructurados para aparecer en Google y compartir por WhatsApp.</div>
                    </td>
                    <td className="p-3 text-emerald-600 font-bold">Incluido</td>
                    <td className="p-3 text-right font-mono font-bold">90 €</td>
                  </tr>

                  <tr>
                    <td className="p-3">
                      <div className="font-bold text-slate-900">Paquete de Código Fuente (.ZIP) & Dominio SSL</div>
                      <div className="text-[11px] text-slate-500">Código 100% de propiedad del cliente listo para desplegar.</div>
                    </td>
                    <td className="p-3 text-emerald-600 font-bold">Incluido</td>
                    <td className="p-3 text-right font-mono font-bold">90 €</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Summary Totals */}
          <div className="flex items-center justify-between bg-slate-900 text-white p-6 rounded-2xl shadow-lg">
            <div>
              <div className="flex items-center space-x-2 text-emerald-400 text-xs font-bold mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Garantía de Llave en Mano</span>
              </div>
              <p className="text-[11px] text-slate-400">Sin permanencias ni cuotas mensuales obligatorias.</p>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 block uppercase">Inversión Total (Impuestos Incl.)</span>
              <span className="text-3xl font-black text-sky-400">750 €</span>
            </div>
          </div>

          {/* Document Footer */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-400">
            <div>LauncherLab Studios • hello@launcherlab.app</div>
            <div>Aceptado por el Cliente: _______________________</div>
          </div>

        </div>

      </div>
    </div>
  );
};
