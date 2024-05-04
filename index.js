const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

let visitCount = 0;  // This holds the count of visits

// Endpoint to increment and return the visit count
app.get('/', (req, res) => {
    visitCount += 1;
    res.send(`This page has been visited ${visitCount} times`);
});

// Endpoint to retrieve the current count without incrementing
app.get('/count', (req, res) => {
    res.json({ count: visitCount });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));