import React from "react";
import "./style.css";



function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
      <img src="../client/public/logo_small.png"> </img>
{/* Can change the names just putting in placeholders */}
      <a className="navbar" href="/">
        Search
      </a>
      <a className="navbar" href="/saved">
        Login
      </a>
      <a className="navbar" href="/saved">
        Dashboard
      </a>
      <a className="navbar" href="/saved">
        Collections
      </a>
    </nav>
  );
}

export default Nav;