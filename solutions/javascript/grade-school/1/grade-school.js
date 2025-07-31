//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  constructor() {
    this.roster_ = {};
  }
  
  roster() {
    const rosterCopy = {};
    for(const grade in this.roster_)
      rosterCopy[grade] = [...this.roster_[grade]];
    return rosterCopy;
  }

  add(student, grade) {
    let deleted = false;
    for(const rosterGrade in this.roster_){
      for(let i = 0; i < this.roster_[rosterGrade].length; i++) {
        if(this.roster_[rosterGrade][i] === student){
          this.roster_[rosterGrade].splice(i, 1);
          deleted = true;
          break;
        }
      }
      if(deleted) break;
    }
    
    if(this.roster_[grade]) {
      for(let i = 0; i < this.roster_[grade].length; i++){
        if (student.localeCompare(this.roster_[grade][i], undefined, { sensitivity: 'base' }) < 0) {
          this.roster_[grade].splice(i, 0, student);
          return;
        }
      }
      this.roster_[grade].push(student);
    } else {
      this.roster_[grade] = [student];
    }
  }

  grade(grade_) {
    return [...(this.roster_[grade_] ?? [])];
  }
}
