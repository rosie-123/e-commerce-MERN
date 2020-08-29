const express = require("express")
const router = express.Router();
const Product = require("../models/Product");

router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        console.log(products);
        res.send(products);
    } catch(err) {
        res.send(err.message);
    }
})

router.post('/new', (req, res) => {
    Product.create(req.body)
    .then(newProduct => {
        res.status(200).json(newProduct);
    })
    .catch(err => {
        res.send({message: err});
    })
})

module.exports = router;