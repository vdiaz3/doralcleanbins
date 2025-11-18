import React from 'react';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-teal-900/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="max-w-3xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          ¿Listo para empezar?
        </h2>
        <p className="text-xl text-slate-400 mb-12 max-w-xl mx-auto">
          Hagamos de Doral Isle la comunidad más limpia de Miami. Déjanos tus datos y coordinaremos el demo gratuito.
        </p>

        <form className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-2xl" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="text-left">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-2">Nombre</label>
                    <input 
                        type="text" 
                        placeholder="Ej. Juan Pérez" 
                        className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                    />
                </div>
                <div className="text-left">
                    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-2">Teléfono</label>
                    <input 
                        type="tel" 
                        placeholder="(305) 000-0000" 
                        className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                    />
                </div>
            </div>
            
            <div className="text-left mb-8">
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 ml-2">Comunidad / Dirección</label>
                <input 
                    type="text" 
                    placeholder="Doral Isle" 
                    className="w-full bg-white/10 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                />
            </div>

            <button type="submit" className="w-full bg-teal-500 hover:bg-teal-400 text-white font-bold text-lg py-5 rounded-xl transition-all transform hover:scale-[1.02] shadow-lg shadow-teal-500/25 flex items-center justify-center gap-2">
                Agendar Demo Gratuito <ArrowRight size={20} />
            </button>
            <p className="mt-6 text-slate-500 text-sm">
                Respetamos tu privacidad. Sin spam.
            </p>
        </form>

      </div>
    </section>
  );
};

export default Contact;