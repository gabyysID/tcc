import React from 'react';
import styled from 'styled-components';
import logo from '../assets/LogoParanoa.png'; 

const Container = styled.div`
  width: 300px;
  background-color: #d3d3d3;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

const Logo = styled.img`
  width: 80%; 
  
`;

const Title = styled.h2`
  font-size: 16px;
  color: #333;
`;

const Label = styled.label`
  font-size: 14px;
  color: #333;
  margin-bottom: 5px;
  font-weight: bold
  width: 100%;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 70px;
  font-size: 16px;
  appearance: none;
  background-color: #F9F9F9;
  color: black;
  margin-bottom: 20px;
  background-size: 20px;
  &:focus {
    outline: none;
    border-color: #0a58ca;
  }
`;

const ExecuteButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  background-color: #162346;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #111B33;
  }
`;

const Acesso = () => {
  return (
    <Container>
      <Header>
        <Logo src={logo} alt="Paranoá Logo" />
      </Header>

      <Label>Execução</Label>
      <Select>
        <option>Selecione</option>
      </Select>

      <Label>Programa</Label>
      <Select>
        <option>Selecione</option>
      </Select>

      <Label>Comunicação</Label>
      <Select>
        <option>Selecione</option>
      </Select>

      <Label>Ambiente</Label>
      <Select>
        <option>Selecione</option>
      </Select>

      <ExecuteButton>EXECUTAR</ExecuteButton>
    </Container>
  );
};

export default Acesso;
