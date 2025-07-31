//
// This is only a SKELETON file for the 'Complex Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class ComplexNumber {
  constructor(a, b) {
    this._real = a;
    this._imag = b;
  }

  get real() {
    return this._real;
  }

  get imag() {
    return this._imag;
  }

  add(n) {
    return new ComplexNumber(this.real + n.real, this.imag + n.imag);
  }

  sub(n) {
    return new ComplexNumber(this.real - n.real, this.imag - n.imag);
  }

  div(n) {
    const [a, b, c, d] = [this.real, this.imag, n.real, n.imag], divisor = Math.pow(c, 2) + Math.pow(d, 2);
    return new ComplexNumber((a * c + b * d) / divisor, (b * c - a * d) / divisor);
  }

  mul(n) {
    const [a, b, c, d] = [this.real, this.imag, n.real, n.imag];
    return new ComplexNumber(a * c - b * d, b * c + a * d);
  }

  get abs() {
    return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imag, 2));
  }

  get conj() {
    return new ComplexNumber(this.real, this.imag > 0 ? -this.imag : this.imag);
  }

  get exp() {
    const e = Math.exp(this.real);
    return new ComplexNumber(e * Math.cos(this.imag), e * Math.sin(this.imag));
  }
}
