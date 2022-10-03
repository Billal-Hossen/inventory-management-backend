const Product = require("../models/product.model")

exports.getProductService = async () => {
  const products = await Product.find({}, 'name quantity')
  return products;
}
exports.createProductService = async (data) => {

  const product = await Product.create(data)
  return product;
}

exports.updateProductService = async (id, data) => {

  // const result = await Product.updateOne({ _id: id }, { $set: data }, { runValidators: true });

  // another way for update
  const product = await Product.findById({ _id: id })
  const result = await product.set(data).save()
  return result;
}

exports.BbulkUpdateProductService = async (data) => {
  console.log(data.products)
  const products = []
  data.products.map(product => {
    console.log(product)
    products.push(Product.updateOne({ _id: product.id }, product.data, { runValidators: true }))

  });
  const result = await Promise.all(products)
  return result;
}