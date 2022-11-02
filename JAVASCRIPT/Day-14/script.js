let arr = [1, 2, 3, 4, 5, 'apples', 'mangoes', true, function() { alert('hello world') }];
console.log(arr);

/*
console.log(arr[8]);
arr.push('hello'); //add on last
console.log(arr);
arr.pop(); //delete from last
console.log(arr);
arr.shift(); //delete from start
console.log(arr);
arr.unshift(false); //add on start
console.log(arr);
console.log([2] == [2]); //false

*/
/*
let arr2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let sum = 0;
let flatten = [];
let k = 0;
for (i = 0; i < arr2.length; i++) {
    for (j = 0; j < arr2[0].length; j++) {
        console.log('(' + i + ',' + j + ')'); //print the indexes
        sum += arr2[i][j];
        flatten[k++] = arr2[i][j];
    }
    console.log('\n');
}
console.log(`Sum is ${sum}`); //print sum of array
console.log(flatten); //print flatten array

let sliceArray = flatten.slice(3, 6); //creates new array of flattten[] from index 3 to 6
console.log(sliceArray);

flatten.splice(3, 0, 'hello', true);
console.log(flatten);
let deleted = flatten.splice(3, 3, 's');
console.log(flatten);
console.log(deleted);

flatten.forEach(element => {
    console.log(element);
});

*/

/*
let arr1 = [1, 2, 3, 2, 4, 6, 5, 4, 6, 7, 6];
console.log(arr1);
let res = arr1.filter(i => {
    return i != 6;
});
console.log(res);
*/

/*
let str = "This is a dev class";
let strArray = str.split(' ');
let res = '';
for (i = 0; i < strArray.length; i++) {
    res = res + reverseString(strArray[i]) + " ";
}

function reverseString(s) {
    return s.split('').reverse().join('');
}
console.log(res);
*/

let str = 'background.color.red'; //write it in camel case



//object------------------------------------------
// let student = {      
//     'name': 'Lokesh',
//     'course': 'B.tech'
// }
// console.log(student['name']);
//-----------------------------------------------