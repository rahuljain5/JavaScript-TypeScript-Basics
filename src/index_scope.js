//Block
function isAuth(status) {
    if (status) {
        //block
        var message = 'Auth'
    }
    console.log(message);
    console.log(myage);
}
isAuth(false);
//BLOCK Scope with IIEF : ES 5
 function isAuth(status) {
    if (status) {
        //block
        (function () {
            var message = 'Auth'
        }());

    }
    console.log(message);
    console.log(myage);
}
isAuth(false); 

function isAuth(status) {
    if (status) {
        //block
       let message ='Auth';

    }
    console.log(message);
    console.log(myage);
}
isAuth(false);