const express = require("express");
const product = require("../api/product.js");

const router = express.Router();

router.get("/", product.getProducts); //works
router.get("/:id", product.getProduct); // works
router.post("/", product.createProduct); // works
router.put("/:id", product.updateProduct); // works
router.delete("/:id", product.deleteProduct); // works
router.get("/search/:name", product.searchProducts); //works
router.get("/price/:price", product.getProductsByPrice);
router.get("/categories", product.getProductsByCategories);

module.exports = router;