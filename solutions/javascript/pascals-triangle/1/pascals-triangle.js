//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (number) => {
  return rowsAux(number, []);
};

const rowsAux = (number, result) => {
  if (number === 0)
    return result;
  if (result.length === 0)
    return rowsAux(number - 1, [[1]])
  
  let row = [1];
  for (let i = 1; i < result.at(-1).length; i++)
    row.push(result.at(-1)[i] + result.at(-1)[i-1]);
  row.push(1);
  result.push(row);
  return rowsAux(number - 1, result);
} 
