export function count(matrix) {
  let rectangles = 0;

  for (let i = 0; i < matrix.length; i++) {
    const plusPos = [...matrix[i]].map((c, i) => (c === '+' ? i : -1)).filter(i => i !== -1);

    for (let j = 0; j < plusPos.length; j++) {
      for (let k = j + 1; k < plusPos.length; k++) {
        if (!matrix[i].slice(plusPos[j] + 1, plusPos[k]).split('').every(c => c !== ' ')) continue;
        for (let l = i + 1; l < matrix.length; l++) {
          const first = matrix[l][plusPos[j]], last = matrix[l][plusPos[k]];

          if (first === '+' && last === '+' && matrix[l].slice(plusPos[j] + 1, plusPos[k]).split('').every(c => c !== ' ')){
            rectangles++;
          }
          else if ((first !== '|' && first !== '+') || (last !== '|' && last !== '+'))
            break;
        }
      }
    }
  }

  return rectangles;
}
