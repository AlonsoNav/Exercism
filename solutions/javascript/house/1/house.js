//
// This is only a SKELETON file for the 'House' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const verset = [
  ['This is the house that Jack built.',''],
  ['This is the malt','that lay in'],
  ['This is the rat','that ate'],
  ['This is the cat','that killed'],
  ['This is the dog','that worried'],
  ['This is the cow with the crumpled horn','that tossed'],
  ['This is the maiden all forlorn','that milked'],
  ['This is the man all tattered and torn','that kissed'],
  ['This is the priest all shaven and shorn','that married'],
  ['This is the rooster that crowed in the morn','that woke'],
  ['This is the farmer sowing his corn','that kept'],
  ['This is the horse and the hound and the horn','that belonged to']
];

export class House {
  static verse(number) {
    let res = [verset[--number][0]];
    let start = verset[number][1];
    while(number > 0) {
      res.push(start + (verset[--number][0]).slice(7));
      start = verset[number][1];
    }
    return res;
  }

  static verses(start, end) {
    let res = [];
    for(; start <= end; start++)
      res.push(...this.verse(start), '');
    return res.slice(0, -1);
  }
}
