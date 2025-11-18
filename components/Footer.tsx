import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 py-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Doral<span className="text-teal-600">CleanBins</span>
            </span>
        </div>

        <nav className="flex gap-8 text-sm font-medium text-slate-500">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Términos</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Soporte</a>
        </nav>

        <div className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Doral CleanBins.
        </div>
      </div>
    </footer>
  );
};

export default Footer;