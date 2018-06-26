import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Search extends Component {
  state = {
    articles: [],
    topic: "",
    start: "",
    end: ""
  };

  handleInputChange = event => {
  	const { name,value } = event.target;
  	this.setState({
  		[name]: value
  	});
  };

  handleFormSubmit = event => {
  	event.preventDefault();
  	if (this.state.topic) {
  		console.log("saved!");
  	};
  };

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
	      	 <Col size="11">
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
		  		 disabled = {!this.state.topic}
		  		 onClick = {this.handleFormSubmit}
	  		  >
	  		  Submit
	  		 </FormBtn>

	  		</form>
	  		</Col>
	  		</Row>

        
      </Container>
    );
  }
}

export default Search;
