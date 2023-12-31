import React from "react";
import "./Navbar.css";
import $ from "jquery";

export default class Navbar extends React.Component{
  componentDidMount(){
     $(".nav-link").on("click",function(e){
      $(".nav-link").removeClass("active");
      $(this).addClass("active");
    })
  }
  render(){
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark p-0">
  <div className="container-fluid fs-6">
    <a className="navbar-brand" id="dummy" href="#home">
      PS
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#home">
            Home
          </a>
        </li>
          <li>
          <a className="nav-link " aria-current="page" href="#contact">
            Contact
          </a>
          </li>
          <li>
          <a className="nav-link " aria-current="page" href="#skills">
            Skills
          </a>
          </li>
          <li>
          <a className="nav-link " aria-current="page" href="#experience">
            Experience
          </a>
          </li>
          <li>
          <a className="nav-link " aria-current="page" href="#education">
            Education
          </a>
        </li>
        <li>
          <a className="nav-link " aria-current="page" href="#projects">
            Projects
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
  }
}

