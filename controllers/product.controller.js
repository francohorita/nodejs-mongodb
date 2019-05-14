const Product = require("../models/product.model")

//Test controller
exports.test = function (req, res, next) {
    const testMessage = "Greetings from the Test controller!"
    
    res.send(testMessage)
    console.log(testMessage)
}

//Create Controller
exports.product_create = function (req, res, next) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err)
            return next(err)

        res.send("Product Created successfully")
        console.log("Create:" + product)
    })
}

//Get Controller
exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err)
        
        res.send(product)
        console.log("Get:" + product)
    })
}

//Update Controller
exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err)

        res.send("Product udpated.")
        console.log("Update:" + product)
    })
}