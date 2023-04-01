const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const mongoose = require('mongoose');
const productRouter = require('./routes/productRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const authRoutes = require('./routes/authRoutes');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const bcrypt = require('bcrypt');
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const LocalStrategy = require('passport-local');
const User = require('./models/User');




mongoose.connect('mongodb://127.0.0.1:27017/shopping-app')
    .then(() => {
        console.log('DB is connected');
    })
    .catch((err) => {
        console.log(err);
    })


const app = express();

const PORT = 5000;


const sessionflash = {
    secret: 'this is a secret session',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000
    }
}


app.use(session(sessionflash));
app.use(flash());
app.use(passport.authenticate('session'));



app.use((req, res, next) => {
    // res.locals.success = req.flash('success');

    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    res.locals.currentUser = req.user;

    next();
})



app.set('view engine', 'ejs');
app.engine('ejs', engine);

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('partials', path.join(__dirname, 'partials'));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(cookieParser('thisissecretSession'));
app.use(passport.authenticate('session'));







passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.get('/', (req, res) => {
    res.render('index');
})

// app.get('/products', (req, res) => {
//     res.render('./products/product');
// })

app.use(authRoutes);

app.use(productRouter);

app.use(reviewRouter);








app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})