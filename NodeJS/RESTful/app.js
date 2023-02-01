const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

const comments = [{
        id: 0,
        user: "john",
        text: 'this is first comment'
    },
    {
        id: 1,
        user: "doe",
        text: 'this is second comment'
    },
    {
        id: 2,
        user: "Dennis",
        text: 'this is third comment'
    },
    {
        id: 3,
        user: "Ritche",
        text: 'this is fourth comment'
    }
];

app.get('/comments', (req, res) => {
    res.render('index', { comments });
})

app.get('/comments/new', (req, res) => {
    res.render('new');
})

app.post('/comments', (req, res) => {
    const newComment = req.body;
    newComment.id = comments.length;
    comments.push(newComment);
})


app.listen(4000, () => {
    console.log("server listen at port 4000");
});