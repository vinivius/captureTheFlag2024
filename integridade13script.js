const fs = require('fs');
// Path to the file
const filePath = 'flag.txt';

// Read the contents of the flag.txt file
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.log('Error reading file');
        return;
    }
    console.log(data);
});
