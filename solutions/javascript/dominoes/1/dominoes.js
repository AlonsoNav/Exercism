//
// This is only a SKELETON file for the 'Dominoes' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const chain = (dominoes) => {
  if (dominoes.length === 0)
    return [];
  if (dominoes.length === 1) 
    return dominoes[0][0] === dominoes[0][1] ? dominoes : null;

  for (const [i, domino] of dominoes.entries()) {
    const sliced = dominoes.slice(0, i).concat(dominoes.slice(i+1));
    let result = recursiveChain(sliced, [domino]);
    if (result)
      return result;
    result = recursiveChain(sliced, [[domino[1], domino[0]]]);
    if (result)
      return result;
  }
  return null;
};

const recursiveChain = (dominoes, res) => {
  const last = res.at(-1)[1];
  if (dominoes.length === 0)
    return res[0][0] === last ? res : null;

  for (const [i, domino] of dominoes.entries()) {
    let result = null;
    if (last === domino[0])
      result = recursiveChain(dominoes.slice(0, i).concat(dominoes.slice(i+1)), [...res, domino]);
    if (result)
      return result;
    if (last === domino[1])
      result = recursiveChain(dominoes.slice(0, i).concat(dominoes.slice(i+1)), [...res, [domino[1], domino[0]]]);
    if (result)
      return result;
  }

  return null;
}
