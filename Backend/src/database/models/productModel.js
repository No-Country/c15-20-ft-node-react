const { Schema, model } = require('mongoose')

const productSchema = new Schema({
    imageUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: [{
        body: {
            type: string,
            required: true
        }
    }],
    price: Number,
});

const productModel = model('product', productSchema);

module.exports = productModel