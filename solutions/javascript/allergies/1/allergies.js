//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const allergies = ["eggs", "peanuts", "shellfish", "strawberries", "tomatoes", "chocolate", "pollen", "cats"];

export class Allergies {
  constructor(result) {
    this.result = result;
  }

  list() {
    return allergies.filter(allergy => this.allergicTo(allergy));
  }

  allergicTo(allergy) {
    return (this.result & (1 << allergies.indexOf(allergy))) !== 0;
  }
}
