const express = require('express');
const router = express.Router();

// GET /books - Respond with a message
router.get('/', (req, res) => {
    console.log("GET request received at /books");
    res.send("Here is the list of books!");
});

// POST /books - Log received book data and respond
router.post('/', (req, res) => {
    console.log("POST request received at /books with data:", req.body);
    res.send("Book has been added!");
});

module.exports = router;
