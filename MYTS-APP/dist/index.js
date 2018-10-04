//decorator
// function Course(target: any) {
//     //decorator logic
//     Object.defineProperty(target.prototype, "subject", { value: "Angular" });
//   }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
function Course(config) {
    return function (target) {
        //decorator logic
        Object.defineProperty(target.prototype, "subject", { value: config });
    };
}
let Student = class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
};
Student = __decorate([
    Course({ id: 1, name: "random stuff", price: 100000 }),
    __metadata("design:paramtypes", [String, String])
], Student);
const student = new Student("Subramanian", "M");
console.log(`${student.firstName} is learning ${student.subject.name}`);
