define(['./add'], function(add){
    return function(a,b){
        return add(a,b);
    }
})