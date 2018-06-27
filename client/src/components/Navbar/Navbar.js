import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = props => (

<nav className="navbar sticky-top navbar-expand-lg navbar-dark">

  <Link to="/" className="navbar-brand"><i className="far fa-newspaper"></i> NYT-Scraper</Link>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">

    <ul className="navbar-nav mr-auto w-100 justify-content-end">
      <li className={window.location.pathname === "/" ||
  					 window.location.pathname === "/search"
  					 ? "nav-item active"
  					 : "nav-item"
  					}>
        <Link to="/" className="nav-link">Search</Link>
      </li>

      <li className={window.location.pathname === "/saved"
  					 ? "nav-item active"
  					 : "nav-item"
  					}>
        <Link to ="/saved" className="nav-link">Saved Articles</Link>
      </li>
    </ul>

  </div>
</nav>
);

export default Navbar;