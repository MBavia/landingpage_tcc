import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-8 border-b border-slate-700 pb-8">
            <div>
                 <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">FEWIT</h2>
                 <p className="text-sm text-slate-400">Desvende seus sentimentos com inteligência.</p>
            </div>
            <div className="flex flex-col md:items-end gap-2">
                <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded w-fit">SESI | SENAI</span>
                <p className="text-xs">Técnico em Desenvolvimento de Sistemas</p>
                <p className="text-xs">5º Itinerário Formativo - Novo Ensino Médio</p>
            </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
            <p>&copy; {new Date().getFullYear()} FEWIT Project. Todos os direitos reservados.</p>
            <div className="mt-4 md:mt-0 flex flex-col md:items-end">
                <p className="font-medium text-slate-400">Escola SENAI "Luiz Pagliato" - Sorocaba/SP</p>
                <p>Classe Descentralizada - Escola SESI de Itapeva</p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;