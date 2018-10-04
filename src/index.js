//Promises

// const getUser = (success, failure) => {
//     //truthy
//     /*     let fakeUser = {
//             name: 'subramanian'
//         }; */
//     let fakeUser = null;
//     if (fakeUser) {
//         setTimeout(() => success({
//             name: 'Subramanian'
//         }), 5000);
//     } else {
//         setTimeout(() => failure({
//             err: 'Something went wrong'
//         }), 5000);
//     }


// };
// getUser(
//     user => console.log(user.name),
//     err => console.log(err)
// );

const getUser = () => {
    let fakeUser;
    return new Promise((resolve, reject) => {
        if(fakeUser){
            resolve(fakeUser);
        }
        else reject("Error")
    });
}

getUser()
.then((response) => {
    console.log(response);
})
.catch(err => {
    console.log(err);
})