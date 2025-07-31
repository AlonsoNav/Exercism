//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const OPERATIONS = ["plus", "minus", "multiplied by", "divided by"];

export const answer = (problem) => {
  if(!problem.startsWith("What is"))
    throw new Error("Unknown operation");
  problem = problem.slice(8, -1); // Delete What is and ?
  const phrasesToPreserve = ["multiplied by", "divided by"];
  const regex = new RegExp(`(${phrasesToPreserve.join("|")})|\\s+`, "g");
  const operands = problem.split(regex).filter(Boolean);
  if(operands[0] === undefined || (isNaN(operands[0]) && OPERATIONS.includes(operands[0])))
    throw new Error("Syntax error");
  else if(isNaN(operands[0]))
    throw new Error("Unknown operation");
  let result = Number(operands[0]);
  for(let i = 1; i < operands.length; i += 2) {
      if(OPERATIONS.includes(operands[i]) && (operands[i + 1] === undefined || isNaN(operands[i + 1])))
        throw new Error("Syntax error");
      const number = Number(operands[i + 1]);
      switch(operands[i]) {
          case "plus":
              result += number;
              break;
          case "minus":
              result -= number;
              break;
          case "multiplied by":
              result *= number;
              break;
          case "divided by":
              result /= number;
              break;
          default:
              if(isNaN(operands[i]))
                throw new Error("Unknown operation");
              else
                throw new Error("Syntax error");
      }
  }
  return result;
};
