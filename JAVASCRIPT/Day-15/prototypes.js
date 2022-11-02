let person = {
    firstname: 'john',
    age: 24
}

let p1 = {
    lastname: 'doe',
    __proto__: person //prototype creation (inharitance)
}

// let p1 = Object.create(person);



// console.log(person);
// console.log(p1);
// console.log(p1.firstname);
// console.log(p1.age);
// console.log(p1.lastname);

let p2 = {
    isAdult: true,
    __proto__: p1 //first prototype is p1 but if value is not there in p1 then it will go to person
}

console.log(p2.firstname);
console.log(p2.lastname);