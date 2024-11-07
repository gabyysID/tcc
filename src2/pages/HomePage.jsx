import React, { useState } from 'react';
import FormPopup from '../components/Form';

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div>
      <h1>??????</h1>
      <div>
        <button onClick={handleOpenForm}>Monitor não está ligando?</button>
        {showForm && <FormPopup onClose={handleCloseForm} />}
      </div>
    </div>
  );
};

export default Home;
