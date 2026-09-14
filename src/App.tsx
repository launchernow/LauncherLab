import { useState } from 'react';
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
import confetti from 'canvas-confetti';

export function App() {
  const [currentView, setCurrentView] = useState<'form' | 'pitch' | 'full'>('form');
  const [config, setConfig] = useState<BusinessConfig>(
    (INDUSTRY_PRESETS[0].defaultConfig as BusinessConfig)
  );

  // Modal States
  const [showLogoBuilder, setShowLogoBuilder] = useState<boolean>(false);
  const [showPdfProposal, setShowPdfProposal] = useState<boolean>(false);
  const [showQrModal, setShowQrModal] = useState<boolean>(false);
  const [showOgPreview, setShowOgPreview] = useState<boolean>(false);
  const [showPublishModal, setShowPublishModal] = useState<boolean>(false);
  const [showDeployGuideModal, setShowDeployGuideModal] = useState<boolean>(false);

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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-inter selection:bg-sky-500 selection:text-white">
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
            onExportZip={handleExportZip}
            onOpenPdfProposal={() => setShowPdfProposal(true)}
            onOpenQrModal={() => setShowQrModal(true)}
            onOpenOgPreview={() => setShowOgPreview(true)}
            onOpenPublishModal={() => setShowPublishModal(true)}
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
