//
// This is only a SKELETON file for the 'Spiral Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const spiralMatrix = (n) => {
  const matrix = Array.from({ length: n }, () => Array(n).fill(0));
  const op = [[0, 1], [1, 0], [0, -1], [-1, 0]]
  let row = 0, column = 0, value = 0, idxop = 0;
  while(value < Math.pow(n, 2)) {
    matrix[row][column] = ++value;
    const new_row = row + op[idxop][0], new_column = column + op[idxop][1];
    if(new_row >= 0 && new_row < n && new_column >= 0 && new_column < n && matrix[new_row][new_column] === 0) {
      row = new_row;
      column = new_column;
    } else {
      idxop = (idxop + 1) % 4;
      row += op[idxop][0];
      column += op[idxop][1];
    }
  }
  return matrix;
};
