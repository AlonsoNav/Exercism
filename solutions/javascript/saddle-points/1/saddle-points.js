//
// This is only a SKELETON file for the 'Saddle Points' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const saddlePoints = (matrix) => {
  const result = [];
  const mins = matrix[0].map((_, ci) => 
    Math.min(...matrix.map(r => r[ci]))
  );
  matrix.forEach((row, ri) => {
    const max = Math.max(...row);
    for(const [ci, value] of row.entries())
      if(value === max && value === mins[ci])
        result.push({row: ri + 1, column: ci + 1});
  });
  return result;
};
