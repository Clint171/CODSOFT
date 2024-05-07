const schema = require("../schema/schema.js");

let createOrder = (req, res) => {
    let order = new schema.Order({
        userId: req.body.userId,
        products: req.body.products,
    });
    order.amount = order.calculateAmount();
    order.deliveryStatus = "Pending";
    order.paymentStatus = "Pending";

    order.save();
    res.json(order);
}