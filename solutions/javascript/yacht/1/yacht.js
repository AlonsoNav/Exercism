//
// This is only a SKELETON file for the 'Yacht' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const score = (dice, category) => {
  const categories = {
    'yacht': (d) => yacht(d),
    'ones': (d) => numbers(d, 1),
    'twos': (d) => numbers(d, 2),
    'threes': (d) => numbers(d, 3),
    'fours': (d) => numbers(d, 4),
    'fives': (d) => numbers(d, 5),
    'sixes': (d) => numbers(d, 6),
    'full house': (d) => fullHouse(d),
    'four of a kind': (d) => fourOfAKind(d),
    'little straight': (d) => littleStraight(d.sort((a, b) => a - b)),
    'big straight': (d) => bigStraight(d.sort((a, b) => a - b)),
    'choice': (d) => choice(d)
  };
  
  return categories[category](dice);
};

const yacht = (dice) => {
  for (let i = 1; i < dice.length; i++) {
    if (dice[i] !== dice[0])
      return 0;
  }
  return 50;
}

const numbers = (dice, number) => {
  let res = 0;
  for (const n of dice) {
    if (n === number)
      res += number;
  }
  return res;
}

const count = (dice) => {
  let c = {}; 
  for (const n of dice) 
    c[n] = (c[n] || 0) + 1;
  return c;
}

const fullHouse = (dice) => {
  const c = count(dice); 
  let values = Object.values(c);
  return (values.includes(2) && values.includes(3)) ? choice(dice) : 0;
}

const fourOfAKind = (dice) => {
  const c = count(dice); 
  return 4 * (Object.keys(c).find(key => c[key] > 3) || 0);
}

const isStraight = (dice) => {
  for (let i = 1; i < dice.length; i++) {
    if (dice[i] !== dice[i - 1] + 1)
      return false;
  }
  return true
}

const littleStraight = (dice) => {
  return isStraight(dice) && dice[0] === 1 ? 30 : 0;
}

const bigStraight = (dice) => {
  return isStraight(dice) && dice[0] === 2 ? 30 : 0;
}

const choice = (dice) => {
  let res = 0;
  for (const n of dice) 
    res += n;
  return res; 
}