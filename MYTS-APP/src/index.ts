//decorator
// function Course(target: any) {
//     //decorator logic
//     Object.defineProperty(target.prototype, "subject", { value: "Angular" });
//   }
  
//   @Course
//   class Student {
//     firstName: string;
//     lastName: string;
//     constructor(firstName: string, lastName: string) {
//       this.firstName = firstName;
//       this.lastName = lastName;
//     }
//   }
//   const student = new Student("Subramanian", "M") as any;
//   console.log(`${student.firstName} is learning ${student.subject}`);

  
  
  function Course(config:any) {
      return function(target: any){
    //decorator logic
        Object.defineProperty(target.prototype, "subject", { value: config });
      }
    
    
  }
  
  @Course({id:1, name:"random stuff", price: 100000})
  class Student {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }
  const student = new Student("Subramanian", "M") as any;
  console.log(`${student.firstName} is learning ${student.subject.name}`);