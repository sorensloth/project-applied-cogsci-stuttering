import React, { useEffect, useState } from 'react';
import { loadSentencesFromCSV, Sentence } from '../utils/parseCSV';
import { motion, AnimatePresence } from 'framer-motion';

const SyllableStepper: React.FC = () => {
  const [sentences, setSentences] = useState<Sentence[]>([]);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [currentSyllableIndex, setCurrentSyllableIndex] = useState(0);

  // Load CSV once
  useEffect(() => {
    fetch('/STS_practice_sentences.csv')
      .then(res => res.text())
      .then(text => {
        const result = loadSentencesFromCSV(text);
        setSentences(result);
      });
  }, []);

  // Moves to the next syllable (or next sentence if at end)
  const nextSyllable = () => {
    const sentence = sentences[currentSentenceIndex];
    if (!sentence) return;

    if (currentSyllableIndex < sentence.flattenedSyllables.length - 1) {
      setCurrentSyllableIndex(prev => prev + 1);
    } else if (currentSentenceIndex < sentences.length - 1) {
      // Move to next sentence, start at syllable 0
      setCurrentSentenceIndex(prev => prev + 1);
      setCurrentSyllableIndex(0);
    }
  };

  // Moves one syllable back (no crossing into previous sentence)
  const prevSyllable = () => {
    if (currentSyllableIndex > 0) {
      setCurrentSyllableIndex(prev => prev - 1);
    }
    // If you'd like to jump to the previous sentence's last syllable, 
    // you could do that here instead.
  };

  // Handle keyboard input
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      // Right Arrow or Space = next
      if (e.code === 'ArrowRight' || e.code === 'Space') {
        e.preventDefault();
        nextSyllable();
      }
      // Left Arrow = previous
      else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        prevSyllable();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [sentences, currentSentenceIndex, currentSyllableIndex]);

  if (sentences.length === 0) {
    return <p>Loading sentences...</p>;
  }

  const currentSentence = sentences[currentSentenceIndex];
  const totalSyllables = currentSentence.flattenedSyllables.length;
  const currentSyllable = currentSentence.flattenedSyllables[currentSyllableIndex];

  // Identify which word & syllable is current
  const { wordIndex: currentWordIndex, syllIndex: currentWordSyllIndex } =
    currentSentence.mapping[currentSyllableIndex];

  // Build the entire sentence display
  const sentenceDisplay = currentSentence.words.map((wordData, wIdx) => {
    const { word, syllables } = wordData;
    const syllablesBeforeThisWord = currentSentence.words
      .slice(0, wIdx)
      .reduce((acc, wd) => acc + wd.syllables.length, 0);

    // Render each syllable in the word with color logic
    const partedWord = syllables.map((syll, i) => {
      const globalSyllIndex = syllablesBeforeThisWord + i;
      if (globalSyllIndex < currentSyllableIndex) {
        // Completed syllable
        return (
          <span style={{ color: 'green' }} key={i}>
            {syll}
          </span>
        );
      } else if (globalSyllIndex === currentSyllableIndex) {
        // Current syllable
        return (
          <span style={{ fontWeight: 'bold', color: '#000' }} key={i}>
            {syll}
          </span>
        );
      } else {
        // Future syllable
        return (
          <span style={{ color: 'rgba(0,0,0,0.5)' }} key={i}>
            {syll}
          </span>
        );
      }
    });

    // Join the syllables so they appear as a single word (with no space/hyphen in between)
    return (
      <span key={wIdx} style={{ marginRight: '0.7rem' }}>
        {partedWord}
      </span>
    );
  });

  // Progress bar ratio
  const progressRatio = (currentSyllableIndex + 1) / totalSyllables;

  return (
    <div style={{ textAlign: 'center' }}>
      {/* Syllable Count */}
      <p style={{ marginBottom: '0.5rem' }}>
        Syllable {currentSyllableIndex + 1} of {totalSyllables}
      </p>

      {/* Progress Bar */}
      <div
        style={{
          width: '80%',
          height: '10px',
          background: '#ddd',
          borderRadius: '5px',
          margin: '1rem auto',
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

      {/* Display the entire sentence as normal words */}
      <div style={{ marginBottom: '2rem', fontSize: '1.5rem' }}>
        {sentenceDisplay}
      </div>

      {/* Animated Syllable Box (still showing the current syllable) */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSyllable}
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
              textAlign: 'center',
            }}
          >
            {currentSyllable}
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
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
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



