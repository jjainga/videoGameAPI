const router = require("express").Router()

const Home = require("./homeRoute")


router.use(Home)


module.exports = router
  