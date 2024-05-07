const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

//routers
const productRouter = require("./routers/product.js");
const categoryRouter = require("./routers/category.js");

dotenv.config();

const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL , {
    dbName : "ecommerce"
});

const db = mongoose.connection;

db.on("error" , ()=>{
    console.log("Error connecting to database");
});

db.once("open" , ()=>{
    console.log("Database connected successfully");
});

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use("/api/products" , productRouter);
app.use("/api/categories" , categoryRouter);

app.listen(port , ()=>{
    console.log("App listening on port: "+ port);
});