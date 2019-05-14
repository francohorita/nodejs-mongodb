//app.js
const express = require("express")
const bodyParser = require("body-parser")
const product = require("./routes/product.route") // Imports routes for the products
const dbUserName = "remotefh94"
const dbPassword = "pass"

// Set up mongoose connection
const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://"+dbUserName+":"+dbPassword+"@cluster0-jagvp.mongodb.net/test?retryWrites=true", {useNewUrlParser: true})
mongoose.Promise = global.Promise

let db = mongoose.connection

db.on("connected", console.info.bind(console, "Connected to MongoDB as "+dbUserName+"!"))
db.on("error", console.error.bind(console, "MongoDB connection error:"))
db.on("disconnected", console.info.bind(console, "Disconnected from MongoDB..."))

//Create express App
const app = express()
let port = 1234
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/products", product);

//Start App
app.listen(port, () => {
    console.log("Server is up and running on port numner " + port);
})