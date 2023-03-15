const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');

app.set('views', path.join(__dirname, 'views'));
app.use(cookieParser('thisissecretSession'));

app.get('/setcookies', (req, res) => {
    res
        .cookie('name', 'lokesh', { maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: true, signed: true }) // time in ms
        .cookie('location', 'Mathura', { maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: true })
        .cookie('age', '100', { maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: true })
        .cookie('login', 'true')
        .send(req.cookies);
})


// app.get('/seecookies', (req, res) => {
//     res.send(req.cookies);
// })

app.get('/login', (req, res) => {
    const { login } = req.cookies;

    if (login === 'true') {
        return res.send('user is logged in');
    }
    return res.redirect('/setcookies');
})


app.listen(5500, () => {
    console.log('server running on 5500');
})