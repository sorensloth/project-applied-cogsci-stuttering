import Papa from 'papaparse';

export type WordData = {
  word: string;
  syllables: string[];
  class: string;
};

export type Sentence = {
  sentenceNumber: number;
  words: WordData[];
  flattenedSyllables: string[];
  mapping: { wordIndex: number; syllIndex: number }[];
  category: string;
  level: number;
};

export function loadSentencesFromCSV(csvText: string): Sentence[] {
  // Parse CSV using headers and skipping empty lines.
  const parsed = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
  });
  const data = parsed.data as any[];

  // Group rows by sentence_number.
  const sentenceMap: Record<number, { category: string; level: number; words: WordData[] }> = {};

  data.forEach(row => {
    // Make sure the CSV row contains the expected columns.
    // We use "sentence_number" exactly as it appears in your CSV.
    const sentenceNum = parseInt(row.sentence_number, 10);
    const word = row.word;
    const syllablesString = row.syllables;
    console.log("Full row is:", row);
    if (!row.syllables) {
      console.error("Missing syllables for row:", row);
      return;
    }
    const splitted = syllablesString.split('-');

    if (!sentenceMap[sentenceNum]) {
      sentenceMap[sentenceNum] = {
        category: row.Category, // Ensure the header matches exactly
        level: parseInt(row.Level, 10),
        words: [],
      };
    }

    sentenceMap[sentenceNum].words.push({
      word,
      syllables: splitted,
      class: row.class,
    });
  });

  // Convert the grouped rows into an array of Sentence objects.
  const sentences: Sentence[] = Object.entries(sentenceMap).map(([num, group]) => {
    const flattened: string[] = [];
    const mapping: { wordIndex: number; syllIndex: number }[] = [];

    group.words.forEach((w, wordIndex) => {
      w.syllables.forEach((syll, syllIndex) => {
        flattened.push(syll);
        mapping.push({ wordIndex, syllIndex });
      });
    });

    return {
      sentenceNumber: parseInt(num, 10),
      words: group.words,
      flattenedSyllables: flattened,
      mapping,
      category: group.category,
      level: group.level,
    };
  });

  return sentences;
}
