let obj = {
    name: 'Lokesh',
    "hello1": 1,
    "hello2": 2,
    welcome: function() {
        console.log('welcome')
    },
    arr: ['maruti', 'swift', 'baleno'],
    'new car': 'audi'
};

// console.log(obj["hello1"]);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// console.log(obj.name);
// console.log(obj.arr);
// console.log(obj.arr[1]);

// obj['isAdult'] = true;
// console.log(obj);

let person = {
    name: 'john',
    age: 24
}
console.log(person);
person = null; //garbage collection
console.log(person);