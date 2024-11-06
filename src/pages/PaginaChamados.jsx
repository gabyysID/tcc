import React from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  flex: 1;
  background-color: #d3d3d3;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Field = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-size: 14px;
  color: #333;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  background-color: ${({ color }) => color || '#ccc'};
  color: white;
  &:hover {
    opacity: 0.9;
  }
`;

const PaginaChamados = () => {
  return (
    <FormContainer>
      <Field>
        <Label>Chamado T.I:</Label>
        <Input type="text" />
      </Field>
      <Field>
        <Label>Título:</Label>
        <Input type="text" />
      </Field>
      <Field>
        <Label>Cód. Solicitante:</Label>
        <Input type="text" />
      </Field>
      <Field>
        <Label>Nome Solicitante:</Label>
        <Input type="text" />
      </Field>
      <Field>
        <Label>Cód. Analista:</Label>
        <Input type="text" />
      </Field>
      <Field>
        <Label>Nome Analista:</Label>
        <Input type="text" />
      </Field>
      <Field>
        <Label>Centro Custo:</Label>
        <Input type="text" />
      </Field>
      <Field>
        <Label>Desc. Custo:</Label>
        <Input type="text" />
      </Field>
      <Field>
        <Label>Detalhamento:</Label>
        <TextArea rows="4" placeholder="Escreva..." />
      </Field>
      <ButtonContainer>
        <Button color="#6c757d">Outras Ações</Button>
        <Button color="#ff4d4f">Cancelar</Button>
        <Button color="#28a745">Salvar</Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default PaginaChamados;
