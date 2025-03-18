const net = require('net');
const client = net.createConnection({ port: 8081 }, () => {
    console.log('Connected to server');
});
client.on('data', (data) => {
    console.log(data.toString());
});
client.on('end', () => {
    console.log('Disconnected from server');
});
process.stdin.on('data', (data) => {
    client.write(`Client: ${data}`);
});
 
const net = require('net');
const server = net.createServer((socket) => {
    console.log('Client connected');
    socket.on('data', (data) => {
        console.log(`Client: ${data}`);
    });
    socket.on('end', () => {
        console.log('Client disconnected');
    });
    process.stdin.on('data', (data) => {
        socket.write(`Server: ${data}`);
    });
});
server.listen(8081, () => {
    console.log('Server listening on port 8080');
});

//  -----------------------------------------

const http = require('http');
const querystring = require('querystring');
const message = 'Hello, this is a test message';
const options = {
    hostname: 'localhost',
    port: 8081,
    path: `/?${querystring.stringify({ message })}`,
    method: 'GET'
};
const req = http.request(options, (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        console.log(data);
    });
});
req.on('error', (error) => {
    console.error(error);
});
req.end();
 
const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const message = parsedUrl.query.message;
    if (message) {
        const wordCount = message.split(' ').length;
        const charCount = message.length;
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Word Count: ${wordCount}\nCharacter Count: ${charCount}`);
    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <html>
                <body>
                    <form action="/" method="get">
                        <label for="message">Enter a message:</label><br>
                        <input type="text" id="message" name="message"><br>
                        <input type="submit" value="Submit">
                    </form>
                </body>
            </html>
        `);
    }
});
server.listen(8081, () => {
    console.log('Server listening on port 8081');
});
 
