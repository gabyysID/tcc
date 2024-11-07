import React, { useState } from 'react';

const ChamadosTI = () => {
  const [formData, setFormData] = useState({ issue: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Salve os dados na database
    console.log('Chamado enviado:', formData);
  };

  return (
    <div>
      <h2>Chamados T.I</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Descrição do Problema:
          <input type="text" name="issue" value={formData.issue} onChange={handleChange} />
        </label>
        <button type="submit">Enviar Chamado</button>
      </form>
    </div>
  );
};

export default ChamadosTI;
