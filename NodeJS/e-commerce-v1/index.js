const express = require('express');
var engine = require('ejs-mate');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopping-app')
    .then(() => {
        console.log('DB is connected');
    })
    .catch((err) => {
        console.log(err);
    })


const app = express();

const PORT = 5000;

app.set('view engine', 'ejs');
app.engine('ejs', engine);

app.set('views', path.join(__dirname, 'views'));




app.get('/', (req, res) => {
    res.render('index');
})

app.get('/products', (req, res) => {
    res.render('./products/product');
})







app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})