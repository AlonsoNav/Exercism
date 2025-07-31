//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const valid = (n) => {
  n = n.replace(/\s/g, '');
  const len = n.length;
  if(len <= 1 || !/^\d+$/.test(n))
    return false;
  let sum = 0, flag = false;
  for(let i = len - 1; i >= 0; i--){
    if(flag){
      const double = Number(n[i]) * 2;
      sum += double > 9 ? double - 9 : double;
    } else 
      sum += Number(n[i]);
    flag = !flag;
  }
  return sum % 10 === 0;
};
