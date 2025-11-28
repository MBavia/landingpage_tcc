import React from 'react';

export enum MessageRole {
  USER = 'user',
  MODEL = 'model'
}

export interface ChatMessage {
  id: string;
  role: MessageRole;
  text: string;
  isError?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  image?: string; // Caminho da foto local (opcional)
}

export interface WorkflowStep {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}