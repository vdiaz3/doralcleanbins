import React from 'react';
import { ChevronRight, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-teal-50/80 to-transparent rounded-[100%] blur-3xl opacity-60"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-8 shadow-sm animate-fade-in-up">
          <span className="flex h-2 w-2 rounded-full bg-teal-500"></span>
          <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">Disponible en Doral Isle</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-slate-900 mb-6 max-w-5xl mx-auto leading-[1.1]">
          Higiene avanzada <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">para tus contenedores.</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Elimina el 99.9% de bacterias y malos olores con nuestra tecnología automatizada de vapor a 200°C.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-20">
          <a href="#pricing" className="bg-slate-900 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-200 shadow-xl shadow-slate-900/20 flex items-center justify-center gap-2">
            Ver Oferta Piloto <ChevronRight size={18} />
          </a>
          <a href="#demo" className="bg-white text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-slate-50 border border-slate-200 transition-colors duration-200 flex items-center justify-center">
            Ver Demo
          </a>
        </div>

        {/* Featured Video / "App" Shot style */}
        <div className="relative w-full max-w-5xl mx-auto group">
          <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-blue-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <div className="relative bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100 aspect-[16/9] md:aspect-[21/9]">
            <video 
              src="https://orlandocleanbins.com/wp-content/uploads/2025/06/TCCS-High-Res_1-2.mp4" 
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex items-end p-8 md:p-12 pointer-events-none">
                <div className="text-left">
                     <div className="flex items-center gap-2 text-teal-300 font-bold mb-2">
                        <ShieldCheck size={24} />
                        <span>CERTIFICADO DE SALUBRIDAD</span>
                     </div>
                     <p className="text-white text-lg md:text-2xl font-medium max-w-xl drop-shadow-md">
                         "Un contenedor sucio puede albergar hasta 400 tipos de bacterias. Nosotros lo dejamos como nuevo en 3 minutos."
                     </p>
                </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;