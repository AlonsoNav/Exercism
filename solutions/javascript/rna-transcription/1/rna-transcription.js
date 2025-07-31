//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const NUCLEOTIDE = {"G" : "C", "C": "G", "T": "A", "A": "U"}

export const toRna = (adn) => adn.replace(/A|C|G|T/gi, function(x) {
  return NUCLEOTIDE[x];
});
