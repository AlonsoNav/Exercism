//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const clean = (number) => {
  let cleaned_number = "";
  for(let char of number) {
    if(/^[0-9]$/.test(char))
      cleaned_number += char
    else if(/^[a-zA-Z]$/.test(char))
      throw new Error('Letters not permitted');
    else if(!"()-+ .".includes(char))
      throw new Error('Punctuations not permitted');
  }
  const l = cleaned_number.length;
  if(l < 10)
    throw new Error('Incorrect number of digits');
  if(l > 11)
    throw new Error('More than 11 digits');
  if(l === 11){
    if(cleaned_number[0] !== "1")
      throw new Error('11 digits must start with 1');
    cleaned_number = cleaned_number.slice(1);
  }
  if(cleaned_number[0] === "1")
    throw new Error('Area code cannot start with one');
  if(cleaned_number[0] === "0")
    throw new Error('Area code cannot start with zero');
  if(cleaned_number[3] === "1")
    throw new Error('Exchange code cannot start with one');
  if(cleaned_number[3] === "0")
    throw new Error('Exchange code cannot start with zero');
  return cleaned_number;
};
