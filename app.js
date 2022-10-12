const express = require('express')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')

// middlewares
app.use(express.json())
app.use(cors())

//Routers
const ProductRouter = require("./routers/product.router")
const BrandRouter = require("./routers/brand.router")
const CategoryRouter = require("./routers/category.router")
const StoreRouter = require("./routers/store.router")



app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});
// create product route
app.use('/api/v1/product', ProductRouter)
app.use('/api/v1/brand', BrandRouter)
app.use('/api/v1/category', CategoryRouter)
app.use('/api/v1/store', StoreRouter)

// exports app module
module.exports = app;
