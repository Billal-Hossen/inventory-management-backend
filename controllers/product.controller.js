
const { getProductService,
  createProductService,
  updateProductService,
  BbulkUpdateProductService,
  deleteSingleProductService,
  BbulkDeleteProductService
} = require("../services/product.service")
module.exports.getAllProducts = async (req, res) => {
  try {

    const products = await getProductService()
    res.status(200).json({
      success: true,
      data: products,

    })
  } catch (error) {
    res.status(200).json({
      success: false,
      message: "Can't get data",
      error: error.message


    })
  }
}

module.exports.createProduct = async (req, res, next) => {
  console.log(req.body)

  try {
    const result = await createProductService(req.body)
    console.log(result)
    if (result) {
      res.status(200).json({
        success: true,
        message: "Created product Successfully.",
        data: result
      })
    } else {
      res.status(401).json({
        success: false,
        message: "Not created product Successfully.",

      })
    }


  } catch (error) {
    res.status(200).json({
      success: false,
      message: "Not created product Successfully.",
      error: error.message
    })
  }

}

exports.updateSingleProductController = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await updateProductService(id, req.body);
    res.status(200).json({
      success: true,
      message: "Updated Successfully."
    })

  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Can't updated product",
      error: error.message
    })
  }
}


exports.bulkUpdateProductController = async (req, res) => {
  try {


    const product = await BbulkUpdateProductService(req.body);
    res.status(200).json({
      success: true,
      message: "Updated Successfully."
    })

  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Can't updated product",
      error: error.message
    })
  }
}




exports.deleteSingleProductController = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await deleteSingleProductService(id,);
    res.status(200).json({
      success: true,
      message: "Deleted Successfully."
    })

  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Can't deleted product",
      error: error.message
    })
  }
}


exports.bulkDeleteProductController = async (req, res) => {
  console.log(req.body.ids)
  try {


    const product = await BbulkDeleteProductService(req.body.ids);
    res.status(200).json({
      success: true,
      message: "Deleted Successfully Products."
    })

  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Can't deleted products",
      error: error.message
    })
  }
}

