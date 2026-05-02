import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Video from './components/Video';
import CV from './components/CV';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Video />
      <CV />
      <Contact />
    </div>
  );
}

export default App;
