import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import VideoDemo from './components/VideoDemo';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <VideoDemo />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;