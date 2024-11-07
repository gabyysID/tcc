import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => (
  <nav>
    <Link to="/">Início</Link>
    <Link to="/chamados">Chamados T.I</Link>
    <Link to="/historico">Histórico</Link>
  </nav>
);

export default Menu;
