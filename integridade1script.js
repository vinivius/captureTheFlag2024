const fs = require('fs');
const http = require('http');

// Path to the file
const filePath = 'flag.txt';

// Create a simple HTTP server
http.createServer((req, res) => {
    // Read the contents of the flag.txt file
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Error reading file');
            return;
        }

        // Send the file contents as the HTTP response
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
    });
}).listen(8080, () => {
    console.log('Server running at http://localhost:8080/');
});
