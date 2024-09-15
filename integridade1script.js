const express = require('express');
const path = require('path');
const app = express();
const PORT = 3001;

// Serve the flag.txt file when the root route is accessed
app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'flag.txt');
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error('Error sending file:', err);
            res.status(500).send('Error serving file.');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
