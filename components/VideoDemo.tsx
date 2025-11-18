import React, { useState, useEffect } from 'react';
import { Play, Loader2, Sparkles } from 'lucide-react';
import { checkApiKey, requestApiKey, generateCleaningDemo } from '../services/geminiService';

const VideoDemo: React.FC = () => {
  const [hasKey, setHasKey] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [videoUri, setVideoUri] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // Updated prompt for higher realism and "tech" vibe
  const PROMPT = "Cinematic side-view of a futuristic white sanitation truck lifting a blue residential trash bin. Inside the translucent cleaning bay, vibrant steam jets and blue UV lights sanitize the bin interior. The scene is set on a sunny, clean suburban street in Florida with palm trees. Photorealistic, 4k, highly detailed, commercial style.";

  useEffect(() => {
    checkApiKey().then(setHasKey);
  }, []);

  const handleGenerate = async () => {
    if (!hasKey) {
      await requestApiKey();
      // Give a moment for UI to update then recheck
      setTimeout(async () => {
        const exists = await checkApiKey();
        setHasKey(exists);
        if (exists) startGeneration();
      }, 1000);
    } else {
      startGeneration();
    }
  };

  const startGeneration = async () => {
    setIsLoading(true);
    setError(null);
    setVideoUri(null);
    try {
      const uri = await generateCleaningDemo(PROMPT);
      setVideoUri(uri);
    } catch (err: any) {
      setError("No se pudo generar el video. Verifica tu conexión o API Key.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="demo" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              Tecnología en acción.
            </h2>
            <p className="text-xl text-slate-500">
              Mira cómo nuestro sistema automatizado transforma un contenedor sucio en uno clínicamente limpio.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-teal-600 bg-teal-50 px-4 py-2 rounded-full">
            <Sparkles size={16} /> Generado con IA (Gemini Veo)
          </div>
        </div>

        {/* Video Player Container - MacBook/Display Style */}
        <div className="relative mx-auto max-w-5xl">
          {/* Frame */}
          <div className="relative bg-slate-900 rounded-2xl md:rounded-[2rem] p-2 md:p-4 shadow-2xl shadow-slate-400/20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 md:h-1.5 bg-slate-800 rounded-b-lg z-20 opacity-50"></div>
            
            <div className="relative aspect-video bg-black rounded-xl md:rounded-[1.5rem] overflow-hidden border border-slate-800/50 group">
              
              {!videoUri && !isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-900/40 backdrop-blur-sm z-10">
                    <button 
                        onClick={handleGenerate}
                        className="group/btn relative flex items-center gap-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
                    >
                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-900 shadow-lg">
                            <Play size={20} fill="currentColor" className="ml-1" />
                        </div>
                        <div className="text-left">
                            <span className="block text-white font-semibold text-lg">Ver Demo</span>
                            <span className="block text-slate-300 text-sm">{hasKey ? 'Listo para generar' : 'Requiere configuración'}</span>
                        </div>
                    </button>
                </div>
              )}

              {isLoading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black z-20">
                    <Loader2 size={48} className="text-teal-500 animate-spin mb-4" />
                    <p className="text-white font-medium animate-pulse">Renderizando simulación...</p>
                </div>
              )}

              {videoUri && (
                <video 
                    src={videoUri} 
                    className="w-full h-full object-cover"
                    controls
                    autoPlay
                    loop
                />
              )}
              
              {/* Placeholder background if no video */}
              {!videoUri && (
                  <img 
                    src="https://images.unsplash.com/photo-1605600659908-0ef719419d41?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
                    alt="Placeholder" 
                    className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale mix-blend-overlay"
                  />
              )}
            </div>
          </div>
          
          {/* Reflection effect below */}
          <div className="hidden md:block absolute -bottom-12 left-4 right-4 h-12 bg-gradient-to-b from-slate-900/10 to-transparent blur-xl rounded-full transform scale-x-95"></div>
        </div>

        {error && (
            <div className="mt-6 text-center text-red-500 bg-red-50 py-2 px-4 rounded-lg inline-block mx-auto">
                {error}
            </div>
        )}

      </div>
    </section>
  );
};

export default VideoDemo;