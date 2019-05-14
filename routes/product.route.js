const express = require("express")
const router = express.Router()
const product_controller = require("../controllers/product.controller")

// List of Product Routes
router.get("/test", product_controller.test) //Test
router.post("/create", product_controller.product_create) //Create
router.get('/:id', product_controller.product_details) //Get

module.exports = router