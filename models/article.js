const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
})

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;