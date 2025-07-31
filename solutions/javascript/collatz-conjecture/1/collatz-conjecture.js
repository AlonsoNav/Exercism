//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (n) => {
  if(n <= 0)
    throw new Error('Only positive numbers are allowed');
  let counter = 0
  while(true) {
    if(n === 1)
      break;
    counter++;
    if(n % 2 === 0)
      n /= 2;
    else
      n = 3 * n + 1;
  }
  return counter;
};
