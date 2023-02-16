const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/moviesdb') // return promise
    .then(() => {
        console.log("connection open");
    })
    .catch((err) => {
        console.log("connection failed");
    });

// const seriesSchema = new mongoose.Schema({
//     name: String,
//     date: Number,
//     rating: Number,
//     isValid: Boolean
// });


// with validation
const seriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name cannot be empty']
    },
    date: {
        type: Number,
        required: [true, 'Date cannot be empty']
    },
    rating: Number,
    isValid: Boolean
});


// model is always singular and first letter is capital
// technically models is a js class
const Movie = mongoose.model('Movie', seriesSchema);

// const friends = new Movie({
//     name: 'Friends reunion ',
//     date: 2018,
//     rating: 8.5,
//     isValid: true
// });

// friends.save()
//     .then(() => {
//         console.log('data stored in db');
//     })
//     .catch((e) => {
//         console.log(e);
//     });

// Movie.create({
//     name: "validate",
//     date: 2020,
//     rating: 9.2,
//     isValid: false
// })



//   -------------------validation error--------------
// Movie.create({
//     date: 2020,
//     rating: 9.2,
//     isValid: false
// })



// Movie.create([{},{},{},...])


// Movie.insertMany([{
//         name: "first",
//         date: 2017,
//         rating: 6.2,
//         isValid: true
//     },
//     {
//         name: "second",
//         date: 2019,
//         rating: 9.5,
//         isValid: false
//     },
//     {
//         name: "third",
//         date: 2022,
//         rating: 7.7,
//         isValid: true
//     }
// ])