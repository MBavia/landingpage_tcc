import React from 'react';

const SesiSenai: React.FC = () => {
  return (
    <section id="sesi-senai" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative shadow-2xl">
          
          <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
            <div>
               <div className="inline-block px-3 py-1 bg-red-600 rounded text-xs font-bold mb-6 tracking-widest">
                  INSTITUCIONAL
               </div>
               <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                 Formando o futuro da tecnologia.
               </h2>
               <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                 O projeto FEWIT foi desenvolvido por alunos do <strong>5º Itinerário Formativo</strong> do curso Técnico em Desenvolvimento de Sistemas.
                 Uma parceria de excelência entre <strong>SESI</strong> e <strong>SENAI</strong>, unindo educação básica de qualidade com formação profissional de ponta.
               </p>
               
               <div className="flex flex-wrap gap-4">
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                    <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold">Curso</p>
                    <p className="font-bold">Técnico em Des. de Sistemas</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10">
                    <p className="text-sm text-slate-400 uppercase tracking-wider font-semibold">Unidade</p>
                    <p className="font-bold">SESI Itapeva / SENAI Sorocaba</p>
                  </div>
               </div>
            </div>

            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 group">
                {/* Image pointing to local file /sesi.jpg */}
                <img 
                  src="/sesi.jpg" 
                  alt="Escola SESI de Itapeva" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                    <p className="text-white font-bold text-lg">Escola SESI CE 429</p>
                    <p className="text-white/80 text-sm">Itapeva - SP</p>
                </div>
              </div>
              
              {/* Decoration behind image */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-red-600/20 rounded-full blur-xl -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-600/20 rounded-full blur-xl -z-10"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SesiSenai;