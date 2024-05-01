const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(process.env.MONGO_URL , {
    dbName : ecommmerce
});

const db = mongoose.connection;

db.on("error" , ()=>{
    console.log("Error connecting to database");
});

db.once("open" , ()=>{
    console.log("Database connected successfully");
});

const app = express();

const port = process.env.PORT || 3000;



app.listen(port , ()=>{
    console.log("App listening on port: "+ port);
})