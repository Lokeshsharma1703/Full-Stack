const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/moviesdb')
    .then(() => {
        console.log("connection open");
    })
    .catch((err) => {
        console.log("connection failed");
    });