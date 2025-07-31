//
// This is only a SKELETON file for the 'High Scores' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class HighScores {
  constructor(scores) {
    this._scores = scores;
    this._sortedScores = [...scores].sort((a, b) => b - a);
  }

  get scores() {
    return this._scores;
  }

  get latest() {
    return this._scores.at(-1);
  }

  get personalBest() {
    return this._sortedScores[0]
  }

  get personalTopThree() {
    return this._sortedScores.slice(0,3);
  }
}
