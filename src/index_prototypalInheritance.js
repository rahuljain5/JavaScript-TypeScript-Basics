function Employee() {
    //__proto__ : Object-Parent
}
//function Object
//Employee.prototype=Object
Employee.prototype.name ='subramanian';

console.dir(Employee);
let emp=null;
//Domain Object
emp =new Employee();
emp.salary = 1000
console.log(emp.name,emp.salary);
///
emp =new Employee();
console.log(emp.name,emp.salary);

function Account() {
    this.type = "loan";
}

function LoanAccount() {
    this.loanAmount = 10000;
}
let loanAcc = new LoanAccount();
loanAcc.__proto__ = new Account();
console.log(loanAcc);

//Literals

let student = {
    id:1
}

let trainee = {
    name:"Angular"
}

trainee.__proto__ = student;
console.log(trainee);
