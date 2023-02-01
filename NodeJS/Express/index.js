// npm init -y
// npm install express

const express = require('express');
const app = express();

// app.get('/', (req, res) => {
//     res.send('hello world');
// });
const port = 5000;

// app.use((req, res) => {
//     console.log('server running');
// })



// routing
app.get('/', (req, res) => {
    res.send('<h1>Express JS</h1>');
})


app.get('/r/:subreddit', (req, res) => {
    console.log(req.params);
    const { subreddit } = req.params;

    res.send(`you are watching ${subreddit}`);
})

// app.get('*', (req, res) => {
//     res.send('you are at wrong page!');
// })


app.get('/search', (req, res) => {
    const { q } = req.query;
    console.log(req.query); // query : key value pair
    res.send(`Jai shree Ram ${q}`);
})


app.listen(port, () => {
    console.log(`server is running at ${port}`);
});