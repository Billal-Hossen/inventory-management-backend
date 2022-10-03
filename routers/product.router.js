


const router = require('express').Router()
const { getAllProducts, createProduct, updateProductController, bulkUpdateProductController, } = require('../controllers/product.controller')

router.route("/").get(getAllProducts).post(createProduct);
router.route("/bulk-update").patch(bulkUpdateProductController)
router.route('/:id').patch(updateProductController)

module.exports = router;