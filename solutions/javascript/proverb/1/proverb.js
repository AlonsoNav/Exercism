//
// This is only a SKELETON file for the 'Proverb' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const proverb = (...items) => {
  const qualifier = typeof items.at(-1) === 'object';
  if(items.length === 0)
    return '';
  let res = '';
  const stop = qualifier ? items.length - 1 : items.length;
  for(let i = 1; i < stop; i++) 
    res += `For want of a ${items[i-1]} the ${items[i]} was lost.\n` ;
  if(qualifier)
    return res + `And all for the want of a ${items.at(-1).qualifier} ${items[0]}.`;
  return res + `And all for the want of a ${items[0]}.`;
};
