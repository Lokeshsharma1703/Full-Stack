const express = require('express');
const router = express.Router();
const User = require('../models/User');



router.get('/register', (req, res) => {
    res.render('auth/signup');
})


router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    const user = new User({ username, email });

    const newUser = await User.register(user, password);

    req.flash('success', 'user registered successfully');

    res.redirect('/login');
})


// router.get('/fakeUser', async (req, res) => {
//     const user = new User({ username: 'fakeuser', email: 'abc@gmail.com' });
//     const newUser = await User.register(user, '12345');

//     res.send(newUser);
// })


router.get('/login', (req, res) => {
    res.render('auth/signin');
})


router.post('/login', async (req, res) => {
    const { username, email, password } = req.body;



})



module.exports = router;