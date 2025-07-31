//
// This is only a SKELETON file for the 'OCR Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const convert = (sentence) => {
  const numbers = [
    ' _ | ||_|   ',
    '     |  |   ',
    ' _  _||_    ',
    ' _  _| _|   ',
    '   |_|  |   ',
    ' _ |_  _|   ',
    ' _ |_ |_|   ',
    ' _   |  |   ',
    ' _ |_||_|   ',
    ' _ |_| _|   '
  ], result = [];
  sentence = sentence.split("\n");
  for(let i = 0; i < sentence.length; i += 4) {
    let current = "";
    for(let j = 0; j < sentence[i].length; j += 3) {
      let number = "";
      for(let k = i; k < i + 4; k++) 
        number += sentence[k].slice(j, j + 3);
      let idx = numbers.indexOf(number);
      current += idx != -1 ? idx.toString() : '?';
    }
    result.push(current);
  }
  return result.join(',');
};
