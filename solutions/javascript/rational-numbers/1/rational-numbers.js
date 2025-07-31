//
// This is only a SKELETON file for the 'Rational Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const reduceRational = (a, b) => {
  const d = gcd(a, b);
  return [a / d, b / d];
}

const gcd = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

export class Rational {
  constructor(a, b) {
    if (b < 0) {
      a *= -1;
      b *= -1;
    }
    [a, b] = reduceRational(a, b);
    this.a = a;
    this.b = b;
  }

  add(n) {
    return new Rational(this.a * n.b + n.a * this.b, this.b * n.b);
  }

  sub(n) {
    return new Rational(this.a * n.b - n.a * this.b, this.b * n.b);
  }

  mul(n) {
    return new Rational(this.a * n.a, this.b * n.b);
  }

  div(n) {
    return new Rational(this.a * n.b, n.a * this.b);
  }

  abs() {
    return new Rational(Math.abs(this.a), Math.abs(this.b)); 
  }

  exprational(n) {
    return n < 0 ? new Rational(Math.pow(this.b, Math.abs(n)), Math.pow(this.a, Math.abs(n))) : new Rational(Math.pow(this.a, n), Math.pow(this.b, n));
  }

  expreal(n) {
    return Math.pow(Math.pow(n, this.a), 1 / this.b);
  }

  reduce() {
    return this; 
  }
}
