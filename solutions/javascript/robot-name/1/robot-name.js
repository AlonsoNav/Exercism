// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

const generateName = () => {
  const letters = String.fromCharCode(
    65 + Math.floor(Math.random() * 26), 
    65 + Math.floor(Math.random() * 26)
  );

  const numbers = Math.floor(Math.random() * 1000)
    .toString()
    .padStart(3, "0");

  const name = letters + numbers;

  if(Robot.namesSet.has(name))
    return generateName();
  
  Robot.namesSet.add(name);
  return name;
}

export class Robot {
  constructor() {
    this._name = generateName();
  }

  get name(){
    return this._name;
  }

  reset() {
    this._name = generateName();
  }

  static releaseNames() {
    Robot.namesSet.clear();
  }
}

Robot.namesSet = new Set();
