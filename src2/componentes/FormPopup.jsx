import React, { useState } from 'react';

const FormPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({ issue: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você salvaria os dados na database
    console.log('Dados enviados:', formData);
    onClose(); // Fecha o pop-up após o envio
  };

  return (
    <div className="popup">
      <form onSubmit={handleSubmit}>
        <label>
          Descrição do Problema:
          <input type="text" name="issue" value={formData.issue} onChange={handleChange} />
        </label>
        <button type="submit">Enviar</button>
        <button type="button" onClick={onClose}>Cancelar</button>
      </form>
    </div>
  );
};

export default FormPopup;
