//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz"
  sentence = sentence.toLowerCase()
  return ALPHABET.split('').every(letter => sentence.includes(letter))
};
