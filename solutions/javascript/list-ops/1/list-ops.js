//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(list = []) {
    this.list_ = list;
  }
  
  get values() {
    return this.list_;
  }

  append(list) {
    this.list_ = [...this.list_, ...list.values];
    return this;
  }

  concat(listOfLists) {
    for(let list of listOfLists.values)
      this.append(list);
    return this;
  }

  filter(predicate) {
    let newList = new List();
    for(let el of this.values){
      if(predicate(el))
        newList.list_ = [...newList.list_, el];
    }
    return newList;
  }

  map(predicate) {
    let newList = new List();
    for(let el of this.values)
        newList.list_ = [...newList.list_, predicate(el)];
    return newList;
  }

  length() {
    let counter = 0;
    for(let el of this.values){
      counter ++;
    }
    return counter;
  }

  foldl(predicate, acc) {
    for(let el of this.values)
        acc = predicate(acc, el);
    return acc;
  }

  foldr(predicate, acc) {
    for(let i = this.length() - 1; i >= 0; i--) {
      acc = predicate(acc, this.list_[i]);
    }
    return acc;
  }

  reverse() {
    let newList = new List();
    for(let i = this.length() - 1; i >= 0; i--) {
        newList.list_ = [...newList.list_, this.list_[i]];
    }
    return newList;
  }
}
