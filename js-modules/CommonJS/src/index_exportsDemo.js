let result = require('./greeter')
 let EmployeeService = require('./EmployeeService');

 console.log(result);
 console.log(result.name);
 console.log(result.sayHello())
 console.log(result.employee.name);

 console.log(EmployeeService)
 let empService = new EmployeeService()
 empService.addEmployee()
 empService.getEmployeeById();
