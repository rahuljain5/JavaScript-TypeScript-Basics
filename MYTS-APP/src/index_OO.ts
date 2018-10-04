/* //create object
//object -instance variables,methods
//instance variables in es 5 this

//initalizing values


/**
 * inside class directly
 */
/* class Employee {
  id: number = 1;
  name: string = "Subramanian";
  isActive: boolean = true;
}
const emp = new Employee();
console.log(`Id - ${emp.id} name - ${emp.name} status - ${emp.isActive}`); */

/**
 * after object creation
 */
// class Employee {
//   id: number = 1;
//   name: string = "Subramanian";
//   isActive: boolean = true;
// }
// const emp = new Employee();
// emp.id = 1000;
// emp.name = "ram";
// emp.isActive = !emp.isActive;
// console.log(`Id - ${emp.id} name - ${emp.name} status - ${emp.isActive}`);

/**
 * during object creation-constructors -with optional parameters
 */

/* class Employee {
  id: number;
  name: string;
  isActive: boolean;
  constructor(id?: number, name?: string, isActive?: boolean) {
    this.id = id;
    this.name = name;
    this.isActive = isActive;
  }
}
const emp = new Employee();
console.log(`Id - ${emp.id} name - ${emp.name} status - ${emp.isActive}`); */

/**
 * during object creation-constructors -with default args
 */

class Employee {
    id: number;
    name: string;
    isActive: boolean;
    constructor(
      id: number = 1,
      name: string = "Subramanian",
      isActive: boolean = true
    ) {
      this.id = id;
      this.name = name;
      this.isActive = isActive;
    }
  }
  const emp = new Employee();
  console.log(`Id - ${emp.id} name - ${emp.name} status - ${emp.isActive}`);