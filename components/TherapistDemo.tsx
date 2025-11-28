import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Sparkles, Loader2, Bot } from 'lucide-react';
import { GoogleGenAI, Chat } from '@google/genai';
import { ChatMessage, MessageRole } from '../types';
import { THERAPIST_SYSTEM_INSTRUCTION } from '../constants';

const TherapistDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: MessageRole.MODEL,
      text: 'Olá. Eu sou o FEWIT. Como você está se sentindo hoje? Sinta-se à vontade para compartilhar.'
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [chatSession, setChatSession] = useState<Chat | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize Chat
  useEffect(() => {
    try {
      if (process.env.API_KEY) {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const newChat = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: THERAPIST_SYSTEM_INSTRUCTION,
            temperature: 0.7,
            topK: 40,
          },
        });
        setChatSession(newChat);
      }
    } catch (error) {
      console.error("Failed to initialize chat", error);
    }
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || !chatSession) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: MessageRole.USER,
      text: input
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const result = await chatSession.sendMessage({ message: userMsg.text });
      const modelResponseText = result.text || "Desculpe, não consegui processar sua resposta agora.";

      const modelMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: MessageRole.MODEL,
        text: modelResponseText
      };

      setMessages(prev => [...prev, modelMsg]);
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: MessageRole.MODEL,
        text: "Desculpe, tive um problema técnico. Por favor, tente novamente.",
        isError: true
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <Sparkles className="text-primary" />
            Experimente Agora
          </h2>
          <p className="text-gray-600">
            Converse com nossa IA e veja como ela pode ajudar a identificar e acolher suas emoções.
            <br/><span className="text-sm text-gray-500">(Esta é uma demonstração simplificada)</span>
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col h-[600px]">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-primary to-secondary p-4 flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-full">
              <Bot className="text-white" size={24} />
            </div>
            <div>
              <h3 className="font-bold text-white">Terapeuta Virtual FEWIT</h3>
              <p className="text-purple-100 text-xs">Sempre disponível • IA Powered</p>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex w-full ${msg.role === MessageRole.USER ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex max-w-[85%] gap-2 ${msg.role === MessageRole.USER ? 'flex-row-reverse' : 'flex-row'}`}>
                  
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${
                    msg.role === MessageRole.USER ? 'bg-indigo-100 text-indigo-600' : 'bg-primary text-white'
                  }`}>
                    {msg.role === MessageRole.USER ? <User size={16} /> : <BrainCircuitIcon size={16} />}
                  </div>

                  <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === MessageRole.USER 
                      ? 'bg-indigo-600 text-white rounded-tr-none' 
                      : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'
                  } ${msg.isError ? 'bg-red-50 border-red-200 text-red-600' : ''}`}>
                    {msg.text}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start w-full">
                 <div className="flex max-w-[85%] gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 mt-1">
                      <BrainCircuitIcon size={16} />
                    </div>
                    <div className="bg-white p-4 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex items-center gap-2">
                      <Loader2 className="animate-spin text-primary" size={16} />
                      <span className="text-gray-500 text-xs font-medium">Analisando sentimentos...</span>
                    </div>
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Conte-me, o que você está sentindo..."
                className="flex-1 border border-gray-200 rounded-full px-6 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-sm"
                disabled={!process.env.API_KEY}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim() || !process.env.API_KEY}
                className="bg-primary hover:bg-violet-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white p-3 rounded-full transition-colors flex items-center justify-center shadow-lg"
              >
                <Send size={20} />
              </button>
            </div>
            {!process.env.API_KEY && (
              <p className="text-center text-xs text-red-500 mt-2">
                API Key não configurada. A demonstração não funcionará sem ela.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Helper icon
const BrainCircuitIcon = ({size}: {size:number}) => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
      <path d="M9 13a4.5 4.5 0 0 0 3-4" />
      <path d="M6.003 5.125A3 3 0 0 1 19.528 16.32" />
      <path d="M15 13a4.5 4.5 0 0 1-3-4" />
      <path d="M12 18a3 3 0 1 1 6 0 4 4 0 0 1-2.526-5.77 4 4 0 0 1-.556-6.588" />
    </svg>
)

export default TherapistDemo;