import React from "react";
import "./style.css";
function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
      <img src="/assets/images/logo_small.png"></img>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon "></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <a class="nav-link " href="/">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/login">
              Sign-in
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/signup">
              Sign-up
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/dashboard">
              Dashboard
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;