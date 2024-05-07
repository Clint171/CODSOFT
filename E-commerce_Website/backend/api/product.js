const schema = require("../schema/schema");

let createProduct = (req, res) => {
    let product = new schema.Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        image: req.body.image
    });
    product.save();
    res.json(product);
}

let getProducts = async (req, res) => {
    let products = await schema.Product.find();

    res.json(products);
}

let getProduct = async (req, res) => {
    let product = await schema.Product.findById(req.params.id);
    res.json(product);
}

let updateProduct = async (req, res) => {
    let product = await schema.Product.findById(req.params.id);
    product.name = req.body.name;
    product.price = req.body.price;
    product.description = req.body.description;
    product.save();
    res.json(product);
}

let deleteProduct = async (req, res) => {
    let product = await schema.Product.findByIdAndDelete(req.params.id);
    res.sendStatus(200)
}

let searchProducts = async (req, res) => {
    let products = await schema.Product.find({name: new RegExp(req.params.name, "i")});
    res.json(products);
}

let getProductsByPrice = async (req , res) => {
    if(req.params.price !== "asc" || req.params.price !== "desc") return res.sendStatus(400);
    let products = await schema.Product.find({}).sort({price : req.params.price});
    res.json(products);
}

let getProductsByCategories = async (req, res) => {
    try{
        let categories = await schema.Product.find().distinct("category");

        let products = []
        for (let i = 0; i < categories.length; i++) {
            let product = await schema.find({category: categories[i]});
            products.push(product);
        }
        res.json(products);
    } catch(e) {
        console.log(e);
        res.sendStatus(500);
    }
}

module.exports = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
    searchProducts,
    getProductsByPrice,
    getProductsByCategories
}