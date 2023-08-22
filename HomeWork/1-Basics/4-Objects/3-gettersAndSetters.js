'use strict';

const bankAccount = {
  ownwerName: 'John Wick',
  _balance: 1000,
  get formatedBalance() {
    return `$${this._balance}`;
  },
  get balance() {
    return this._balance;
  },
  set balance(value) {
    this._balance = value;
  },
  transfer(amount, account) {
    if (this.balance < amount) throw new Error('Insufficient funds');
    this.balance -= amount;
    account.balance += amount;
  },
};

const bankAccount2 = {
  ownwerName: 'Blade Runner',
  _balance: 300,
  get formatedBalance() {
    return `$${this._balance}`;
  },
  get balance() {
    return this._balance;
  },

  set balance(value) {
    this._balance = value;
  },
  transfer(amount, account) {
    if (this.balance < amount) throw new Error('Insufficient funds');
    this.balance -= amount;
    account.balance += amount;
  },
};

bankAccount.transfer(100, bankAccount2);
console.log(bankAccount2.formatedBalance);
