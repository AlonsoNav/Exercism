//
// This is only a SKELETON file for the 'Food Chain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const verset = [
  [`fly.
I don't know why she swallowed the fly. Perhaps she'll die.
`, `fly.
I don't know why she swallowed the fly. Perhaps she'll die.
`],
  [`spider.
It wriggled and jiggled and tickled inside her.
She swallowed the spider to catch the `, `spider that wriggled and jiggled and tickled inside her.
She swallowed the spider to catch the `],
  [`bird.
How absurd to swallow a bird!
She swallowed the bird to catch the `, `bird.
She swallowed the bird to catch the `],
  [`cat.
Imagine that, to swallow a cat!
She swallowed the cat to catch the `, `cat.
She swallowed the cat to catch the `],
  [`dog.
What a hog, to swallow a dog!
She swallowed the dog to catch the `, `dog.
She swallowed the dog to catch the `],
  [`goat.
Just opened her throat and swallowed a goat!
She swallowed the goat to catch the `, `goat.
She swallowed the goat to catch the `],
  [`cow.
I don't know how she swallowed a cow!
She swallowed the cow to catch the `, `cow.
She swallowed the cow to catch the `],
  [`horse.
She's dead, of course!
`]
];

export class Song {
  verse(number) {
    let result = `I know an old lady who swallowed a ${verset[number-1][0]}`;
    if(number === 8)
      return result;
    const key = number > 2 ? 1 : 0;
    for(let i = number - 2; i >= 0; i--) 
      result += verset[i][key];
    return result;
  }

  verses(start, end) {
    let result = '';
    for(; start <= end; start++) 
      result += `${this.verse(start)}\n`;
    return result;
  }
}
