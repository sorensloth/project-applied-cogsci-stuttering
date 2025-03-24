import React, { useEffect, useState } from 'react';
import { loadSentencesFromCSV, Sentence } from '../utils/parseCSV';
import { motion, AnimatePresence } from 'framer-motion';


const SyllableStepper: React.FC = () => {
  const [sentences, setSentences] = useState<Sentence[]>([]);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentSyllableIndex, setCurrentSyllableIndex] = useState(0);

  useEffect(() => {
    fetch('/STS_practice_sentences.csv')
      .then(res => res.text())
      .then(text => {
        const result = loadSentencesFromCSV(text);
        setSentences(result);
      });
  }, []);

  const nextSyllable = () => {
    const current = sentences[currentSentenceIndex];
    if (!current) return;

    if (currentSyllableIndex < current.syllables.length - 1) {
      setCurrentSyllableIndex(prev => prev + 1);
    } else if (currentSentenceIndex < sentences.length - 1) {
      setCurrentSentenceIndex(prev => prev + 1);
      setCurrentSyllableIndex(0);
    }
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        nextSyllable();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [sentences, currentSentenceIndex, currentSyllableIndex]);

  if (sentences.length === 0) return <p>Loading sentences...</p>;

  const current = sentences[currentSentenceIndex];
  const syllable = current.syllables[currentSyllableIndex];

  return (
    <div style={{ textAlign: 'center' }}>
      <p className="syllable-count">
        Syllable {currentSyllableIndex + 1} of {current.syllables.length}
      </p>
  
      {/* Progress Bar */}
      <div style={{
        width: '80%',
        height: '10px',
        background: '#ddd',
        borderRadius: '5px',
        margin: '1rem auto',
        overflow: 'hidden'
      }}>
        <div style={{
          width: `${((currentSyllableIndex + 1) / current.syllables.length) * 100}%`,
          height: '100%',
          background: '#4caf50',
          transition: 'width 0.3s ease'
        }}></div>
      </div>
  
      {/* Syllable + Button Wrapper */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Animated Syllable Box */}
        <AnimatePresence mode="wait">
          <motion.div
            key={syllable}
            className="syllable-box"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '120px',
              minWidth: '250px',
              textAlign: 'center'
            }}
          >
            {syllable}
          </motion.div>
        </AnimatePresence>
  
        {/* Restart Button */}
        <button
          style={{
            marginTop: '2rem',
            padding: '1rem 2rem',
            fontSize: '1rem',
            background: '#1c3faa',
            color: 'white',
            border: 'none',
            borderRadius: '1rem',
            cursor: 'pointer',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)'
          }}
          onClick={() => setCurrentSyllableIndex(0)}
        >
          🔁 Restart Sentence
        </button>
      </div>
    </div>
  );  
  
};

export default SyllableStepper;
