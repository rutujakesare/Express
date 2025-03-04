const express = require('express');
const app = express();
const PORT = 4000;

// Import Routers
const productRoutes = require('./routes/products');
const categoryRoutes = require('./routes/categories');

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

// Wildcard route for undefined paths
app.all('*', (req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1>');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});