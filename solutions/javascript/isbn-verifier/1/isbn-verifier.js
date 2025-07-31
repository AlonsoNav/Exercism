//
// This is only a SKELETON file for the 'ISBN Verifier' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isValid = (isbn) => {
  isbn = isbn.replace(/-/g, '');
  if(isbn.length !== 10)
    return false;
  let sum = Number(isbn[9]);
  if(!/\d/.test(isbn[9])) {
    if(isbn[9] === 'X')
      sum = 10;
    else
      return false;
  }
  for(let i = 0; i < isbn.length - 1; i++) {
    if(!/\d/.test(isbn[i]))
      return false;
    sum += Number(isbn[i]) * (10 - i);
  }
  return sum % 11 === 0;
};
