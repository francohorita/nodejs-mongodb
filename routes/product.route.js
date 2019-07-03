const express = require("express")
const router = express.Router()
const product_controller = require("../controllers/product.controller")

// List of Product Routes
router.get("/test", product_controller.test) //Test
router.get("/query/all", product_controller.product_query) //Query
router.post("/create", product_controller.product_create) //Create
router.get("/:id", product_controller.product_details) //Get
router.put("/:id/update", product_controller.product_update) //Update

module.exports = router