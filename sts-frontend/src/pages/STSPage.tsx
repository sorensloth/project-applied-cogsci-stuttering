import React, { useEffect, useState } from 'react';
import { loadSentencesFromCSV, Sentence } from '../utils/parseCSV';
import SyllableStepper from '../components/SyllableStepper';
import InstructionModal from '../components/InstructionModal';

const STSPage: React.FC = () => {
  const [font, setFont] = useState<'lexend' | 'fredoka'>('lexend');
  const [allSentences, setAllSentences] = useState<Sentence[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categorySentences, setCategorySentences] = useState<Sentence[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    {
      id: 'SportAndPlay',
      name: 'Sport & Leg',
      image: `${process.env.PUBLIC_URL}/images/sports.png`
    },
    {
      id: 'Food',
      name: 'Mad',
      image: `${process.env.PUBLIC_URL}/images/mad.png`
    },
    {
      id: 'Animals',
      name: 'Dyr',
      image: `${process.env.PUBLIC_URL}/images/dyr.png`
    },
    {
      id: 'Weather',
      name: 'Vejr',
      image: `${process.env.PUBLIC_URL}/images/vejr.png`
    }
  ];

  // Load CSV once
  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/60_STS_Practice_Sentences.csv`)
      .then((r) => {
        if (!r.ok) {
          throw new Error(`Failed to fetch CSV: ${r.status} ${r.statusText}`);
        }
        return r.text();
      })
      .then((text) => {
        const sentences = loadSentencesFromCSV(text);
        setAllSentences(sentences);
      })
      .catch((error) => {
        console.error("Error loading CSV:", error);
      });
  }, []);

  const handleCategorySelect = (cat: string) => {
    setSelectedCategory(cat);
    setIsModalOpen(true);
    // Filter by chosen category
    let filtered = allSentences.filter((s) => s.category === cat);
    // Sort by level ascending, then by sentenceNumber
    filtered = filtered.sort((a, b) => {
      if (a.level !== b.level) return a.level - b.level;
      return a.sentenceNumber - b.sentenceNumber;
    });
    setCategorySentences(filtered);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setCategorySentences([]);
  };

  const toggleFont = () => {
    setFont((prev) => (prev === 'lexend' ? 'fredoka' : 'lexend'));
  };

  // Show category selection if none chosen yet
  if (!selectedCategory) {
    return (
      <div
        className={font === 'lexend' ? 'lexend-font' : 'fredoka-font'}
        style={{ textAlign: 'center', padding: '2rem' }}
      >
        <h1 style={{ marginBottom: '2rem' }}>Vælg en kategori</h1>
        
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2rem',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => handleCategorySelect(category.id)}
              className="category-card"
            >
              <img
                src={category.image}
                alt={category.name}
                style={{
                  width: '120px',
                  height: '120px',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />
              <button
                style={{
                  margin: 0,
                  background: '#5c8adc',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.8rem 1.5rem',
                  fontSize: '1.1rem',
                  cursor: 'pointer',
                  width: '100%',
                  maxWidth: '200px'
                }}
              >
                {category.name}
              </button>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '4rem' }}>
          <button
            onClick={toggleFont}
            style={{
              color: '#5c8adc',
              margin: 0,
              padding: '0.6rem 1.2rem',
              background: '#f0f0f0',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '1.8rem'
            }}
          >
            Skrifttype: {font === 'lexend' ? 'Fredoka' : 'Lexend'}
          </button>
        </div>

        <InstructionModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    );
  }

  if (categorySentences.length === 0) {
    return <p style={{ textAlign: 'center' }}>Loading sentences...</p>;
  }

  return (
    <div
      className={font === 'lexend' ? 'lexend-font' : 'fredoka-font'}
      style={{ textAlign: 'center', minHeight: '100vh', padding: '2rem' }}
    >
      <SyllableStepper
        sentences={categorySentences}
        selectedCategory={selectedCategory}
        onBackToCategories={handleBackToCategories}
        onOpenInstructions={() => setIsModalOpen(true)}
      />
      <InstructionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default STSPage;


