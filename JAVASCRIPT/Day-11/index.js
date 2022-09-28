// alert(NaN ** 0);
// alert(NaN);

// let a = Infinity;
// console.log(a, typeof a);

// let isGreater = 4 > 1;
// alert(isGreater);

// let y;
// console.log(y, typeof y);

// let z = null;
// console.log(z, typeof z);

// alert('This is an alert');

// let a = prompt('How old are you', 25); //user input

// alert(`you are ${a} years old`);

// let isGreater = confirm('is 4 Greater than 1'); //boolean value input
// alert(isGreater);

// document.write('This is a statement');

// let a = '31';
// console.log(typeof a);
// a = Number(a);
// a += 1;
// console.log(typeof a);
// alert(a); //311

// let a = '31';
// let b = '32';
// console.log(+a + +b); //converted in number

// function typeConversion() {
//     let num = document.getElementById('pass').value;
//     console.log(+num, typeof + num);
// }

// let x;
// let y;
// let z;
// x = String(3.14);
// console.log(x, typeof x);

// y = Boolean('');
// console.log(y, typeof y);

// Basic Operators, Maths
// console.log('this is first String' + 'This is second String');
// console.log('6' / 2);


// let a = 2;
// console.log(++a);
// console.log(a);
// console.log(a++);
// console.log(a);


// Logical Operators
// console.log(5 && 4 && 8); //returns first false value if not there than last value
// console.log(0 || 4 || 1); //returns first true value
// console.log(!false);
// let age = prompt('Enter your age');
// if (age < 10) {
//     alert('Bacche ho tum');
// } else {
//     alert('Bade ho gye ho yrr');
// }

// age < 15 ? alert('Bacche ho tum') : alert('Bade ho gye ho yrr'); //ternary operator

// let i = 0;
// while (i < 10) {
//     alert(`Hello ${i+1}`);
//     i++;
// }

// for (let i = 0; i < 5; i++) {
//     alert(i);
// }

let sum = 0;
while (true) {
    let a = prompt('Enter value');
    sum += +a;
    if (!a) {
        alert(sum);
        break;
    }
}