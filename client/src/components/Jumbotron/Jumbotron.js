import React from "react";
import "./Jumbotron.css";

const Jumbotron = props => (

<div className="jumbotron text-center mt-3">
  <h1 className="display-4"><i className={props.fontawesome}></i> {props.title}</h1>
  <p className="lead">{props.lead}</p>
</div>

);

export default Jumbotron;