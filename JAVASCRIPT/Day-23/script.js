// let person = {
//     name: "abc",
//     age: 20,
//     address: 'Mathura'
// };

// console.log(person);

// person = JSON.stringify(person); // to convert object into JSON object
// console.log(person);

// person = JSON.parse(person);    // to convert JOSN to object
// console.log(person);


const xhr = new XMLHttpRequest; // to send request to server(interact with server)
xhr.onload = function() { // if request is successfull than use onload()
    let data = this.response;
    console.log(data);
}

xhr.onerror = function() { // if request is rejected than use onerror()

}


const URL = 'https://api.covid19api.com/summary';

xhr.open("GET", URL); // where you want send request

xhr.send();