const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");
const search = require("../../services/scrape");

// Matching with "/api/articles"
router.route("/search/:topic/:start/:end")
    .get(search.getArticles)

router.route("/saved")
    .get(articlesController.findAll)
    .post(articlesController.create);

// Matches with "/api/articles/:id"
router.route("/saved/:id")
    .delete(articlesController.remove);

