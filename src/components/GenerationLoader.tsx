import React, { useEffect, useState } from 'react';
import { Loader2, CheckCircle2, Sparkles, MapPin, Camera, Star, FileText, Globe } from 'lucide-react';

interface GenerationLoaderProps {
  leadName: string;
  category?: string;
  isReady: boolean;
  onFinish?: () => void;
}

interface StepItem {
  id: number;
  label: string;
  icon: React.ElementType;
}

const STEPS: StepItem[] = [
  { id: 1, label: 'Conectando con Google Maps y ficha de empresa', icon: MapPin },
  { id: 2, label: 'Extrayendo fotografías de fachada e instalaciones', icon: Camera },
  { id: 3, label: 'Analizando reseñas y opiniones verificadas de clientes', icon: Star },
  { id: 4, label: 'Redactando propuesta de valor y catálogo de servicios a medida', icon: FileText },
  { id: 5, label: 'Finalizando diseño responsive y arquitectura de conversión', icon: Globe },
];

export const GenerationLoader: React.FC<GenerationLoaderProps> = ({
  leadName,
  category,
  isReady,
  onFinish,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [progress, setProgress] = useState<number>(15);

  useEffect(() => {
    // Si no está listo aún, avanzar gradualmente los pasos cada 3.5 segundos
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < 4) return prev + 1;
        return prev;
      });
      setProgress((prev) => {
        if (prev < 85) return Math.min(85, prev + 18);
        return prev;
      });
    }, 3200);

    return () => clearInterval(stepInterval);
  }, []);

  useEffect(() => {
    if (isReady) {
      setCurrentStep(5);
      setProgress(100);
      const timer = setTimeout(() => {
        if (onFinish) onFinish();
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [isReady, onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-md px-4 text-white">
      <div className="max-w-md w-full bg-slate-900 border border-sky-800/60 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        {/* Glow de fondo */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-sky-500/10 border border-sky-400/30 text-sky-400 mb-4 shadow-inner">
            <Sparkles className="w-7 h-7 animate-pulse text-sky-400" />
          </div>
          <h2 className="text-xl font-bold text-white tracking-tight">
            LauncherLab Engine
          </h2>
          <p className="text-sm text-sky-300 font-medium mt-1">
            Generando web personalizada para{' '}
            <span className="text-white font-extrabold underline decoration-sky-400 underline-offset-2">
              {leadName || 'tu cliente'}
            </span>
          </p>
          {category && (
            <span className="inline-block mt-2 text-xs bg-slate-800 border border-slate-700 text-slate-300 px-2.5 py-0.5 rounded-full">
              Sector: {category}
            </span>
          )}
        </div>

        {/* Barra de progreso */}
        <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden mb-6 p-0.5 border border-slate-700">
          <div
            className="h-full bg-gradient-to-r from-sky-500 to-blue-600 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Lista de pasos */}
        <div className="space-y-3 mb-6">
          {STEPS.map((step) => {
            const Icon = step.icon;
            const isCompleted = currentStep > step.id || progress === 100;
            const isActive = currentStep === step.id && progress < 100;

            return (
              <div
                key={step.id}
                className={`flex items-center space-x-3 p-2.5 rounded-xl transition-all duration-300 text-xs sm:text-sm ${
                  isActive
                    ? 'bg-sky-950/60 border border-sky-500/40 text-sky-200'
                    : isCompleted
                    ? 'text-slate-300'
                    : 'text-slate-500 opacity-60'
                }`}
              >
                <div className="flex-shrink-0">
                  {isCompleted ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : isActive ? (
                    <Loader2 className="w-4 h-4 text-sky-400 animate-spin" />
                  ) : (
                    <Icon className="w-4 h-4 text-slate-500" />
                  )}
                </div>
                <span className={`flex-1 ${isActive ? 'font-semibold' : ''}`}>
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-slate-400">
          Obteniendo activos reales con Playwright y persistiendo en Supabase...
        </p>
      </div>
    </div>
  );
};
