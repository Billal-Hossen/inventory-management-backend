const Store = require("../models/store.model")
exports.createStoreService = async (data) => {

  const store = await Store.create(data)
  return store;
}
exports.getStoresService = async () => {

  const store = await Store.find({})
  return store;
}
exports.getStoreByIdService = async (id) => {

  const store = await Store.findOne({ _id: id })
  return store;
}
exports.updateStoreService = async (id, data) => {

  const result = await Store.updateOne({ _id: id }, data, { runValidators: true })

  return result;
}