const http = require('http');


const server = http.createServer((req, res) => {
    const cookies = req.headers.cookie;

    if (cookies) {
        console.log('Cookies:', cookies);
        res.end('Cookies found!');
    } else {
        console.log('No cookies found.');
        res.end('No cookies found.');
    }
});


server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
