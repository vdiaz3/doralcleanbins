import React from 'react';
import { Truck, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/70 backdrop-blur-xl border-b border-white/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-black text-white p-1.5 rounded-lg transition-transform group-hover:scale-105">
              <Truck size={20} strokeWidth={2.5} />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">
              Doral<span className="text-teal-600">CleanBins</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#solution" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Solución</a>
            <a href="#demo" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Tecnología</a>
            <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Planes</a>
            <a href="#contact" className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold px-5 py-2 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-slate-900/20">
              Empezar
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-slate-900 p-2 hover:bg-slate-100 rounded-full transition"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-100 py-6 px-6 flex flex-col gap-4 shadow-2xl">
          <a href="#solution" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-900">Solución</a>
          <a href="#demo" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-900">Tecnología</a>
          <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-slate-900">Planes</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-teal-600 font-bold text-lg">Empezar Ahora</a>
        </div>
      )}
    </header>
  );
};

export default Header;