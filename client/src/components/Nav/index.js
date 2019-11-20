import React from "react";
import "./style.css";



function Nav() {
  return (
    <nav className="navbar navbar-expand-lg">
{/* Can change the names just putting in placeholders */}
      <a className="navbar" href="/home">
        Home
      </a>
      <a className="navbar" href="/">
        Sign In
      </a>
      <a className="navbar" href="/saved">
        Dashboard
      </a>
      <a className="navbar" href="">
        Collections
      </a>
    </nav>
  );
}

export default Nav;