const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Home Route
app.get('/', (req, res) => {
    res.send('Welcome to My Express Server!');
});

// GET Route Example
app.get('/hello', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

// POST Route Example
app.post('/data', (req, res) => {
    const { name, age } = req.body;
    res.json({ message: `Received data - Name: ${name}, Age: ${age}` });
});

// PUT Route Example
app.put('/update', (req, res) => {
    res.json({ message: 'PUT request received' });
});

// DELETE Route Example
app.delete('/delete', (req, res) => {
    res.json({ message: 'DELETE request received' });
});

// Middleware for 404 - Not Found
app.use((req, res) => {
    res.status(404).json({ error: 'Route Not Found' });
});

// Start the Server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
