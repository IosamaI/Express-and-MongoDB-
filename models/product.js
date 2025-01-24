const { default: mongoose } = require('mongoose');
const mangooes = require('mongoose');



const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        min: 0,
        required: true
    },
    description: String,
    image: String,
    category: {
        type: String,
        enum: ['fruit', 'vegetable', 'dairy']

    },
    quantity: Number
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
