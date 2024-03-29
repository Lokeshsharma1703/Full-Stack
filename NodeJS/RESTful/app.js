// npm install uuid
const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override');
const { v4: uuidv4 } = require('uuid');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true })); // middleware function
app.use(methodOverride('_method')); // middleware function for method override


let comments = [{
        id: uuidv4(),
        user: "john",
        text: "this is john's comment"
    },
    {
        id: uuidv4(),
        user: "doe",
        text: "this is doe's comment"
    },
    {
        id: uuidv4(),
        user: "Dennis",
        text: "this is Dennis's comment"
    },
    {
        id: uuidv4(),
        user: "Ritche",
        text: "this is Ritche's comment"
    }
];

// list all comments
app.get('/comments', (req, res) => {
    res.render('index', { comments });
})

// Display the form to create new comment
app.get('/comments/new', (req, res) => {
    res.render('new');
})

// add new comment and redirect to /comments
app.post('/comments', (req, res) => {
    const newComment = req.body;
    newComment.id = uuidv4();
    comments.push(newComment);

    res.redirect('/comments');
})

// show particular comment
app.get('/comments/:commentid', (req, res) => {
    const { commentid } = req.params;

    const comment = comments.find((comment) => comment.id === commentid);
    res.render('onlyComment', { comment });
})

// edit particular comment
app.get('/comments/:commentid/edit', (req, res) => {
    const { commentid } = req.params;

    const comment = comments.find((comment) => comment.id === commentid);
    res.render('edit', { comment });
})

// edit and save
// npm install method-override
app.patch('/comments/:commentid', (req, res) => {
    const { commentid } = req.params;

    const comment = comments.find((comment) => comment.id === commentid);
    comment.user = req.body.user;
    comment.text = req.body.text;


    res.redirect('/comments');
})

// delete comment
app.delete('/comments/:commentid', (req, res) => {
    comments = comments.filter((comm) => comm.id != req.params.commentid);
    res.redirect('/comments');
})


app.listen(4000, () => {
    console.log("server listen at port 4000");
});