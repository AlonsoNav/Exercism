//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this._balance = 0;
    this.status = false;
  }

  open() {
    if(this.status)
      throw new ValueError();
    this.status = true;
    this._balance = 0;
  }

  close() {
    if(!this.status)
      throw new ValueError();
    this.status = false;
  }

  deposit(amount) {
    if(!this.status || amount < 0)
      throw new ValueError();
    this._balance += amount;
  }

  withdraw(amount) {
    if(!this.status || amount > this.balance || amount < 0)
      throw new ValueError();
    this._balance -= amount;
  }

  get balance() {
    if(!this.status)
      throw new ValueError();
    return this._balance; 
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
