import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre Mim</Link>
        <Link to="/projects">Projetos</Link>
        <Link to="/skills">Habilidades</Link>
        <Link to="/contact">Contato</Link>
      </nav>
    </header>
  );
}

export default Header;
