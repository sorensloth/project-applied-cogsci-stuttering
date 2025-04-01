import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutStuttering from './pages/AboutStuttering';
import WhySTS from './pages/WhySTS';
import STSPage from './pages/STSPage';

const App = () => {
  return (
    <Router>
      {/* Full-width header */}
      <Header />

      {/* This container is for page content, so it doesn't constrain the header */}
      <div style={{ margin: 0, padding: 0, minHeight: '100vh' }}>
        <Routes>
          <Route path="/syllable-timed-speech" element={<STSPage />} />
          <Route path="/about-stuttering" element={<AboutStuttering />} />
          <Route path="/why-sts" element={<WhySTS />} />
          {/* Default route - choose whichever page you like */}
          <Route path="/" element={<AboutStuttering />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


