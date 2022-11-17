const express = require("express")
const router = express.Router()
const userRoutes = require("./users")

const authAPI = require("./auth");

router.use("/auth", authAPI);

router.use("/users", userRoutes)

module.exports = router;