// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.body);
// console.log(document.head);
// console.log(document.links); //return html collection
// console.log(document.all);
// console.log(document.all[5]);
// document.all[5].textContent = 'hello world'; // changes content inside an element
// console.log(document.all[5]);
// console.log(document.all[12].innerText);

//Querying Document 


//getElementById()
// let header = document.getElementById('header-title');
// header.style.backgroundColor = 'purple';
// header.innerText = 'John Doe';
// header.style.border = '3px solid black';
// header.style.borderRadius = '15px';
// header.innerHTML = '<h3>This is a h3 heading</h3>';
// console.log(header);


//getElementByClassName()
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// for (let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = 'lightgrey';
//     Object.assign(items[i].style, { color: 'red', fontWeight: 'bold' });
// }

//getElementByTagName()
// var list = document.getElementsByTagName("li");
// console.log(list);
// for (let i = 0; i < list.length; i++) {
//     list[i].style.backgroundColor = 'lightgrey';
//     Object.assign(list[i].style, {
//         color: 'red',
//         fontWeight: 'bold'
//     });
// }


//getElementByQuerySelector
// var header = document.querySelector('.title');
// header.style.backgroundColor = 'green';


//getElementByQuerySelectorAll
// var heading = document.querySelectorAll('.title');
// console.log(heading);
// for (let i = 0; i < heading.length; i++) {
//     heading[i].style.backgroundColor = 'green';
// }


// var ch = document.querySelector('ul');
// console.log(ch.parentNode);

// var bd = document.querySelector('body');
// console.log(bd.parentNode);
// console.log(document.querySelector('html').parentNode);