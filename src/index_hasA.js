function Address(doorno = '156', street = '10th street', area = 'Perumbakkam', city = 'Chennai', state = 'Tamil Nadu', zipcode = '600100') {
    this.doorno = doorno;
    this.street = street;
    this.area = area;
    this.city = city;
    this.state = state;
    this.zipcode = zipcode
}

function Employee(id = 1, name = 'Subramanian', address = new Address()) {
    this.id = id;
    this.name = name;
    //has-a
    this.address = address;
}
let address=new Address();
let emp = new Employee(10,'Ram',address);
console.log(emp);