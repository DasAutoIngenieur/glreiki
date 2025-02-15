// Import the necessary modules
const express = require('express');
const path = require('path');

// Create an Express app
const app = express();

// Define the port
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Define the routes (if you have multiple HTML pages)
// This is optional if you just want to serve index.html as the default
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// You can add more routes here if you have multiple pages
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});


app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'location.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
