const express = require("express")
const router = express.Router()
const product_controller = require("../controllers/product.controller")

// List of valid URLs
router.get("/test", product_controller.test)
router.post("/create", product_controller.product_create)

module.exports = router