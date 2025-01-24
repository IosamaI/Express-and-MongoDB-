
const mangooes = require('mongoose');
const Product = require('./models/product');  // must be after mongooes
// Connect to MongoDB
mangooes.connect('mongodb://localhost:27017/shopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(' Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB:', err));





// Define an array of products with additional items
const products = [
    {
        name: 'Apple',
        price: 1.5,
        description: 'A juicy red apple',
        image: 'https://example.com/apple.jpg',
        category: 'fruit',
        quantity: 100
    },
    {
        name: 'Carrot',
        price: 0.8,
        description: 'A fresh organic carrot',
        image: 'https://example.com/carrot.jpg',
        category: 'vegetable',
        quantity: 50
    },
    {
        name: 'Milk',
        price: 3.5,
        description: 'One liter of dairy milk',
        image: 'https://example.com/milk.jpg',
        category: 'dairy',
        quantity: 200
    },
    {
        name: 'Banana',
        price: 1.2,
        description: 'A bunch of ripe bananas',
        image: 'https://example.com/banana.jpg',
        category: 'fruit',
        quantity: 75
    },
    {
        name: 'Broccoli',
        price: 1.0,
        description: 'Fresh green broccoli',
        image: 'https://example.com/broccoli.jpg',
        category: 'vegetable',
        quantity: 40
    },
    {
        name: 'Cheese',
        price: 4.5,
        description: 'Cheddar cheese block',
        image: 'https://example.com/cheese.jpg',
        category: 'dairy',
        quantity: 60
    },
    {
        name: 'Orange',
        price: 2.0,
        description: 'A bag of sweet oranges',
        image: 'https://example.com/orange.jpg',
        category: 'fruit',
        quantity: 80
    },
    {
        name: 'Spinach',
        price: 1.5,
        description: 'Fresh spinach leaves',
        image: 'https://example.com/spinach.jpg',
        category: 'vegetable',
        quantity: 30
    },
    {
        name: 'Yogurt',
        price: 2.5,
        description: 'Greek yogurt cup',
        image: 'https://example.com/yogurt.jpg',
        category: 'dairy',
        quantity: 90
    }
];

// Insert the sample data into MongoDB
Product.insertMany(products)
    .then(data => {
        console.log('Products added:', data);
    })
    .catch(err => {
        console.error('Error adding products:', err);
    });