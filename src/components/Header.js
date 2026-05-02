import React, { useState } from 'react';
import './Header.css';
import { Button } from './UI';
import { TbMenu2, TbX } from 'react-icons/tb';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="assets/images/favicon.png" alt="Logo" className="logo-icon" />
          <span className="logo-text">Oleh Liubchenko</span>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <a href="#projects" className="nav-link" onClick={closeMenu}>Projets</a>
          <a href="#about" className="nav-link" onClick={closeMenu}>À propos</a>
          <a href="#video" className="nav-link" onClick={closeMenu}>Vidéo</a>
          <a href="#cv" className="nav-link" onClick={closeMenu}>CV</a>
          <a href="#blog" className="nav-link" onClick={closeMenu}>Blog</a>
          <a href="#faq" className="nav-link" onClick={closeMenu}>FAQ</a>
          <a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a>
          <Button variant="secondary" size="md" className="nav-button">Me contacter</Button>
        </nav>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <TbX size={24} /> : <TbMenu2 size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
