// const p = new Promise((function(resolve, reject) {
//     setTimeout(() => {
//         let randomNumber = Math.floor(Math.random() * 10);
//         console.log(randomNumber);
//         if (randomNumber % 2 == 0) {
//             resolve(randomNumber);
//         } else {
//             reject();
//         }
//     }, 2000);
// }));

// p.then((data) => {
//     console.log(data);
//     console.log("resolve");
//     return "abc";
// }).then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log('reject');
// });

// async function abc(data) {
//     return new Promise((resolve, reject) => {
//         resolve(data);
//         console.log('hello');
//     })
// }

// function abc(data) {
//     const p = new Promise((res, rej) => {
//         res(data);
//         console.log(data);
//     })
// }

// abc(23);



//promises using fs module

// pending state usually occurs in API
const fs = require("fs");
let readFilePromise = fs.promises.readFile('index.html', 'utf-8');
console.log(readFilePromise); //pending state
readFilePromise.then((data) => {
    console.log(data);
}).then(() => {
    console.log('hello')
})