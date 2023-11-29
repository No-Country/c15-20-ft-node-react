const { Schema, model } = require('mongoose');

const serviceSchema = new Schema({
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
    price: {
        type: Number,
        required: true
    },
});

const serviceModel = model('service', serviceSchema);

module.exports = serviceModel