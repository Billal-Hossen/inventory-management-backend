const router = require('express').Router()

const { craeteCategoryController, getCategoriesController, getCategoryByIdController, updateCategoryController } = require("../controllers/category.controller");




router.route("/").post(craeteCategoryController).get(getCategoriesController);
router.route("/:id").get(getCategoryByIdController).patch(updateCategoryController)

module.exports = router;