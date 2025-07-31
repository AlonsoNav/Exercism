//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transform = (legacy) => {
  const newStore = {};
  for(const [key, value] of Object.entries(legacy)) {
    value.forEach(letter => {
      newStore[letter.toLowerCase()] = Number(key);
    });
  }
  return newStore;
};
