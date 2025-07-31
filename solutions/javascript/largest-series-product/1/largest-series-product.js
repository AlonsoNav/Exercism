//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const largestProduct = (series, span) => {
  const l = series.length;
  if(span > l)
    throw new Error('span must be smaller than string length');
  if(span < 0)
    throw new Error('span must not be negative');
  let result = 0;
  for(let i = 0; i + span <= l; i++) {
    let c_result = 1;
    for(let char of series.slice(i, i + span)) {
      if(isNaN(char))
        throw new Error('digits input must only contain digits');
      c_result *= Number(char);
    }
    result = c_result > result ? c_result : result;
  }
  return result;
};
