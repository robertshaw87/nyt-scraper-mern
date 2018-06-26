const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    article_title: {
        type: String,
        required: true
    },
    article_description: {
        type: String,
        required: true
    },
    article_img: {
        type: String,
        required: true
    },
    article_url: {
        type: String,
        required: true
    },
    article_date: {
        type: Date,
        required: true
    }
})

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;