const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.get('/get', (req, res) => {

    console.log(req.query);

    res.render('index');
})


app.listen(4000, () => {
    console.log("server listen at port 4000");
});