import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-0 mt-1">
  <div className="container-fluid fs-6">
    <a className="navbar-brand" href="#">
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
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="#">
            Home
          </a>
        </li>
          <li>
          <a className="nav-link " aria-current="page" href="#">
            Contact
          </a>
          </li>
          <li>
          <a className="nav-link " aria-current="page" href="#">
            Skills
          </a>
          </li>
          <li>
          <a className="nav-link " aria-current="page" href="#">
            Experience
          </a>
          </li>
          <li>
          <a className="nav-link " aria-current="page" href="#">
            Education
          </a>
        </li>
        <li>
          <a className="nav-link " aria-current="page" href="#">
            Projects
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
}

export default Navbar;
