import React from 'react';
import { TEAM_MEMBERS } from '../constants';
import { Github, Linkedin } from 'lucide-react'; // Importação do ícone Linkedin

const Team: React.FC = () => {
    return (
        <section id="team" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Quem Somos</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Mentes por trás do código.</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        Nossa equipe é formada por estudantes apaixonados por tecnologia e saúde mental, unindo habilidades de Front-end e Back-end para criar soluções que transformam vidas.
                    </p>
                </div>

                {/* Horizontal Row of Members */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {TEAM_MEMBERS.map((member, index) => (
                        <div key={index} className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-center text-center group">

                            {/* Photo Logic: Uses local image if defined, otherwise uses Dicebear Avatar */}
                            <div className="relative mb-4">
                                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-purple-50 group-hover:border-primary/20 transition-colors">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>
                                <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-400 rounded-full border-2 border-white" title="Online"></div>
                            </div>

                            <h4 className="font-bold text-lg text-gray-900 mb-1">{member.name}</h4>
                            <span className="text-primary text-xs font-bold uppercase tracking-wider mb-3">{member.initials}</span>
                            <p className="text-gray-500 text-sm">{member.role}</p>
                            
                            {/* Bloco de Ícones de Mídia Social Atualizado */}
                            <div className="mt-4 flex gap-4 text-gray-500">
                                {/* LinkedIn Icon */}
                                <a 
                                    href={member.linkedin} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="hover:text-primary transition-colors" 
                                    title={`LinkedIn de ${member.name}`}
                                >
                                    <Linkedin size={20} />
                                </a>
                                {/* Github Icon */}
                                <a 
                                    href={member.github} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="hover:text-primary transition-colors" 
                                    title={`GitHub de ${member.name}`}
                                >
                                    <Github size={20} />
                                </a>
                            </div>
                            {/* Fim do Bloco de Ícones de Mídia Social Atualizado */}

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Team;