const express = require('express');
const app = express();

const path = require('path');
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.set('partials', path.join(__dirname, 'partials'));


const todos = ["Football", "Coding", "Singing", "Dancing"];


app.get('/todos', (req, res) => {
    res.render('todos', { todos });
});

app.get('/home', (req, res) => {

    // res.render('index');

    const random = Math.floor(Math.random() * 10);

    res.render('index', { random });
})






app.listen(5000, () => {
    console.log('server running');
})