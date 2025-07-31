export class Matrix {
  private _rows: number[][] = [];
  private _columns: number[][] = [];

  constructor(matrix:string) {
    for (const line of matrix.split('\n')) {
      const row = [];
      for (const [i, ele] of line.split(' ').entries()) {
        row.push(Number(ele));
        if (this._columns[i] === undefined)
          this._columns[i] = [];
        this._columns[i].push(Number(ele));
      }
      this._rows.push(row);
    }
  }

  get rows(): number[][] {
    return this._rows;
  }

  get columns(): number[][] {
    return this._columns;
  }
}
