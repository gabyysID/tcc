
// components/AdminDashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
  background-color: #f4f4f4;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const Table = styled.table`
  width: 100%;
  max-width: 800px;
  border-collapse: collapse;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TableHeader = styled.th`
  padding: 12px;
  background-color: #007bff;
  color: white;
  text-align: left;
  border: 1px solid #ddd;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableData = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  color: #333;
`;

const StatusSelect = styled.select`
  padding: 6px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: ${({ color }) => color || '#f9f9f9'};
  cursor: pointer;
  font-size: 1em;
  color: #333;
`;

const colorMap = {
  Aberto: 'white',
  'Em Progresso': 'orange',
  Concluído: 'green',
  Cancelado: 'gray',
  Rejeitado: 'purple',
};

const AdminDashboard = () => {
  const [calls, setCalls] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/chamados')
      .then((response) => setCalls(response.data))
      .catch((error) => console.error('Erro ao buscar chamados:', error));
  }, []);

  const handleStatusChange = (id, newStatus) => {
    axios
      .patch(`http://localhost:3001/chamados/${id}`, { status: newStatus })
      .then(() => {
        setCalls(calls.map((call) => (call.id === id ? { ...call, status: newStatus } : call)));
      })
      .catch((error) => console.error('Erro ao atualizar o status:', error));
  };

  return (
    <Container>
      <Title>Painel de Controle - Chamados</Title>
      <Table>
        <thead>
          <tr>
            <TableHeader>Código T.I</TableHeader>
            <TableHeader>Título</TableHeader>
            <TableHeader>Detalhamento</TableHeader>
            <TableHeader>Status</TableHeader>
          </tr>
        </thead>
        <tbody>
          {calls.map((call) => (
            <TableRow key={call.id}>
              <TableData>{call.codigoTI}</TableData>
              <TableData>{call.titulo}</TableData>
              <TableData>{call.detalhamento}</TableData>
              <TableData>
                <StatusSelect
                  value={call.status}
                  onChange={(e) => handleStatusChange(call.id, e.target.value)}
                >
                  <option value="Aberto">Aberto</option>
                  <option value="Em Progresso">Em Progresso</option>
                  <option value="Concluído">Concluído</option>
                  <option value="Cancelado">Cancelado</option>
                  <option value="Rejeitado">Rejeitado</option>
                </StatusSelect>
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminDashboard;
