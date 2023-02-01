// const fs = require("fs");
// console.log(fs);

// let count = 0;

// fs.readFile('q1.html', {
//     encoding: 'utf-8',
//     flag: 'r'
// }, callback);

// function callback(err, data) {
//     count += 1;
//     if (count <= 3) {
//         if (!err) {
//             console.log(data);
//         } else {
//             console.log(err);
//         }
//         fs.readFile(`q${count+1}.html`, 'utf-8', callback);
//     }
// }


//Parallel calls
// function callback(err, data) {
//     if (!err) {
//         console.log(data);
//     } else {
//         console.log(err);
//     }
// }

// for (let i = 1; i <= 3; i++) {
//     fs.readFile(`q${i}.html`, 'utf-8', callback);
// }


const path = require('path');
// console.log(path);
console.log(path.join(__dirname, '/q1.html'));
// console.log(process.cwd()); // current working directory