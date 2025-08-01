//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (strand1, strand2) => {
  const len = strand1.length;
  if(len != strand2.length)
    throw new Error('strands must be of equal length');
  let hammingDistance = 0;
  for(let i = 0; i < len; i++) {
    if(strand1[i] != strand2[i])
      hammingDistance++;
  }
  return hammingDistance;
};
