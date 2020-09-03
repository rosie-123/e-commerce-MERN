const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    quantity: {
        type: Number,
        default: 1,
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
        required: true,
    },
    itemType: {
        type: String,
        required: true,
    }
})

const Product = mongoose.model('products', productSchema);

module.exports = Product;