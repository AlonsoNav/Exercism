//
// This is only a SKELETON file for the 'Acronym' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const parse = (sentence) => {
  return Array.from(sentence.matchAll(/([a-zA-Z']+)?[a-zA-Z]+/g), match => match[0][0]).join("").toUpperCase();
};
