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

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 10px;
    padding: 15px;
  }
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

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
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

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const FormBase = ({ category }) => {
  const [formData, setFormData] = useState({
    titulo: '',
    codSolicitante: '',
    nomeSolicitante: '',
    codAnalista: '',
    nomeAnalista: '',
    centroCusto: '',
    descCusto: '',
    detalhamento: '',
    categoria: category 
  });

  // Lista de analistas com seus códigos
  const analistas = [
    { id: '101', nome: 'Ana Costa' },
    { id: '102', nome: 'João Souza' },
    { id: '103', nome: 'Rita Lopes' },
    { id: '104', nome: 'Fernando Silva' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Se o campo alterado for o nome do analista, atualiza também o código automaticamente
    if (name === 'nomeAnalista') {
      const selectedAnalista = analistas.find(analista => analista.nome === value);
      setFormData({
        ...formData,
        nomeAnalista: value,
        codAnalista: selectedAnalista ? selectedAnalista.id : '',
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/chamados', formData);
      alert('Chamado salvo com sucesso!');
      setFormData({
        titulo: '',
        codSolicitante: '',
        nomeSolicitante: '',
        codAnalista: '',
        nomeAnalista: '',
        centroCusto: '',
        descCusto: '',
        detalhamento: '',
        categoria: category
      });
    } catch (error) {
      console.error('Erro ao salvar o chamado:', error);
      alert('Ocorreu um erro ao salvar o chamado.');
    }
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label>
        Chamado T.I:
        <Input type="text" name="titulo" value={formData.titulo} onChange={handleChange} required />
      </Label>
      <Label>
        Cod. Solicit.:
        <Input type="text" name="codSolicitante" value={formData.codSolicitante} onChange={handleChange} required />
      </Label>
      <Label>
        Nome Solicit.:
        <Input type="text" name="nomeSolicitante" value={formData.nomeSolicitante} onChange={handleChange} required />
      </Label>
      <Label>
        Cod. Analista:
        <Input type="text" name="codAnalista" value={formData.codAnalista} onChange={handleChange} readOnly required />
      </Label>
      <Label>
        Nome Analista:
        <Select name="nomeAnalista" value={formData.nomeAnalista} onChange={handleChange} required>
          <option value="">Selecione um analista</option>
          {analistas.map(analista => (
            <option key={analista.id} value={analista.nome}>
              {analista.nome}
            </option>
          ))}
        </Select>
      </Label>
      <Label>
        Centro Custo:
        <Input type="text" name="centroCusto" value={formData.centroCusto} onChange={handleChange} required />
      </Label>
      <Label>
        Desc. Custo:
        <Input type="text" name="descCusto" value={formData.descCusto} onChange={handleChange} required />
      </Label>
      <Label>
        Detalhamento:
        <TextArea name="detalhamento" value={formData.detalhamento} onChange={handleChange} rows="4" required />
      </Label>
      <ButtonContainer>
        <Button type="button">Outras Ações</Button>
        <Button type="button">Cancelar</Button>
        <Button type="submit" primary>Salvar</Button>
      </ButtonContainer>
    </FormContainer>
  );
};

export default FormBase;

