import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type HeaderProps = {
  primaryColor?: string;
};

const Header: React.FC<HeaderProps> = ({ primaryColor = '#5c8adc' }) => {
  const [logoError, setLogoError] = useState(false);
  
  const logoPath = `${process.env.PUBLIC_URL}/images/logo/logo2_speech.png`;

  return (
    <header
      style={{
        width: '100%',
        background: '#fff',
        position: 'sticky',
        top: 0,
        zIndex: 999,
        boxShadow: '0 4px 20px rgba(42, 57, 80, 0.08)',
        padding: '1.5rem 0',
        margin: 0,
        borderBottom: '1px solid rgba(42, 57, 80, 0.08)'
      }}
    >
      {/* Constrained inner container */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 2rem',
        }}
      >
        <Link to="/syllable-timed-speech" style={{ 
          display: 'flex', 
          alignItems: 'center', 
          textDecoration: 'none',
          transition: 'opacity 0.2s ease'
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          {!logoError ? (
            <img 
              src={logoPath}
              alt="Tal-i-Takt Logo" 
              style={{ 
                height: '60px',
                width: 'auto',
                marginRight: '1rem',
                objectFit: 'contain'
              }}
              onError={() => {
                console.error('Failed to load logo:', logoPath);
                setLogoError(true);
              }}
            />
          ) : (
            // Fallback text-only logo if image fails to load
            <div 
              style={{ 
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                marginRight: '1rem',
                fontSize: '2rem',
                color: primaryColor,
                fontWeight: 'bold'
              }}
            >
              T
            </div>
          )}
          <div style={{ 
            fontWeight: 'bold', 
            fontSize: '2rem', 
            color: '#2a3950', 
            fontFamily: 'Papyrus, fantasy',
            transition: 'color 0.2s ease'
          }}>
            Tal i Takt med STS
          </div>
        </Link>
        {/* Navigation links */}
        <nav style={{ display: 'flex', gap: '2rem' }}>
          <Link
            to="/about-stuttering"
            style={{ 
              textDecoration: 'none', 
              color: '#2a3950', 
              fontWeight: '500', 
              fontFamily: 'Arial, sans-serif', 
              fontSize: '1.4rem',
              transition: 'all 0.2s ease',
              padding: '0.5rem 1rem',
              borderRadius: '8px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(92, 138, 220, 0.1)';
              e.currentTarget.style.color = '#5c8adc';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#2a3950';
            }}
          >
            Information om stammen
          </Link>
          <Link
            to="/why-sts"
            style={{ 
              textDecoration: 'none', 
              color: '#2a3950', 
              fontWeight: '500', 
              fontFamily: 'Arial, sans-serif', 
              fontSize: '1.4rem',
              transition: 'all 0.2s ease',
              padding: '0.5rem 1rem',
              borderRadius: '8px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(92, 138, 220, 0.1)';
              e.currentTarget.style.color = '#5c8adc';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#2a3950';
            }}
          >
            Hvad er STS?
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

