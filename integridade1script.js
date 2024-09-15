const fs = require('fs');

// Read the file asynchronously
fs.readFile('flag.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log('File contents:', data);
});
