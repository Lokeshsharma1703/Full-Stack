// function print(val) {
//     console.log(val);
// }

// function add(n1, n2, print) {
//     let sum = n1 + n2;
//     print(sum); //callback function
// }

// add(2, 3, print);

// const fs = require("fs"); //all methods and variables of fs modules can be used by fs variable
// function callback(err, data) {
//     if (!err) {
//         console.log(data);
//     }
// }
// fs.readFile('index.html', 'utf-8', callback);

// function callback(err, data) {
//     if (!err) {
//         console.log(data);
//     }

// }

// for (i = 1; i <= 10; i++) {
//     fs.readFile(`a${i}.html`, 'utf-8', callback);
// }

// let count = 0;

// function print(err, data) {
//     if (!err) {
//         count += 1;
//     }
//     if (count <= 10) {
//         console.log(data);
//     }
//     fs.readFile(`a${count+1}.html`, 'utf-8', print);
// }

// fs.readFile('a1.html', 'utf-8', print);

function outer() {
    console.log('outeris running');
    console.log('I am outer');
    console.log('outer is returning something');
    return function inner() {
        console.log('I am inner');
    }
}

let innerRef = outer();
innerRef();

function firstName(fname) {
    console.log('Your first name is : ', fname);
    return function lastName(lname) {
        console.log(fname + " " + lname);
    }
}

let lastNameRef = firstName("John");
console.log("''''''''''''''''''''''");
lastNameRef('Doe');