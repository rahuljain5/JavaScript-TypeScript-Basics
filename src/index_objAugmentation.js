//Object augmentation
//Add
function Customer() {
    this.id = 1;
}
let customer = new Customer();
//Add new Property
customer.name = 'Subramanian'
customer.shippingcity='CHN';
customer.calculateInvoice = function () {
    return 1000;
}
/**
 * if prop exits, update else add.
 */

//Update existing property
customer.id = 18;

//REMOVE EXISTING Property
delete customer.shippingcity;

console.log(customer);

//iterate
for(let prop in customer){
    console.log(prop,customer[prop]);
}

let employee = {
    id: 2
}
console.log(employee);
//add new property
employee.name = 'Raj'
employee.calcualteSalary = function () {
    return 9000;
}