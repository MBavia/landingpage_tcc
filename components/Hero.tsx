import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-50">
      {/* Ambient Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-300/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-300/20 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          
          <div className="mb-8 opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
            <span className="inline-block px-4 py-1.5 rounded-full border border-purple-200 bg-white/50 backdrop-blur-sm text-primary text-xs font-semibold tracking-widest uppercase mb-6">
              Saúde Mental & Inteligência Artificial
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[0.9] opacity-0 animate-[fadeIn_1s_ease-out_0.3s_forwards]">
            <span className="text-slate-900 block mb-2">Desvende seus</span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-secondary">
              sentimentos.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-500 mb-12 max-w-3xl mx-auto font-light leading-relaxed opacity-0 animate-[fadeIn_1s_ease-out_0.6s_forwards]">
            O FEWIT é mais que um sistema. É um espelho para sua mente. 
            Uma jornada de autoconhecimento guiada por tecnologia empática, 
            projetada para ouvir o que você sente quando as palavras faltam.
          </p>

          <div className="opacity-0 animate-[fadeIn_1s_ease-out_0.9s_forwards]">
            <div className="w-1 h-24 bg-gradient-to-b from-purple-200 to-transparent mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;