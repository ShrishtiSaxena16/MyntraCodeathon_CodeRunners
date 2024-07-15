const express = require('express');
const cors = require('cors');
const products = require('./data/products');

const app = express();
const port = 5000;

app.use(cors());

app.get('/api/products', (req, res) => {
    res.json(products);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
