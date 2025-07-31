const alphabet = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 97));

export function isPangram(sentence: string): boolean {
  const sentenceSet = new Set(sentence.toLowerCase());
  for (const letter of alphabet) {
    if (!sentenceSet.has(letter))
      return false;
  }
  return true;
}
