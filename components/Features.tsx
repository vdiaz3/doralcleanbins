import React from 'react';
import { Droplets, Wind, Clock, Zap } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section id="solution" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-16 md:mb-24 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            La solución definitiva <br/> para Doral Isle.
          </h2>
          <p className="text-xl text-slate-500 leading-relaxed">
            Olvídate de lavar contenedores con la manguera. Nuestro camión especializado se encarga del trabajo sucio de manera segura, rápida y responsable con el medio ambiente.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Large Card - Steam */}
          <div className="md:col-span-2 bg-slate-50 rounded-[2.5rem] p-10 md:p-12 relative overflow-hidden group hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500">
            <div className="relative z-10">
                <div className="w-14 h-14 bg-blue-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/30">
                    <Droplets size={28} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Vapor a 200°C</h3>
                <p className="text-lg text-slate-600 max-w-md">
                    Nuestros cabezales giratorios de 360° inyectan agua a temperaturas extremas para desintegrar la suciedad y eliminar el 99.9% de los gérmenes sin esfuerzo.
                </p>
            </div>
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-gradient-to-tl from-blue-100 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-1/4 translate-y-1/4"></div>
          </div>

          {/* Tall Card - Eco */}
          <div className="md:row-span-2 bg-slate-900 text-white rounded-[2.5rem] p-10 md:p-12 relative overflow-hidden group">
             <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                    <div className="w-14 h-14 bg-teal-500 text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-teal-500/30">
                        <Zap size={28} />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">100% Ecológico</h3>
                    <p className="text-lg text-slate-400">
                        No vertemos agua sucia en la calle. Todo se recoge en nuestro tanque de residuos y se procesa responsablemente.
                    </p>
                </div>
                <div className="mt-10 pt-10 border-t border-slate-800">
                    <p className="text-sm font-mono text-teal-400 uppercase tracking-widest">Zero Runoff Policy</p>
                </div>
             </div>
             <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-110 transition duration-700 mix-blend-overlay" alt="Eco nature" />
          </div>

          {/* Small Card - Speed */}
          <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-xl shadow-slate-200/40 hover:scale-[1.02] transition-transform duration-300">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-2xl flex items-center justify-center mb-4">
                <Clock size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Solo 3 Minutos</h3>
            <p className="text-slate-500">
                Automatización total. Llegamos, lavamos y nos vamos antes de que notes que estuvimos ahí.
            </p>
          </div>

          {/* Small Card - Dry */}
          <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-xl shadow-slate-200/40 hover:scale-[1.02] transition-transform duration-300">
             <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-4">
                <Wind size={24} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Secado Térmico</h3>
            <p className="text-slate-500">
                Nada de humedad residual. Finalizamos con aire caliente para evitar nuevos cultivos de bacterias.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Features;