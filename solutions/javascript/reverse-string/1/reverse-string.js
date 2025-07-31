//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (sentence) => {
  let result = "";
  for(let i = sentence.length - 1; i >= 0; i--)
    result += sentence[i];
  return result;
};
