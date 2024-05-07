const schema = require("../schema/schema.js");

let getCategories = (req, res) => {
    schema.Product.find().distinct("category", (err, categories) => {
        if (err) {
            res.status(500).json(err);
            return;
        }
        res.json(categories);
    });
}

let getProductsByCategory = (req, res) => {
    schema.Product.find({category: req.params.category}, (err, products) => {
        if (err) {
            res.status(500).json(err);
            return;
        }
        res.json(products);
    });
}

module.exports = {
    getCategories,
    getProductsByCategory
}