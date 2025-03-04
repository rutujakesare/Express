const express = require('express');
const app = express();
const PORT = 4000;

// Import Routers
const productRoutes = require('./routes/products');
const categoryRoutes = require('./routes/categories');
const bookRoutes = require('./routes/books');

// Middleware to parse JSON requests
app.use(express.json());

// Logging Middleware
app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
});

// Use Routers
app.use('/products', productRoutes);
app.use('/categories', categoryRoutes);
app.use('/books', bookRoutes);

// Wildcard route for undefined paths
app.all('*', (req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});