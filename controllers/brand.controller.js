const { createBrandService, getBrandsService, getBrandByIdService, updateBrandService } = require("../services/brand.service")

exports.craeteBrandController = async (req, res, next) => {
  try {
    const result = await createBrandService(req.body)
    res.status(200).json({
      success: true,
      data: result,
      message: "Successfully created brand."
    })
  } catch (error) {

    res.status(400).json({
      success: false,
      message: "Not create new brand",
      error: error.message
    })

  }
}
exports.getBrandsController = async (req, res, next) => {
  try {
    const result = await getBrandsService()
    res.status(200).json({
      success: true,
      data: result,
      message: "All of the brans show here."
    })
  } catch (error) {

    res.status(400).json({
      success: false,
      message: "Threre is no brand here.",
      error: error.message
    })

  }
}
exports.getBrandByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getBrandByIdService(id);
    if (!result) {
      return res.status(400).json({
        success: false,
        error: "Couldn't find the id of brand"
      })
    }
    res.status(200).json({
      success: true,
      data: result,
      message: "id  of the bran show here."
    })
  } catch (error) {

    res.status(400).json({
      success: false,
      message: "Threre is no brand here.",
      error: error.message
    })

  }
}
exports.updateBrandController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await updateBrandService(id, req.body);

    if (!result.modifiedCount) {
      return res.status(400).json({
        success: false,
        error: "Couldn't updated the brand"
      })
    }
    res.status(200).json({
      success: true,

      message: "Successfully updated the brand."
    })
  } catch (error) {

    res.status(400).json({
      success: false,
      message: "Threre is no brand here.",
      error: error.message
    })

  }
}