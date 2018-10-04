let employee = {
    id: 1,
    name: "ABC",
    salary: 2000,
    calculateSalary: function(){
        return this.salary;
    }
};
console.log("Employee Details");
employee.salary = 8000;
console.log("Id: " + employee.id);
console.log("Name: " + employee.name);
console.log("Salary: " + employee.calculateSalary());

