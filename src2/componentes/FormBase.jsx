// components/FormBase.jsx
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0;
  padding: 0 15px; 
  
`;

const FormContainer = styled.form`
  background-color: #f9f9f9;
  padding: 25px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 600px;
  width: 100%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin: auto; 
  box-sizing: border-box; 

  @media (max-width: 768px) {
    padding: 20px;
    max-width: 100%;
    margin: 10px;
  }
`;

const Label = styled.label`
  font-size: 1em;
  font-weight: 600;
  color: #333;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1em;
  color: #333;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 0.9em;
    padding: 8px;
  }
`;

const Select = styled.select`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1em;
  color: #333;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 0.9em;
    padding: 8px;
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #ccc;
  resize: vertical;
  font-size: 1em;
  color: #333;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 0.9em;
    padding: 8px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const Button = styled.button`
  padding: 12px 25px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 1em;
  color: white;
  background-color: ${props => props.primary ? '#007bff' : '#6c757d'};
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 10px 0;
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

  const analistas = {
    Infraestrutura: [
      { id: '026', nome: 'Lucas Nunes' },
      { id: '006', nome: 'José Carlos' },
      { id: '029', nome: 'Felipe Santos' },
      { id: '027', nome: 'Wanderson Rodrigues' },
      { id: '030', nome: 'Enzo Ugbobi' },
    ],
    Sistema: [
      { id: '001', nome: 'Regiane Kemita' },
      { id: '022', nome: 'Irineu Filho' },
      { id: '002', nome: 'Isaías Chipoch' },
      { id: '014', nome: 'Ivandro Márcio' },
    ]
  };

  const filteredAnalistas = analistas[category] || [];

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'nomeAnalista') {
      const selectedAnalista = filteredAnalistas.find(analista => analista.nome === value);
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
    <PageContainer>
      <FormContainer onSubmit={handleSubmit}>
        <Label>
          Titulo:
          <Input type="text" name="titulo" value={formData.titulo} onChange={handleChange} required />
        </Label>
        <Label>
          Nome Solicit.:
          <Input type="text" name="nomeSolicitante" value={formData.nomeSolicitante} onChange={handleChange} required />
        </Label>
        <Label>
          Cod. Solicit.:
          <Input type="text" name="codSolicitante" value={formData.codSolicitante} onChange={handleChange} required />
        </Label>
        <Label>
          Nome Analista:
          <Select name="nomeAnalista" value={formData.nomeAnalista} onChange={handleChange} required>
            <option value="">Selecione um analista</option>
            {filteredAnalistas.map(analista => (
              <option key={analista.id} value={analista.nome}>
                {analista.nome}
              </option>
            ))}
          </Select>
        </Label>
        <Label>
          Cod. Analista:
          <Input type="text" name="codAnalista" value={formData.codAnalista} onChange={handleChange} readOnly required />
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
    </PageContainer>
  );
};

export default FormBase;

