//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(stringMatrix) {
    const stringRows = stringMatrix.split("\n");
    this._rows = [];
    this._columns = [];
    
    stringRows.forEach((row, index) => {
      row = row.split(" ");
      row = row.map((element, index) => {
        const intElement = parseInt(element);
        if(!this._columns[index])
          this._columns[index] = [];
        this._columns[index].push(intElement);
        return intElement;
      });
      this._rows.push(row);
    })
  }

  get rows() {
    return this._rows;
  }

  get columns() {
    return this._columns;
  }
}
