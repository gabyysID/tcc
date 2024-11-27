//src/pages/userHistory
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column; 
`;

const Content = styled.div`
  width: 100%;
  background-color: #d3d3d3;
  padding: 20px;
  margin-left: 200px;
  justify-content: center;
  

  @media (min-width: 768px) {
    width: 50vw; 
  }
`;

const Toolbar = styled.div`
  display: flex;
  flex-wrap: wrap; 
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2em;
`;

const SearchInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
  min-width: 200px;
`;

const ActionsButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  overflow-x: auto; 
  table-layout: fixed; 

  @media (max-width: 768px) {
    font-size: 0.9em; 
  }
`;

const TableHeader = styled.th`
  padding: 10px;
  background-color: #e0e0e0;
  border: 1px solid #ccc;
  text-align: left;
  word-wrap: break-word; 
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f7f7f7;
  }
`;

const TableData = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
  position: relative;
  word-wrap: break-word; 
`;

const StatusIndicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.color || 'gray'};
  position: relative;

  &:hover::after {
    content: "${props => props.tooltip}";
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #333;
    color: #fff;
    padding: 5px;
    border-radius: 3px;
    white-space: nowrap;
    font-size: 0.8rem;
    z-index: 10;
    opacity: 1;
    transition: opacity 0.2s;
  }

  &::after {
    opacity: 0;
    transition: opacity 0.2s;
  }
`;

const UserHistory = () => {
  const [calls, setCalls] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/chamados?userId=1')
      .then(response => setCalls(response.data))
      .catch(error => console.error('Erro ao buscar chamados:', error));
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCalls = calls.filter(call =>
    call.titulo.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container>
      <Content>
        <Toolbar>
          <IconButton>☰</IconButton>
          <SearchInput
            type="text"
            placeholder="Pesquisar"
            value={search}
            onChange={handleSearchChange}
          />
          <ActionsButton>Outras Ações</ActionsButton>
        </Toolbar>

        <Table>
          <thead>
            <tr>
              <TableHeader>Status</TableHeader>
              <TableHeader>Código T.I</TableHeader>
              <TableHeader>Título</TableHeader>
              <TableHeader>Nome Sol.</TableHeader>
              <TableHeader>Nome Analis.</TableHeader>
              <TableHeader>Setor</TableHeader>
              <TableHeader>etc...</TableHeader>
            </tr>
          </thead>
          <tbody>
            {filteredCalls.map((call, index) => (
              <TableRow key={index}>
                <TableData>
                  <StatusIndicator
                    color={call.status === 'Concluído'
                      ? 'green'
                      : call.status === 'Em Progresso'
                      ? 'orange'
                      : call.status === 'Aberto'
                      ? 'red'
                      : call.status === 'Cancelada'
                      ? 'orange'
                      : call.status === 'Não Negociada'
                      ? 'gray'
                      : call.status === 'Em Atendimento'
                      ? 'blue'
                      : call.status === 'Rejeitado'
                      ? 'purple'
                      : 'gray'}
                    tooltip={
                      call.status === 'Concluído'
                        ? 'Concluído: Solicitação finalizada'
                        : call.status === 'Em Progresso'
                        ? 'Em Progresso: Solicitação em andamento'
                        : call.status === 'Aberto'
                        ? 'Aberto: Aguardando análise'
                        : call.status === 'Cancelada'
                        ? 'Cancelada: Solicitação cancelada'
                        : call.status === 'Não Negociada'
                        ? 'Não Negociada: Solicitação sem negociação'
                        : call.status === 'Em Atendimento'
                        ? 'Em Atendimento: Solicitação em atendimento'
                        : call.status === 'Rejeitado'
                        ? 'Rejeitado: Solicitação rejeitada'
                        : 'Desconhecido: Status não definido'
                    }
                  />
                </TableData>
                <TableData>{call.codigoTI}</TableData>
                <TableData>{call.titulo}</TableData>
                <TableData>{call.nomeSol}</TableData>
                <TableData>{call.nomeAnalis}</TableData>
                <TableData>{call.setor}</TableData>
                <TableData>etc...</TableData>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </Content>
    </Container>
  );
};

export default UserHistory;
