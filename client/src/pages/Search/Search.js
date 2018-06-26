import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import ArticleCard from "../../components/ArticleCard"

class Search extends Component {
  state = {
    articles: [],
    savedArticles: [],
    topic: "",
    start: "",
    end: ""
  };

  componentDidMount() {
    this.getSavedArticles();
  }

  checkSaved = article => {
    let alreadySaved = false;
    this.state.savedArticles.map((elem, i) => {
      if (elem.article_url === article.article_url)
        alreadySaved = true;
    })
    return alreadySaved;
  }

  getSavedArticles = () => 
    API.getSavedArticles()
      .then(res => this.setState({savedArticles: res.data}))
      .catch(err => console.log(err))

  handleInputChange = event => {
  	const { name,value } = event.target;
  	this.setState({
  		[name]: value
  	});
  };

  handleFormSubmit = event => {
  	event.preventDefault();

  	if (this.state.topic && this.state.start && this.state.end) {
  		let {topic, start, end} = this.state;
  		start = start.replace(/-/g,"");
  		end = end.replace(/-/g,"");

  		API.searchArticles(topic, start, end)
  		.then(res => this.setState({articles: res.data, topic:"", start:"", end:""}))
  		.catch(err => console.log(err));

  	};
  };

  saveArticle = index => {
    API.saveArticle(this.state.articles[index])
      .then(res => this.getSavedArticles())
      .catch(err => console.log(err))
  }

  render() {
    return (
      <Container>

	      <Jumbotron 
	      	title = "New York Times Article Scraper"
	      	lead = "Search for and save interesting articles!"
	      	fontawesome = "fas fa-search"
	      />
	      	<Row
	      	 className="justify-content-center mt-3">
	      	 <Col size="10">
	  		<form>
	  		<label>Topic</label>
	  		<Input
		  		 value = {this.state.title}
		  		 onChange = {this.handleInputChange}
		  		 name = "topic"
		  		 placeholder = "Enter a topic"
	  		 />
	  		 <label>Start Date</label>
	  		 <Input
	  		 	value ={this.state.start}
	  		 	onChange = {this.handleInputChange}
	  		 	name = "start"
	  		 	type = "date"
	  		 />
	  		 <label>End Date</label>
	  		 <Input
	  		 	value ={this.state.end}
	  		 	onChange = {this.handleInputChange}
	  		 	name = "end"
	  		 	type = "date"
	  		 />

	  		 <FormBtn
		  		 disabled = {!(this.state.topic && this.state.start && this.state.end)}
		  		 onClick = {this.handleFormSubmit}
	  		  >
	  		  Submit
	  		 </FormBtn>

	  		</form>
	  		</Col>
	  		</Row>
        <Row className="justify-content-center">
          <Col size="10">
            {this.state.articles.map((article, i) => (
              <ArticleCard 
                title = {article.article_title}
                description = {article.article_description}
                img = {article.article_img}
                url = {article.article_url}
                date = {article.article_date}
                save = {() => this.saveArticle(i)}
                alreadySaved = {this.alreadySaved(article)}
                key = {i}
              />
            ))}
          </Col>
        </Row>

        
      </Container>
    );
  }
}

export default Search;
