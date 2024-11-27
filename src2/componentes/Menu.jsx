// components/Menu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 200px;
  background-color: #1a1a2e;
  color: white;
  padding: 20px;
  height: 120vh;
  display: flex;
  flex-direction: column;
  float: left;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 15px 0;
`;

const Menu = () => (
  <Nav>
    <Title> <Link to="/home" style={{ color: 'white', textDecoration: 'none' }}>Chamado T.I</Link></Title>
    <List>
      <ListItem>
        <Link to="/form-physical" style={{ color: 'white', textDecoration: 'none' }}>Chamado para Infraestrurura</Link>
      </ListItem>
      <ListItem>
        <Link to="/form-system" style={{ color: 'white', textDecoration: 'none' }}>Chamado para Sistema</Link>
      </ListItem>
      <ListItem>
        <Link to="/user-history" style={{ color: 'white', textDecoration: 'none' }}>Histórico</Link>
      </ListItem>
      <ListItem>
        <Link to="/admin-dashboard" style={{ color: 'white', textDecoration: 'none' }}>Painel de Controle</Link>
      </ListItem>
    </List>
    <div style={{ marginTop: 'auto', color: 'white' }}>
      Emergência? Ligue ****
    </div>
  </Nav>
);

export default Menu;

