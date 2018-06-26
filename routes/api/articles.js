const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");
const search = require("../../services/scrape");

// Matching with "/api/articles/search/?"
router.route("/search/?")
    .get(search)
//
router.route("/saved")
    .get(articlesController.findAll)
    .post(articlesController.create);

// Matches with "/api/articles/:id"
router.route("/saved/:id")
    .delete(articlesController.remove);

module.exports = router;
