const router = require('express').Router()

const { craeteStoreController, getStoresController, getStoreByIdController, updateStoreController } = require("../controllers/store.controller");




router.route("/").post(craeteStoreController).get(getStoresController);
router.route("/:id").get(getStoreByIdController).patch(updateStoreController)

module.exports = router;