// Traversing DOM
// var itemList = document.getElementById('items');
//parent Node
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'lightgrey';
// console.log(itemList.parentElement);

//Child Nodes
// console.log(itemList.childNodes); //return child nodes as well as text nodes(spaces)
// console.log(itemList.children); // return child nodes only
// itemList.children[1].style.backgroundColor = 'yellow';
// console.log(itemList.nextSibling);
// console.log(itemList.nextElementSibling);


// Events

// function buttonClick() {
//     alert('hello');
// }

// var button = document.querySelector('#btn');
// button.addEventListener('click', addEvent);

// function addEvent(e) {
//     // var item = document.getElementsByClassName('title')
//     // item[1].innerText = 'changed';


// console.log(e);
// console.log(e.target);
// console.log(e.value);
// console.log(e.clientX);
// console.log(e.clientY);
// console.log(e.offsetX);
// console.log(e.offsetY);
// console.log(e.ctrlKey); //while ctrl is pressed or not
// console.log(e.altKey);
// console.log(e.shiftKey);


// }

// var form = document.getElementById('addForm');
// var button = document.querySelector('#btn');
// form.addEventListener('submit', runEvent); // submit event always works on form
// var i = 1;
// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);  //works when mouse btn is clicked
// button.addEventListener('mouseup', runEvent); //works when you release mouse click

// function runEvent(e) {
//     // e.preventDefault();
//     // console.log(i++);

//     console.log("Event type : " + e.type); //return event type
// }

// var mn = document.getElementById('main');
// mn.addEventListener('dblclick', changeColor);
// var list = ['red', 'yellow', 'skyblue'];

// function changeColor() {
//     mn.style.backgroundColor = `${list[Math.floor((Math.random() * 2) + 1)]}`;
// }

// var newDiv = document.getElementById('main-div');
// newDiv.addEventListener('mouseenter', runEvent);
// newDiv.addEventListener('mouseleave', runEvent);
// newDiv.addEventListener('mousemove', runEvent);
// newDiv.addEventListener('mousemove', runEvent);

// function runEvent(e) {
//     console.log("Event type : " + e.type);
// }


var form = document.getElementById('addForm');
var itemList = document.getElementById('items');



form.addEventListener('submit', addEvent);
itemList.addEventListener('click', removeEvent);

function addEvent(e) {
    e.preventDefault();
    var item = document.getElementById('item').value;

    var newItem = document.createElement('li');
    newItem.className = 'list-group-item';
    newItem.appendChild(document.createTextNode(item));

    var deletebtn = document.createElement('button');
    deletebtn.className = 'btn btn-danger btn-sm float-right delete';
    deletebtn.appendChild(document.createTextNode('X'));
    newItem.appendChild(deletebtn);

    itemList.appendChild(newItem);
    item.value = "";
}

function removeEvent(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm('delete karna hai?')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

function myFunction() {
    var input, filter, ul, li, a, i, textValue;
    input = document.getElementById('filter');
    filter = input.value.toUpperCase();
    ul = document.getElementById('items');
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        textValue = li[i].textContent || li[i].innerText;
        console.log(textValue);
        if (textValue.toUpperCase().includes(filter)) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


/*
1. DOM project day-21,22
2. Calculator
3. Sudoku
4. Netflix Clone
*/