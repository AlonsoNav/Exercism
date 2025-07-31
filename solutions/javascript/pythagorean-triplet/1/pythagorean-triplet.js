export function triplets({ minFactor = 3, maxFactor = null, sum }) {
  if (!maxFactor) maxFactor = sum >> 1;

  const result = [];

  for (let a = minFactor; a < maxFactor - 1; a++) {
    for (let b = a + 1; b < maxFactor; b++) {
      const c = sum - a - b;
      if (c <= b || c > maxFactor) continue;

      if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2))
        result.push(new Triplet(a, b, c));
    }
  }

  return result;
}

class Triplet {
  constructor(a, b, c) {
    this._triplet = [a, b, c];
  }

  toArray() {
    return this._triplet;
  }
}