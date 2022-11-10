const fs = require("fs");


// async function abc () {
//     await fs.promises.writeFile("q1.html", "hello");
//     let data = await fs.promises.readFile("q2.html", "utf-8");
//     console.log(data);
//     return "how are you";
// }

// async function main() {
//     let data = await abc();
//     console.log(data);
// }
// main();


//async to promises
function abc() {
    return new Promise(function(resolve, reject) {
        fs.promises.writeFile('a.txt', 'Hello');
        fs.promises.readFile('b.txt', 'utf-8').then(function(data) {
            console.log(data);
            resolve("how are you");
        }).catch(function(err) {
            console.log('rejected');
        })
    })
}

function main() {
    return new Promise(function(resolve, reject) {
        abc().then(function(data) {
            console.log(data);
        })
    })
}
main();