const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(cookieParser('thisissecretSession'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }))
    // const sess = {
    //     secret: 'keyboard cat',
    //     resave: false,
    //     saveUninitialized: true,
    //     cookie: {}
    // }

// app.use(session(sess));


const sessionflash = {
    secret: 'this is a flash session',
    resave: false,
    saveIninitialized: true,
    cookie: {}
}

app.use(session(sessionflash));
app.use(flash());




app.get('/session', (req, res) => {
    res.send('session created');
})

app.get('/user', (req, res) => {
    const { username } = req.query; // /user?username=xyz 

    req.session.username = username;
    console.log(req.session);
    res.redirect('/greet');
})

app.get('/greet', (req, res) => {
    const { username } = req.session;
    res.send(`welcome ${username}`);
})





app.listen(4000, () => {
    console.log('server running at 4000');
})