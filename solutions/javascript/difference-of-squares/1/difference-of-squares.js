//
// This is only a SKELETON file for the 'Difference Of Squares' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Squares {
  constructor(num) {
    this.num = num;
  }

  get sumOfSquares() {
    let sum = 0;
    for(let i = this.num; i > 0; i--)
      sum += Math.pow(i, 2);
    return sum;
  }

  get squareOfSum() {
    let sum = 0;
    for(let i = this.num; i > 0; i--)
      sum += i;
    return Math.pow(sum, 2);
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
