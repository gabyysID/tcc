import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const FormContainer = styled.form`
  background-color: #d3d3d3;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 500px;
  margin: 20px;
`;
const Label = styled.label`
  font-size: 0.9em;
  display: flex;
  flex-direction: column;
  color: #333;
`;
const Input = styled.input`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;
const Select = styled.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;
const TextArea = styled.textarea`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  resize: none;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  background-color: ${props => props.primary ? '#007bff' : '#6c757d'};

  &:hover {
    opacity: 0.8;
  }
`;

const Form = () => {
  const [formData, setFormData] = useState({
    titulo: '',
    codSolicitante: '',
    nomeSolicitante: '',
    codAnalista: '',
    nomeAnalista: '',
    centroCusto: '',
    descCusto: '',
    detalhamento: ''
  });

  // Lista de analistas com seus respectivos códigos
  const analistas = [
    { id: 'A001', nome: 'Ana Costa' },
    { id: 'A002', nome: 'João Souza' },
    { id: 'A003', nome: 'Rita Lopes' },
    { id: 'A004', nome: 'Fernando Silva' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prevState => {
      if (name === 'nomeAnalista') {
        // Busca o analista selecionado para obter o código associado
        const analistaSelecionado = analistas.find(analista => analista.nome === value);
        return {
          ...prevState,
          nomeAnalista: value,
          codAnalista: analistaSelecionado ? analistaSelecionado.id : '' // Define o código correspondente ou vazio
        };
      }

      // Atualiza outros campos normalmente
      return {
        ...prevState,
        [name]: value
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/chamados', formData);
      alert('Chamado enviado com sucesso!');
      setFormData({
        titulo: '',
        codSolicitante: '',
        nomeSolicitante: '',
        codAnalista: '',
        nomeAnalista: '',
        centroCusto: '',
        descCusto: '',
        detalhamento: ''
      });
    } catch (error) {
      console.error('Erro ao enviar o chamado:', error);
      alert('Ocorreu um erro ao enviar o chamado.');
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label>
        Título
        <Input type="text" name="titulo" value={formData.titulo} onChange={handleChange} />
      </Label>
      <Label>
        Nome Solicitante:
        <Input type="text" name="nomeSolicitante" value={formData.nomeSolicitante} onChange={handleChange} />
      </Label>
      <Label>
        Cod. Solicitante:
        <Input type="text" name="codSolicitante" value={formData.codSolicitante} onChange={handleChange} />
      </Label>
      <Label>
        Cod. Analista:
        <Input type="text" name="codAnalista" value={formData.codAnalista} readOnly /> {/* Somente leitura */}
      </Label>
      <Label>
        Nome Analista:
        <Select name="nomeAnalista" value={formData.nomeAnalista} onChange={handleChange}>
          <option value="">Selecione um analista</option>
          {analistas.map(analista => (
            <option key={analista.id} value={analista.nome}>
              {analista.nome}
            </option>
          ))}
        </Select>
      </Label>
      <Label>
        Setor:
        <Input type="text" name="centroCusto" value={formData.centroCusto} onChange={handleChange} />
      </Label>
      <Label>
        Desc. Setor:
        <Input type="text" name="descCusto" value={formData.descCusto} onChange={handleChange} />
      </Label>
      <Label>
        Detalhamento:
        <TextArea name="detalhamento" value={formData.detalhamento} onChange={handleChange} rows="4" />
      </Label>
      <ButtonContainer>
        <Button type="button">Outras Ações</Button>
        <Button type="button">Cancelar</Button>
        <Button type="submit" primary>Enviar</Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default Form;
