//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPaired = (sentence) => {
  const stack = [];
  for(let char of sentence){
    if((char === "]" && stack.at(-1) === "[") || (char === "}" && stack.at(-1) === "{") || (char === ")" && stack.at(-1) === "("))
      stack.pop();
    else if("{[(".includes(char))
      stack.push(char);
    else if("}])".includes(char))
      return false;
  }
  return stack.length === 0;
};
