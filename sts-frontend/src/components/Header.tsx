import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  primaryColor: string;
  accentColor: string;
  textColor: string;
}

const Header: React.FC<HeaderProps> = ({ primaryColor = '#1c3faa' }) => {
  return (
    <header
      style={{
        width: '100%',
        background: '#fff',
        position: 'sticky',
        top: 0,
        zIndex: 999,
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        padding: '1.5rem 0',
        margin: 0,
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
          padding: '0 1rem',
        }}
      >
        {/* "Tal i Takt" - Logo linking to the STS tool page */}
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: primaryColor }}>
          <Link to="/syllable-timed-speech" style={{ textDecoration: 'none', color: primaryColor }}>
            Tal i Takt
          </Link>
        </div>
        {/* Navigation links */}
        <nav style={{ display: 'flex', gap: '1.5rem' }}>
          <Link
            to="/about-stuttering"
            style={{ textDecoration: 'none', color: primaryColor, fontWeight: 'bold' }}
          >
            About Stuttering
          </Link>
          <Link
            to="/why-sts"
            style={{ textDecoration: 'none', color: primaryColor, fontWeight: 'bold' }}
          >
            Syllable-Timed Speech
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
