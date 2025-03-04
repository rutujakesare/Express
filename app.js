const express = require('express');
const app = express();
const PORT = 4000;

// Middleware to parse JSON requests
app.use(express.json());

// Logging Middleware
app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
});

// Routes
app.get('/products', (req, res) => {
    res.send('Here is the list of all products.');
});

app.post('/products', (req, res) => {
    res.send('A new product has been added.');
});

app.get('/categories', (req, res) => {
    res.send('Here is the list of all categories.');
});

app.post('/categories', (req, res) => {
    res.send('A new category has been created.');
});

// Wildcard route for undefined paths
app.all('*', (req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
