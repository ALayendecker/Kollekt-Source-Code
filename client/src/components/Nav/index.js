import React from "react";
import "./style.css";



function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">

  <img src="/assets/images/logo_small.png"></img>
{/* need to float right */}
      <a className="navbar navbarItem" href="/">
        Home
      </a>
      <a className="navbar navbarItem" href="/login">
        Sign In/Upç
      </a>
      <a className="navbar navbarItem" href="/kala">
        Kala
      </a>
      <a className="navbar navbarItem" href="/dashboard">
        Dashboard
      </a>
    </nav>
  );
}

export default Nav;