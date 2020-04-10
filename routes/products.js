const express = require('express');
const router = express.Router();
const Product = require('../models/Products');

//All products
router.get('/',async (req,res) =>{
    try {
        const product = await Product.find().limit();
        res.json(product);
    }catch(err){
        res.json({message: err});
    }

});

//save products
router.post('/', async (req,res) => {
    const product = new Product({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
    });
    try {
        const savedPost = await product.save();
        res.json(savedPost);        
    } catch (err) {
        res.json({ message: err });
    }

});

//product by id
router.get('/:prodId', async (req,res) => {
    try {
        const product = await Product.findById(req.params.prodId);
        res.json(product);
    } catch (err) {
        res.json({ message: err });
    }

});

//delete product
router.delete('/:prodId', async (req,res) => {
    try {
        const removedProd = await Product.deleteOne({_id: req.params.prodId});
        res.json(removedProd)
    } catch (err) {
        res.json({ message: err});
    }
})

//update product
router.patch('/:prodId', async (req,res) => {
    try {
        const updatedProd = await Product.updateOne
        ({ _id: req.params.prodId }, 
         { $set: { title: req.body.title }}
        );
        res.json(updatedProd);
    } catch (err) {
        res.json({ message: err});
    }
})

module.exports = router;