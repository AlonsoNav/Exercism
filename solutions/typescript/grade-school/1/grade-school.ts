export class GradeSchool {
  private _roster: { [grade: number]: string[] } = {};

  roster(): { [grade: number]: string[] } {
    const copy: { [grade: number]: string[] } = {};
    for (const grade in this._roster)
      copy[grade] = [...this._roster[grade]];
    return copy;
  }

  add(name: string, grade: number) {
    for (const roster of Object.values(this._roster)) {
      let index = roster.indexOf(name);
      if (index !== -1) {
        roster.splice(index, 1);
        continue;
      }
    }
    if (this._roster[grade] === undefined) {
      this._roster[grade] = [];
    }
    this._roster[grade].push(name);
    this._roster[grade].sort();
  }

  grade(grade: number): string[] {
    return [...(this._roster[grade] || [])];
  }
}
