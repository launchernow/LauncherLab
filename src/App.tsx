import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { FormWizard } from './components/FormWizard';
import { ClientPitch } from './components/ClientPitch';
import { WebsiteTemplates } from './components/WebsiteTemplates';
import { LogoBuilder } from './components/LogoBuilder';
import { PdfProposalModal } from './components/PdfProposalModal';
import { QrCardModal } from './components/QrCardModal';
import { SocialOgPreviewModal } from './components/SocialOgPreviewModal';
import { PublishModal } from './components/PublishModal';
import { DeployGuideModal } from './components/DeployGuideModal';
import type { BusinessConfig, IndustryType } from './types/business';
import { INDUSTRY_PRESETS } from './data/industryPresets';
import { downloadWebsiteZip } from './utils/htmlExporter';
import { parseLeadFromUrl, fetchLeadPrototype, applyRealAssetsToConfig, type LeadUrlData } from './utils/leadImporter';
import confetti from 'canvas-confetti';
import { Copy, Check, ExternalLink } from 'lucide-react';

export function App() {
  const [currentView, setCurrentView] = useState<'form' | 'pitch' | 'full'>('form');
  const [config, setConfig] = useState<BusinessConfig>(
    (INDUSTRY_PRESETS[0].defaultConfig as BusinessConfig)
  );
  const [importedLead, setImportedLead] = useState<LeadUrlData | null>(null);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  // Modal States
  const [showLogoBuilder, setShowLogoBuilder] = useState<boolean>(false);
  const [showPdfProposal, setShowPdfProposal] = useState<boolean>(false);
  const [showQrModal, setShowQrModal] = useState<boolean>(false);
  const [showOgPreview, setShowOgPreview] = useState<boolean>(false);
  const [showPublishModal, setShowPublishModal] = useState<boolean>(false);
  const [showDeployGuideModal, setShowDeployGuideModal] = useState<boolean>(false);

  // Detección automática de Lead en URL desde el CRM y carga de fotos/reseñas reales
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const parsed = parseLeadFromUrl(params);
      if (parsed) {
        setConfig(parsed.config);
        setImportedLead(parsed.lead);
        setCurrentView('pitch');
        confetti({ particleCount: 80, spread: 70, origin: { y: 0.2 } });

        // Carga en segundo plano de fotos y reseñas reales guardadas en Supabase
        const leadId = params.get('lead_id') || params.get('leadId') || params.get('id');
        if (leadId) {
          fetchLeadPrototype(leadId).then((assets) => {
            if (assets && ((assets.photos && assets.photos.length > 0) || (assets.reviews && assets.reviews.length > 0))) {
              setConfig((prev) => applyRealAssetsToConfig(prev, assets));
            }
          });
        }
      }
    }
  }, []);

  const handleSelectPreset = (presetId: IndustryType) => {
    const found = INDUSTRY_PRESETS.find(p => p.id === presetId);
    if (found && found.defaultConfig) {
      setConfig({ ...config, ...found.defaultConfig } as BusinessConfig);
      confetti({ particleCount: 50, spread: 50, origin: { y: 0.2 } });
    }
  };

  const handleExportZip = async () => {
    await downloadWebsiteZip(config);
    confetti({ particleCount: 120, spread: 70, origin: { y: 0.4 } });
  };

  const handleCopyCleanUrl = () => {
    const cleanUrl = `${window.location.origin}${window.location.pathname}${window.location.search}`;
    navigator.clipboard.writeText(cleanUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-inter selection:bg-sky-500 selection:text-white">
      {/* Banner de Lead Importado del CRM */}
      {importedLead && currentView !== 'full' && (
        <aside aria-label="Lead importado del CRM" className="bg-gradient-to-r from-slate-950 via-sky-950 to-slate-950 text-white px-4 py-2.5 text-xs border-b border-sky-900/50 shadow-md flex flex-wrap items-center justify-between gap-3 sticky top-0 z-50">
          <div className="flex items-center space-x-2.5">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            <span className="font-semibold text-sky-200">
              ⚡ Lead CRM cargado:
            </span>
            <span className="font-extrabold text-white bg-white/10 px-2 py-0.5 rounded">
              {importedLead.name}
            </span>
            {importedLead.category && (
              <span className="text-slate-400 hidden sm:inline">
                ({importedLead.category})
              </span>
            )}
            {importedLead.rating && (
              <span className="text-amber-300 font-bold hidden md:inline">
                ⭐️ {importedLead.rating.toFixed(1)} ({importedLead.reviewCount || 0} reseñas)
              </span>
            )}
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleCopyCleanUrl}
              className="px-3 py-1 rounded-lg bg-sky-600 hover:bg-sky-500 text-white font-bold flex items-center space-x-1.5 transition-all shadow-sm"
              title="Copiar enlace para el cliente"
            >
              {copiedLink ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedLink ? '¡Enlace Copiado!' : 'Copiar Enlace'}</span>
            </button>

            {currentView === 'pitch' ? (
              <button
                onClick={() => setCurrentView('full')}
                className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 font-bold flex items-center space-x-1 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Pantalla Completa</span>
              </button>
            ) : (
              <button
                onClick={() => setCurrentView('pitch')}
                className="px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 font-bold flex items-center space-x-1 transition-all"
              >
                <span>Ver Pitch</span>
              </button>
            )}

            <button
              onClick={() => {
                setImportedLead(null);
                window.history.replaceState({}, document.title, window.location.pathname);
              }}
              className="text-slate-400 hover:text-white px-1.5 py-1 text-xs"
              title="Cerrar banner de lead"
            >
              ✕
            </button>
          </div>
        </aside>
      )}

      {/* Navbar control */}
      {currentView !== 'full' && (
        <Navbar
          currentView={currentView}
          setCurrentView={setCurrentView}
          onSelectPreset={handleSelectPreset}
          onExportZip={handleExportZip}
          onOpenLogoBuilder={() => setShowLogoBuilder(true)}
          onOpenPdfProposal={() => setShowPdfProposal(true)}
          onOpenQrModal={() => setShowQrModal(true)}
          onOpenOgPreview={() => setShowOgPreview(true)}
          onOpenPublishModal={() => setShowPublishModal(true)}
          onOpenDeployGuide={() => setShowDeployGuideModal(true)}
          config={config}
        />
      )}

      {/* Main Content Areas */}
      <main className="flex-1">
        {currentView === 'form' && (
          <FormWizard
            config={config}
            onChange={setConfig}
            onPreviewClick={() => setCurrentView('pitch')}
            onOpenLogoBuilder={() => setShowLogoBuilder(true)}
          />
        )}

        {currentView === 'pitch' && (
          <ClientPitch
            config={config}
            onChange={setConfig}
          />
        )}

        {currentView === 'full' && (
          <div className="relative">
            {/* Exit Fullscreen Floating Button */}
            <div className="fixed top-4 right-4 z-50">
              <button
                onClick={() => setCurrentView('pitch')}
                className="px-4 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white text-xs font-bold border border-slate-700 shadow-2xl backdrop-blur-md transition-all"
              >
                ✕ Salir de Pantalla Completa
              </button>
            </div>
            <WebsiteTemplates config={config} />
          </div>
        )}
      </main>

      {/* LauncherLab Modals */}
      {showLogoBuilder && (
        <LogoBuilder
          config={config}
          onChange={setConfig}
          onClose={() => setShowLogoBuilder(false)}
        />
      )}

      {showPdfProposal && (
        <PdfProposalModal
          config={config}
          onClose={() => setShowPdfProposal(false)}
        />
      )}

      {showQrModal && (
        <QrCardModal
          config={config}
          onClose={() => setShowQrModal(false)}
        />
      )}

      {showOgPreview && (
        <SocialOgPreviewModal
          config={config}
          onClose={() => setShowOgPreview(false)}
        />
      )}

      {showPublishModal && (
        <PublishModal
          config={config}
          onChange={setConfig}
          onClose={() => setShowPublishModal(false)}
        />
      )}

      {showDeployGuideModal && (
        <DeployGuideModal
          onClose={() => setShowDeployGuideModal(false)}
        />
      )}

    </div>
  );
}

export default App;
