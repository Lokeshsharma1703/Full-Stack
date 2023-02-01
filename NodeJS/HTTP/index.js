const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/home') {
        // res.write('Hello world');
        res.write('<h1>Welcome to http request</h1>');
        res.end();
    } else if (req.url === '/contact') {
        res.write('<h1>Welcome to contact page</h1>');
        res.end();
    } else {
        // res.write('error! you are at wrong page');
        // res.end();
        // res.all('error! you are at wrong page');
        res.end('error! you are at wrong page');
    }
});

server.listen(5000) //constantly listening on that port    (2000-9000)

console.log("server is running on port 5000");