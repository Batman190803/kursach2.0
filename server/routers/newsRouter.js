const express = require('express')
const {getNews, showImg} = require("../controllers/newsController");
const newsRouter = express.Router()

newsRouter.get('/news', getNews)
newsRouter.get('/news/:imagename', showImg)

module.exports = newsRouter