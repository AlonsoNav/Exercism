//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
  }

  get isEquilateral() {
    return this.isTriangle() && this.sides.every(n => n === this.sides[0]);
  }

  get isIsosceles() {
    return this.isTriangle() && (this.sides[0] === this.sides[1] || this.sides[0] === this.sides[2] || this.sides[2] === this.sides[1]);
  }

  get isScalene() {
    return this.isTriangle() && (new Set(this.sides)).size === this.sides.length;
  }

  isTriangle() {
    return this.sides.every(n => n > 0) && ((this.sides[0] + this.sides[1]) >= this.sides[2]) && ((this.sides[0] + this.sides[2]) >= this.sides[1]) && ((this.sides[2] + this.sides[1]) >= this.sides[0]);
  }
}
