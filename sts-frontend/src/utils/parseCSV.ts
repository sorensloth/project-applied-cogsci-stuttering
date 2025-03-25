import Papa from 'papaparse';

export type WordData = {
  word: string;
  syllables: string[];
};

export type Sentence = {
  sentenceNumber: number;
  words: WordData[];
  flattenedSyllables: string[]; 
  mapping: { wordIndex: number; syllIndex: number }[];
};

export const loadSentencesFromCSV = (csvText: string): Sentence[] => {
  const parsed = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
  });

  const data = parsed.data as any[];

  // Group rows by sentence_number
  const sentenceMap: Record<number, WordData[]> = {};

  data.forEach(row => {
    const sentenceNum = parseInt(row.sentence_number || row.sentenceNumber);
    const word = row.word;
    const splitted = row.syllables.split('-');

    if (!sentenceMap[sentenceNum]) {
      sentenceMap[sentenceNum] = [];
    }

    sentenceMap[sentenceNum].push({
      word,
      syllables: splitted,
    });
  });

  // Build a final structure with a flattened list of syllables
  return Object.entries(sentenceMap).map(([num, words]) => {
    const flattenedSyllables: string[] = [];
    const mapping: { wordIndex: number; syllIndex: number }[] = [];

    words.forEach((w, wordIndex) => {
      w.syllables.forEach((syll, syllIndex) => {
        flattenedSyllables.push(syll);
        mapping.push({ wordIndex, syllIndex });
      });
    });

    return {
      sentenceNumber: parseInt(num),
      words,
      flattenedSyllables,
      mapping,
    };
  });
};

