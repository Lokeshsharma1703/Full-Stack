//count the occurence of each character from given string in an object

let str = "aabc bbca  caab ddac";
let obj = {};
// for (i = 0; i < str.length; i++) {
//     obj[str[i]] = 0;
// }
// for (i = 0; i < str.length; i++) {
//     obj[str[i]] = obj[str[i]] + 1;
// }

for (let i of str) {
    if (!obj[i]) {
        obj[i] = 1;
    } else {
        obj[i]++;
    }
}
delete obj[" "];
console.log(obj);