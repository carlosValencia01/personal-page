import './homeHeader.css';
import React, { useState } from 'react';

export const HomeHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

     return (
    <header className="main-header">
      <div className="container">
        <div className="logo">
          <a href="/">Carlos Valencia</a>
        </div>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="/about-me" onClick={() => setMenuOpen(false)}>Sobre mí</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Proyectos</a>
          <a href="#blog" onClick={() => setMenuOpen(false)}>Blog</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contacto</a>
        </nav>

        <button className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Menú">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </header>
  );
}