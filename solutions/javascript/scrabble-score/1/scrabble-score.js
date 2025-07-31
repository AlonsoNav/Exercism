//
// This is only a SKELETON file for the 'Scrabble Score' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (word) => {
  const scores = {1: "aeioulnrst", 2: "dg", 3: "bcmp", 4: "fhvwy", 5: "k", 8: "jx", 10: "qz"};
  let result = 0;
  word = word.toLowerCase();
  for(const char of word) {
    for (const [key, value] of Object.entries(scores)) {
      if (value.includes(char)) {
        result += parseInt(key);
        break;
      }
    }
  }
  return result;
};
