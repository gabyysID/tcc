import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color: #d3d3d3;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

const Sidebar = styled.div`
  width: ${(props) => (props.isOpen ? '200px' : '50px')};
  background-color: #0a58ca;
  color: #fff;
  transition: width 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  position: relative;
  height: 100vh;
`;

const MenuIcon = styled.div`
  font-size: 24px;
  cursor: pointer;
  margin-bottom: 20px;
  color: #fff;
`;

const MenuContent = styled.div`
  display: ${(props) => (props.isOpen ? 'block' : 'none')};
  margin-top: 20px;
  text-align: left;
  color: #fff;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MessageBox = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 8px;
  color: #333;
  text-align: center;
  font-weight: bold;
  margin-top: 20px;
`;

const Shortcut = styled.div`
  background-color: #C7C2C2;
  color: #black;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  max-width: 300px;
  text-align: left;
`;

const ModalOverlay = styled.div`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  text-align: center;
`;

const CloseButton = styled.button`
  background-color: #0a58ca;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background-color: #084298;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Container>
      <Sidebar isOpen={isOpen}>
        <MenuIcon onClick={toggleSidebar}>
          {isOpen ? '✖' : '☰'}
        </MenuIcon>
        <MenuContent isOpen={isOpen}>
          <p>Chamados de T.I</p>
          <p>Histórico</p>
          <p></p>
        </MenuContent>
      </Sidebar>

      <MainContent>
        <h1>t.i</h1>
        <Shortcut onClick={openModal}>
          <span>Monitor não está ligando?</span>
        </Shortcut>
        <Shortcut>
          <span>Mouse não está ligando?</span>
        </Shortcut>
        <Shortcut>
          <span>Teclado não está ligando?</span>
        </Shortcut>


        <MessageBox>
          Não sabe como funciona? <strong>Faça nosso tutorial!</strong>
        </MessageBox>
      </MainContent>

      <ModalOverlay isOpen={isModalOpen}>
        <ModalContent>
          <h2>Formulário de Suporte</h2>
          <Form>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="E-mail" />
            <textarea placeholder="Descreva o problema" rows="4" />
            <CloseButton onClick={closeModal}>Enviar</CloseButton>
          </Form>
          <CloseButton onClick={closeModal}>Fechar</CloseButton>
        </ModalContent>
      </ModalOverlay>
    </Container>
  );
};

export default HomePage;
