const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcrypt');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/auth-demo')
    .then(() => {
        console.log('DB connected');
    })
    .catch((e) => {
        console.log(e);
    })



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'user login',
    resave: false,
    saveUninitialized: true,
    store: new MongoDBStore({
        uri: 'mongodb://127.0.0.1:27017/auth-demo',
        collection: 'mySessions'
    }),
    cookie: {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000
    }
}))

let requireLogin = (req, res, next) => {      // middleware

    if (!req.session.user_id) {
        return res.redirect('/login');
    }

    next();

}





app.get('/', (req, res) => {
    res.send('home route')
})

app.get('/register', (req, res) => {
    res.render('signup');
})

app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    const salt = await bcrypt.genSalt(12);

    const hash = await bcrypt.hash(password, salt);

    const user = await User.create({ username, hash });

    res.redirect('/login');

})


app.get('/login', async (req, res) => {
    res.render('login')
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const foundUser = await User.find({ username });
    if (foundUser.length == 0) {
        return res.redirect('/register');
    }

    const validUser = await bcrypt.compare(password, foundUser[0].hash);

    if (!validUser) {
        return res.send('incorrect password');
    }

    req.session.user_id = foundUser[0]._id;
    res.redirect('/dashboard');

})

app.get('/logout', (req, res) => {

    req.session.destroy();
    res.send('please login first');

})

app.get('/dashboard', requireLogin, (req, res) => {
    res.send('Logged in successfully');
})


app.listen(4000, () => {
    console.log('server is running at port 4000');
})