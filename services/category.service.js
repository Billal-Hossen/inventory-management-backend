const Category = require("../models/category.model")
exports.createCategoryService = async (data) => {

  const category = await Category.create(data)
  return category;
}
exports.getCategoriesService = async () => {

  const category = await Category.find({}).select("-products -suppliers")
  return category;
}
exports.getCategoryByIdService = async (id) => {

  const category = await Category.findOne({ _id: id })
  return category;
}
exports.updateCategoryService = async (id, data) => {

  const result = await Category.updateOne({ _id: id }, data, { runValidators: true })

  return result;
}