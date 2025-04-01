import React, { useState } from 'react';
import SyllableStepper from '../components/SyllableStepper';

const STSPage: React.FC = () => {
  const [font, setFont] = useState<'lexend' | 'fredoka'>('lexend');
  const primaryColor = '#1c3faa';
  const accentColor = '#ffb703';

  const toggleFont = () => {
    setFont(prev => (prev === 'lexend' ? 'fredoka' : 'lexend'));
  };

  return (
    <div
      className={font === 'lexend' ? 'lexend-font' : 'fredoka-font'}
      style={{ textAlign: 'center', minHeight: '100vh' }}
    >
      <h1 style={{ color: primaryColor, marginBottom: '1rem' }}>
        🗣️ STS Practice Tool
      </h1>

      <button
        onClick={toggleFont}
        style={{
          marginBottom: '2rem',
          padding: '0.6rem 1.2rem',
          fontSize: '1rem',
          background: accentColor,
          color: '#000',
          border: `2px solid ${primaryColor}`,
          borderRadius: '1rem',
          cursor: 'pointer',
        }}
      >
        Change Font: {font === 'lexend' ? 'Fredoka' : 'Lexend'}
      </button>

      <SyllableStepper />
    </div>
  );
};

export default STSPage;

