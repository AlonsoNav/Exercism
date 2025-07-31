//
// This is only a SKELETON file for the 'Perfect Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const classify = (n) => {
  if(n <= 0)
    throw new Error('Classification is only possible for natural numbers.');
  let s = 1, i = 2, r = n % i, q = ~~(n / i);
  while(i <= q){
    if(r === 0)
      s += q != i ? q + i : q;
    r = n % ++i;
    q = ~~(n / i);
  }
  return s === n && n !== 1? 'perfect' : s > n ? 'abundant' : 'deficient';
};
