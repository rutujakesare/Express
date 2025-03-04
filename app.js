const express = require("express");

const app = express();
const PORT = 5000;

// Custom Middleware
const addUserMiddleware = (req, res, next) => {
    req.user = "Guest"; 
    next();
};

// Home Route (Optional)
app.get("/", (req, res) => {
    res.send("<h1>Home Page</h1>");
});

// Welcome Route with Middleware
app.get("/welcome", addUserMiddleware, (req, res) => {
    res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
