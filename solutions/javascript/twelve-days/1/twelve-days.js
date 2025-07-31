//
// This is only a SKELETON file for the 'Twelve Days' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const gifts = [
  'and a Partridge in a Pear Tree',
  'two Turtle Doves',
  'three French Hens',
  'four Calling Birds',
  'five Gold Rings',
  'six Geese-a-Laying',
  'seven Swans-a-Swimming',
  'eight Maids-a-Milking',
  'nine Ladies Dancing',
  'ten Lords-a-Leaping',
  'eleven Pipers Piping',
  'twelve Drummers Drumming'
];

const ordinals = [
  'first',
  'second',
  'third',
  'fourth',
  'fifth',
  'sixth',
  'seventh',
  'eighth',
  'ninth',
  'tenth',
  'eleventh',
  'twelfth'
];

export const recite = (start, end = start) => {
  const verses = [];
  for (; start <= end; start++) {
    const current_gifts = gifts.slice(0, start).reverse();
    if (start == 1)
      current_gifts[0] = current_gifts[0].slice(4);
    const verse = `On the ${ordinals[start-1]} day of Christmas my true love gave to me: ${current_gifts.join(', ')}.\n`;
    verses.push(verse);
  }
  return verses.join('\n');
};
