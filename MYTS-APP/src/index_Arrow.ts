function add(a?: number, b?: number): number {
    return a + b;
}
add(1, 2)
add()

const sub = (a: number = 1, b: number = 1): number =>  a - b;

sub(1, 2)
sub()

//function expression
// ES 5
/* const hello = function() {
  console.log("Hello");
};
hello();
 */
//arrow function
/* const hello = () => {
  console.log("Hello");
};
hello();
 */
//if function has only one line of body
/* const hello = () => console.log("Hello");
hello(); */
//parameters and args
/* const hello = (name:string='default') => console.log(name);
hello('test'); */

//if returns
/* const hello = (name: string = "default"): string => {
  return name;
};
console.log(hello("test")); */
//if function has only return statement,no body
/* const hello = (name: string = "default"): string =>name;
console.log(hello("test"));
 */
//if function takes single arg no default value, no type,no optional ,returns the same.

/* const hello = name => name;
console.log(hello("test"));
 */
//if function returns literal object
/* const getProduct = () => {
  return {
    id: 1,
    price: 200
  };
};
console.log(getProduct()); */

// const getProduct = () => ({ id: 1, price: 200 });
// console.log(getProduct());

//function expression
// ES 5
/* const hello = function() {
  console.log("Hello");
};
hello();
 */
//arrow function
/* const hello = () => {
  console.log("Hello");
};
hello();
 */
//if function has only one line of body
/* const hello = () => console.log("Hello");
hello(); */
//parameters and args
/* const hello = (name:string='default') => console.log(name);
hello('test'); */

//if returns
/* const hello = (name: string = "default"): string => {
  return name;
};
console.log(hello("test")); */
//if function has only return statement,no body
/* const hello = (name: string = "default"): string =>name;
console.log(hello("test"));
 */
//if function takes single arg no default value, no type,no optional ,returns the same.

/* const hello = name => name;
console.log(hello("test"));
 */
//if function returns literal object
/* const getProduct = () => {
  return {
    id: 1,
    price: 200
  };
};
console.log(getProduct()); */

const sayGreet = callback => setTimeout(() => callback(""),1000);
sayGreet(message => console.log(message));