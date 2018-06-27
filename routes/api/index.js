const router = require("express").Router();
const articleRoutes = require("./articles");

// Book routes
router.use("/api/articles", articleRoutes);

module.exports = router;