import React from 'react';
import './Header.css';
import { Button } from './UI';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="assets/images/favicon.png" alt="Logo" className="logo-icon" />
          <span className="logo-text">Oleh Liubchenko</span>
        </div>
        
        <nav className="nav">
          <a href="#projects" className="nav-link">Projets</a>
          <a href="#about" className="nav-link">À propos</a>
          <a href="#cv" className="nav-link">CV</a>
          <a href="#blog" className="nav-link">Blog</a>
          <a href="#faq" className="nav-link">FAQ</a>
          <a href="#contact" className="nav-link">Contact</a>
          <Button variant="secondary" size="md">Me contacter</Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
