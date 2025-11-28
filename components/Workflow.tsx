import React from 'react';
import { ClipboardList, Brain, Users, MessageSquare, BarChart, KeyRound } from 'lucide-react';
import { WorkflowStep } from '../types';

const steps: WorkflowStep[] = [
  { number: 1, title: "Login", description: "Acesso seguro", icon: <KeyRound size={20} /> },
  { number: 2, title: "Questionário", description: "Avaliação inicial", icon: <ClipboardList size={20} /> },
  { number: 3, title: "Identificação", description: "IA detecta emoção", icon: <Brain size={20} /> },
  { number: 4, title: "Escolha", description: "Perfil do terapeuta", icon: <Users size={20} /> },
  { number: 5, title: "Chat Guiado", description: "Apoio via IA", icon: <MessageSquare size={20} /> },
  { number: 6, title: "Feedback", description: "Análise de progresso", icon: <BarChart size={20} /> }
];

const Workflow: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Como Funciona</h2>
          <p className="text-lg text-gray-500">Fluxo simplificado para sua jornada emocional.</p>
        </div>

        <div className="relative">
            {/* The Connecting Line - Centered Vertically behind icons - Horizontal */}
            <div className="hidden md:block absolute top-[2rem] left-0 w-full h-1 bg-gradient-to-r from-blue-300 via-purple-400 to-pink-400 rounded-full -z-0"></div>

            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-4 relative z-10">
                {steps.map((step, index) => (
                    <div key={index} className="flex flex-row md:flex-col items-center gap-4 md:gap-0 w-full md:w-auto text-left md:text-center group">
                        
                        {/* Icon Container */}
                        <div className="relative flex-shrink-0">
                            <div className="w-16 h-16 rounded-full bg-white border-4 border-purple-50 text-primary flex items-center justify-center font-bold text-xl shadow-lg group-hover:scale-110 group-hover:border-purple-200 transition-all duration-300 md:mb-6 z-10">
                                {step.icon}
                            </div>
                            {/* Number Badge */}
                            <div className="absolute -top-1 -right-1 w-6 h-6 bg-slate-900 text-white rounded-full text-xs flex items-center justify-center font-bold border-2 border-white">
                                {step.number}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 md:flex-none">
                            <h3 className="font-bold text-gray-900 text-lg mb-0.5">{step.title}</h3>
                            <p className="text-sm text-gray-500">{step.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;