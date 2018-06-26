import React from "react";
import "./ArticleCard.css";

const ArticleCard = props => (
<div className="card">
  <div className="card-header text-right">
        
        {

    	(window.location.pathname === "/" || window.location.pathname === "/search")  
    	?
    		<button 
	    		className="btn btn-primary" 
	    		disabled = {props.alreadySaved}
	    		onClicked = {props.save}
    		>
	    		{(props.alreadySaved 
	    			? <i className="fas fa-bookmark"></i> 
	    			: <i className="far fa-bookmark"></i>)}
    		</button>
    	:
    		<button
	    		className="btn btn-danger"
	    		onClicked = {props.delete}
    		>
    			<i className="fas fa-trash-alt"></i>
    		</button>
    	
    	}
    	
  </div>
  <div className="card-body">
  	{props.img 
  		? <img className="float-left" src={props.img} alt={props.title}/> 
  		: null}
    <h5 className="card-title">
    <a href={props.url} target="_blank">{props.title}</a>
    </h5>
    <p className="card-text">{props.description}</p>

  </div>
</div>
);

export default ArticleCard;