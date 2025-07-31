//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (sentences) => {
  sentences = sentences.map(sentence => sentence.replace(/\s/g, '~'));
  const maxLength = Math.max(...sentences.map(sentence => sentence.length)), result = [];
  for(let i = 0; i < maxLength; i++) {
    let newSentence = '';
    for(const sentence of sentences) {
      newSentence += sentence[i] ?? ' ';
    }
    result.push(newSentence.trimEnd().replace(/~/g, ' '));
  }
  return result;
};
