const express = require('express')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')

// middlewares
app.use(express.json())
app.use(cors())

//Routers
const ProductRouter = require("./routers/product.router")



app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});
// create product route
app.use('/api/v1/product', ProductRouter)

// exports app module
module.exports = app;
