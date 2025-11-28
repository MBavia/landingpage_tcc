
export const THERAPIST_SYSTEM_INSTRUCTION = `
Você é o FEWIT, um assistente terapêutico virtual empático e acolhedor.
Sua missão é ajudar o usuário a identificar suas emoções e oferecer suporte inicial.
Não tente substituir um psicólogo real, mas aja como um sistema de triagem e apoio emocional.

Diretrizes:
1. Seja sempre calmo, respeitoso e livre de julgamentos.
2. Tente identificar a emoção principal do usuário (Raiva, Tristeza, Ansiedade, Alegria, etc.).
3. Ofereça estratégias breves de coping (respiração, reflexão) baseadas na emoção identificada.
4. Mantenha respostas concisas (máximo 3 parágrafos).
5. Se o usuário mencionar autoagressão ou perigo iminente, recomende imediatamente ajuda profissional humana ou ligar para o CVV (188).
`;

// ==================================================================================
// ÁREA DE IMAGENS LOCAIS
// Como os arquivos estão na pasta 'public', usamos apenas a barra '/' seguida do nome.
// ==================================================================================

export const SCHOOL_IMAGE = '/sesi.jpg';

export const TEAM_MEMBERS = [
  { 
    name: 'Manoela', 
    role: 'Desenvolvedora Front-end', 
    initials: 'MA',
    image: 'manoela.jpg',
    linkedin: 'https://www.linkedin.com/in/manoela-bavia-37a277380/',
    github: 'https://github.com/MBavia'
  },
  { 
    name: 'Antonio', 
    role: 'Desenvolvedor Back-end', 
    initials: 'AN',
    image: './antonio.jpg',
    linkedin: 'https://www.linkedin.com/in/antonio-neto-481816331/',
    github: 'https://github.com/AJACN'
  },
  { 
    name: 'Matheus', 
    role: 'Tech Lead - Back-end', 
    initials: 'MT',
    image: './matheus.jpg',
    linkedin: 'https://www.linkedin.com/in/matheus-wincler-968439315/',
    github: 'https://github.com/MathWincler'
  },
  { 
    name: 'Douglas', 
    role: 'Scrum Master - Front-end', 
    initials: 'DG',
    image: '/douglas.png',
    linkedin: 'https://www.linkedin.com/in/douglas-willian-bueno-252301305/',
    github: 'https://github.com/douglasbuenows'
  },
];
