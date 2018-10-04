let express = require('express');
let customers = require('./data');
let bodyParser = require('body-parser');

//Express App
let app = express();

//body parser setup
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));
// parse application/json
app.use(bodyParser.json());

//REST API

app.get('/eurofins/api/customers', function (req, res) {
    res.json(customers)
});
//get Customer by Id
//http:localhost:3000/eurofins/api/customers/1
app.get('/eurofins/api/customers/:id', function (req, res) {
    let id = req.params.id;
    console.log(id);
    //logic customersArray[id] ==id =>{}
    var data = customers.find(i => i.id == id);
    res.json({
        message: "Got Id",
        customer: data
    })
});
//
app.post('/eurofins/api/customer', function (req, res) {
    let customer = req.body;
    customers.push(customer);
    console.log(customers);
    res.json(customers);
});
//delete
app.delete('/eurofins/api/customers/:id', function (req, res) {
    let id = req.params.id;
    console.log(id);
    var cust = customers.find(i => i.id == id);
    //logic customersArray[id] ==id =>{}
    // console.log(customers.indexOf(cust));
    
    delete customers[customers.indexOf(cust)];
    res.json({
        message: "Delete",
        data: customers
    })
});
//update
app.put('/eurofins/api/customers/:id', function (req, res) {
    let id = req.params.id;
    console.log(id);
    var cust = customers.find(i => i.id == id);
    var index = customers[customers.indexOf(cust)];
    customers[index] = req.body;
    console.log(index);
    console.log(JSON.stringify(customers));
    
    //logic customersArray[id] ==id =>{}
    res.json({
        message: "Update",
        data: customers
    })
});

//start server
app.listen(3000, function () {
    console.log('Express Server is Ready');
});