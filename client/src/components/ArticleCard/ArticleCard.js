import React from "react";
import "./ArticleCard.css";

const ArticleCard = props => (
<div className="card my-4">
  <div className="card-header">


        <span className="float-right">
        {

    	(window.location.pathname === "/" || window.location.pathname === "/search")  
    	?
    		<button 
	    		className="btn btn-primary" 
	    		disabled = {props.alreadySaved}
	    		onClick = {props.save}
    		>
	    		{(props.alreadySaved 
	    			? <i className="fas fa-bookmark"></i> 
	    			: <i className="far fa-bookmark"></i>)}
    		</button>
    	:
    		<button
	    		className="btn btn-danger"
	    		onClick = {props.delete}
    		>
    			<i className="fas fa-trash-alt"></i>
    		</button>
    	
    	}
    	</span>

    	<h3>
    	<a href={props.url} target="_blank">{props.title}</a>
    	</h3>
    	
  </div>
  <div className="card-body">
  	{props.img 
  		? <img className="float-left article-img" src={props.img} alt={props.title}/> 
  		: null}
    <p className="card-text">{props.description}</p>

  </div>
</div>
);

export default ArticleCard;