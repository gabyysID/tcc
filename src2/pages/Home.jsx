import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f4f4f4;
`;

const Sidebar = styled.div`
  width: 60px;
  background-color: #003366;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;

  img {
    width: 30px;
    height: 30px;
    margin: 20px 0;
    cursor: pointer;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Header = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
`;

const TutorialList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  button {
    background: transparent;
    border: none;
    text-align: left;
    font-size: 1.2rem;
    color: #333;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }

    img {
      margin-left: 10px;
      width: 20px;
      height: 20px;
    }
  }
`;

const TutorialBox = styled.div`
  background-color: #eaeaea;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  font-size: 1rem;
  font-weight: bold;
  color: #333;

  span {
    color: #007bff;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const FooterIcon = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;

  img {
    width: 40px;
    height: 40px;
  }
`;

function Paginicial() {
  const tutorials = [
    { title: "Monitor não está ligando?", icon: "icon.png" },
    { title: "Internet não funciona?", icon: "icon.png" },
    { title: "Problemas com senha?", icon: "icon.png" },
    { title: "Email não chega?", icon: "icon.png" },
  ];

  return (
    <Container>
      <Content>
        <Header>Como podemos ajudar?</Header>
        <TutorialList>
          {tutorials.map((tutorial, index) => (
            <button key={index}>
              {tutorial.title}
              <img src={tutorial.icon} alt="Help icon" />
            </button>
          ))}
        </TutorialList>

        <TutorialBox>
          Não sabe como funciona? <span>Faça nosso tutorial!</span>
        </TutorialBox>
      </Content>

      <FooterIcon>
        <img src="watermark.png" alt="Watermark" />
      </FooterIcon>
    </Container>
  );
}

export default Paginicial;
