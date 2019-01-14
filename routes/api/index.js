const router = require("express").Router();
const residentsRoutes = require("./residents");

// Book routes
router.use("/residents", residentsRoutes);

module.exports = router;
