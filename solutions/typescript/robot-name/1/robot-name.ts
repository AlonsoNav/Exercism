export class Robot {
  public static names: Set<string> = new Set();
  private _name: string;

  constructor() {
    let name = Robot.generateName();
    while (Robot.names.has(name))
      name = Robot.generateName();
    Robot.names.add(name);
    this._name = name;
  }

  public get name(): string {
    return this._name;
  }

  public resetName(): void {
    let name = Robot.generateName();
    while (Robot.names.has(name))
      name = Robot.generateName();
    Robot.names.add(name);
    this._name = name;
  }

  private static generateName(): string {
    let name = '';
    for (let i=0; i < 2; i++)
      name += String.fromCharCode(65 + Math.floor(Math.random() * 26));
    for (let i=0; i < 3; i++)
      name += Math.floor(Math.random() * 10).toString();
    return name;
  }

  public static releaseNames(): void {
    Robot.names = new Set();
  }
}
