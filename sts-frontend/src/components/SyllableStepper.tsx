import React, { useEffect, useState } from 'react';
import { Sentence } from '../utils/parseCSV';
import { motion, AnimatePresence } from 'framer-motion';

interface SyllableStepperProps {
  sentences: Sentence[];
  selectedCategory: string;
  onBackToCategories: () => void; // callback to go back
  onOpenInstructions: () => void;  // Add this prop
}

const SyllableStepper: React.FC<SyllableStepperProps> = ({
  sentences,
  selectedCategory,
  onBackToCategories,
  onOpenInstructions,
}) => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentSyllableIndex, setCurrentSyllableIndex] = useState(0);
  const [showSyllableBox, setShowSyllableBox] = useState(true);

  // Go forward one syllable (or next sentence)
  const nextSyllable = () => {
    const current = sentences[currentSentenceIndex];
    if (!current) return;

    if (currentSyllableIndex < current.flattenedSyllables.length - 1) {
      setCurrentSyllableIndex((prev) => prev + 1);
    } else {
      // Next sentence if available
      if (currentSentenceIndex < sentences.length - 1) {
        setCurrentSentenceIndex((prev) => prev + 1);
        setCurrentSyllableIndex(0);
      }
    }
  };

  // Go backward one syllable (no crossing sentence boundaries)
  const prevSyllable = () => {
    if (currentSyllableIndex > 0) {
      setCurrentSyllableIndex((prev) => prev - 1);
    }
  };

  // Add event listeners for keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextSyllable();
      } else if (e.key === 'ArrowLeft') {
        prevSyllable();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSyllable, prevSyllable]);

  if (sentences.length === 0) {
    return <p>Loading sentences...</p>;
  }

  const currentSentence = sentences[currentSentenceIndex];
  const currentSyllable = currentSentence.flattenedSyllables[currentSyllableIndex];
  const totalSyllables = currentSentence.flattenedSyllables.length;

  // We'll highlight the entire sentence, only the current syllable is bold black
  // completed syllables in green, future in dark gray
  const sentenceDisplay = currentSentence.words.map((wordData, wIdx) => {
    const { word, syllables } = wordData;

    // Calculate how many syllables come before this word to find global indices
    const syllablesBeforeThisWord = currentSentence.words
      .slice(0, wIdx)
      .reduce((acc, wd) => acc + wd.syllables.length, 0);

    // Build a <span> array for each syllable
    const partedWord = syllables.map((syll, i) => {
      const globalSyllIndex = syllablesBeforeThisWord + i;

      if (globalSyllIndex < currentSyllableIndex) {
        // Completed syllables
        return (
          <span className="syllable" style={{ color: 'green' }} key={i}>
            {syll}
          </span>
        );
      } else if (globalSyllIndex === currentSyllableIndex) {
        // Current syllable
        return (
          <span className="syllable" style={{ fontWeight: 'bold', color: '#000' }} key={i}>
            {syll}
          </span>
        );
      } else {
        // Future syllables
        return (
          <span className="syllable" style={{ color: 'rgba(0,0,0,0.5)' }} key={i}>
            {syll}
          </span>
        );
      }
    });

    // Combine partedWord array into a single "word" visually
    return (
      <span key={wIdx} style={{ marginRight: '0.7rem' }}>
        {partedWord}
      </span>
    );
  });

  // For the progress bar
  const progressRatio = (currentSyllableIndex + 1) / totalSyllables;

  let categoryName = '';
  if (selectedCategory === 'SportAndPlay') {
    categoryName = 'Sport & Leg';
  } else if (selectedCategory === 'Food') {
    categoryName = 'Mad';
  } else if (selectedCategory === 'Animals') {
    categoryName = 'Dyr';
  } else if (selectedCategory === 'Weather') {
    categoryName = 'Vejr';
  }

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      {/* Navigation buttons container */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '1rem'
      }}>
        {/* Back button */}
        <button
          onClick={onBackToCategories}
          style={{
            padding: '0.5rem 1rem',
            margin: 0,
            background: 'rgba(92, 138, 220, 0.1)',
            border: '1px solid rgba(92, 138, 220, 0.2)',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            fontSize: '1.5rem',
            color: '#5c8adc',
            boxShadow: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          ← Tilbage
        </button>

        {/* Info button */}
        <button
          onClick={onOpenInstructions}
          style={{
            padding: '0.5rem 1rem',
            margin: 0,
            background: 'rgba(92, 138, 220, 0.1)',
            border: '1px solid rgba(92, 138, 220, 0.2)',
            borderRadius: '0.5rem',
            cursor: 'pointer',
            fontSize: '1.5rem',
            color: '#5c8adc',
            boxShadow: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <span style={{ fontSize: '1.2rem' }}>ℹ️</span>
          Instruktioner
        </button>
      </div>

      <h2 style={{ marginBottom: '1rem' }}>
        Kategori: {categoryName} | Niveau af sværhedsgrad: {currentSentence.level}
      </h2>

       {/* Full sentence display */}
      <div style={{ marginBottom: '2rem', fontSize: '2.5rem', marginTop: '4rem' }}>{sentenceDisplay}</div>

      {/* Progress Bar */}
      <div
        style={{
          width: '30%',
          height: '6px',
          background: '#ddd',
          borderRadius: '3px',
          margin: '1rem auto',
          marginBottom: '1rem',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: `${progressRatio * 100}%`,
            height: '100%',
            background: '#4caf50',
            transition: 'width 0.3s ease',
          }}
        />
      </div>

      {/* Syllable counter */}
      <p style={{ marginBottom: '2rem', fontSize: '1.3rem' }}>
        Stavelse {currentSyllableIndex + 1} ud af {totalSyllables}
      </p>

      {/* Syllable box or reopen button */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '150px' }}>
        {showSyllableBox ? (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSyllable}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.05 }}
              className="lined-paper-box"
              style={{
                width: '20%',
                maxWidth: '200px',
              }}
            >
              <button
                className="close-button"
                onClick={() => setShowSyllableBox(false)}
                aria-label="Close syllable box"
              >
                ×
              </button>
              <span style={{ fontSize: '4rem'}}>
                {currentSyllable}
              </span>
            </motion.div>
          </AnimatePresence>
        ) : (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setShowSyllableBox(true)}
            style={{
              marginTop: 0,
              padding: '0.5rem 1rem',
              fontSize: '1rem',
              background: '#f0f8ff',
              color: '#1c3faa',
              border: '1px solid #1c3faa',
              borderRadius: '0.5rem',
              cursor: 'pointer',
            }}
          >
            Vis stavelse
          </motion.button>
        )}
      </div>

      {/* Next Syllable Button */}
      <button
        onClick={nextSyllable}
        style={{
          marginTop: '2rem',
          padding: '1rem 2rem',
          fontSize: '1.5rem',
          background: '#1c3faa',
          color: 'white',
          border: 'none',
          borderRadius: '1rem',
          cursor: 'pointer',
        }}
      >
        Næste stavelse
      </button>
    </div>
  );
};

export default SyllableStepper;





