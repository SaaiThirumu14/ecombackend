const express=require("express")
const { getSingleProducts, getProducts } = require("../controller/productController")
const router=express.Router()

router.route('/products').get(getProducts)
router.route('/products/:id').get(getSingleProducts)

module.exports=router;