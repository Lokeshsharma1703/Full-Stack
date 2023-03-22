const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

router.get('/products', async(req, res) => {

    const products = await Product.find();


    res.render('./products/product', { products });
})

router.get('/products/new', (req, res) => {
    res.render('./products/new');
})

router.post('/products', async(req, res) => {
    const product = req.body;
    await Product.create(product);

    req.flash('success', 'your product has been created successfully');

    res.redirect('/products');
})

router.get('/products/:productid', async(req, res) => {
    const { productid } = req.params;
    const product = await Product.findById(productid).populate('review');


    res.render('./products/show', { product });
})

router.get('/products/:productid/edit', async(req, res) => {
    const { productid } = req.params;
    const product = await Product.findById(productid);


    res.render('./products/edit', { product });
})

router.patch('/products/:productid', async(req, res) => {
    const { productid } = req.params;
    const { name, img, price, description } = req.body;

    const p = await Product.findByIdAndUpdate(productid, { name, img, price, description });

    req.flash('success', 'your product has been updated');

    res.redirect('/products');
})


router.delete('/products/:productid', async(req, res) => {
    const { productid } = req.params;

    await Product.findByIdAndDelete(productid);

    res.redirect('/products');
})


module.exports = router;