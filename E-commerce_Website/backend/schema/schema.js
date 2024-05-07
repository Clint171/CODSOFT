const e = require("express");
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name : String,
    description : String,
    price : Number,
    image : String
});

const Product = mongoose.model("Product" , productSchema);

const categorySchema = new mongoose.Schema({
    name : String,
    products : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Product"
    }]
});

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
});

const User = mongoose.model("User" , userSchema);

const orderSchema = new mongoose.Schema({
    userId : String,
    products : [{
        productId : String,
        quantity : Number
    }],
    amount : Number,
    deliveryStatus : {
        type : String,
        default : "pending",
        enum : ["pending" , "shipped"]
    },

    payment : {
        type : String,
        default : "pending",
        enum : ["pending" , "done"]
    }
});

const Order = mongoose.model("Order" , orderSchema);

const paymentSchema = new mongoose.Schema({
    userId : String,
    orderId : String,
    amount : Number,
    status : {
        type : String,
        default : "pending",
        enum : ["pending" , "done"]
    },
    date : {
        type : Date,
        default : Date.now
    }
});

const reviewSchema = new mongoose.Schema({
    userId : String,
    productId : String,
    review : String,
    rating : Number
});

const Review = mongoose.model("Review" , reviewSchema);

// //mock data

// const product1 = new Product({
//     name : "Laptop",
//     description : "This is a laptop",
//     price : 1000,
//     category : "electronics",
//     image : "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/48/0782091/1.jpg?7168"
// });

// const product2 = new Product({
//     name : "Headphones",
//     description : "This is a headphone",
//     price : 100,
//     category : "electronics",
//     image : "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/50/6522251/1.jpg?9010"
// });

// const product3 = new Product({
//     name : "Mobile",
//     description : "This is a mobile",
//     price : 500,
//     category : "electronics",
//     image : "https://ke.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/0308071/1.jpg?0267"
// });

// const user1 = new User({
//     name : "John",
//     email : "john@email.com",
//     password : "john123"
// });

// const user2 = new User({
//     name : "Doe",
//     email : "doe@email.com",
//     password : "doe123"
// });

// const order1 = new Order({
//     userId : user1.id,
//     products : [{productId : product1.id , quantity : 2}],
//     amount : 2000
// });

// const order2 = new Order({
//     userId : user2.id,
//     products : [{productId : product2.id , quantity : 1}],
//     amount : 100
// });

// const review1 = new Review({
//     userId : user1.id,
//     productId : product1.id,
//     review : "This is a good product",
//     rating : 4
// });

// product1.save();
// product2.save();
// product3.save();
// user1.save();
// user2.save();
// order1.save();
// order2.save();
// review1.save();

module.exports = {
    Product,
    User,
    Order,
    Review
}