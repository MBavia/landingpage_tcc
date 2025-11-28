import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Workflow from './components/Workflow';
import SesiSenai from './components/SesiSenai';
import Team from './components/Team';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProblemSolution />
        <Workflow />
        <SesiSenai />
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default App;