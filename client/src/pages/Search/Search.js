import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Search extends Component {
  state = {
    articles: []
  };

  render() {
    return (
      <Container>
      <Jumbotron 
      	title = "New York Times Article Scraper"
      	lead = "Search for and save interesting articles!"
      	fontawesome = "fas fa-search"
      />
        
      </Container>
    );
  }
}

export default Search;
