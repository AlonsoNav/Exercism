//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const actions = [
  'wink',
  'double blink',
  'close your eyes',
  'jump'
]

export const commands = (number) => {
  const binary = number.toString(2).padStart(5, '0');
  const result = []
  for(let i = 0; i < 4; i++) {
    if(binary.charAt(4 - i) === '1')
      result.push(actions[i]);
  }
  if(binary.charAt(0) === '1')
    result.reverse();
  return result;
};
