import React from 'react';

interface InstructionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InstructionModal: React.FC<InstructionModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const instructions = [
    {
      image: `${process.env.PUBLIC_URL}/images/instruction_pics/ins_1.png`,
      text: "Sig hver stavelse, én ad gangen."
    },
    {
      image: `${process.env.PUBLIC_URL}/images/instruction_pics/ins_2.png`,
      text: "Tryk på pil højre eller knappen 'Næste stavelse' for at gå til næste stavelse."
    },
    {
      image: `${process.env.PUBLIC_URL}/images/instruction_pics/ins_3.png`,
      text: "Brug pil venstre for at gå tilbage til forrige stavelse."
    },
    {
      image: `${process.env.PUBLIC_URL}/images/instruction_pics/ins_4.png`,
      text: "Start med niveau 1 og arbejd dig op gennem niveauerne."
    }
  ];

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(28, 63, 170, 0.15)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
      backdropFilter: 'blur(3px)'
    }}>
      <div style={{
        backgroundColor: 'white',
        padding: '2.5rem',
        borderRadius: '16px',
        maxWidth: '1200px',
        width: '90%',
        position: 'relative',
        boxShadow: '0 8px 24px rgba(28, 63, 170, 0.15)',
        border: '1px solid rgba(28, 63, 170, 0.1)'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            right: '1.2rem',
            top: '1.2rem',
            background: 'rgba(28, 63, 170, 0.1)',
            border: 'none',
            fontSize: '1.5rem',
            cursor: 'pointer',
            padding: '0.5rem',
            margin: 0
          }}
        >
          ×
        </button>

        <div style={{
          textAlign: 'center',
          marginBottom: '1.5rem'
        }}>
          <img 
            src={`${process.env.PUBLIC_URL}/images/logo/logo2_speech.png`}
            alt="STS Logo"
            style={{
              height: '60px',
              width: 'auto'
            }}
          />
        </div>

        <h2 style={{ 
          color: '#1c3faa', 
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          Sådan bruger du STS værktøjet
        </h2>
        
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          gap: '1.5rem',
          marginBottom: '2rem'
        }}>
          {instructions.map((instruction, index) => (
            <div 
              key={index}
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: '1rem'
              }}
            >
              <div style={{
                width: '200px',
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: '#f0f0f0',
                borderRadius: '12px',
                marginBottom: '1.5rem',
                padding: '1.5rem'
              }}>
                <img 
                  src={instruction.image}
                  alt={instruction.text}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>
              <div style={{
                fontSize: '1.2rem',
                lineHeight: '1.4'
              }}>
                <strong>{index + 1}.</strong> {instruction.text}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <button
            onClick={onClose}
            style={{
              backgroundColor: '#1c3faa',
              color: 'white',
              padding: '0.8rem 2rem',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              margin: 0
            }}
          >
            Forstået
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructionModal; 