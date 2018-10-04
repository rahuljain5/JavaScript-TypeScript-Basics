//verb+noun
function sayHello() {

}
//noun
function Employee(id = 1, name= "ABC", salary = 1000) {
    //instance variables
    this.id = id;
    this.name = name;
    this.salary = salary;
    //instance methods
    this.calculateSalary = function () {
        return this.salary;
    }
}
let employee = new Employee(4, "def", 8000 ); // constructor call
console.log("Employee ID " + employee.id);
console.log("Employee Name " + employee.name);
console.log('Employee Salary :'+ employee.calculateSalary());

employee = new Employee(14, "bcdef", 18000 ); // constructor call
console.log("Employee ID " + employee.id);
console.log("Employee Name " + employee.name);
console.log('Employee Salary :'+ employee.calculateSalary());

employee = new Employee(24, "abcdef", 8000 ); // constructor call
console.log("Employee ID " + employee.id);
console.log("Employee Name " + employee.name);
console.log('Employee Salary :'+ employee.calculateSalary());

