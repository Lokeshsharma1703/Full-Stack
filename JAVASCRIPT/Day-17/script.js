// setTimeout(() => {
//     console.log('this is a callback');
// }, 3000);

// let a = true;
// setTimeout(function() {
//     a = false;
// }, 10000)
// while (a) {
//     console.log('hello');
// };

let a = true;
setInterval(function() {
    if (a) {
        console.log('hello');
    }
}, 1000);
setTimeout(function() {
    a = false;
}, 10000);