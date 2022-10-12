const { createStoreService, getStoresService, getStoreByIdService, updateStoreService } = require("../services/store.service")

exports.craeteStoreController = async (req, res, next) => {
  try {
    const result = await createStoreService(req.body)
    res.status(200).json({
      success: true,
      data: result,
      message: "Successfully created Store."
    })
  } catch (error) {

    res.status(400).json({
      success: false,
      message: "Not create new Store",
      error: error.message
    })

  }
}
exports.getStoresController = async (req, res, next) => {
  try {
    const result = await getStoresService()
    res.status(200).json({
      success: true,
      data: result,
      message: "All of the Stores show here."
    })
  } catch (error) {

    res.status(400).json({
      success: false,
      message: "Threre is no Store here.",
      error: error.message
    })

  }
}
exports.getStoreByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getStoreByIdService(id);
    if (!result) {
      return res.status(400).json({
        success: false,
        error: "Couldn't find the id of Store"
      })
    }
    res.status(200).json({
      success: true,
      data: result,
      message: "id  of the Store show here."
    })
  } catch (error) {

    res.status(400).json({
      success: false,
      message: "Threre is no Store here.",
      error: error.message
    })

  }
}
exports.updateStoreController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await updateStoreService(id, req.body);

    if (!result.modifiedCount) {
      return res.status(400).json({
        success: false,
        error: "Couldn't updated the Store"
      })
    }
    res.status(200).json({
      success: true,

      message: "Successfully updated the Store."
    })
  } catch (error) {

    res.status(400).json({
      success: false,
      message: "Threre is no Store here.",
      error: error.message
    })

  }
}