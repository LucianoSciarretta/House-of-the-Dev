const express = require("express")
const router = express.Router()
const userRoutes = require("./users")
const authAPI = require("./auth");
const adminRoutes = require("./admin")


router.use("/admin", adminRoutes)

router.use("/auth", authAPI);

router.use("/users", userRoutes)
module.exports = router;