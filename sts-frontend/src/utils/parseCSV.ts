import Papa from 'papaparse';

export type Sentence = {
  sentenceNumber: number;
  syllables: string[];
};

export const loadSentencesFromCSV = (csvText: string): Sentence[] => {
  const parsed = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
  });

  const data = parsed.data as any[];

  const sentenceMap: Record<number, string[]> = {};

  data.forEach(row => {
    const sentenceNum = parseInt(row.sentence_number || row.sentenceNumber);
    const syllables = row.syllables.split('-');

    if (!sentenceMap[sentenceNum]) {
      sentenceMap[sentenceNum] = [];
    }

    sentenceMap[sentenceNum].push(...syllables);
  });

  return Object.entries(sentenceMap).map(([num, syllables]) => ({
    sentenceNumber: parseInt(num),
    syllables,
  }));
};
