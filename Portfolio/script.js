var menu_btn = document.querySelector('#menubtn');
var menu = document.querySelector('.menu ul');
var menu_items = document.querySelectorAll('.menu ul li a');

menu_btn.addEventListener('click', function() {
    menu_btn.classList.toggle('active');
    menu.classList.toggle('active');
});

for (i = 0; i < menu_items.length; i++) {
    menu_items[i].addEventListener('click', function() {
        menu_btn.classList.remove('active');
        menu.classList.remove('active');
    });
}