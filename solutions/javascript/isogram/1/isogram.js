//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isIsogram = (word) => {
  word = word.toLowerCase();
  const letters = [...word.matchAll(/[a-z]/g)];
  const lettersSet = new Set(letters.map(match => match[0]));
  return letters.length === lettersSet.size;
};
