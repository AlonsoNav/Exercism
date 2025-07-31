//
// This is only a SKELETON file for the 'Scale Generator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const sharp = ["G", "D", "A", "E", "B", "F#", "e", "b", "f#", "c#", "g#", "d#", "C", "a"], flat = ["F", "Bb", "Eb", "Ab", "Db", "Gb", "d", "g", "c", "f", "bb", "eb"];

const s_chromatic = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"], f_chromatic = ["A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"];

export class Scale {
  constructor(tonic) {
    this.tonic = tonic;
    if(sharp.includes(tonic)){
      tonic = tonic.toUpperCase();
      const i = s_chromatic.indexOf(tonic);
      this._chromatic = s_chromatic.slice(i).concat(s_chromatic.slice(0, i));
    } else {
      tonic = tonic[0].toUpperCase() + tonic.slice(1);
      const i = f_chromatic.indexOf(tonic);
      this._chromatic = f_chromatic.slice(i).concat(f_chromatic.slice(0, i));
    }
  }

  chromatic() {
    return this._chromatic;
  }

  interval(intervals) {
    const result = [];
    let i = 0;
    for(let char of intervals) {
      result.push(this._chromatic[i]);
      i += char === "A" ? 3 : char === "M" ? 2 : 1;
    }
    result.push(this._chromatic[0]);
    return result;
  }
}
