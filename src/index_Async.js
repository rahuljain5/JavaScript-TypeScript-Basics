function doAsync(callback) {
    setTimeout(function () {
        callback();
    }, 1000);
}
function sayHello(){
    console.log('Hello');
}
sayHello();
doAsync(function () {
    console.log('I am delayed function')
});
sayHello();