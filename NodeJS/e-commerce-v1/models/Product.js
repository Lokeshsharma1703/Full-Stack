const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String
    },
    img_url: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    }
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;