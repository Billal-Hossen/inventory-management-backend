const { createCategoryService, getCategoriesService, getCategoryByIdService, updateCategoryService } = require("../services/category.service")

exports.craeteCategoryController = async (req, res, next) => {
  try {
    const result = await createCategoryService(req.body)
    res.status(200).json({
      success: true,
      data: result,
      message: "Successfully created Category."
    })
  } catch (error) {

    res.status(400).json({
      success: false,
      message: "Not create new Category",
      error: error.message
    })

  }
}
exports.getCategoriesController = async (req, res, next) => {
  try {
    const result = await getCategoriesService()
    res.status(200).json({
      success: true,
      data: result,
      message: "All of the Categories show here."
    })
  } catch (error) {

    res.status(400).json({
      success: false,
      message: "Threre is no Category here.",
      error: error.message
    })

  }
}
exports.getCategoryByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getCategoryByIdService(id);
    if (!result) {
      return res.status(400).json({
        success: false,
        error: "Couldn't find the id of Category"
      })
    }
    res.status(200).json({
      success: true,
      data: result,
      message: "id  of the Category show here."
    })
  } catch (error) {

    res.status(400).json({
      success: false,
      message: "Threre is no Category here.",
      error: error.message
    })

  }
}
exports.updateCategoryController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await updateCategoryService(id, req.body);

    if (!result.modifiedCount) {
      return res.status(400).json({
        success: false,
        error: "Couldn't updated the Category"
      })
    }
    res.status(200).json({
      success: true,

      message: "Successfully updated the Category."
    })
  } catch (error) {

    res.status(400).json({
      success: false,
      message: "Threre is no Category here.",
      error: error.message
    })

  }
}