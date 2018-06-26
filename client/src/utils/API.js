import axios from "axios";

export default {
  // Gets all saved articles
  getSavedArticles: function() {
    return axios.get("/api/articles/saved");
  },
  // Stores an article into the database
  saveArticle: function(articleData) {
    return axios.post("/api/articles/saved", articleData);
  },
  // Deletes the article with the given id
  deleteSavedArticle: function(id) {
    return axios.delete("/api/articles/saved/" + id);
  },
  // Grabs the articles matching the given search params
  searchArticles: function(topic, start, end) {
    return axios.get(`/api/articles/?topic=${topic}&start=${start}&end=${end}`);
  }
};
