const translationTable: Record<'G' | 'C' | 'T' | 'A', string> = {
  'G': 'C',
  'C': 'G',
  'T': 'A',
  'A': 'U'
};

export function toRna(dna: string): string {
  let res = '';
  for (const char of dna) {
    if (!(char in translationTable))
      throw new Error('Invalid input DNA.');
    res += translationTable[char as keyof typeof translationTable];
  }
  return res;
}
