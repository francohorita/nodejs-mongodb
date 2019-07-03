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
        if (err) return next(err)

        res.send("Product Created successfully")
        console.log("Create:" + product)
    })
}

//Get Controller
exports.product_details = function (req, res, next) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err)
        
        res.send(product)
        console.log("Get:" + product)
    })
}

//Update Controller
exports.product_update = function (req, res, next) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err)

        res.send("Product udpated.")
        console.log("Update:" + product)
    })
}

//Query Controller
exports.product_query = function (req, res, next) {
    Product.find({}, function (err, products) {
        if (err) return next(err)
        
        res.send(products)
        console.log("Get:" + products)
    })
}