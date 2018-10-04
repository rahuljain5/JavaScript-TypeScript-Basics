/* //is -a

class Account {
    accountno: string;
    balance: number;
    constructor(accountno: string = "A001", balance: number = 0.0) {
      //console.log("Account class is called");
      this.accountno = accountno;
      this.balance = balance;
    }
  }
  class SavingsAccount extends Account {
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
  }
  let account = null;
  account = new SavingsAccount();
  account.setBalance(100);
  console.log(`Balance is ${account.getBalance()} for ${account.accountno}`);
  
  account = new SavingsAccount("B0001234", 18000);
  console.log(`Balance is ${account.getBalance()} for ${account.accountno}`);
   */