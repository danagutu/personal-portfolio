import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FidelisAICaseStudy from './components/FidelisAICaseStudy';

// Homepage component
const HomePage: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/fidelis-ai-case-study" element={<FidelisAICaseStudy />} />
      </Routes>
    </Router>
  );
};

export default App;
