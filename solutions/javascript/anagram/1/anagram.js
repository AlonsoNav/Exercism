//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const findAnagrams = (word, candidates) => {
  word = word.toLowerCase();
  const set = [];
  for(let candidate of candidates) {
    const candidateLower = candidate.toLowerCase();
    if(candidateLower != word && candidate.length == word.length && isAnagram(candidateLower, word))
      set.push(candidate);
  }
  return set;
};

const isAnagram = (w1, w2) => {
  const frecuencies = {};
  for(const char of w1)
    frecuencies[char] = (frecuencies[char] || 0) + 1;
  for(const char of w2){
    if (!frecuencies[char]) return false;
    frecuencies[char]--;
  }
  return Object.values(frecuencies).every(count => count === 0);
}
