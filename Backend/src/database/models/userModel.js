const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    paswword: {
        type: String,
        required: true
    },
    products: [
        {
            type: Object,
        }
    ]
});

const userModel = model('user', userSchema);

module.exports = userModel