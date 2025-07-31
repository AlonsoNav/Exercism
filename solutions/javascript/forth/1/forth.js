//
// This is only a SKELETON file for the 'Forth' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Forth {
  constructor() {
    this._stack = [];
    this.definedWords = {};
  }

  evaluate(commands) {
    commands = commands.toLowerCase();
    if(commands[0] === ':'){
      const words = commands.split(' ');
      const action = words.slice(2, -1).join(' ').replace(
        new RegExp(Object.keys(this.definedWords).join("|"), "g"), 
        match => this.definedWords[match] ?? match
      );
      if(!isNaN(words[1]))
        throw new Error('Invalid definition');
      this.definedWords[words[1]] = action;
    } else {
      commands = commands.replace(
        new RegExp(Object.keys(this.definedWords).map(str => str.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")).join("|"), "g"), 
        match => this.definedWords[match] ?? match
      );
      for(const command of commands.split(' ')) {
        if(!isNaN(command))
          this._stack.push(Number(command));
        else if(command[0] === 'd') {
          if(this._stack.length < 1)
            throw new Error('Stack empty');
          switch(command) {
            case 'dup':
              this._stack.push(this._stack.at(-1));
              break;
            case 'drop':
              this._stack.pop();
              break;
            default:
              throw new Error('Unknown command');
          }
        } else {
          if(!['+', '-', '*', '/', 'swap', 'over'].includes(command))
            throw new Error('Unknown command');
          if(this._stack.length < 2)
            throw new Error('Stack empty');
          const n2 = this._stack.pop(), n1 = this._stack.pop();
          switch(command) {
            case '+':
              this._stack.push(n1 + n2);
              break;
            case '-':
              this._stack.push(n1 - n2);
              break;
            case '*':
              this._stack.push(n1 * n2);
              break;
            case '/':
              if(n2 === 0)
                throw new Error('Division by zero');
              this._stack.push(~~(n1 / n2));
              break;
            case 'swap':
              this._stack.push(n2);
              this._stack.push(n1);
              break;
            case 'over':
              this._stack.push(n1);
              this._stack.push(n2);
              this._stack.push(this._stack.at(-2));
              break;
          }
        } 
      }
    }
  }

  get stack() {
    return this._stack;
  }
}
