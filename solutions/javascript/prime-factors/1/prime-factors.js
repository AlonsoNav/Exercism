//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primeFactors = (num) => {
  const factors = [];
  for(let i = 2; num >= 2;){
    if(num % i === 0){
      factors.push(i);
      num /= i;
    } else
      i++;
  }
  return factors;
};
