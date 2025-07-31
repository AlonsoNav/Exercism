//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const OP = {
  'What is': '',
  'plus': '+', 
  'minus': '-',
  'multiplied by': '*',
  'divided by': '/',
  '?': ''
};

const notNumber = word => isNaN(Number(word));

export const answer = (problem) => {
  const operands = problem.replace(/What is|plus|minus|multiplied by|divided by|\?/g, word => OP[word]).split(' ').filter(Boolean);
  
  if(!operands.filter(notNumber).every(word => '+-*/'.includes(word)))
    throw new Error('Unknown operation');
  if(operands.length % 2 === 0 || 
     !operands.filter((_, i) => i % 2 !== 0).every(notNumber) || 
     operands.filter((_, i) => i % 2 === 0).some(notNumber))
    throw new Error('Syntax error');
  
  let result = Number(operands[0]);
  for(let i = 1; i < operands.length; i += 2)
      result = eval(`${result} ${operands[i]} ${Number(operands[i + 1])}`);
  return result;
};
