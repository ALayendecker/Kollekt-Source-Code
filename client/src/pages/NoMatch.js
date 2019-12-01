//this is the page that will render if there is an error
import Nav from "../components/Nav"
import Footer from "../components/Footer"

import React from "react";

function NoMatch() {
    return(
        <div>
            <Nav />
            <h1>404 Page Not Found, Sorry!</h1>
            <Footer />
        </div>
    );
}

export default NoMatch;