import React, { useState } from 'react';
import SyllableStepper from './components/SyllableStepper';

const App = () => {
  const [font, setFont] = useState<'lexend' | 'fredoka'>('lexend');

  const toggleFont = () => {
    setFont(prev => (prev === 'lexend' ? 'fredoka' : 'lexend'));
  };

  return (
    <div
  className={font === 'lexend' ? 'lexend-font' : 'fredoka-font'}
  style={{
    minHeight: '100vh',
    background: '#f0f8ff',
    padding: '2rem 1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    boxSizing: 'border-box',
  }}
>

      <div style={{ maxWidth: '500px', width: '100%' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>🗣️ STS Practice Tool</h1>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
  <button
    onClick={toggleFont}
    style={{
      marginBottom: '2rem',
      padding: '0.6rem 1.2rem',
      fontSize: '1rem',
      background: '#ffb703',
      color: '#000',
      border: '2px solid #1c3faa',
      borderRadius: '1rem',
      cursor: 'pointer'
    }}
  >
    Change Font: {font === 'lexend' ? 'Fredoka' : 'Lexend'}
  </button>
</div>


        <SyllableStepper />
      </div>
    </div>
  );
};

export default App;
