import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import ArticleCard from "../../components/ArticleCard";

class Saved extends Component {
  state = {
    savedArticles: []
  };

  componentDidMount() {
    this.getSavedArticles();
  }

  getSavedArticles = () => 
    API.getSavedArticles()
      .then(res => this.setState({savedArticles: res.data}))
      .catch(err => console.log(err))

  deleteArticle = id => 
    API.deleteSavedArticle(id)
      .then(res => this.getSavedArticles())
      .catch(err => console.log(err));

  render() {
    return (
      <Container>
        <Jumbotron 
          title = "Saved New York Times Articles"
          lead = "Here are your saved articles..."
          fontawesome = "fas fa-bookmark"
        />
          <Row className="justify-content-center">
          <Col size="10">
            {this.state.savedArticles.map((article, i) => (
              <ArticleCard 
                title = {article.title}
                description = {article.description}
                img = {article.img}
                url = {article.url}
                delete = {() => this.deleteArticle(article._id)}
                alreadySaved = {true}
                key = {i}
              />
            ))}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
