import React from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const ProblemSolution: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Sobre Nós</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Entenda o Projeto</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          
          {/* The Problem */}
          <div className="bg-slate-50 p-10 rounded-3xl relative overflow-hidden group transition-all duration-300 hover:shadow-lg border border-transparent hover:border-red-100">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-500">
                <AlertCircle size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">O Desafio</h2>
            </div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Muitas pessoas sofrem com a <strong>falta de acesso à terapia</strong> e a dificuldade em <strong>reconhecer suas próprias emoções</strong>. 
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Isso resulta em ciclos viciosos de:
            </p>
            <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700 bg-white p-3 rounded-lg shadow-sm">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span> Ansiedade constante
                </li>
                <li className="flex items-center gap-3 text-gray-700 bg-white p-3 rounded-lg shadow-sm">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span> Estresse elevado
                </li>
                <li className="flex items-center gap-3 text-gray-700 bg-white p-3 rounded-lg shadow-sm">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span> Conflitos não resolvidos
                </li>
            </ul>
          </div>

          {/* The Solution */}
          <div className="bg-slate-50 p-10 rounded-3xl relative overflow-hidden group transition-all duration-300 hover:shadow-lg border border-transparent hover:border-emerald-100">
             <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-500">
                <CheckCircle2 size={24} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Nossa Solução</h2>
            </div>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              O <strong>FEWIT</strong> utiliza IA Generativa para identificar padrões emocionais através de conversas naturais e acolhedoras.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Nossa tecnologia oferece:
            </p>
            <ul className="space-y-3">
                <li className="flex items-center gap-3 text-gray-700 bg-white p-3 rounded-lg shadow-sm">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span> Terapeutas virtuais personalizados
                </li>
                <li className="flex items-center gap-3 text-gray-700 bg-white p-3 rounded-lg shadow-sm">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span> Abordagens psicológicas diversas
                </li>
                <li className="flex items-center gap-3 text-gray-700 bg-white p-3 rounded-lg shadow-sm">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full"></span> Autonomia emocional imediata
                </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;