const express = require('express');
var engine = require('ejs-mate');
const path = require('path');
const mongoose = require('mongoose');
const productRouter = require('./routes/productRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');


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
app.set('partials', path.join(__dirname, 'partials'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(cookieParser('thisissecretSession'));



const sessionflash = {
    secret: 'this is a flash session',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}

app.use(session(sessionflash));
app.use(flash());

app.use((req, res, next) => {
    // res.locals.success = req.flash('success');

    res.locals.successMessage = req.flash('success');

    next();
})



app.get('/', (req, res) => {
    res.render('index');
})

// app.get('/products', (req, res) => {
//     res.render('./products/product');
// })

app.use(productRouter);

app.use(reviewRouter);







app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})