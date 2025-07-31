//
// This is only a SKELETON file for the 'Resistor Color Trio' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const colorValues = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9
};

export class ResistorColorTrio {
  constructor(colors) {
    if (!colors.every(color => color in colorValues)) {
      throw new Error('invalid color');
    }
    
    const multiplier = 10 ** colorValues[colors[2]];
    this.value = colorValues[colors[0]] * (multiplier * 10) + colorValues[colors[1]] * multiplier;
    
    if (this.value >= 1000) {
      this.value /= 1000;
      this.unit = 'kiloohms';
    }
    else {
      this.unit = 'ohms';
    }

    this.label = `Resistor value: ${this.value} ${this.unit}`;
  }

  label() {
    return this.label;
  }
}
