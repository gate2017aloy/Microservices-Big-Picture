const express = require('express')
const {homePageParamRenderer, homePageQueryRenderer, homePageRender} = require("../routes/home");

const homeRouter = express.Router()

homeRouter.get('/', homePageRender)
homeRouter.get('/?*', homePageQueryRenderer)
homeRouter.get('/:id', homePageParamRenderer)

module.exports = homeRouter
