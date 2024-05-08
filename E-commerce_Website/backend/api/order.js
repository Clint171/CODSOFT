const schema = require("../schema/schema.js");

let createOrder = (req, res) => {
    let order = new schema.Order({
        products: req.body.products
    });
    order.amount = 0;
    order.products.forEach(async (product) => {
        let productDetails = await schema.Product.findById(product.productId);
        order.amount += productDetails.price * product.quantity;
    });
    order.deliveryStatus = "Pending";
    order.payment = "Pending";
    order.save();
    res.json(order);
}

let checkOut = async (req, res) => {
    let order = await schema.Order.findById(req.params.id);
    if(!order){
        res.sendStatus(404);
    }
    if(!order.products){
        res.sendStatus(400);
    }
    
    //! Not checking for userId for development only
    //todo : Uncomment the below code for production
    // if(!order.userId){
    //     order.userId = req.body.userId;
    // }
    let payment = new schema.Payment({
        userId : order.userId || null, //! Null is for development only
        orderId : order._id,
        amount : order.amount,
        status  : "Pending"
    });
    payment.save();
    order.payment = "Done";
    order.save();
    res.json(order);
};

module.exports = {
    createOrder,
    checkOut
};