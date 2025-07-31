//
// This is only a SKELETON file for the 'Series' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Series {
  constructor(series) {
    if(series === "")
      throw new Error('series cannot be empty');
    this.series = series;
  }

  slices(sliceLength) {
    const result = [], l = this.series.length;
    if(sliceLength > l)
      throw new Error('slice length cannot be greater than series length');
    if(sliceLength == 0)
      throw new Error('slice length cannot be zero');
    if(sliceLength < 0)
      throw new Error('slice length cannot be negative');
    for(let i = 0; i + sliceLength <= l; i++) {
      const row = [];
      for(const char of this.series.slice(i, i + sliceLength))
        row.push(Number(char));
      result.push(row);
    }
    return result;
  }
}
