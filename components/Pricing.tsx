import React from 'react';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Simple. Transparente. <br/> Sin contratos forzosos.
          </h2>
          <p className="text-xl text-slate-500">
            Hemos diseñado un plan exclusivo para los residentes de Doral Isle. Pruébalo durante 3 meses a un precio preferencial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Timeline / Process */}
            <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Próximos Pasos</h3>
                <div className="space-y-0">
                    {/* Step 1 */}
                    <div className="flex gap-6 pb-12 relative">
                         <div className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-slate-100"></div>
                        <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-slate-900 text-slate-900 flex items-center justify-center font-bold text-lg">
                            1
                        </div>
                        <div className="pt-1">
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Demo Gratuito</h4>
                            <p className="text-slate-500">Presentación del camión y la tecnología en la próxima reunión de la junta de vecinos.</p>
                        </div>
                    </div>
                    {/* Step 2 */}
                    <div className="flex gap-6 pb-12 relative">
                         <div className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-slate-100"></div>
                        <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-slate-300 text-slate-400 flex items-center justify-center font-bold text-lg">
                            2
                        </div>
                        <div className="pt-1">
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Activación del Servicio</h4>
                            <p className="text-slate-500">Aprobación comunitaria y registro de los hogares interesados.</p>
                        </div>
                    </div>
                    {/* Step 3 */}
                    <div className="flex gap-6 relative">
                        <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-teal-500/30">
                            <Check size={20} strokeWidth={3} />
                        </div>
                        <div className="pt-1">
                            <h4 className="text-xl font-bold text-slate-900 mb-2">Inicio de Operaciones</h4>
                            <p className="text-slate-500">En solo 7 días, comenzamos la primera ronda de limpieza profunda.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pricing Card */}
            <div className="order-1 lg:order-2">
                <div className="relative bg-slate-50 rounded-[2.5rem] p-10 md:p-12 border border-slate-100 shadow-2xl shadow-slate-200/50 overflow-hidden group hover:scale-[1.01] transition-transform duration-500">
                    <div className="absolute top-0 right-0 bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-bl-2xl uppercase tracking-widest">
                        Oferta Piloto
                    </div>
                    
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-slate-900">Plan Mensual</h3>
                        <p className="text-slate-500 mt-2">Facturación automática.</p>
                    </div>

                    <div className="flex items-baseline gap-1 mb-8">
                        <span className="text-6xl md:text-7xl font-bold text-slate-900 tracking-tighter">$49.99</span>
                        <span className="text-xl text-slate-500 font-medium">/hogar</span>
                    </div>

                    <ul className="space-y-4 mb-10">
                        <li className="flex items-center gap-3 text-slate-700">
                            <div className="bg-teal-100 p-1 rounded-full text-teal-600"><Check size={14} strokeWidth={3}/></div>
                            <span className="font-medium">Limpieza profunda mensual</span>
                        </li>
                        <li className="flex items-center gap-3 text-slate-700">
                            <div className="bg-teal-100 p-1 rounded-full text-teal-600"><Check size={14} strokeWidth={3}/></div>
                            <span className="font-medium">Desodorización completa</span>
                        </li>
                        <li className="flex items-center gap-3 text-slate-700">
                            <div className="bg-teal-100 p-1 rounded-full text-teal-600"><Check size={14} strokeWidth={3}/></div>
                            <span className="font-medium">Garantía de satisfacción</span>
                        </li>
                    </ul>

                    <a href="#contact" className="block w-full py-4 bg-slate-900 text-white text-center rounded-2xl font-bold text-lg hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl">
                        Reservar mi cupo
                    </a>
                    <p className="text-center text-xs text-slate-400 mt-4">Sin cargos ocultos. Cancela cuando quieras.</p>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;