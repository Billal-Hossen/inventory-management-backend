const router = require('express').Router()

const { craeteBrandController, getBrandsController, getBrandByIdController, updateBrandController } = require("../controllers/brand.controller");




router.route("/").post(craeteBrandController).get(getBrandsController);
router.route("/:id").get(getBrandByIdController).patch(updateBrandController)

module.exports = router;