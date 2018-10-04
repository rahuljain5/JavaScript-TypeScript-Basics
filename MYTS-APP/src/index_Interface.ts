//is -a

interface IInterestCalculator {
    calculateInterest(): number;
}

abstract class Account {
    accountno: string;
    balance: number;
    constructor(accountno: string = "A001", balance: number = 0.0) {
        //console.log("Account class is called");
        this.accountno = accountno;
        this.balance = balance;
    }
    //withdraw
    /* withdraw(): number {
      return 0.0;
    } */
    abstract withdraw(): number;
}
class SavingsAccount extends Account implements IInterestCalculator {
    calculateInterest(): number {
        return (1000 * 10) / 100;
    }
    constructor(accountno: string = "A001", balance: number = 0) {
        super(accountno, balance);
        //console.log("Savings Account class is called");
    }
    getBalance(): number {
        return this.balance;
    }
    setBalance(balance: number): void {
        this.balance = balance;
    }
    //redefine:overriding like other languages
    withdraw(): number {
        return 100;
    }
}
let account = null;
account = new SavingsAccount();
account.setBalance(100);
console.log(`Balance is ${account.getBalance()} for ${account.accountno}`);
console.log(`Amount withdrawn ${account.withdraw()}`);
console.log(`Interest is ${account.calculateInterest()}`);

account = new SavingsAccount("B0001234", 18000);
console.log(`Balance is ${account.getBalance()} for ${account.accountno}`);