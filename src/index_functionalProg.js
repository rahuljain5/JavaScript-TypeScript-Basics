function add(a, b) {
    return a + b;
}

console.log(add(10, 10));
var x = 10;
var y = 20;


console.log(add(x, y));

function isActive(active) {
    return !active;
}

console.log(isActive(true));

function doStuff(greeter) {
    console.log(greeter('Ram'));
}

var hi = function (name = 'something') {
    return 'Hi' + name;
};
doStuff(hi);

doStuff(function (name = 'something') {
    return 'Hello' + name;
});