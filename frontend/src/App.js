import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <Router>
      <div className="App bg-clique-off-white">
        <Navigation />
        <main className="overflow-x-hidden">
          <Hero />
          <ProblemSolution />
          <Services />
          <HowItWorks />
          <Testimonials />
          <About />
          <Contact />
          <FAQ />
        </main>
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;