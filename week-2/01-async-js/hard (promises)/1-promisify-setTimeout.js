/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res();
        }, n * 1000);
    })
}

// let myPromise = wait(5);
// myPromise.then((value) => {
//     console.log(value);
// })

module.exports = wait;
