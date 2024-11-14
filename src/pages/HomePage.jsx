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

//
import React, { useState } from "react";
import styled from "styled-components";

// Estilos para o pop-up e seus componentes
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.show ? "block" : "none")};
  z-index: 1000;
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Modal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 600px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  animation: modalIn 0.3s ease-out;

  @keyframes modalIn {
    from {
      transform: translate(-50%, -40%) scale(0.8);
    }
    to {
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #333;

  &:hover {
    color: #ff0000;
  }
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;

const Content = styled.p`
  font-size: 1rem;
  color: #333;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const RadioButtonContainer = styled.div`
  margin-bottom: 15px;
`;

const SubmitButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  width: 100%;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const OpenButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  margin-top: 20px;
  cursor: pointer;
  margin-left: 30px;
  

  &:hover {
    background-color: #0056b3;
  }
`;

const FormButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #218838;
  }

`;


const Pai = styled.div`
display:flex;
justify-content: center;

` ;

function Paginicial() {
  const [showPopup, setShowPopup] = useState(false);
  const [tutorialContent, setTutorialContent] = useState("");
  const [helped, setHelped] = useState(null);
  const [formData, setFormData] = useState({
    nome: "",
    comentario: "",
  });

  const handleOpenPopup = (tutorial) => {
    setTutorialContent(tutorial);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setTutorialContent("");
    setHelped(null);  // Reset question answer
    setFormData({ nome: "", comentario: "" }); // Clear form data
  };

  const handleHelpedAnswer = (answer) => {
    setHelped(answer);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(Formulário enviado com sucesso!);
    handleClosePopup();
  };

  const tutorials = {
    tutorial1: "Este é o conteúdo do Tutorial 1. Aqui você aprenderá a criar componentes React.",
    tutorial2: "Este é o conteúdo do Tutorial 2. Aqui você aprenderá sobre o gerenciamento de estado com useState.",
    tutorial3: "Este é o conteúdo do Tutorial 3. Aqui você aprenderá como trabalhar com formulários em React.",
    tutorial4: "Este é o conteúdo do Tutorial 4. Aqui você aprenderá sobre styled-components em React.",
    tutorial5: "Este é o conteúdo do Tutorial 5. Aqui você aprenderá sobre Hooks personalizados e como usá-los.",
  };

  const renderTutorialContent = () => {
    switch (tutorialContent) {
      case tutorials.tutorial1:
        return (<>
        <h1>Como resolver os possiveis problemas</h1>
       <h2>Não conecta no wifi?</h2>
        <p> 1 - verifique se a senha foi digitada corretamente</p>
        <p> 2 - se a internet for cabeada, verifique os cabos e veja se não é mal-contato</p>
        <p> 3 - atualize e reinicie sua máquina</p>
        </>)
         
      case tutorials.tutorial2:
        return (<>
        <h1> Como resolver os possiveis problemas</h1>
        <h2>Monitor não funciona?</h2>
        <p>1 - veja se os cabos estão devidamente conectados</p>
        <p>2 - veja as entradas tanto da maquina conectada quanto do monitor</p>
        <p>3 - confira se o monitor não esta queimado ou danificado</p>
        

        
        </>)
        return "Este é o conteúdo do Tutorial 3. Aqui você aprenderá como trabalhar com formulários em React.";
      case tutorials.tutorial4:
        return(<>
        <h1>como resolver os possiveis problemas</h1>
        <h2>Senha não funciona?</h2>
        <p>1 - verifique se a senha foi digitada corretamente</p>
        <p> 2 - veja se não esta digitando em capslock</p>
        <p> 3 - sempre confira a forma que a senha esta sendo digitada</p>
        <p> 4 - anote suas senhas para nao perde-las</p>
         </>)
      case tutorials.tutorial5:
        return(<>
        <h1>como resolver os possiveis problemas</h1>
        <h2>email nao funciona?</h2>
        <p>1 - verifique se o email foi digitado corretamente</p>
        <p>2 - veja se o endereço de email é o correto</p>
        <p>3 - verifique se a senha foi digitada corretmente</p> 
        </>)
      default:
        return "";
    }
  };

  return (
    <Pai>
      {/* Botões para abrir os tutoriais */}
      <OpenButton onClick={() => handleOpenPopup(tutorials.tutorial1)}>Internet</OpenButton>
      <OpenButton onClick={() => handleOpenPopup(tutorials.tutorial2)}>Monitor</OpenButton>
      <OpenButton onClick={() => handleOpenPopup(tutorials.tutorial4)}>Senha</OpenButton>
      <OpenButton onClick={() => handleOpenPopup(tutorials.tutorial5)}>Email</OpenButton>

      {/* Modal Overlay e conteúdo */}
      <Overlay show={showPopup} onClick={handleClosePopup}>
        <Modal onClick={(e) => e.stopPropagation()}>
          <CloseButton onClick={handleClosePopup}>×</CloseButton>
          <Title>Tutorial</Title>
          <Content>{renderTutorialContent()}</Content>

          {helped === null ? (
            <div>
              <p>O tutorial ajudou?</p>
              <RadioButtonContainer>
                <input
                  type="radio"
                  name="helped"
                  value="yes"
                  onChange={() => handleHelpedAnswer(false)}
                />
                <label>Sim</label>
                <input
                  type="radio"
                  name="helped"
                  value="no"
                  onChange={() => handleHelpedAnswer(true)}
                />
                <label>Não</label>
              </RadioButtonContainer>
            </div>
          ) : helped ? (
            <form onSubmit={handleSubmit}>
              <Title>Especifique seu problema</Title>
              <InputField
                type="text"
                name="nome"
                placeholder="Escreva aqui"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            
              <SubmitButton type="submit">Nos diga sua duvida!</SubmitButton>
            </form>
          ) : (
            <p>Ficamos felizes em lhe ajudar!</p>
          )}
        </Modal>
      </Overlay>
    </Pai>
  );
}

export default Paginicial;
