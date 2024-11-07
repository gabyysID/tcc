import React, { useEffect, useState } from 'react';

const Historico = () => {
  const [chamados, setChamados] = useState([]);

  useEffect(() => {
    // Aqui você puxaria os dados da database
    const fetchedChamados = [
      { id: 1, issue: 'Monitor não está ligando' },
      { id: 2, issue: 'Teclado não responde' },
    ];
    setChamados(fetchedChamados);
  }, []);

  return (
    <div>
      <h2>Histórico de Chamados</h2>
      <ul>
        {chamados.map((chamado) => (
          <li key={chamado.id}>{chamado.issue}</li>
        ))}
      </ul>
    </div>
  );
};

export default Historico;
