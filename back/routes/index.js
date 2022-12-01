const express = require("express")
const router = express.Router()
const userRoutes = require("./users")
const authAPI = require("./auth");
const adminRoutes = require("./admin")
const propertyRoutes = require("../routes/properties")

router.use("/auth", authAPI);

router.use("/admin", adminRoutes)

router.use("/properties", propertyRoutes)

router.use("/users", userRoutes)
module.exports = router;